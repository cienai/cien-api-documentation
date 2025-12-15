---
id: ci-002
title: Skill Progression Over Time
version: v1.0
category: Coaching Intelligence
slug: /ci/ci-002
---

## Description

### Purpose of Analysis

Coaching effectiveness is best measured over time. One-off performance metrics can obscure whether a rep is improving, stagnating, or regressing in specific skills such as outreach effectiveness, follow-up discipline, or deal advancement.

The TrueAI platform captures behavioral and outcome signals that make it possible to track skill-related changes longitudinally, rather than relying on isolated snapshots.

**This analysis answers:**  
Are reps improving in specific skills over time, and where is additional coaching needed?

---

## Query

### Query Intent

This query analyzes skill-related signals over time to identify trends in rep behavior. By comparing early and recent performance windows, it highlights whether observable skill indicators are improving, stable, or declining.

The query is designed to support coaching conversations focused on development rather than short-term results.

```sql
SELECT
  rep_id,
  rep_name,
  DATE_TRUNC('month', activity_date) AS activity_month,

  AVG(trueai_skill_score) AS avg_skill_score,
  COUNT(*) AS activity_count

FROM rep_skill_signals

WHERE trueai_skill_score IS NOT NULL

GROUP BY
  rep_id,
  rep_name,
  DATE_TRUNC('month', activity_date)

ORDER BY
  rep_id,
  activity_month;
```

### Sample Output

In this example, some reps demonstrate steady improvement in skill-related scores over time, while others show little change or declining trends. These patterns help differentiate learning curves from persistent gaps.

| rep_name | activity_month | avg_skill_score | activity_count |
| --- | --- | ---:| ---:|
| Rep A | 2024-07 | 0.58 | 42 |
| Rep A | 2024-08 | 0.64 | 47 |
| Rep A | 2024-09 | 0.71 | 51 |
| Rep B | 2024-07 | 0.62 | 39 |
| Rep B | 2024-08 | 0.61 | 41 |
| Rep B | 2024-09 | 0.59 | 38 |

## How to Interpret the Results

- `avg_skill_score` reflects aggregated skill-related signals for a rep over time
- Upward trends indicate learning and effective coaching
- Flat or declining trends suggest stalled development or misaligned enablement
- Results should be interpreted alongside opportunity access and pipeline context

---

## Coaching Application

This analysis supports coaching by:
- identifying reps with positive learning trajectories,
- highlighting specific areas where progress has stalled,
- and evaluating whether coaching efforts translate into measurable skill improvement.

Skill progression analysis helps shift coaching conversations from outcomes to development.
