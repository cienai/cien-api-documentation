---
title: contacts
---

This entity represents **contacts** records in the Cien platform.

## Fields

| Entity | Field Name | Display Name | Data Type | Field Length | Description | Deprecated | Field Name Sfdc | Field Name Msdyn |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| contacts | _sys_as_of | As of Date | DATETIME |  | The date of the last data request from the platform | false |  |  |
| contacts | _sys_doc_id | Doc ID | STRING | 50 | Unique record identifier, based on the ID of the document in the remote system (such as Salesforce ID) | false | Id | contactid |
| contacts | _sys_filt_end_date | Filter End Date | DATE |  | The end date of the record, stripped of time | false |  |  |
| contacts | _sys_filt_start_date | Filter Start Date | DATE |  | The start date of the record, stripped of time | false |  |  |
| contacts | _sys_last_modified_on | Last Modified On | DATETIME |  | The date of the last data modification in the platform | false | SystemModstamp | modifiedon |
| contacts | _sys_ssr_id | SSR ID | STRING | 50 | Id of the SSR document the record belongs to | false |  |  |
| contacts | crm_account_id | CRM Account ID | STRING | 50 | CRM account id of the contact | false | AccountId | _parentcustomerid_value |
| contacts | crm_addr_city | CRM Address City | STRING | 150 | Contact's city in the CRM | false | MailingCity | address1_city |
| contacts | crm_addr_country | CRM Address Country | STRING | 150 | Contact's country in the CRM | false | MailingCountry | address1_country |
| contacts | crm_addr_postal_code | CRM Address Postal Code | STRING | 150 | Contact's postal code in the CRM | false | MailingPostalCode | address1_postalcode |
| contacts | crm_addr_state | CRM Address State | STRING | 150 | Contact's state in the CRM | false | MailingState | address1_stateorprovince |
| contacts | crm_addr_street | CRM Address Street | STRING | 150 | Contact's street in the CRM | false | MailingStreet | address1_line1 |
| contacts | crm_complt | CRM Completeness | FLOAT |  | Contact's completeness score based on the CRM data | false |  |  |
| contacts | crm_complt_contact | CRM Completeness Contact | FLOAT |  | Contact's contact information completeness score based on the CRM data | false |  |  |
| contacts | crm_complt_contact_method | CRM Completeness Contact Method | FLOAT |  | Contact's contact method completeness score based on the CRM data | false |  |  |
| contacts | crm_complt_geo | CRM Completeness Geo | FLOAT |  | Contact's location completeness score based on the CRM data | false |  |  |
| contacts | crm_complt_marketing | CRM Completeness Marketing | FLOAT |  | Contact's marketing completeness score based on the CRM data | false |  |  |
| contacts | crm_created_on | CRM Created On | DATETIME |  | Contact creation date in the CRM | false | CreatedDate | createdon |
| contacts | crm_creator_id | CRM Creator ID | STRING | 50 | Contact creator's id in the CRM | false | CreatedById | _createdby_value |
| contacts | crm_deep_link | CRM Deep Link | STRING | 500 | Link to the contact in the remote system (such as Salesforce) | false |  |  |
| contacts | crm_email | CRM Email | STRING | 150 | Contact's email | false | Email | emailaddress1 |
| contacts | crm_first_name | CRM First Name | STRING | 150 | Contact's first name | false | FirstName | firstname |
| contacts | crm_last_act_time | CRM Last Activity Time | DATETIME |  | Contact's last activity time in the CRM | false | LastActivityDate |  |
| contacts | crm_last_name | CRM Last Name | STRING | 150 | Contact's last name | false | LastName | lastname |
| contacts | crm_leadsource | CRM Lead Source | STRING | 150 | Contact's lead source in the CRM | false | LeadSource | leadsourcecode |
| contacts | crm_modified_on | CRM Modified On | DATETIME |  | Contact modified on date in the CRM | false | LastModifiedDate | modifiedon |
| contacts | crm_owner_id | CRM Owner ID | STRING | 50 | Contact owner's id in the CRM | false | OwnerId | _ownerid_value |
| contacts | crm_phone | CRM Phone | STRING | 150 | Contact's phone number | false | Phone | telephone1 |
| contacts | crm_salutation | CRM Salutation | STRING | 150 | Contact's salutation in the CRM | false | Salutation | salutation |
| contacts | crm_title | CRM Title | STRING | 150 | Contact's title in the CRM | false | Title | jobtitle |
| contacts | cust_bool1 | cust_bool1 | BOOLEAN |  | cust_bool1 | false |  |  |
| contacts | cust_bool2 | cust_bool2 | BOOLEAN |  | cust_bool2 | false |  |  |
| contacts | cust_num1 | cust_num1 | FLOAT |  | cust_num1 | false |  |  |
| contacts | cust_num2 | cust_num2 | FLOAT |  | cust_num2 | false |  |  |
| contacts | cust_num3 | cust_num3 | FLOAT |  | cust_num3 | false |  |  |
| contacts | cust_num4 | cust_num4 | FLOAT |  | cust_num4 | false |  |  |
| contacts | cust_num5 | cust_num5 | FLOAT |  | cust_num5 | false |  |  |
| contacts | cust_num6 | cust_num6 | FLOAT |  | cust_num6 | false |  |  |
| contacts | cust_num7 | cust_num7 | FLOAT |  | cust_num7 | false |  |  |
| contacts | cust_text1 | cust_text1 | STRING | 50 | cust_text1 | false |  |  |
| contacts | cust_text2 | cust_text2 | STRING | 50 | cust_text2 | false |  |  |
| contacts | cust_text3 | cust_text3 | STRING | 50 | cust_text3 | false |  |  |
| contacts | cust_text4 | cust_text4 | STRING | 50 | cust_text4 | false |  |  |
| contacts | cust_text5 | cust_text5 | STRING | 50 | cust_text5 | false |  |  |
| contacts | trueai_addr_city | Address City | STRING | 50 | Contact's city | false |  |  |
| contacts | trueai_addr_country | Address Country | STRING | 50 | Contact's country | false |  |  |
| contacts | trueai_addr_lat | Address Lat | FLOAT |  | Contact's latitude | false |  |  |
| contacts | trueai_addr_long | Address Long | FLOAT |  | Contact's longitude | false |  |  |
| contacts | trueai_addr_postal_code | Address Postal Code | STRING | 50 | Contact's postal code | false |  |  |
| contacts | trueai_addr_rule | Address Rule | INTEGER |  | Contact's address prediction rule | false |  |  |
| contacts | trueai_addr_state | Address State | STRING | 50 | Contact's state | false |  |  |
| contacts | trueai_addr_street | Address Street | STRING | 50 | Contact's street | false |  |  |
| contacts | trueai_complt | Completeness | FLOAT |  | Completeness score of the contact based on the standardized data | false |  |  |
| contacts | trueai_complt_contact | Completeness Contact | FLOAT |  | Contact information completeness score of the contact based on the standardized data | false |  |  |
| contacts | trueai_complt_contact_method | Completeness Contact Method | FLOAT |  | Contact method completeness score of the contact based on the standardized data | false |  |  |
| contacts | trueai_complt_geo | Completeness Geo | FLOAT |  | Location completeness score of the contact based on the standardized data | false |  |  |
| contacts | trueai_complt_marketing | Completeness Marketing | FLOAT |  | Marketing completeness score of the contact based on the standardized data | false |  |  |
| contacts | trueai_created_on | Created On | DATE |  | Contact creation date | false |  |  |
| contacts | trueai_creator_id | Creator ID | STRING | 50 | Contact creator's id | false |  |  |
| contacts | trueai_leadsource | Lead Source | STRING | 50 | Contact's standardized lead source | false |  |  |
| contacts | trueai_leadsource_conf | Lead Source Confidence | FLOAT |  | Contact's standardized lead source prediction confidence | false |  |  |
| contacts | trueai_leadsource_rule | Lead Source Rule | INTEGER |  | Contact's standardized lead source prediction rule | false |  |  |
| contacts | trueai_owner_id | Owner ID | STRING | 50 | Contact owner's id | false |  |  |
| contacts | trueai_test | Test | STRING | 100 | Test model | false |  |  |
| contacts | trueai_test_conf | Test Confidence | FLOAT |  | Test model confidence | false |  |  |
| contacts | trueai_test_debug | Test Debug | STRING | 2000 | Test model debug information | false |  |  |
| contacts | trueai_test_rule | Test Rule | STRING | 500 | Test model rule | false |  |  |
| contacts | trueai_title_dept | Title Department | STRING | 50 | Contact's standardized department | false |  |  |
| contacts | trueai_title_dept_conf | Title Department Confidence | FLOAT |  | Contact's standardized department prediction confidence | false |  |  |
| contacts | trueai_title_seniority | Title Seniority | STRING | 50 | Contact's standardized seniority | false |  |  |
| contacts | trueai_title_seniority_conf | Title Seniority Confidence | FLOAT |  | Contact's standardized seniority prediction confidence | false |  |  |
