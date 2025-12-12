---
title: leads
hide_table_of_contents: true
---

This entity represents **leads** records in the Cien platform.

## Fields

| Entity | Field Name | Display Name | Data Type | Field Length | Description | Deprecated | Field Name Sfdc | Field Name Msdyn |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| leads | _sys_as_of | As of Date | DATETIME |  | The date of the last data request from the platform | false |  |  |
| leads | _sys_doc_id | Doc ID | STRING | 50 | Unique record identifier, based on the ID of the document in the remote system (such as Salesforce ID) | false | Id | leadid |
| leads | _sys_filt_end_date | Filter End Date | DATE |  | The end date of the record, stripped of time | false |  |  |
| leads | _sys_filt_start_date | Filter Start Date | DATE |  | The start date of the record, stripped of time | false |  |  |
| leads | _sys_last_modified_on | Last Modified On | DATETIME |  | The date of the last data modification in the platform | false | SystemModstamp | modifiedon |
| leads | _sys_ssr_id | SSR ID | STRING | 50 | Id of the SSR document the record belongs to | false |  |  |
| leads | crm_account_id | CRM Account ID | STRING | 50 | CRM account id of the lead | false | ConvertedAccountId | accountid |
| leads | crm_addr_city | CRM Address City | STRING | 150 | Lead's city in the CRM | false | City | address1_city |
| leads | crm_addr_country | CRM Address Country | STRING | 150 | Lead's country in the CRM | false | Country | address1_country |
| leads | crm_addr_postal_code | CRM Address Postal Code | STRING | 150 | Lead's postal code in the CRM | false | PostalCode | address1_postalcode |
| leads | crm_addr_state | CRM Address State | STRING | 150 | Lead's state in the CRM | false | State | address1_stateorprovince |
| leads | crm_addr_street | CRM Address Street | STRING | 150 | Lead's street in the CRM | false | Street | address1_line1 |
| leads | crm_complt | CRM Completeness | FLOAT |  | Lead's completeness score based on the CRM data | false |  |  |
| leads | crm_complt_contact | CRM Completeness Contact | FLOAT |  | Lead's contact information completeness score based on the CRM data | false |  |  |
| leads | crm_complt_contact_method | CRM Completeness Contact Method | FLOAT |  | Lead's contact method completeness score based on the CRM data | false |  |  |
| leads | crm_complt_custom | CRM Completeness Custom | FLOAT |  | Lead's custom completeness score based on the CRM data | false |  |  |
| leads | crm_complt_geo | CRM Completeness Geo | FLOAT |  | Lead's location completeness score based on the CRM data | false |  |  |
| leads | crm_complt_marketing | CRM Completeness Marketing | FLOAT |  | Lead's marketing completeness score based on the CRM data | false |  |  |
| leads | crm_contact_title | CRM Contact Title | STRING | 150 | Lead's title in the CRM | false | Title | jobtitle |
| leads | crm_converted_contact_id | CRM Converted Contact ID | STRING | 50 | Lead's contact id in the CRM | false | ConvertedContactId | contactid |
| leads | crm_converted_date | CRM Converted Date | DATETIME |  | Lead conversion date in the CRM | false | ConvertedDate | new_converteddate |
| leads | crm_converted_opp_id | CRM Converted Opp ID | STRING | 50 | Lead's opp id in the CRM | false | ConvertedOpportunityId | QualifyingOpportunityId |
| leads | crm_created_on | CRM Created On | DATETIME |  | Lead creation date in the CRM | false | CreatedDate | createdon |
| leads | crm_creator_id | CRM Creator ID | STRING | 50 | Lead creator's id in the CRM | false | CreatedById | createdby |
| leads | crm_custom_value_1 | CRM Custom Value 1 | STRING | 150 | Custom categorical variable | false |  |  |
| leads | crm_custom_value_2 | CRM Custom Value 2 | STRING | 150 | Custom categorical variable | false |  |  |
| leads | crm_custom_value_3 | CRM Custom Value 3 | STRING | 150 | Custom categorical variable | false |  |  |
| leads | crm_deep_link | CRM Deep Link | STRING | 500 | Link to the lead in the remote system (such as Salesforce) | false |  |  |
| leads | crm_email | CRM Email | STRING | 150 | Lead's email | false | Email | emailaddress1 |
| leads | crm_first_name | CRM First Name | STRING | 150 | Lead's first name | false | FirstName | firstname |
| leads | crm_industry | CRM Industry | STRING | 150 | Lead's industry in the CRM | false | Industry | industrycode |
| leads | crm_last_act_time | CRM Last Activity Time | DATETIME |  | Lead's last activity time in the CRM | false | LastActivityDate | lastonholdtime |
| leads | crm_last_name | CRM Last Name | STRING | 150 | Lead's last name | false | LastName | lastname |
| leads | crm_leadsource | CRM Lead Source | STRING | 150 | Lead's lead source in the CRM | false | LeadSource | leadsourcecode |
| leads | crm_modified_on | CRM Modified On | DATETIME |  | Lead modified on date in the CRM | false | LastModifiedDate | modifiedon |
| leads | crm_name | CRM Name | STRING | 500 | Lead name in the CRM | false | Company | companyname |
| leads | crm_num_employees | CRM Num Employees | INTEGER |  | Lead's number of employees in the CRM | false | NumberOfEmployees | numberofemployees |
| leads | crm_owner_id | CRM Owner ID | STRING | 50 | Lead owner's id in the CRM | false | OwnerId | ownerid |
| leads | crm_phone | CRM Phone | STRING | 150 | Lead's phone number | false | Phone | telephone1 |
| leads | crm_status | CRM Status | STRING | 150 | Lead's status in the CRM | false | Status | statuscode |
| leads | cust_bool1 | cust_bool1 | BOOLEAN |  | cust_bool1 | false |  |  |
| leads | cust_bool2 | cust_bool2 | BOOLEAN |  | cust_bool2 | false |  |  |
| leads | cust_num1 | cust_num1 | FLOAT |  | cust_num1 | false |  |  |
| leads | cust_num2 | cust_num2 | FLOAT |  | cust_num2 | false |  |  |
| leads | cust_num3 | cust_num3 | FLOAT |  | cust_num3 | false |  |  |
| leads | cust_num4 | cust_num4 | FLOAT |  | cust_num4 | false |  |  |
| leads | cust_num5 | cust_num5 | FLOAT |  | cust_num5 | false |  |  |
| leads | cust_num6 | cust_num6 | FLOAT |  | cust_num6 | false |  |  |
| leads | cust_num7 | cust_num7 | FLOAT |  | cust_num7 | false |  |  |
| leads | cust_text1 | cust_text1 | STRING | 50 | cust_text1 | false |  |  |
| leads | cust_text2 | cust_text2 | STRING | 50 | cust_text2 | false |  |  |
| leads | cust_text3 | cust_text3 | STRING | 50 | cust_text3 | false |  |  |
| leads | cust_text4 | cust_text4 | STRING | 50 | cust_text4 | false |  |  |
| leads | cust_text5 | cust_text5 | STRING | 50 | cust_text5 | false |  |  |
| leads | ext_addr_city | ext_address_city | STRING | 100 |  | false |  |  |
| leads | ext_addr_country | ext_address_country | STRING | 100 |  | false |  |  |
| leads | ext_addr_postal_code | ext_address_postalcode | STRING | 100 |  | false |  |  |
| leads | ext_addr_state | ext_address_state | STRING | 100 |  | false |  |  |
| leads | ext_addr_street | ext_address_street | STRING | 100 |  | false |  |  |
| leads | ext_debug | ext_debug | OBJECT | 50000 |  | false |  |  |
| leads | ext_id | ext_id | STRING | 100 |  | false |  |  |
| leads | ext_industry | ext_industry | STRING | 100 |  | false |  |  |
| leads | ext_is_match | ext_is_match | STRING | 100 |  | false |  |  |
| leads | ext_last_updated | ext_last_updated | DATETIME |  |  | false |  |  |
| leads | ext_linkedin_url | ext_linkedin_url | STRING | 100 |  | false |  |  |
| leads | ext_match_conf | ext_match_conf | FLOAT |  |  | false |  |  |
| leads | ext_match_rule | ext_match_rule | INTEGER |  |  | false |  |  |
| leads | ext_name | ext_name | STRING | 100 |  | false |  |  |
| leads | ext_num_employees_range | ext_num_employees_range | STRING | 100 |  | false |  |  |
| leads | ext_phone | ext_phone | STRING | 100 |  | false |  |  |
| leads | ext_revenue_range | ext_revenue_range | STRING | 100 |  | false |  |  |
| leads | ext_self_verified | ext_self_verified | BOOLEAN |  |  | false |  |  |
| leads | ext_source | ext_source | STRING | 100 |  | false |  |  |
| leads | ext_web_url | ext_web_url | STRING | 100 |  | false |  |  |
| leads | ext_year_founded | ext_year_founded | INTEGER |  |  | false |  |  |
| leads | trueai_addr_city | Address City | STRING | 50 | Lead's city | false |  |  |
| leads | trueai_addr_country | Address Country | STRING | 50 | Lead's country | false |  |  |
| leads | trueai_addr_lat | Address Lat | FLOAT |  | Lead's latitude | false |  |  |
| leads | trueai_addr_long | Address Long | FLOAT |  | Lead's longitude | false |  |  |
| leads | trueai_addr_postal_code | Address Postal Code | STRING | 50 | Lead's postal code | false |  |  |
| leads | trueai_addr_rule | Address Rule | INTEGER |  | Lead's address prediction rule | false |  |  |
| leads | trueai_addr_state | Address State | STRING | 50 | Lead's state | false |  |  |
| leads | trueai_addr_street | Address Street | STRING | 50 | Lead's street | false |  |  |
| leads | trueai_company_dupe_conf | Company Duplicate Confidence | FLOAT |  | Lead's company duplication confidence | false |  |  |
| leads | trueai_company_dupe_id | Company Duplicate ID | STRING | 50 | Lead's company duplication id | false |  |  |
| leads | trueai_company_size | Company Size | STRING | 50 | Lead's standardized company size | false |  |  |
| leads | trueai_company_size_rule | Company Size Rule | INTEGER |  | Lead's standardized company size prediction rule | false |  |  |
| leads | trueai_complt | Completeness | FLOAT |  | Completeness score of the lead based on the standardized data | false |  |  |
| leads | trueai_complt_contact | Completeness Contact | FLOAT |  | Contact information completeness score of the lead based on the standardized data | false |  |  |
| leads | trueai_complt_contact_method | Completeness Contact Method | FLOAT |  | Contact method completeness score of the lead based on the standardized data | false |  |  |
| leads | trueai_complt_geo | Completeness Geo | FLOAT |  | Location completeness score of the lead based on the standardized data | false |  |  |
| leads | trueai_complt_marketing | Completeness Marketing | FLOAT |  | Marketing completeness score of the lead based on the standardized data | false |  |  |
| leads | trueai_converted_date | Converted Date | DATETIME |  | Lead converted date | false |  |  |
| leads | trueai_converted_date_rule | Converted Date Rule | INTEGER |  | Lead converted date rule | false |  |  |
| leads | trueai_created_on | Created On | DATETIME |  | Lead creation date | false |  |  |
| leads | trueai_creator_id | Creator ID | STRING | 50 | Lead creator's id | false |  |  |
| leads | trueai_dur | Duration | INTEGER | 50 | Total duration of activities performed on the lead | false |  |  |
| leads | trueai_first_touch | First Touch | DATETIME |  | Date when the lead was first touched | false |  |  |
| leads | trueai_first_touch_rule | First Touch Rule | INTEGER |  | Rule for date when the lead was first touched | false |  |  |
| leads | trueai_industry | Industry | STRING | 50 | Lead's standardized industry | false |  |  |
| leads | trueai_industry_conf | Industry Confidence | FLOAT |  | Lead's standardized industry prediction confidence | false |  |  |
| leads | trueai_industry_rule | Industry Rule | INTEGER |  | Lead's standardized industry prediction rule | false |  |  |
| leads | trueai_is_disqualified | Is Disqualified | STRING | 50 | Lead's standardized disqualification status | false |  |  |
| leads | trueai_is_disqualified_conf | Is Disqualified Confidence | FLOAT |  | Lead's standardized disqualification status prediction confidence | false |  |  |
| leads | trueai_is_master | Is Master | BOOLEAN |  | Boolean flag that indicates whether the lead is the master lead in its group of duplicates | false |  |  |
| leads | trueai_last_outcome_date | Last Outcome | DATETIME |  | Leads last outcome | false |  |  |
| leads | trueai_last_outcome_date_rule | Last Outcome Rule | INTEGER |  | Leads last outcome rule | false |  |  |
| leads | trueai_last_touch | Last Touch | DATETIME |  | Date when the lead was last touched | false |  |  |
| leads | trueai_last_touch_rule | Last Touch Rule | INTEGER |  | Rule for date when the lead was last touched | false |  |  |
| leads | trueai_lead_dupe_conf | Lead Duplicate Confidence | FLOAT |  | Lead's lead duplication confidence | false |  |  |
| leads | trueai_lead_dupe_id | Lead Duplicate ID | STRING | 50 | Lead's lead duplication id | false |  |  |
| leads | trueai_leadsource | Lead Source | STRING | 50 | Lead's standardized lead source | false |  |  |
| leads | trueai_leadsource_conf | Lead Source Confidence | FLOAT |  | Lead's standardized lead source prediction confidence | false |  |  |
| leads | trueai_leadsource_is_inbound | Lead Source Is Inbound | BOOLEAN |  | Boolean flag that indicates whether the lead's standardized lead source is inbound | false |  |  |
| leads | trueai_leadsource_rule | Lead Source Rule | INTEGER |  | Lead's standardized lead source prediction rule | false |  |  |
| leads | trueai_owner_id | Owner ID | STRING | 50 | Lead owner's id | false |  |  |
| leads | trueai_owner_id_rule | Owner ID Rule | INTEGER |  | Lead owner's id rule | false |  |  |
| leads | trueai_prob_of_conversion | Probability of Conversion | FLOAT |  | Lead's probability of conversion | false |  |  |
| leads | trueai_prob_of_conversion_explained | Deprecated field | OBJECT | 500000 | Deprecated field | true |  |  |
| leads | trueai_prob_of_new_logo_win | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| leads | trueai_qual_bucket | Quality Bucket | STRING | 50 | Quality bucket based on the probability of conversion | false |  |  |
| leads | trueai_qual_bucket_num | Quality Bucket Num | INTEGER |  | Quality bucket expressed as an integer from 1 to 5 based on the probability of conversion | false |  |  |
| leads | trueai_ssr_is_master | SSR Is Master | BOOLEAN |  | Boolean flag that indicates whether the lead is the master lead in its group of duplicates, for leads it corresponds to the trueai_is_master flag | false |  |  |
| leads | trueai_test | Test | STRING | 100 | Test model | false |  |  |
| leads | trueai_test_conf | Test Confidence | FLOAT |  | Test model confidence | false |  |  |
| leads | trueai_test_debug | Test Debug | STRING | 2000 | Test model debug information | false |  |  |
| leads | trueai_test_rule | Test Rule | STRING | 500 | Test model rule | false |  |  |
| leads | trueai_title_dept | Title Department | STRING | 50 | Lead's standardized department | false |  |  |
| leads | trueai_title_dept_conf | Title Department Confidence | FLOAT |  | Lead's standardized department prediction confidence | false |  |  |
| leads | trueai_title_seniority | Title Seniority | STRING | 50 | Lead's standardized seniority | false |  |  |
| leads | trueai_title_seniority_conf | Title Seniority Confidence | FLOAT |  | Lead's standardized seniority prediction confidence | false |  |  |
| leads | trueai_vi_lead_gen_value | Deprecated field | CURRENCY |  | Deprecated field | true |  |  |
