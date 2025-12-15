---
id: ci-003
title: Coaching Intervention Impact
version: v1.0
category: Coaching Intelligence
slug: /ci/ci-003
---

## Description

### Purpose of Analysis

Coaching programs are often evaluated based on anecdotal feedback or short-term outcomes. However, without measuring behavioral change before and after coaching interventions, it is difficult to determine whether coaching efforts are effective.

The TrueAI platform captures time-based behavioral signals that allow coaching interventions to be evaluated using observable changes rather than subjective assessment.

**This analysis answers:**  
Do coaching interventions lead to measurable changes in rep behavior?

---

## Query

### Query Intent

This query compares behavioral signals before and after a coaching intervention window. By aggregating activity and skill-related metrics across defined pre- and post-coaching periods, it highlights whether behavior changes are sustained over time.

The query is designed to evaluate impact at the behavioral level rather than focusing solely on revenue outcomes.

```sql
SELECT
  rep_id,
  rep_name,
  coaching_event_id,
  period,

  AVG(trueai_behavior_score) AS avg_behavior_score,
  COUNT(*) AS activity_count

FROM rep_behavior_signals

WHERE coaching_event_id IS NOT NULL
  AND period IN ('pre', 'post')

GROUP BY
  rep_id,
  rep_name,
  coaching_event_id,
  period

ORDER BY
  rep_id,
  coaching_event_id,
  period;
```

### Sample Output

In this example, several reps show improved behavior scores following coaching interventions, while others show minimal or no change. This helps distinguish effective interventions from those requiring adjustment.

| rep_name | coaching_event_id | period | avg_behavior_score | activity_count |
| --- | --- | --- | ---:| ---:|
| Rep A | C-102 | pre | 0.54 | 38 |
| Rep A | C-102 | post | 0.69 | 44 |
| Rep B | C-118 | pre | 0.61 | 41 |
| Rep B | C-118 | post | 0.63 | 39 |
| Rep C | C-121 | pre | 0.49 | 35 |
| Rep C | C-121 | post | 0.48 | 37 |

## How to Interpret the Results

- `avg_behavior_score` reflects aggregated behavioral signals before and after coaching
- Meaningful increases post-coaching suggest effective intervention
- Minimal change may indicate insufficient coaching intensity or misaligned focus
- Activity counts help contextualize changes in behavior signals

---

## Coaching Application

This analysis supports coaching by:
- validating whether interventions drive measurable behavior change,
- identifying which coaching approaches are most effective,
- and enabling iterative improvement of enablement programs.

Evaluating coaching impact using behavioral data helps move coaching from intuition-driven to evidence-based.
