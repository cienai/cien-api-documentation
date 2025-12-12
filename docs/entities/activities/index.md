---
title: activities
hide_table_of_contents: true
---

This entity represents **activities** records in the Cien platform.

## Fields

| Entity | Field Name | Display Name | Data Type | Field Length | Description | Deprecated | Field Name Sfdc | Field Name Msdyn |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| activities | _sys_as_of | As of Date | DATETIME |  | The date of the last data request from the platform | false |  |  |
| activities | _sys_doc_id | Doc ID | STRING | 50 | Unique record identifier, based on the ID of the document in the remote system (such as Salesforce ID) | false | Id | activityid |
| activities | _sys_filt_end_date | Filter End Date | DATE |  | The end date of the record, stripped of time | false |  |  |
| activities | _sys_filt_start_date | Filter Start Date | DATE |  | The start date of the record, stripped of time | false |  |  |
| activities | _sys_last_modified_on | Last Modified On | DATETIME |  | The date of the last data modification in the platform | false | SystemModstamp | modifiedon |
| activities | _sys_ssr_id | SSR ID | STRING | 50 | Id of the SSR document the record belongs to | false |  |  |
| activities | crm_account_id | CRM Account ID | STRING | 50 | Activity's account id in the CRM | false | AccountId | regardingobjectid |
| activities | crm_contact_id | CRM Contact ID | STRING | 150 | Activity's contact id in the CRM | false | WhoId | regardingobjectid |
| activities | crm_created_on | CRM Created On | DATETIME |  | Activity creation date in the CRM | false | CreatedDate | createdon |
| activities | crm_creator_id | CRM Creator ID | STRING | 50 | Activity creator's id in the CRM | false | CreatedById | _createdby_value |
| activities | crm_description | CRM Description | MEMO | 5000 | Activity's description in the CRM | false | Description | description |
| activities | crm_dur | CRM Duration | FLOAT |  | Activity's duration in the CRM | false | DurationInMinutes | actualdurationminutes |
| activities | crm_end | CRM End | DATETIME |  | Activity's end date in the CRM | false | EndDateTime | actualend |
| activities | crm_lead_id | CRM Lead ID | STRING | 50 | Activity's lead id in the CRM | false | WhoId | regardingobjectid |
| activities | crm_modified_by | CRM Modified By | STRING | 50 | Activity's modified by user id in the CRM | false | LastModifiedById | _modifiedby_value |
| activities | crm_modified_on | CRM Modified On | DATETIME |  | Activity's modified on date in the CRM | false | LastModifiedDate | modifiedon |
| activities | crm_name | Deprecated field | STRING | 500 | Deprecated field | true |  |  |
| activities | crm_opp_id | CRM Opp ID | STRING | 50 | Activity's opp id in the CRM | false | WhatId | regardingobjectid |
| activities | crm_owner_id | CRM Owner ID | STRING | 50 | Activity owner's id in the CRM | false | OwnerId | _ownerid_value |
| activities | crm_performed_on | CRM Performed on | DATETIME |  | Activity's performed on date in the CRM | false | ActivityDate | actualstart |
| activities | crm_start | CRM Start | DATETIME |  | Activity's start date in the CRM | false | StartDateTime | actualstart |
| activities | crm_subject | CRM Subject | STRING | 500 | Activity's subject in the CRM | false | Subject | subject |
| activities | crm_subtype | CRM Subtype | STRING | 50 | Activity's subtype in the CRM | false | EventSubtype | activitytypecode |
| activities | crm_what_id | CRM What Id | STRING | 50 | Activity's what id in the CRM | false | WhatId |  |
| activities | crm_what_type | CRM What Type | STRING | 50 | Activity's what type in the CRM | false |  |  |
| activities | crm_who_id | CRM Who Id | STRING | 50 | Activity's who id in the CRM | false | WhoId |  |
| activities | crm_who_type | CRM Who Type | STRING | 50 | Activity's who type in the CRM | false |  |  |
| activities | trueai_contact_id | contactid of the activity | STRING | 150 | contactid of the activity | false |  |  |
| activities | trueai_contact_id_rule | rule lookup for contact id | INTEGER |  | rule lookup for contact id | false |  |  |
| activities | trueai_dur | Duration | INTEGER |  | Activity's duration | false |  |  |
| activities | trueai_elapsed_time | Elapsed Time | FLOAT |  | Time passed between the previous activity and the current activity | false |  |  |
| activities | trueai_eng | Engaged | STRING | 50 | Activity engagement prediction | false |  |  |
| activities | trueai_eng_conf | Engaged Confidence | FLOAT |  | Activity engagement prediction confidence | false |  |  |
| activities | trueai_eng_pred | Engaged Probability Prediction | FLOAT |  | Activity engagement probability prediction | false |  |  |
| activities | trueai_lead_id | lead id of the activity | STRING | 150 | lead id of the activity | false |  |  |
| activities | trueai_lead_id_rule | rule lookup for lead id | INTEGER |  | rule lookup for lead id | false |  |  |
| activities | trueai_opp_id | opp id of the activity | STRING | 150 | opp id of the activity | false |  |  |
| activities | trueai_opp_id_rule | rule lookup for the opp id | INTEGER |  | rule lookup for the opp id | false |  |  |
| activities | trueai_performed_on | Performed on | DATETIME |  | Activity's performed on date | false |  |  |
| activities | trueai_purpose | Interaction Purpose | STRING | 50 | Activity purpose prediction | false |  |  |
| activities | trueai_purpose_rule | Interaction Purpose Rule | INTEGER |  | Activity purpose prediction rule | false |  |  |
| activities | trueai_related_to_entity | Related to Entity | STRING | 50 | Entity of the object the activity is primarily related to | false |  |  |
| activities | trueai_related_to_id | Related to ID | STRING | 50 | Id of the object the activity is primarily related to | false |  |  |
| activities | trueai_type | Interaction Type | STRING | 50 | Activity type prediction | false |  |  |
| activities | trueai_type_conf | Interaction Type Confidence | FLOAT |  | Activity type prediction confidence | false |  |  |
