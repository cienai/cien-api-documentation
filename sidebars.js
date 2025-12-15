const fs = require('fs');
const path = require('path');

const entitiesDir = path.join(__dirname, 'docs/entities');

const entityItems = fs
  .readdirSync(entitiesDir)
  .filter((name) =>
    fs.statSync(path.join(entitiesDir, name)).isDirectory()
  )
  .map((name) => `entities/${name}/index`);

module.exports = {
  docs: [
    'intro',
    {
      type: 'category',
      label: 'Examples & queries',
      link: { type: 'doc', id: 'examples' },
      collapsed: false,
      items: [
        'ade/ade-001',
      ],
    },
    'rules',
    'naming-conventions',
    {
      type: 'category',
      label: 'Entities',
      collapsed: false,
      items: entityItems,
    },
  ],
};