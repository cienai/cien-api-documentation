---
title: opps
hide_table_of_contents: true
---

This entity represents **opps** records in the Cien platform.

## Fields

| Entity | Field Name | Display Name | Data Type | Field Length | Description | Deprecated | Field Name Sfdc | Field Name Msdyn |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| opps | _sys_as_of | As of Date | DATETIME |  | The date of the last data request from the platform | false |  |  |
| opps | _sys_doc_id | Doc ID | STRING | 50 | Unique record identifier, based on the ID of the document in the remote system (such as Salesforce ID) | false | Id | opportunityid |
| opps | _sys_filt_end_date | Filter End Date | DATE |  | The end date of the record, stripped of time | false |  |  |
| opps | _sys_filt_start_date | Filter Start Date | DATE |  | The start date of the record, stripped of time | false |  |  |
| opps | _sys_is_active | Is Active | BOOLEAN |  | Boolean flag that indicates whether the opportunity is active | false |  |  |
| opps | _sys_last_modified_on | Last Modified On | DATETIME |  | The date of the last data modification in the platform | false | SystemModstamp | modifiedon |
| opps | _sys_ssr_id | SSR ID | STRING | 50 | Id of the SSR document the record belongs to | false |  |  |
| opps | crm_account_custom_value_1 | CRM Account Custom Value 1 | STRING | 150 | Custom categorical variable on the account | false |  |  |
| opps | crm_account_custom_value_2 | CRM Account Custom Value 2 | STRING | 150 | Custom categorical variable on the account | false |  |  |
| opps | crm_account_custom_value_3 | CRM Account Custom Value 3 | STRING | 150 | Custom categorical variable on the account | false |  |  |
| opps | crm_account_id | CRM Account ID | STRING | 50 | CRM account id of the opportunity | false | AccountId | _parentaccountid_value |
| opps | crm_booking_amt | CRM Booking Amount | CURRENCY |  | Opportunity's booking amount in the CRM | false | Amount | totalamount |
| opps | crm_close_date | CRM Close Date | DATETIME |  | Opportunity's close date in the CRM | false | CloseDate | actualclosedate |
| opps | crm_complt | CRM Completeness | FLOAT |  | Opportunity's completeness score based on the CRM data | false |  |  |
| opps | crm_complt_contact | CRM Completeness Contact | FLOAT |  | Opportunity's contact information completeness score based on the CRM data | false |  |  |
| opps | crm_complt_custom | CRM Completeness Custom | FLOAT |  | Opportunity's custom completeness score based on the CRM data | false |  |  |
| opps | crm_complt_marketing | CRM Completeness Marketing | FLOAT |  | Opportunity's marketing completeness score based on the CRM data | false |  |  |
| opps | crm_created_on | CRM Created On | DATETIME |  | Opportunity creation date in the CRM | false | CreatedDate | createdon |
| opps | crm_creator_id | CRM Creator ID | STRING | 50 | Opportunity creator's id in the CRM | false | CreatedById | _createdby_value |
| opps | crm_currency | CRM Currency | STRING | 50 | Opportunity's currency in the CRM | false | CurrencyIsoCode | transactioncurrencyid |
| opps | crm_custom_value_1 | CRM Custom Value 1 | STRING | 150 | Custom categorical variable | false |  |  |
| opps | crm_custom_value_2 | CRM Custom Value 2 | STRING | 150 | Custom categorical variable | false |  |  |
| opps | crm_custom_value_3 | CRM Custom Value 3 | STRING | 150 | Custom categorical variable | false |  |  |
| opps | crm_deep_link | CRM Deep Link | STRING | 500 | Link to the opportunity in the remote system (such as Salesforce) | false |  |  |
| opps | crm_is_closed | CRM Is Closed | BOOLEAN |  | Boolean flag that indicates whether the opportunity is closed in the CRM | false | IsClosed | statecode |
| opps | crm_is_won | CRM Is Won | BOOLEAN |  | Boolean flag that indicates whether the opportunity is won in the CRM | false | IsWon | statecode |
| opps | crm_last_act_time | CRM Last Activity Time | DATETIME |  | Opportunity's last activity time in the CRM | false | LastActivityDate |  |
| opps | crm_leadsource | CRM Lead Source | STRING | 150 | Opportunity's lead source in the CRM | false | LeadSource |  |
| opps | crm_loss_reason | CRM Loss Reason | STRING | 150 | Opportunity's loss reason in the CRM | false |  |  |
| opps | crm_modified_on | CRM Modified On | DATETIME |  | Opportunity modified on date in the CRM | false | LastModifiedDate | modifiedon |
| opps | crm_name | CRM Name | STRING | 500 | Name of the opportunity | false | Name | name |
| opps | crm_owner_id | CRM Owner ID | STRING | 50 | Opportunity owner's id in the CRM | false | OwnerId | _ownerid_value |
| opps | crm_pipeline_id | CRM Pipeline ID | STRING | 50 | CRM pipeline id of the opportunity | false |  |  |
| opps | crm_pipeline_name | CRM Pipeline Name | STRING | 50 | CRM pipeline name of the opportunity | false |  |  |
| opps | crm_stage_id | CRM Stage ID | STRING | 150 | Opportunity's stage ID in the CRM | false |  |  |
| opps | crm_stage_name | CRM Stage Name | STRING | 150 | Opportunity's stage name in the CRM | false | StageName | stepname |
| opps | crm_stage_num | CRM Stage Num | INTEGER | 150 | Opportunity's stage number in the CRM | false | Probability | closeprobability |
| opps | crm_type | CRM Type | STRING | 150 | Opportunity's type in the CRM | false | Type |  |
| opps | cust_bool1 | cust_bool1 | BOOLEAN |  | cust_bool1 | false |  |  |
| opps | cust_bool2 | cust_bool2 | BOOLEAN |  | cust_bool2 | false |  |  |
| opps | cust_num1 | cust_num1 | FLOAT |  | cust_num1 | false |  |  |
| opps | cust_num2 | cust_num2 | FLOAT |  | cust_num2 | false |  |  |
| opps | cust_num3 | cust_num3 | FLOAT |  | cust_num3 | false |  |  |
| opps | cust_num4 | cust_num4 | FLOAT |  | cust_num4 | false |  |  |
| opps | cust_num5 | cust_num5 | FLOAT |  | cust_num5 | false |  |  |
| opps | cust_num6 | cust_num6 | FLOAT |  | cust_num6 | false |  |  |
| opps | cust_num7 | cust_num7 | FLOAT |  | cust_num7 | false |  |  |
| opps | cust_text1 | cust_text1 | STRING | 50 | cust_text1 | false |  |  |
| opps | cust_text2 | cust_text2 | STRING | 50 | cust_text2 | false |  |  |
| opps | cust_text3 | cust_text3 | STRING | 50 | cust_text3 | false |  |  |
| opps | cust_text4 | cust_text4 | STRING | 50 | cust_text4 | false |  |  |
| opps | cust_text5 | cust_text5 | STRING | 50 | cust_text5 | false |  |  |
| opps | trueai_account_id | Opp Account Id | STRING | 50 | Opportunity's account id | false |  |  |
| opps | trueai_account_id_conf | Opp Account Confidence | FLOAT |  | Opportunity's account id confidence | false |  |  |
| opps | trueai_account_id_rule | Opp Account Rule | INTEGER |  | Opportunity's account id rule | false |  |  |
| opps | trueai_addr_city | Address City | STRING | 50 | Opportunity's city | false |  |  |
| opps | trueai_addr_country | Address Country | STRING | 50 | Opportunity's country | false |  |  |
| opps | trueai_addr_lat | Address Lat | FLOAT |  | Opportunity's latitude | false |  |  |
| opps | trueai_addr_long | Address Long | FLOAT |  | Opportunity's longitude | false |  |  |
| opps | trueai_addr_postal_code | Address Postal Code | STRING | 50 | Opportunity's postal code | false |  |  |
| opps | trueai_addr_rule | Address Rule | INTEGER |  | Opportunity's address prediction rule | false |  |  |
| opps | trueai_addr_state | Address State | STRING | 50 | Opportunity's state | false |  |  |
| opps | trueai_addr_street | Address Street | STRING | 50 | Opportunity's street | false |  |  |
| opps | trueai_age | Opportunity Age | INTEGER |  | Opportunity Age | false |  |  |
| opps | trueai_arr_amt | ARR Amount | CURRENCY |  | Opportunity's ARR amount | false |  |  |
| opps | trueai_booking_amt | Booking Amount | CURRENCY |  | Opportunity's booking amount | false |  |  |
| opps | trueai_booking_amt_currency_rule | Booking Amount Currency Rule | INTEGER |  | Opportunity's booking amount currency conversion rule | false |  |  |
| opps | trueai_booking_amt_rule | Booking Amount Rule | INTEGER |  | Opportunity's booking amount rule related to the presence or absence of opp line items and custom mappings | false |  |  |
| opps | trueai_close_date | Close Date | DATETIME |  | Opportunity's close date | false |  |  |
| opps | trueai_close_date_rule | Close Date Rule | INTEGER |  | Opportunity's close date rule | false |  |  |
| opps | trueai_company_size | Company Size | STRING | 50 | Opportunity's standardized company size | false |  |  |
| opps | trueai_company_size_rule | Company Size Rule | INTEGER |  | Opportunity's standardized company size prediction rule | false |  |  |
| opps | trueai_complt | Completeness | FLOAT |  | Completeness score of the opportunity based on the standardized data | false |  |  |
| opps | trueai_complt_contact | Completeness Contact | FLOAT |  | Contact information completeness score of the opportunity based on the standardized data | false |  |  |
| opps | trueai_complt_marketing | Completeness Marketing | FLOAT |  | Marketing completeness score of the opportunity based on the standardized data | false |  |  |
| opps | trueai_created_from_entity | Created from Entity | STRING | 50 | Opportunity's prospecting entity | false |  |  |
| opps | trueai_created_from_id | Created from ID | STRING | 50 | Opportunity's prospecting object's id | false |  |  |
| opps | trueai_created_on | Created On | DATETIME |  | Opportunity creation date | false |  |  |
| opps | trueai_created_on_rule | Created On Rule | INTEGER |  | Opportunity creation date rule | false |  |  |
| opps | trueai_creator_id | Creator ID | STRING | 50 | Opportunity creator's id | false |  |  |
| opps | trueai_creator_id_rule | Creator ID Rule | INTEGER |  | Opportunity creator's id rule | false |  |  |
| opps | trueai_cross_sale_amt | Cross-Sale Amount | CURRENCY |  | Opportunity's Cross-Sale amount | false |  |  |
| opps | trueai_discount | Deprecated field | CURRENCY |  | Deprecated field | true |  |  |
| opps | trueai_discount_amt | Discount Amount | CURRENCY |  | Opportunity discount amount | false |  |  |
| opps | trueai_discount_pct | Discount Percentage | FLOAT |  | Opportunity discount percentage | false |  |  |
| opps | trueai_discount_pct_tier | Discount Percentage Tier | STRING | 50 | Opportunity discount percentage tier | false |  |  |
| opps | trueai_downgrade_amt | Downgrade Amount | CURRENCY |  | Opportunity's downgrade amount | false |  |  |
| opps | trueai_dur | Duration | INTEGER |  | Total duration of activities performed on the opportunity | false |  |  |
| opps | trueai_expansion_amt | Expansion Amount | CURRENCY |  | Opportunity's expansion amount | false |  |  |
| opps | trueai_industry | Industry | STRING | 50 | Opportunity's standardized industry | false |  |  |
| opps | trueai_industry_conf | Industry Confidence | FLOAT |  | Opportunity's standardized industry prediction confidence | false |  |  |
| opps | trueai_industry_rule | Industry Rule | INTEGER |  | Opportunity's standardized industry prediction rule | false |  |  |
| opps | trueai_is_erp | Deprecated field | BOOLEAN |  | Deprecated field | true |  |  |
| opps | trueai_is_new_logo | Is New Logo | BOOLEAN |  | Boolean flag that indicates whether the opportunity is a new logo | false |  |  |
| opps | trueai_is_won | Is Won | BOOLEAN |  | Boolean flag that indicates whether the opportunity is won | false |  |  |
| opps | trueai_leadsource | Lead Source | STRING | 50 | Opportunity's standardized lead source | false |  |  |
| opps | trueai_leadsource_conf | Lead Source Confidence | FLOAT |  | Opportunity's standardized lead source prediction confidence | false |  |  |
| opps | trueai_leadsource_rule | Lead Source Rule | INTEGER |  | Opportunity's standardized lead source prediction rule | false |  |  |
| opps | trueai_loss_reason | Loss Reason | STRING | 150 | Opportunity's loss reason | false |  |  |
| opps | trueai_nd_amt | ND Amount | CURRENCY |  | Opportunity's non determinable amount | false |  |  |
| opps | trueai_nnb_amt | NNB Amount | CURRENCY |  | Opportunity's NNB amount | false |  |  |
| opps | trueai_one_time_amt | One Time Amount | CURRENCY |  | Opportunity's one time amount | false |  |  |
| opps | trueai_opp_stage_late_date | Opp Stage Late Date | DATETIME |  | Date when the opportunity entered the late stage | false |  |  |
| opps | trueai_opp_stage_mid_date | Opp Stage Mid Date | DATETIME |  | Date when the opportunity entered the middle stage | false |  |  |
| opps | trueai_owner_id | Owner ID | STRING | 50 | Opportunity owner's id | false |  |  |
| opps | trueai_owner_id_rule | Owner ID Rule | INTEGER |  | Opportunity owner's id rule | false |  |  |
| opps | trueai_pipeline_name | Pipeline Name | STRING | 150 | Pipeline name of the opportunity | false |  |  |
| opps | trueai_pred_booking_amt | Deprecated field | CURRENCY |  | Deprecated field | true |  |  |
| opps | trueai_prob_of_next_opp | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| opps | trueai_prob_of_next_opp_explained | Deprecated field | OBJECT | 500000 | Deprecated field | true |  |  |
| opps | trueai_prob_of_win | Probability of Win | FLOAT |  | Probability of win | false |  |  |
| opps | trueai_prob_of_win_explained | Deprecated field | OBJECT | 500000 | Deprecated field | true |  |  |
| opps | trueai_qual_bucket | Quality Bucket | STRING | 50 | Quality bucket based on the probability of win | false |  |  |
| opps | trueai_qual_bucket_num | Quality Bucket Num | INTEGER |  | Quality bucket expressed as an integer from 1 to 5 based on the probability of win | false |  |  |
| opps | trueai_renewal_amt | Renewal Amount | CURRENCY |  | Opportunity's renewal amount | false |  |  |
| opps | trueai_sale_type | Sale Type | STRING | 50 | Opportunity's sale type | false |  |  |
| opps | trueai_sale_type_conf | Sale Type Confidence | FLOAT |  | Opportunity's sale type prediction confidence | false |  |  |
| opps | trueai_stage | Normalized Stage | STRING | 50 | Opportunity's normalized stage | false |  |  |
| opps | trueai_stage_id | Stage ID | STRING | 150 | Opportunity's stage ID | false |  |  |
| opps | trueai_stage_name | Stage Name | STRING | 150 | Opportunity's stage name | false |  |  |
| opps | trueai_start_date_rule | Start Date Rule | INTEGER |  | Opportunity's start date rule | false |  |  |
| opps | trueai_test | Test | STRING | 100 | Test model | false |  |  |
| opps | trueai_test_conf | Test Confidence | FLOAT |  | Test model confidence | false |  |  |
| opps | trueai_test_debug | Test Debug | STRING | 2000 | Test model debug information | false |  |  |
| opps | trueai_test_rule | Test Rule | STRING | 500 | Test model rule | false |  |  |
| opps | trueai_vi_opp_value | Deprecated field | CURRENCY |  | Deprecated field | true |  |  |
| opps | trueai_vi_post_sales_value | Deprecated field | CURRENCY |  | Deprecated field | true |  |  |
| opps | trueai_vi_prospecting_value | Deprecated field | CURRENCY |  | Deprecated field | true |  |  |
| opps | trueai_vi_repeat_value | Deprecated field | CURRENCY |  | Deprecated field | true |  |  |
