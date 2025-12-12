---
title: opps_stages
hide_table_of_contents: true
---

This entity represents **opps_stages** records in the Cien platform.

## Fields

| Entity | Field Name | Display Name | Data Type | Field Length | Description | Deprecated | Field Name Sfdc | Field Name Msdyn |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| opps_stages | _sys_as_of | As of Date | DATETIME |  | The date of the last data request from the platform | false |  |  |
| opps_stages | _sys_doc_id | Doc ID | STRING | 50 | Unique record identifier, based on the ID of the document in the remote system (such as Salesforce ID) | false | Id |  |
| opps_stages | _sys_is_deleted | Is Deleted | BOOLEAN |  | Boolean flag that indicates whether the stage was set to deleted in the remote system | false | IsDeleted |  |
| opps_stages | _sys_last_modified_on | Last Modified On | DATETIME |  | The date of the last data modification in the platform | false | SystemModstamp |  |
| opps_stages | crm_created_on | CRM Created On | DATETIME |  | Stage's creation date in the CRM | false | CreatedDate |  |
| opps_stages | crm_creator_id | CRM Creator ID | STRING | 50 | Stage's creator's id in the CRM | false | CreatedById |  |
| opps_stages | crm_description | CRM Description | STRING | 2000 | Stage description in the CRM | false | Description |  |
| opps_stages | crm_is_active | CRM Is Active | BOOLEAN |  | Boolean flag that indicates whether the stage was set to inactive in CRM | false | IsActive |  |
| opps_stages | crm_is_closed | CRM Is Closed | BOOLEAN |  | Boolean flag that indicates whether the stage is closed in the CRM | false | IsClosed |  |
| opps_stages | crm_is_won | CRM Is Won | BOOLEAN |  | Boolean flag that indicates whether the opportunity is won in the CRM | false | IsWon |  |
| opps_stages | crm_modified_by | CRM Modified By ID | STRING | 50 | Stage's modified by user id in the CRM | false | LastModifiedById |  |
| opps_stages | crm_modified_on | CRM Modified On | DATETIME |  | Stage's modified on date in the CRM | false | LastModifiedDate |  |
| opps_stages | crm_name | CRM Name | STRING | 500 | Stage name in the CRM | false | MasterLabel |  |
| opps_stages | crm_order | CRM Order | FLOAT |  | Stage's order number in the CRM | false | SortOrder |  |
| opps_stages | crm_pipeline_id | CRM Pipeline ID | STRING | 50 | CRM pipeline id of the opportunity stage | false |  |  |
| opps_stages | crm_pipeline_name | CRM Pipeline Name | STRING | 50 | CRM pipeline name of the opportunity stage | false |  |  |
| opps_stages | crm_prob_of_win | CRM Probability | FLOAT |  | Stage's probability of win in the CRM | false | DefaultProbability |  |
