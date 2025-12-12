---
title: erp_orders
hide_table_of_contents: true
---

This entity represents **erp_orders** records in the Cien platform.

## Fields

| Entity | Field Name | Display Name | Data Type | Field Length | Description | Deprecated | Field Name Sfdc | Field Name Msdyn |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| erp_orders | _sys_as_of | As of Date | DATETIME |  | The date of the last data request from the platform | false |  |  |
| erp_orders | _sys_doc_id | Doc ID | STRING | 50 | Unique record identifier, based on the ID of the document in the remote system (such as Salesforce ID) | false |  |  |
| erp_orders | _sys_filt_end_date | Filter End Date | DATE |  | The end date of the record, stripped of time | false |  |  |
| erp_orders | _sys_filt_start_date | Filter Start Date | DATE |  | The start date of the record, stripped of time | false |  |  |
| erp_orders | _sys_last_modified_on | Last Modified On | DATETIME |  | The date of the last data modification in the platform | false |  |  |
| erp_orders | crm_opp_id | CRM Opportunity ID | STRING | 50 | A matching opportunity id (if supplied) | false |  |  |
| erp_orders | erp_account_id | ERP Account ID | STRING | 50 | The ERP Account ID | false |  |  |
| erp_orders | erp_arr_amt | ERP Annual Recurring Amount | CURRENCY |  | Any recurring fees normalized. | false |  |  |
| erp_orders | erp_arr_delta | ERP Annual Change (delta) | CURRENCY |  |  | false |  |  |
| erp_orders | erp_created_on | ERP Created On | DATETIME |  | Account creation date in the ERP | false |  |  |
| erp_orders | erp_creator_email | ERP Creator Email | STRING | 150 | The creators email to be used for lookups | false |  |  |
| erp_orders | erp_creator_id | ERP Creator ID | STRING | 50 | Order creator's ID in the ERP | false |  |  |
| erp_orders | erp_creator_name | ERP Creator | STRING | 150 | The creators name to be used for lookups | false |  |  |
| erp_orders | erp_currency | ERP order currency | STRING | 50 | The currency of the order. | false |  |  |
| erp_orders | erp_description | ERP Description | STRING | 500 | description of the order | false |  |  |
| erp_orders | erp_discount_amt | ERP order Discount | CURRENCY |  | The discount deducted from the order | false |  |  |
| erp_orders | erp_leadsource | ERP lead source | STRING | 50 | The channel the order came through | false |  |  |
| erp_orders | erp_modified_on | CRM Modified On | DATETIME |  | Order modified on the date in the CRM | false |  |  |
| erp_orders | erp_name | ERP Name | STRING | 150 | Name of the order | false |  |  |
| erp_orders | erp_one_time_amt | ERP One-Time Amount | CURRENCY |  | Any one-time fees | false |  |  |
| erp_orders | erp_order_end_date | ERP Order End Date | DATE |  | The end date | false |  |  |
| erp_orders | erp_order_start_date | ERP Order Start Date | DATE |  | The effective date of the order | false |  |  |
| erp_orders | erp_status | ERP order Status | STRING | 150 | The status of the order | false |  |  |
| erp_orders | erp_sub_total_amt | ERP order amount | CURRENCY |  | The amount of the order before taxes and discounts | false |  |  |
| erp_orders | erp_tax_amt | ERP order | CURRENCY |  | The taxes added to the oder | false |  |  |
| erp_orders | erp_total_amt | ERP Total Amount | CURRENCY |  |  | false |  |  |
| erp_orders | erp_type | ERP order type | STRING | 150 | The type of order in the ERP system | false |  |  |
| erp_orders | trueai_account_id | TrueAI Account ID | STRING | 50 | The matched-up CRM account sys id | false |  |  |
| erp_orders | trueai_arr_amt | Annual Recurring Amount | CURRENCY |  | Any recurring fees normalized. | false |  |  |
| erp_orders | trueai_arr_delta | Annual Change (delta) | CURRENCY |  |  | false |  |  |
| erp_orders | trueai_created_on | Created On | DATETIME |  | Order creation date | false |  |  |
| erp_orders | trueai_creator_id | Creator ID | STRING | 50 | Order creator's id | false |  |  |
| erp_orders | trueai_discount_amt | Order Discount | CURRENCY |  | The discount deducted from the order | false |  |  |
| erp_orders | trueai_leadsource | Lead Source | STRING | 50 | The leadsource | false |  |  |
| erp_orders | trueai_one_time_amt | One-Time Amount | CURRENCY |  | Any one-time fees | false |  |  |
| erp_orders | trueai_opp_id | Opp ID | STRING | 50 | Any Opp matched to the Order. | false |  |  |
| erp_orders | trueai_opp_id_conf | Opp ID link Confidence | FLOAT |  | The confidence in the association between an opp and an Order. | false |  |  |
| erp_orders | trueai_order_end_date | the end date of the order. | DATETIME |  | If an annual order 12 months from now. Otherwise today. Used for churn calculation. | false |  |  |
| erp_orders | trueai_owner_id | Owner ID | STRING | 50 | Order owner's id | false |  |  |
| erp_orders | trueai_status | Order Status | STRING | 50 | The status of the Order (Placed, Cancelled) | false |  |  |
| erp_orders | trueai_sub_total_amt | Order amount | CURRENCY |  | The amount of the order before taxes and discounts | false |  |  |
| erp_orders | trueai_tax_amt | Order tax amt | CURRENCY |  | The taxes added to the oder | false |  |  |
| erp_orders | trueai_total_amt | Total Amount | CURRENCY |  | Total final amount | false |  |  |
| erp_orders | trueai_type | Type | STRING | 50 | Standardized Order Type (eCommerce New, eCommerce Upgrade, eCommerce Downgrade, eCommerce Cancellation, Manual New, Manual Existing, Manual Cancellation) | false |  |  |
