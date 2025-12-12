---
title: opp_line_items
---

This entity represents **opp_line_items** records in the Cien platform.

## Fields

| Entity | Field Name | Display Name | Data Type | Field Length | Description | Deprecated | Field Name Sfdc | Field Name Msdyn |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| opp_line_items | _sys_as_of | As of Date | DATETIME |  | The date of the last data request from the platform | false |  |  |
| opp_line_items | _sys_doc_id | Doc ID | STRING | 50 | Unique record identifier, based on the ID of the document in the remote system (such as Salesforce ID) | false | Id | opportunityproductid |
| opp_line_items | _sys_is_deleted | Is Deleted | BOOLEAN |  | Boolean flag that indicates whether the stage was set to deleted in the remote system | false | IsDeleted |  |
| opp_line_items | _sys_last_modified_on | Last Modified On | DATETIME |  | The date of the last data modification in the platform | false | SystemModstamp | modifiedon |
| opp_line_items | _sys_ssr_id | SSR ID | STRING | 50 | Id of the SSR document the record belongs to | false |  |  |
| opp_line_items | crm_created_on | CRM Created On | DATETIME |  | Product's creation date in the CRM | false | CreatedDate | createdon |
| opp_line_items | crm_currency | CRM Currency | STRING | 50 | Product's currency in the CRM | false | CurrencyIsoCode | transactioncurrencyid |
| opp_line_items | crm_description | CRM Description | MEMO | 5000 | Product's description in the CRM | false | Description | description |
| opp_line_items | crm_list_price | CRM List Price | CURRENCY |  | Product's list_price in the CRM | false | ListPrice | priceperunit_base |
| opp_line_items | crm_modified_on | CRM Modified On | DATETIME |  | Product's modified on date in the CRM | false | LastModifiedDate | modifiedon |
| opp_line_items | crm_name | CRM Name | STRING | 500 | Product name in the CRM | false | Name | opportunityproductname |
| opp_line_items | crm_opp_id | CRM Opp ID | STRING | 500 | Product oppid in the CRM | false | OpportunityId | _opportunityid_value |
| opp_line_items | crm_product_code | CRM Product Code | STRING | 2000 | Product code in the CRM | false | ProductCode | producttypecode |
| opp_line_items | crm_product_id | CRM Product ID | STRING | 500 | Product product_id in the CRM | false | Product2Id | _productid_value |
| opp_line_items | crm_qty | CRM Qty | INTEGER |  | Product's qty in the CRM | false | Quantity | quantity |
| opp_line_items | crm_total_price | CRM Total Price | CURRENCY |  | Product's total_price in the CRM | false | TotalPrice | extendedamount |
| opp_line_items | crm_unit_price | CRM Unit Price | CURRENCY |  | Product's unit_price in the CRM | false | UnitPrice | priceperunit |
| opp_line_items | cust_bool1 | cust_bool1 | BOOLEAN |  | cust_bool1 | false |  |  |
| opp_line_items | cust_bool2 | cust_bool2 | BOOLEAN |  | cust_bool2 | false |  |  |
| opp_line_items | cust_num1 | cust_num1 | FLOAT |  | cust_num1 | false |  |  |
| opp_line_items | cust_num2 | cust_num2 | FLOAT |  | cust_num2 | false |  |  |
| opp_line_items | cust_num3 | cust_num3 | FLOAT |  | cust_num3 | false |  |  |
| opp_line_items | cust_num4 | cust_num4 | FLOAT |  | cust_num4 | false |  |  |
| opp_line_items | cust_num5 | cust_num5 | FLOAT |  | cust_num5 | false |  |  |
| opp_line_items | cust_num6 | cust_num6 | FLOAT |  | cust_num6 | false |  |  |
| opp_line_items | cust_num7 | cust_num7 | FLOAT |  | cust_num7 | false |  |  |
| opp_line_items | cust_text1 | cust_text1 | STRING | 50 | cust_text1 | false |  |  |
| opp_line_items | cust_text2 | cust_text2 | STRING | 50 | cust_text2 | false |  |  |
| opp_line_items | cust_text3 | cust_text3 | STRING | 50 | cust_text3 | false |  |  |
| opp_line_items | cust_text4 | cust_text4 | STRING | 50 | cust_text4 | false |  |  |
| opp_line_items | cust_text5 | cust_text5 | STRING | 50 | cust_text5 | false |  |  |
| opp_line_items | trueai_discount_amt | Discount Amount | CURRENCY |  | Product's discount amount | false |  |  |
| opp_line_items | trueai_discount_pct | Discount Percentage | FLOAT |  | Product's discount percentage | false |  |  |
| opp_line_items | trueai_list_price | List Price | CURRENCY |  | Product's list price | false |  |  |
| opp_line_items | trueai_list_price_rule | List Price Rule | INTEGER |  | Product's list price rule | false |  |  |
| opp_line_items | trueai_product_type | Product Type | STRING | 50 | Product Type | false |  |  |
| opp_line_items | trueai_qty | Quantity | FLOAT |  | Products quantity | false |  |  |
| opp_line_items | trueai_revenue_type | Revenue Type | STRING | 50 | Revenue Type | false |  |  |
| opp_line_items | trueai_revenue_type_context | Prompt Used To Classify Product Type | STRING | 2000 | Prompt Used To Classify Product Type | false |  |  |
| opp_line_items | trueai_revenue_type_rule | Revenue Type Rule | INTEGER |  | Revenue Type Rule | false |  |  |
| opp_line_items | trueai_total_price | Total Price | CURRENCY |  | Product's total price | false |  |  |
| opp_line_items | trueai_total_price_rule | Total Price Rule | INTEGER |  | Product's total price rule | false |  |  |
| opp_line_items | trueai_unit_price | Unit Price | CURRENCY |  | Product's unit price | false |  |  |
| opp_line_items | trueai_unit_price_rule | Unit Price Rule | INTEGER |  | Product's unit price rule | false |  |  |
