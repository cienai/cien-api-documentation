---
title: ADE-001 Lead duplication
sidebar_label: "ADE-001: Lead duplication"
---

This page describes the ADE-001 lead duplication concept and how to work with it in the Cien Data API.

- What it is: Briefly explain the goal and detection logic for lead duplication.
- When to use: Typical scenarios and data quality checks.
- Where to find data: Relevant entities and fields.

Sections below are placeholders—update with your specifics as needed.

## Overview
Describe the purpose, inputs, and outputs of ADE-001.

## Relevant entities and fields
List the key entities (e.g., `leads`, `contacts`) and the fields used to identify duplicates.

## Example query
Provide an example (REST, SQL, or GraphQL) showing how to retrieve suspected duplicate leads.

```sql
-- Example placeholder
SELECT lead_id, email, phone, created_at
FROM leads
WHERE email IS NOT NULL
GROUP BY email
HAVING COUNT(*) > 1
ORDER BY COUNT(*) DESC;
```

## Notes
- Add edge cases, recommended thresholds, and follow-up actions.
