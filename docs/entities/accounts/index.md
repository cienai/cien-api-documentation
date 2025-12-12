---
title: accounts
hide_table_of_contents: true
---

This entity represents **accounts** records in the Cien platform.

## Fields

| Entity | Field Name | Display Name | Data Type | Field Length | Description | Deprecated | Field Name Sfdc | Field Name Msdyn |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| accounts | _sys_as_of | As of Date | DATETIME |  | The date of the last data request from the platform | false |  |  |
| accounts | _sys_doc_id | Doc ID | STRING | 50 | Unique record identifier, based on the ID of the document in the remote system (such as Salesforce ID) | false | Id | accountid |
| accounts | _sys_filt_end_date | Filter End Date | DATE |  | The end date of the record, stripped of time | false |  |  |
| accounts | _sys_filt_start_date | Filter Start Date | DATE |  | The start date of the record, stripped of time | false |  |  |
| accounts | _sys_last_modified_on | Last Modified On | DATETIME |  | The date of the last data modification in the platform | false | SystemModstamp | modifiedon |
| accounts | _sys_ssr_id | SSR ID | STRING | 50 | Id of the SSR document the record belongs to | false |  |  |
| accounts | crm_account_type | CRM Account Type | STRING | 50 | Account's type in the CRM | false | Type |  |
| accounts | crm_addr_city | CRM Address City | STRING | 150 | Account's city in the CRM | false | BillingCity | address1_city |
| accounts | crm_addr_country | CRM Address Country | STRING | 150 | Account's country in the CRM | false | BillingCountry | address1_country |
| accounts | crm_addr_postal_code | CRM Address Postal Code | STRING | 150 | Account's postal code in the CRM | false | BillingPostalCode | address1_postalcode |
| accounts | crm_addr_state | CRM Address State | STRING | 150 | Account's state in the CRM | false | BillingState | address1_stateorprovince |
| accounts | crm_addr_street | CRM Address Street | STRING | 150 | Account's street in the CRM | false | BillingStreet | address1_line1 |
| accounts | crm_complt | CRM Completeness | FLOAT |  | Account's completeness score based on the CRM data | false |  |  |
| accounts | crm_complt_contact | CRM Completeness Contact | FLOAT |  | Account's contact information completeness score based on the CRM data | false |  |  |
| accounts | crm_complt_contact_method | CRM Completeness Contact Method | FLOAT |  | Account's contact method completeness score based on the CRM data | false |  |  |
| accounts | crm_complt_custom | CRM Completeness Custom | FLOAT |  | Account's custom completeness score based on the CRM data | false |  |  |
| accounts | crm_complt_geo | CRM Completeness Geo | FLOAT |  | Account's location completeness score based on the CRM data | false |  |  |
| accounts | crm_complt_marketing | CRM Completeness Marketing | FLOAT |  | Account's marketing completeness score based on the CRM data | false |  |  |
| accounts | crm_created_on | CRM Created On | DATETIME |  | Account creation date in the CRM | false | CreatedDate | createdon |
| accounts | crm_creator_id | CRM Creator ID | STRING | 50 | Account creator's id in the CRM | false | CreatedById | _createdby_value |
| accounts | crm_custom_value_1 | CRM Custom Value 1 | STRING | 150 | Custom categorical variable | false |  |  |
| accounts | crm_custom_value_2 | CRM Custom Value 2 | STRING | 150 | Custom categorical variable | false |  |  |
| accounts | crm_custom_value_3 | CRM Custom Value 3 | STRING | 150 | Custom categorical variable | false |  |  |
| accounts | crm_deep_link | CRM Deep Link | STRING | 500 | Link to the account in the remote system (such as Salesforce) | false |  |  |
| accounts | crm_industry | CRM Industry | STRING | 150 | Account's industry in the CRM | false | Industry | industrycode |
| accounts | crm_last_act_time | CRM Last Activity Time | DATETIME |  | Account's last activity time in the CRM | false | LastActivityDate |  |
| accounts | crm_leadsource | CRM Lead Source | STRING | 150 | Account's lead source in the CRM | false | AccountSource |  |
| accounts | crm_modified_on | CRM Modified On | DATETIME |  | Account modified on date in the CRM | false | LastModifiedDate | modifiedon |
| accounts | crm_name | CRM Name | STRING | 500 | Name of the account | false | Name | name |
| accounts | crm_num_employees | CRM Num Employees | INTEGER |  | Account's number of employees in the CRM | false | NumberOfEmployees | numberofemployees |
| accounts | crm_owner_id | CRM Owner ID | STRING | 50 | Account owner's id in the CRM | false | OwnerId | _ownerid_value |
| accounts | crm_parent_id | CRM Parent ID | STRING | 50 | Account's parent id in the CRM | false | ParentId | _parentaccountid_value |
| accounts | crm_web_url | CRM Weburl | STRING | 150 | Account's URL in the CRM | false | Website | websiteurl |
| accounts | cust_bool1 | cust_bool1 | BOOLEAN |  | cust_bool1 | false |  |  |
| accounts | cust_bool2 | cust_bool2 | BOOLEAN |  | cust_bool2 | false |  |  |
| accounts | cust_num1 | cust_num1 | FLOAT |  | cust_num1 | false |  |  |
| accounts | cust_num2 | cust_num2 | FLOAT |  | cust_num2 | false |  |  |
| accounts | cust_num3 | cust_num3 | FLOAT |  | cust_num3 | false |  |  |
| accounts | cust_num4 | cust_num4 | FLOAT |  | cust_num4 | false |  |  |
| accounts | cust_num5 | cust_num5 | FLOAT |  | cust_num5 | false |  |  |
| accounts | cust_num6 | cust_num6 | FLOAT |  | cust_num6 | false |  |  |
| accounts | cust_num7 | cust_num7 | FLOAT |  | cust_num7 | false |  |  |
| accounts | cust_text1 | cust_text1 | STRING | 50 | cust_text1 | false |  |  |
| accounts | cust_text2 | cust_text2 | STRING | 50 | cust_text2 | false |  |  |
| accounts | cust_text3 | cust_text3 | STRING | 50 | cust_text3 | false |  |  |
| accounts | cust_text4 | cust_text4 | STRING | 50 | cust_text4 | false |  |  |
| accounts | cust_text5 | cust_text5 | STRING | 50 | cust_text5 | false |  |  |
| accounts | ext_addr_city | ext_address_city | STRING | 100 |  | false |  |  |
| accounts | ext_addr_country | ext_address_country | STRING | 100 |  | false |  |  |
| accounts | ext_addr_postal_code | ext_address_postalcode | STRING | 100 |  | false |  |  |
| accounts | ext_addr_state | ext_address_state | STRING | 100 |  | false |  |  |
| accounts | ext_addr_street | ext_address_street | STRING | 100 |  | false |  |  |
| accounts | ext_debug | ext_debug | OBJECT | 50000 |  | false |  |  |
| accounts | ext_id | ext_id | STRING | 100 |  | false |  |  |
| accounts | ext_industry | ext_industry | STRING | 100 |  | false |  |  |
| accounts | ext_is_match | ext_is_match | STRING | 100 |  | false |  |  |
| accounts | ext_last_updated | ext_last_updated | DATETIME |  |  | false |  |  |
| accounts | ext_linkedin_url | ext_linkedin_url | STRING | 100 |  | false |  |  |
| accounts | ext_match_conf | ext_match_conf | FLOAT |  |  | false |  |  |
| accounts | ext_match_rule | ext_match_rule | INTEGER |  |  | false |  |  |
| accounts | ext_name | ext_name | STRING | 100 |  | false |  |  |
| accounts | ext_num_employees_range | ext_num_employees_range | STRING | 100 |  | false |  |  |
| accounts | ext_phone | ext_phone | STRING | 100 |  | false |  |  |
| accounts | ext_revenue_range | ext_revenue_range | STRING | 100 |  | false |  |  |
| accounts | ext_self_verified | ext_self_verified | BOOLEAN |  |  | false |  |  |
| accounts | ext_source | ext_source | STRING | 100 |  | false |  |  |
| accounts | ext_web_url | ext_web_url | STRING | 100 |  | false |  |  |
| accounts | ext_year_founded | ext_year_founded | INTEGER |  |  | false |  |  |
| accounts | trueai_account_dupe_conf | Account Duplication Confidence | FLOAT |  | Account's duplication confidence | false |  |  |
| accounts | trueai_account_dupe_id | Account Duplication Master Doc ID | STRING | 150 | Account's duplication id | false |  |  |
| accounts | trueai_addr_city | Address City | STRING | 50 | Account's city | false |  |  |
| accounts | trueai_addr_country | Address Country | STRING | 50 | Account's country | false |  |  |
| accounts | trueai_addr_lat | Address Lat | FLOAT |  | Account's latitude | false |  |  |
| accounts | trueai_addr_long | Address Long | FLOAT |  | Account's longitude | false |  |  |
| accounts | trueai_addr_postal_code | Address Postal Code | STRING | 50 | Account's postal code | false |  |  |
| accounts | trueai_addr_rule | Address Rule | INTEGER |  | Account's address prediction rule | false |  |  |
| accounts | trueai_addr_state | Address State | STRING | 50 | Account's state | false |  |  |
| accounts | trueai_addr_street | Address Street | STRING | 50 | Account's street | false |  |  |
| accounts | trueai_company_size | Company Size | STRING | 50 | Account's standardized company size | false |  |  |
| accounts | trueai_company_size_rule | Company Size Rule | INTEGER |  | Account's standardized company size prediction rule | false |  |  |
| accounts | trueai_complt | Completeness | FLOAT |  | Completeness score of the account based on the standardized data | false |  |  |
| accounts | trueai_complt_contact | Completeness Contact | FLOAT |  | Contact information completeness score of the account based on the standardized data | false |  |  |
| accounts | trueai_complt_contact_method | Completeness Contact Method | FLOAT |  | Contact method completeness score of the account based on the standardized data | false |  |  |
| accounts | trueai_complt_geo | Completeness Geo | FLOAT |  | Location completeness score of the account based on the standardized data | false |  |  |
| accounts | trueai_complt_marketing | Completeness Marketing | FLOAT |  | Marketing completeness score of the account based on the standardized data | false |  |  |
| accounts | trueai_converted_date | Converted Date | DATETIME |  | Account's converted date | false |  |  |
| accounts | trueai_created_on | Created On | DATETIME |  | Account creation date | false |  |  |
| accounts | trueai_created_on_rule | Created On Rule | INTEGER |  | Account creation date rule | false |  |  |
| accounts | trueai_creator_id | Creator ID | STRING | 50 | Account creator's id | false |  |  |
| accounts | trueai_dur | Duration | INTEGER |  | Total duration of activities performed on the account | false |  |  |
| accounts | trueai_first_touch | First Touch | DATETIME |  | Date when the account was first touched | false |  |  |
| accounts | trueai_first_touch_rule | First Touch Rule | INTEGER |  | Rule for date when the account was first touched | false |  |  |
| accounts | trueai_industry | Industry | STRING | 50 | Account's standardized industry | false |  |  |
| accounts | trueai_industry_conf | Industry Confidence | FLOAT |  | Account's standardized industry prediction confidence | false |  |  |
| accounts | trueai_industry_rule | Industry Rule | INTEGER |  | Account's standardized industry prediction rule | false |  |  |
| accounts | trueai_is_erp | Is ERP | BOOLEAN |  | Boolean flag indicating whether the account is based on an ERP account entry | false |  |  |
| accounts | trueai_is_master | Is Master | BOOLEAN |  | Boolean flag that indicates whether the account is the master account in its group of duplicates | false |  |  |
| accounts | trueai_last_outcome | Last Outcome | DATETIME |  | Account's last outcome | false |  |  |
| accounts | trueai_last_outcome_rule | Last Outcome | INTEGER |  | Account's last outcome rule | false |  |  |
| accounts | trueai_last_touch | Last Touch | DATETIME |  | Date when the account was last touched | false |  |  |
| accounts | trueai_last_touch_rule | Last Touch Rule | INTEGER |  | Rule for date when the account was last touched | false |  |  |
| accounts | trueai_leadsource | Lead Source | STRING | 50 | Account's standardized lead source | false |  |  |
| accounts | trueai_leadsource_conf | Lead Source Confidence | FLOAT |  | Account's standardized lead source prediction confidence | false |  |  |
| accounts | trueai_leadsource_rule | Lead Source Rule | INTEGER |  | Account's standardized lead source prediction rule | false |  |  |
| accounts | trueai_owner_id | Owner ID | STRING | 50 | Account owner's id | false |  |  |
| accounts | trueai_owner_id_rule | Owner ID Rule | INTEGER |  | Account owner's id | false |  |  |
| accounts | trueai_prob_of_conversion | Probability of Conversion | FLOAT |  | Account's probability of conversion | false |  |  |
| accounts | trueai_prob_of_conversion_explained | Deprecated field | OBJECT | 500000 | Deprecated field | true |  |  |
| accounts | trueai_prob_of_new_logo_win | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| accounts | trueai_qual_bucket | Quality Bucket | STRING | 50 | Quality bucket based on the probability of conversion | false |  |  |
| accounts | trueai_qual_bucket_num | Quality Bucket Num | INTEGER |  | Quality bucket expressed as an integer from 1 to 5 based on the probability of conversion | false |  |  |
| accounts | trueai_ssr_is_master | SSR Is Master | BOOLEAN |  | Boolean flag that indicates whether the account is the master account in its group of duplicates taking into account whether it has revenue | false |  |  |
| accounts | trueai_test | Test | STRING | 100 | Test model | false |  |  |
| accounts | trueai_test_conf | Test Confidence | FLOAT |  | Test model confidence | false |  |  |
| accounts | trueai_test_debug | Test Debug | STRING | 2000 | Test model debug information | false |  |  |
| accounts | trueai_test_rule | Test Rule | STRING | 500 | Test model rule | false |  |  |
| accounts | trueai_title_dept | Title Department | STRING | 50 | Account's standardized department | false |  |  |
| accounts | trueai_title_dept_conf | Title Department Confidence | FLOAT |  | Account's standardized department prediction confidence | false |  |  |
| accounts | trueai_title_seniority | Title Seniority | STRING | 50 | Account's standardized seniority | false |  |  |
| accounts | trueai_title_seniority_conf | Title Seniority Confidence | FLOAT |  | Account's standardized seniority prediction confidence | false |  |  |
| accounts | trueai_type | Type | STRING | 50 | Account's standardized type | false |  |  |
| accounts | trueai_vi_lead_gen_value | Deprecated field | CURRENCY |  | Deprecated field | true |  |  |
