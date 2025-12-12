---
title: hr_users
hide_table_of_contents: true
---

This entity represents **hr_users** records in the Cien platform.

## Fields

| Entity | Field Name | Display Name | Data Type | Field Length | Description | Deprecated | Field Name Sfdc | Field Name Msdyn |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| hr_users | crm_user_id | CRM User ID | STRING | 50 | If matched with CRM data, the user id of that record | false |  |  |
| hr_users | hr_addr_city | Hr Address City | STRING | 50 | The employee's work address | false |  |  |
| hr_users | hr_addr_country | Hr Address Country | STRING | 50 | The employee's work address | false |  |  |
| hr_users | hr_addr_postal_code | Hr Address Postal Code | STRING | 50 | The employee's work address | false |  |  |
| hr_users | hr_addr_state | Hr Address State | STRING | 50 | The employee's work address | false |  |  |
| hr_users | hr_addr_street | Hr Address Street | STRING | 50 | The employee's work address | false |  |  |
| hr_users | hr_classification | Hr Classification | STRING | 50 | The employee classification (e.g. full-time, part-time) | false |  |  |
| hr_users | hr_dept | Hr Department | STRING | 50 | The dept of the employee - will be used to match group | false |  |  |
| hr_users | hr_direct_reports | Hr Direct Reports | INTEGER |  | How many direct reports? | false |  |  |
| hr_users | hr_division | Hr Division | STRING | 50 | The division of the employee - will be used to match group | false |  |  |
| hr_users | hr_email | Hr Email | STRING | 50 | The employee's work email | false |  |  |
| hr_users | hr_employee_type | Hr Employee Type | STRING | 50 | The type of employee | false |  |  |
| hr_users | hr_first_name | Hr First Name | STRING | 50 | The employee's first name | false |  |  |
| hr_users | hr_hire_date | Hr Hire Date | DATETIME |  | The employee's hire date | false |  |  |
| hr_users | hr_id | Hr ID | STRING | 50 | The HRIS unique ID | false |  |  |
| hr_users | hr_is_mgr | Hr Is Manager | BOOLEAN |  | Is the employee a manager? | false |  |  |
| hr_users | hr_is_remote | Hr Is Remote | BOOLEAN |  | Is the employee a remote worker | false |  |  |
| hr_users | hr_last_name | Hr Last Name | STRING | 50 | The employee's last  name | false |  |  |
| hr_users | hr_mgr_id | Hr Manager ID | STRING | 50 | The ID of the manager (can leave blank if Manager name is supplied instead) | false |  |  |
| hr_users | hr_mgr_name | Hr Manager Name | STRING | 50 | The NAME of the manager (can leave blank if Manager name is supplied instead) | false |  |  |
| hr_users | hr_profile_url | Hr Profile URL | STRING | 50 | The url to a photo of the employee | false |  |  |
| hr_users | hr_role | Hr Role | STRING | 50 | The employee's work role | false |  |  |
| hr_users | hr_status | Hr Status | STRING | 50 | The curent status of the employee (e.g. active, terminated etc.) | false |  |  |
| hr_users | hr_termination_date | Hr Termination Date | DATETIME |  | The employee's termination date. Blank if currently active | false |  |  |
| hr_users | hr_time_zone | Hr Time Zone | STRING | 50 | The employee's time zone | false |  |  |
| hr_users | hr_title | Hr Title | STRING | 50 | The employee's title | false |  |  |
| hr_users | hr_username | Hr Username | STRING | 50 | The user name of the employee | false |  |  |
| hr_users | trueai_group | Group | STRING | 50 | Specific override field that bypasses the TrueAI engine, to set a specific group. Must match existing defined groups in system | false |  |  |
| hr_users | trueai_user_role | Standardized Role | STRING | 50 | Specific override field that bypasses the TrueAI engine, to set a specific user role. Must match existing defined roles in classes | false |  |  |
