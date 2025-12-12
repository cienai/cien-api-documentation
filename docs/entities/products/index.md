---
title: products
---

This entity represents **products** records in the Cien platform.

## Fields

| Entity | Field Name | Display Name | Data Type | Field Length | Description | Deprecated | Field Name Sfdc | Field Name Msdyn |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| products | _sys_as_of | As of Date | DATETIME |  | The date of the last data request from the platform | false |  |  |
| products | _sys_doc_id | Doc ID | STRING | 50 | Unique record identifier, based on the ID of the document in the remote system (such as Salesforce ID) | false | Id | productid |
| products | _sys_is_active | Is Active | BOOLEAN |  | Boolean flag that indicates whether the record was set to inactive in the remote system | false | IsActive | statecode |
| products | _sys_is_deleted | Is Deleted | BOOLEAN |  | Boolean flag that indicates whether the record was set to deleted in the remote system | false | IsDeleted |  |
| products | _sys_last_modified_on | Last Modified On | DATETIME |  | The date of the last data modification in the platform | false | SystemModstamp | modifiedon |
| products | crm_created_on | CRM Created On | DATETIME |  | Product's creation date in the CRM | false | CreatedDate | createdon |
| products | crm_currency | CRM Currency | STRING | 50 | Product's currency in the CRM | false | CurrencyIsoCode | transactioncurrencyid |
| products | crm_description | CRM Description | MEMO | 5000 | Product's description in the CRM | false | Description | description |
| products | crm_family | CRM Family | STRING | 50 | Product's family in the CRM | false | Family |  |
| products | crm_modified_on | CRM Modified On | DATETIME |  | Product's modified on date in the CRM | false | LastModifiedDate | modifiedon |
| products | crm_name | CRM Name | STRING | 500 | Product name in the CRM | false | Name | name |
| products | crm_product_code | CRM Product Code | STRING | 2000 | Product code in the CRM | false | ProductCode | productnumber |
| products | trueai_family | Product Family | STRING | 50 | Product's family | false |  |  |
| products | trueai_name | Product Name | STRING | 500 | Product name | false |  |  |
