---
id: naming-conventions
title: Naming Conventions & Special fields
sidebar_label: Naming Conventions
---

Below are common prefixes, suffixes, and special fields used across the CIEN Data API. These conventions help distinguish system values, source CRM data, TrueAI-derived fields, and feature-specific attributes.

## Prefixes

| Field Prefix | Description |
| --- | --- |
| `sys_` | Indicates that the data field is a system field, like an ID, or a date context field. |
| `crm_` | Indicates that the data is passed through straight from the source CRM field without any additional AI processing. |
| `trueai_` | Indicates that the data has been run through the TrueAI engine, for further standardization or predictions etc. These fields are usually accompanied by additional metadata fields such as confidence or rules applied. Please note that in derived entities such as SSR, SSR History and User History, this prefix is omitted for brevity — unless otherwise stated, all fields in those entities are TrueAI fields. |
| `ade_` | Indicates that the value is part of the Automatic Data Enhancement functionality of the TrueAI engine. |
| `di_` | Indicates that the value is part of the Deal Intelligence functionality of the TrueAI engine. |
| `vi_` | Indicates that the value is part of the Value Intelligence functionality of the TrueAI engine. |
| `ci_` | Indicates that the value is part of the Coaching Intelligence functionality of the TrueAI engine. |

## Suffixes

| Field Suffix | Description |
| --- | --- |
| `_conf` | This suffix on a field is an indication of the confidence in the classification of the TrueAI field with the same name. A confidence of 0 means that there was no data available to determine a classification (should usually be excluded from averages). A confidence value of `null` means that the record is not applicable for this classification. |
| `_rule` | This suffix on a field is an indication of which rule was applied in the classification of a TrueAI field. The full description of the rule can be looked up in the Rules entity. |
| `_pi` | This suffix on a field is an indication that the information is part of “Peek Inside” for a particular field — i.e. additional data points providing transparency and explanation to a particular TrueAI prediction. |

## Special Fields

| Field | Description |
| --- | --- |
| `sys_filter_start_date` | The start and end filter dates are the only non UTC dates in the API, where the date has been adjusted to the company’s primary time-zone. Therefore the same date as UTC can be a day later if time zone offset has been set to a US time zone. |
| `sys_doc_id` | This is always the unique primary key of the record for an entity, carried over from the CRM system unless no corresponding entity exists. |
| `sys_ssr_id` | The SSR record this particular record has been consolidated into. |
| `asof` | The most recent data obtained for this record (does not mean last updated). |
