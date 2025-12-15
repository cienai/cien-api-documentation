---
id: vi-003
title: Opportunity Access Bias
version: v1.0
category: Value Intelligence
slug: /vi/vi-003
---

## Description

### Purpose of Analysis

Performance outcomes are often interpreted as indicators of rep skill or effort. However, outcomes are also influenced by which opportunities reps are given access to and when that access occurs.

If high-potential opportunities are consistently routed to a small subset of reps, observed performance differences may reflect structural bias rather than execution quality.

The TrueAI platform captures opportunity attributes and assignment signals that make access patterns visible and measurable.

**This analysis answers:**  
Do some reps consistently receive higher-quality opportunities than others, independent of execution?

---

## Query

### Query Intent

This query compares opportunity quality signals across reps to identify differences in access to high-potential opportunities. By aggregating opportunity value and quality metrics by rep, it surfaces structural imbalances in opportunity assignment.

The analysis focuses on opportunity access, not deal outcomes.

```sql
SELECT
  owner_rep_id,
  owner_rep_name,
  COUNT(*) AS opportunity_count,
  AVG(trueai_opportunity_quality_score) AS avg_opportunity_quality,
  SUM(trueai_opportunity_quality_score) AS total_opportunity_quality

FROM ssr

WHERE trueai_opportunity_quality_score IS NOT NULL

GROUP BY
  owner_rep_id,
  owner_rep_name

ORDER BY
  avg_opportunity_quality DESC;
```

### Sample Output

In this example, some reps consistently receive opportunities with higher average quality scores. These patterns suggest that opportunity routing or assignment logic may influence performance outcomes.

| owner_rep_name | opportunity_count | avg_opportunity_quality | total_opportunity_quality |
| --- | ---:| ---:| ---:|
| Rep A | 62 | 0.81 | 50.2 |
| Rep B | 41 | 0.78 | 32.0 |
| Rep C | 89 | 0.54 | 48.1 |
| Rep D | 103 | 0.49 | 50.5 |
| Rep E | 27 | 0.46 | 12.4 |

## How to Interpret the Results

- `avg_opportunity_quality` reflects the average quality of opportunities assigned to a rep
- Consistently higher averages indicate preferential access to high-potential opportunities
- High total quality with low average quality suggests volume-driven access rather than selective assignment
- Results should be interpreted alongside routing rules and role definitions

---

## Why This Matters

Opportunity access bias analysis:
- provides context for performance evaluation,
- surfaces structural inequities in opportunity assignment,
- and supports more informed decisions about routing, fairness, and enablement.

This analysis completes the Value Intelligence narrative by separating execution quality from access-driven advantage.
