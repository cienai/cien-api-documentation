---
title: ssr_history_stakeholders
---

This entity represents **ssr_history_stakeholders** records in the Cien platform.

## Fields

| Entity | Field Name | Display Name | Data Type | Field Length | Description | Deprecated | Field Name Sfdc | Field Name Msdyn |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ssr_history_stakeholders | _sys_as_of | As of Date | DATETIME |  | The date of the last data request from the platform | false |  |  |
| ssr_history_stakeholders | _sys_doc_id | Doc ID | STRING | 500 | Unique record identifier, based on the ID of the document in the remote system (such as Salesforce ID) | false |  |  |
| ssr_history_stakeholders | _sys_filt_end_date | Filter End Date | DATE |  | The end date of the engagement with this stake holder | false |  |  |
| ssr_history_stakeholders | _sys_filt_start_date | Filter Start Date | DATE |  | The start date of the record, stripped of time | false |  |  |
| ssr_history_stakeholders | _sys_last_modified_on | Last Modified On | DATETIME |  | The date of the last data modification in the platform | false |  |  |
| ssr_history_stakeholders | _sys_ssr_history_id | SSR History ID | STRING | 50 | The link to a specific ssr history id | false |  |  |
| ssr_history_stakeholders | _sys_ssr_id | SSR ID | STRING | 50 | Id of the SSR document the record belongs to | false |  |  |
| ssr_history_stakeholders | crm_complt | CRM Completeness | FLOAT |  | Contact's completeness score based on the CRM data | false |  |  |
| ssr_history_stakeholders | crm_first_name | First Name | STRING | 150 | Contact's first name in the CRM | false |  |  |
| ssr_history_stakeholders | crm_last_name | Last Name | STRING | 150 | Contact's last name in the CRM | false |  |  |
| ssr_history_stakeholders | crm_title | CRM Title | STRING | 150 | Contact's title in the CRM | false |  |  |
| ssr_history_stakeholders | trueai_act_adj_dur | Stakeholders Adj Duration | FLOAT |  | Adjusted duration of activities performed during the step that were related to the stake holder | false |  |  |
| ssr_history_stakeholders | trueai_act_adj_dur_rule | Stakeholders Adj Duration Rule | INTEGER |  | Rule used to determine the adjusted duration of activities performed during the step | false |  |  |
| ssr_history_stakeholders | trueai_act_adj_eng_dur | Stakeholders Adj Engaged Duration | FLOAT |  | Adjusted duration of engaged activities performed during the step that were related to the stake holder | false |  |  |
| ssr_history_stakeholders | trueai_act_count | Stakeholders Activities Count | INTEGER |  | Number of activities performed during the step that were related to the stake holder | false |  |  |
| ssr_history_stakeholders | trueai_act_dur | Stakeholders Duration | FLOAT |  | Duration of activities performed during the step that were related to the stake holder | false |  |  |
| ssr_history_stakeholders | trueai_act_dur_eng | Stakeholders Duration Engaged | FLOAT |  | Duration of activities performed during the step that were related to the stake holder | false |  |  |
| ssr_history_stakeholders | trueai_act_eng_count | Stakeholders Activities Engaged Count | INTEGER |  | Number of engaged activities performed during the step that were related to the stake holder | false |  |  |
| ssr_history_stakeholders | trueai_act_type_auto_email_count | Stakeholders Automated Email Count | INTEGER |  | Number of automated emails performed during the step that were related to the stake holder | false |  |  |
| ssr_history_stakeholders | trueai_act_type_auto_email_eng_count | Stakeholders Automated Email Engaged Count | INTEGER |  | Number of engaged automated emails performed during the step that were related to the stake holder | false |  |  |
| ssr_history_stakeholders | trueai_act_type_call_count | Stakeholders Phone Call Count | INTEGER |  | Number of calls performed during the step that were related to the stake holder | false |  |  |
| ssr_history_stakeholders | trueai_act_type_call_eng_count | Stakeholders Phone Call Engaged Count | INTEGER |  | Number of engaged calls performed during the step that were related to the stake holder | false |  |  |
| ssr_history_stakeholders | trueai_act_type_email_count | Stakeholders Email Count | INTEGER |  | Number of emails performed during the step that were related to the stake holder | false |  |  |
| ssr_history_stakeholders | trueai_act_type_email_eng_count | Stakeholders Email Engaged Count | INTEGER |  | Number of engaged emails performed during the step that were related to the stake holder | false |  |  |
| ssr_history_stakeholders | trueai_act_type_meeting_count | Stakeholders Meeting Count | INTEGER |  | Number of meetings performed during the step that were related to the stake holder | false |  |  |
| ssr_history_stakeholders | trueai_act_type_meeting_eng_count | Stakeholders Meeting Engaged Count | INTEGER |  | Number of engaged meetings performed during the step that were related to the stake holder | false |  |  |
| ssr_history_stakeholders | trueai_act_type_nd_count | Stakeholders Non Determinable Count | INTEGER |  | Number of activities with unknown type performed during the step that were related to the stake holder | false |  |  |
| ssr_history_stakeholders | trueai_act_type_nd_eng_count | Stakeholders Non Determinable Engaged Count | INTEGER |  | Number of engaged activities with unknown type performed during the step that were related to the stake holder | false |  |  |
| ssr_history_stakeholders | trueai_act_type_no_interaction_count | Stakeholders No Interaction Count | INTEGER |  | Number of activities with no customer interaction performed during the step that were related to the stake holder | false |  |  |
| ssr_history_stakeholders | trueai_act_type_no_interaction_eng_count | Stakeholders No Interaction Engaged Count | INTEGER |  | Number of engaged activities with no customer interaction performed during the step that were related to the stake holder | false |  |  |
| ssr_history_stakeholders | trueai_act_type_social_count | Stakeholders Social Count | INTEGER |  | Number of social media activities performed during the step that were related to the stake holder | false |  |  |
| ssr_history_stakeholders | trueai_act_type_social_eng_count | Stakeholders Social Engaged Count | INTEGER |  | Number of engaged social media activities performed during the step that were related to the stake holder | false |  |  |
| ssr_history_stakeholders | trueai_complt | Completeness | FLOAT |  | Completeness score of the contact based on the standardized data | false |  |  |
| ssr_history_stakeholders | trueai_created_by_step_owner | Created by Step owner | BOOLEAN |  | Boolean flag indicating whether the contact was created by the step owner as part of the sales process | false |  |  |
| ssr_history_stakeholders | trueai_created_on | Created On | DATE |  | Contact creation date | false |  |  |
| ssr_history_stakeholders | trueai_creator_id | Creator ID | STRING | 50 | Contact creator's id | false |  |  |
| ssr_history_stakeholders | trueai_first_act | Stakeholders First Activities | DATETIME |  | Date when the first activity was performed during the step that was related to the stake holder | false |  |  |
| ssr_history_stakeholders | trueai_first_eng | Stakeholders First Engagement | DATETIME |  | Date when the first engaged activity was performed during the step that was related to the stake holder | false |  |  |
| ssr_history_stakeholders | trueai_last_act | Stakeholders Last Activity | DATETIME |  | Date when the last activity was performed during the step that was related to the stake holder | false |  |  |
| ssr_history_stakeholders | trueai_last_eng | Stakeholders Last Engagement | DATETIME |  | Date when the last engaged activity was performed during the step that was related to the stake holder | false |  |  |
| ssr_history_stakeholders | trueai_leadsource | Lead Source | STRING | 50 | Contact's standardized lead source | false |  |  |
| ssr_history_stakeholders | trueai_leadsource_conf | Lead Source Confidence | FLOAT |  | Contact's standardized lead source prediction confidence | false |  |  |
| ssr_history_stakeholders | trueai_owner_act_capt_lvl | Step Owner Activities Capture Level | FLOAT |  | Act_capture_level score of the owner of the step | false |  |  |
| ssr_history_stakeholders | trueai_owner_id | Owner ID | STRING | 50 | Contact owner's id | false |  |  |
| ssr_history_stakeholders | trueai_owner_prep_factor | Step Owner Prep Factor | FLOAT |  | Prep factor of the owner of the step | false |  |  |
| ssr_history_stakeholders | trueai_primary_entity_id | Stakeholders Primary Entity ID | STRING | 50 | Id of the contact or lead corresponding to the primary stake holder | false |  |  |
| ssr_history_stakeholders | trueai_primary_entity_type | Stakeholders Primary Entity ID | STRING | 50 | Entity (lead/contact) that the primary stake holder corresponds to | false |  |  |
| ssr_history_stakeholders | trueai_stkhld_ranking | Stakeholder ranking | INTEGER |  | The primary stake holder will have a value of 1, the secondary 2 etc. Based on the number of engagements with the contact, in decreasing order. | false |  |  |
| ssr_history_stakeholders | trueai_title_dept | Title Department | STRING | 50 | Contact's standardized department | false |  |  |
| ssr_history_stakeholders | trueai_title_dept_conf | Title Department Confidence | FLOAT |  | Contact's standardized department prediction confidence | false |  |  |
| ssr_history_stakeholders | trueai_title_seniority | Title Seniority | STRING | 50 | Contact's standardized seniority | false |  |  |
| ssr_history_stakeholders | trueai_title_seniority_conf | Title Seniority Confidence | FLOAT |  | Contact's standardized seniority prediction confidence | false |  |  |
