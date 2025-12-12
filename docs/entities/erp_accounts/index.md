---
title: erp_accounts
---

This entity represents **erp_accounts** records in the Cien platform.

## Fields

| Entity | Field Name | Display Name | Data Type | Field Length | Description | Deprecated | Field Name Sfdc | Field Name Msdyn |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| erp_accounts | _sys_as_of | As of Date | DATETIME |  | The date of the last data request from the platform | false |  |  |
| erp_accounts | _sys_doc_id | Doc ID | STRING | 50 | Unique record identifier, based on the ID of the document in the remote system (such as Salesforce ID) | false |  |  |
| erp_accounts | _sys_filt_end_date | Filter End Date | DATE |  | The end date of the record, stripped of time | false |  |  |
| erp_accounts | _sys_filt_start_date | Filter Start Date | DATE |  | The start date of the record, stripped of time | false |  |  |
| erp_accounts | _sys_last_modified_on | Last Modified On | DATETIME |  | The date of the last data modification in the platform | false |  |  |
| erp_accounts | _sys_ssr_id | SSR ID | STRING | 50 | Id of the SSR document the record belongs to | false |  |  |
| erp_accounts | crm_account_id | CRM account ID | STRING | 50 | If available the CRM Id | false |  |  |
| erp_accounts | crm_owner_id | CRM Owner ID | STRING | 50 | If available the CRM Owner Id | false |  |  |
| erp_accounts | erp_account_type | ERP Account Type | STRING | 50 | Account type in the ERP | false |  |  |
| erp_accounts | erp_addr_city | ERP Address City | STRING | 150 | Account's city in the ERP | false |  |  |
| erp_accounts | erp_addr_country | ERP Address Country | STRING | 150 | Account's country in the ERP | false |  |  |
| erp_accounts | erp_addr_postal_code | ERP Address Postal Code | STRING | 150 | Account's postal code in the ERP | false |  |  |
| erp_accounts | erp_addr_state | ERP Address State | STRING | 150 | Account's state in the ERP | false |  |  |
| erp_accounts | erp_addr_street | ERP Address Street | STRING | 150 | Account's street in the ERP | false |  |  |
| erp_accounts | erp_created_on | ERP Created On | DATETIME |  | Account creation date in the ERP | false |  |  |
| erp_accounts | erp_creator_id | ERP Creator ID | STRING | 50 | Account creator's ID in the ERP | false |  |  |
| erp_accounts | erp_description | ERP Description | STRING | 500 | The description | false |  |  |
| erp_accounts | erp_modified_on | CRM Modified On | DATETIME |  | Account modified on a date in the CRM | false |  |  |
| erp_accounts | erp_name | ERP Name | STRING | 150 | The name of the account | false |  |  |
| erp_accounts | erp_owner_email | ERP Owner Email | STRING | 150 | The email of the owner in the ERP for lookup purposes | false |  |  |
| erp_accounts | erp_owner_id | ERP Owner ID | STRING | 50 | Account owner's ID in the ERP | false |  |  |
| erp_accounts | erp_owner_name | ERP Owner Name | STRING | 150 | The name of the owner in the ERP for lookup purposes | false |  |  |
| erp_accounts | erp_parent_id | ERP Parent ID | STRING | 50 | Account's parent ID in the ERP | false |  |  |
| erp_accounts | erp_web_url | ERP Web URL | STRING | 150 | The account's URL in the ERP | false |  |  |
| erp_accounts | trueai_account_id | TrueAI Account ID | STRING | 50 | The matched-up CRM account sys id | false |  |  |
| erp_accounts | trueai_created_on | Created On | DATETIME |  | Account creation date | false |  |  |
| erp_accounts | trueai_creator_id | Creator ID | STRING | 50 | Account creator's id | false |  |  |
| erp_accounts | trueai_owner_id | Owner ID | STRING | 50 | Account owner's id | false |  |  |
