const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

// ---------- CONFIG ----------
const DEFAULT_CSV = path.resolve('data', 'metadata_rule_list.csv');
const OUTPUT_MD = path.resolve('docs', 'rules.md');

// Desired columns and their order
const COLUMNS = [
  'model',
  'rule_name',
  '_sys_doc_id',
  'description',
  'is_default_rule',
];

function escapeMd(value) {
  if (value === null || value === undefined) return '';
  return String(value).replace(/\|/g, '\\|');
}

function headerRow(cols) {
  return `| ${cols.join(' | ')} |`;
}

function dashRow(cols) {
  return `| ${cols.map(() => '---').join(' | ')} |`;
}

function renderTable(rows, cols) {
  const header = headerRow(cols);
  const sep = dashRow(cols);
  const body = rows
    .map(r => `| ${cols.map(c => escapeMd(r[c])).join(' | ')} |`)
    .join('\n');
  return [header, sep, body].join('\n');
}

function generateFrontMatter() {
  return `---\ntitle: Rules\nhide_table_of_contents: true\n---\n\nThe table below lists the available rules and their key attributes.\n`;
}

function readCsv(csvPath) {
  return new Promise((resolve, reject) => {
    const rows = [];
    fs.createReadStream(csvPath)
      .pipe(csv())
      .on('data', (row) => rows.push(row))
      .on('end', () => resolve(rows))
      .on('error', reject);
  });
}

async function main() {
  const csvPath = process.argv[2] ? path.resolve(process.argv[2]) : DEFAULT_CSV;
  if (!fs.existsSync(csvPath)) {
    console.error(`❌ CSV file not found: ${csvPath}`);
    process.exit(1);
  }

  const rows = await readCsv(csvPath);

  // Filter to desired columns; ignore extra columns if present
  const rowsFiltered = rows.map(r => {
    const obj = {};
    COLUMNS.forEach(col => { obj[col] = r[col]; });
    return obj;
  });

  // Optional: stable sort by model then rule_name for readability
  rowsFiltered.sort((a, b) => {
    const ma = (a.model || '').localeCompare(b.model || '');
    if (ma !== 0) return ma;
    return (a.rule_name || '').localeCompare(b.rule_name || '');
  });

  const frontMatter = generateFrontMatter();
  const table = renderTable(rowsFiltered, COLUMNS);

  const content = [frontMatter, '\n## Rule List\n', table, '\n'].join('\n');
  fs.writeFileSync(OUTPUT_MD, content);
  console.log(`✅ Generated rules table at ${OUTPUT_MD}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
