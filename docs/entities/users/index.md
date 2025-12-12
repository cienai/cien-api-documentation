---
title: users
---

This entity represents **users** records in the Cien platform.

## Fields

| Entity | Field Name | Display Name | Data Type | Field Length | Description | Deprecated | Field Name Sfdc | Field Name Msdyn |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| users | _sys_as_of | As of Date | DATETIME |  | The date of the last data request from the platform | false |  |  |
| users | _sys_co_id | Company ID | STRING | 50 | The Cien company ID | false |  |  |
| users | _sys_doc_id | Doc ID | STRING | 50 | Unique record identifier, based on the ID of the document in the remote system (such as Salesforce ID) | false | Id | systemuserid |
| users | _sys_filt_end_date | Filter End Date | DATE |  | The end date of the record, stripped of time | false |  |  |
| users | _sys_filt_start_date | Filter Start Date | DATE |  | The start date of the record, stripped of time | false |  |  |
| users | _sys_last_modified_on | Last Modified On | DATETIME |  | The date of the last data modification in the platform | false | SystemModstamp | modifiedon |
| users | crm_addr_city | CRM Address City | STRING | 150 | User's city in the CRM | false | City | address1_city |
| users | crm_addr_country | CRM Address Country | STRING | 150 | User's country in the CRM | false | Country | address1_country |
| users | crm_addr_postal_code | CRM Address Postal Code | STRING | 150 | User's postal code in the CRM | false | PostalCode | address1_postalcode |
| users | crm_addr_state | CRM Address State | STRING | 150 | User's state in the CRM | false | State | address1_stateorprovince |
| users | crm_addr_street | CRM Address Street | STRING | 150 | User's street in the CRM | false | Street | address1_line1 |
| users | crm_created_on | CRM Created On | DATETIME |  | User creation date in the CRM | false | CreatedDate | createdon |
| users | crm_creator_id | CRM Creator ID | STRING | 50 | User creator's id in the CRM | false | CreatedById | _createdby_value |
| users | crm_deep_link | CRM Deep Link | STRING | 500 | Link to the user in the remote system (such as Salesforce) | false |  |  |
| users | crm_dept | CRM Department | STRING | 50 | User's department in the CRM | false | Department |  |
| users | crm_division | CRM Division | STRING | 50 | User's division in the CRM | false | Division |  |
| users | crm_email | CRM Email | STRING | 150 | User's email | false | Email | internalemailaddress |
| users | crm_first_name | CRM First Name | STRING | 50 | User's first name | false | FirstName | firstname |
| users | crm_language_locale | CRM Language Locale | STRING | 50 | User's language locale | false | LanguageLocaleKey |  |
| users | crm_last_login_time | CRM Last Login Time | DATETIME |  | User's last login time in the CRM | false | LastLoginDate |  |
| users | crm_last_name | CRM Last Name | STRING | 50 | User's last name | false | LastName | lastname |
| users | crm_locale | CRM Locale | STRING | 50 | User's locale | false | LocaleSidKey |  |
| users | crm_mgr_id | CRM Manager ID | STRING | 50 | User manager's id in the CRM | false | ManagerId |  |
| users | crm_profile_url | CRM Profile URL | STRING | 50 | User's avatar URL | false | FullPhotoUrl |  |
| users | crm_role | CRM Role | STRING | 50 | User's CRM role | false | UserRole.Name | jobtitle |
| users | crm_time_zone | CRM Time Zone | STRING | 50 | User's time zone | false | TimeZoneSidKey |  |
| users | crm_title | CRM Title | STRING | 150 | User's CRM title | false | Title | title |
| users | crm_user_type | CRM User Type | STRING | 50 | User's CRM type | false | UserType | accessmode |
| users | crm_username | CRM Username | STRING | 150 | User's username | false | UserName | internalemailaddress |
| users | cust_bool1 | cust_bool1 | BOOLEAN |  | cust_bool1 | false |  |  |
| users | cust_bool2 | cust_bool2 | BOOLEAN |  | cust_bool2 | false |  |  |
| users | cust_num1 | cust_num1 | FLOAT |  | cust_num1 | false |  |  |
| users | cust_num2 | cust_num2 | FLOAT |  | cust_num2 | false |  |  |
| users | cust_num3 | cust_num3 | FLOAT |  | cust_num3 | false |  |  |
| users | cust_num4 | cust_num4 | FLOAT |  | cust_num4 | false |  |  |
| users | cust_num5 | cust_num5 | FLOAT |  | cust_num5 | false |  |  |
| users | cust_num6 | cust_num6 | FLOAT |  | cust_num6 | false |  |  |
| users | cust_num7 | cust_num7 | FLOAT |  | cust_num7 | false |  |  |
| users | cust_text1 | cust_text1 | STRING | 50 | cust_text1 | false |  |  |
| users | cust_text2 | cust_text2 | STRING | 50 | cust_text2 | false |  |  |
| users | cust_text3 | cust_text3 | STRING | 50 | cust_text3 | false |  |  |
| users | cust_text4 | cust_text4 | STRING | 50 | cust_text4 | false |  |  |
| users | cust_text5 | cust_text5 | STRING | 50 | cust_text5 | false |  |  |
| users | trueai_addr_city | Address City | STRING | 50 | Lead's city | false |  |  |
| users | trueai_addr_country | Address Country | STRING | 50 | Lead's country | false |  |  |
| users | trueai_addr_lat | Address Lat | FLOAT |  | Lead's latitude | false |  |  |
| users | trueai_addr_long | Address Long | FLOAT |  | Lead's longitude | false |  |  |
| users | trueai_addr_postal_code | Address Postal Code | STRING | 50 | Lead's postal code | false |  |  |
| users | trueai_addr_state | Address State | STRING | 50 | Lead's state | false |  |  |
| users | trueai_addr_street | Address Street | STRING | 50 | Lead's street | false |  |  |
| users | trueai_billable | Billable | BOOLEAN |  | Boolean flag that indicates whether the user is billable | false |  |  |
| users | trueai_direct_reports | Direct Reports | INTEGER |  | User's number of direct reports | false |  |  |
| users | trueai_ext_match_id | Ext Match ID | STRING | 50 | User ID in the externel HR file | false |  |  |
| users | trueai_ext_match_rule | Ext Match Rule | INTEGER |  | Rule used to determine user's match with an external HR file | false |  |  |
| users | trueai_full_name | Full Name | STRING | 150 | User's full name | false |  |  |
| users | trueai_group | Group | STRING | 50 | User's group | false |  |  |
| users | trueai_group_conf | Group Confidence | FLOAT |  | User's group prediction confidence | false |  |  |
| users | trueai_group_rule | Group Rule | INTEGER |  | Rule used to determine user's group | false |  |  |
| users | trueai_hire_date | Hire Date | DATETIME |  | User's hire date | false |  |  |
| users | trueai_is_dummy | Is Dummy | BOOLEAN |  | Boolean flag that indicates whether the user was added to account for all creation and ownership of entries | false |  |  |
| users | trueai_is_mgr | Is Manager | BOOLEAN |  | Boolean flag that indicates whether the user is a manager | false |  |  |
| users | trueai_mgr_id | Manager ID | STRING | 50 | User manager's id | false |  |  |
| users | trueai_mgr_id_conf | Manager ID Confidence | FLOAT |  | User's manager's id prediction confidence | false |  |  |
| users | trueai_mgr_id_rule | Manager ID Rule | INTEGER |  | Rule used to determine user's manager's id | false |  |  |
| users | trueai_mgr_ids | Manager IDs as JSON array | STRING | 500 | User managers' ids | false |  |  |
| users | trueai_performance_lvl_reached_on | Performance Level Reached on | DATETIME |  | First date when the user reached the performance tier of "Performer" or "Overperformer" | false |  |  |
| users | trueai_ramping_status | Ramping Status | STRING | 50 | Ramping or Ramped depending on users tenure | false |  |  |
| users | trueai_role | Role | STRING | 50 | User's standardized role | false |  |  |
| users | trueai_role_conf | Role Confidence | FLOAT |  | User's standardized role prediction confidence | false |  |  |
| users | trueai_tenure | Tenure | INTEGER |  | Number of months since the user's hire date | false |  |  |
| users | trueai_termination_date | Termination Date | DATETIME |  | User's termination date | false |  |  |
| users | trueai_test | Test | STRING | 100 | Test model | false |  |  |
| users | trueai_test_conf | Test Confidence | FLOAT |  | Test model confidence | false |  |  |
| users | trueai_test_debug | Test Debug | STRING | 2000 | Test model debug information | false |  |  |
| users | trueai_test_rule | Test Rule | STRING | 500 | Test model rule | false |  |  |
| users | trueai_title | Title | STRING | 50 | User's standardized title | false |  |  |
| users | trueai_title_conf | Title Confidence | FLOAT |  | User's standardized title prediction confidence | false |  |  |
| users | trueai_tot_reports | Total Reports | INTEGER |  | User's number of total reports | false |  |  |
| users | trueai_user_behavior | User Behavior | STRING | 50 | User's standardized behavior | false |  |  |
| users | trueai_user_behavior_conf | User Behavior Confidence | FLOAT |  | User's standardized behavior prediction confidence | false |  |  |
| users | trueai_user_role | Standardized Role | STRING | 50 | User's standardized and combined role | false |  |  |
| users | trueai_user_role_alias | Standardized Role Aliased | STRING | 50 | User's standardized and combined role aliased | false |  |  |
| users | trueai_user_role_dept | Standardized Role Department | STRING | 50 | User's department derived from the standardized and combined role | false |  |  |
| users | trueai_user_role_function | Standardized Role Function | STRING | 50 | User's function derived from the standardized and combined role | false |  |  |
