---
title: users_activities
hide_table_of_contents: true
---

This entity represents **users_activities** records in the Cien platform.

## Fields

| Entity | Field Name | Display Name | Data Type | Field Length | Description | Deprecated | Field Name Sfdc | Field Name Msdyn |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| users_activities | _sys_as_of | As of Date | DATETIME |  | The date of the last data request from the platform | false |  |  |
| users_activities | _sys_co_id | Company ID | STRING | 50 | The Cien company ID | false |  |  |
| users_activities | _sys_doc_id | Doc ID | STRING | 50 | Unique record identifier, based on the ID of the document in the remote system (such as Salesforce ID) | false |  |  |
| users_activities | _sys_filt_end_date | Filter End Date | DATE |  | The last date of the month that the record applies to (for past months) or the last date of aggregated data (for the present month), stripped of time | false |  |  |
| users_activities | _sys_filt_start_date | Filter Start Date | DATE |  | The first date of the month that the records applies to, stripped of time | false |  |  |
| users_activities | _sys_is_active | Is Active | BOOLEAN |  | Boolean flag that indicates whether the record was set to inactive in the remote system | false |  |  |
| users_activities | _sys_is_deleted | Is Deleted | BOOLEAN |  | Boolean flag that indicates whether the record was set to deleted in the remote system | false |  |  |
| users_activities | _sys_user_id | User ID | STRING | 50 | The ID of the document in the remote system (such as Salesforce ID) | false |  |  |
| users_activities | trueai_adj_dur | Activities Total Adj Duration | FLOAT |  | Activities Total Adj Duration | false |  |  |
| users_activities | trueai_adj_dur_rule | Activities Total Adj Duration Rule | FLOAT |  | Activities Total Adj Duration Rule | false |  |  |
| users_activities | trueai_adj_eng_dur | Activities Engaged Adj Duration | FLOAT |  | Activities Engaged Adj Duration | false |  |  |
| users_activities | trueai_count | Activities Total Count | INTEGER |  | Activities Total Count | false |  |  |
| users_activities | trueai_dur | Activities Total Duration | INTEGER |  | Activities Total Duration | false |  |  |
| users_activities | trueai_end_date | As Of Date in UTC | DATE |  | The date of the last data request from the platform in UTC | false |  |  |
| users_activities | trueai_eng_count | Activities Engaged Count | INTEGER |  | Activities Engaged Count | false |  |  |
| users_activities | trueai_eng_dur | Activities Engaged Duration | FLOAT |  | Activities Engaged Duration | false |  |  |
| users_activities | trueai_eng_unique_ssr_ids | Activities Engaged Unique Ids | INTEGER |  | Activities Engaged Unique Ids | false |  |  |
| users_activities | trueai_owner_act_capt_lvl | Activities Capture Level | FLOAT |  | Activities Capture Level | false |  |  |
| users_activities | trueai_owner_act_capt_lvl_conf | Activities Capture Level Confidence | FLOAT |  | Activities Capture Level Confidence | false |  |  |
| users_activities | trueai_owner_prep_factor | Prep factor | FLOAT |  | Prep factor | false |  |  |
| users_activities | trueai_purpose_exist_cust_selling_count | Activities Existing Customer Selling Count | INTEGER |  | Activities Existing Customer Selling Count | false |  |  |
| users_activities | trueai_purpose_exist_cust_selling_dur | Activities Existing Customer Selling Duration | FLOAT |  | Activities Existing Customer Selling Duration | false |  |  |
| users_activities | trueai_purpose_exist_cust_selling_eng_count | Activities Existing Customer Selling Engaged Count | INTEGER |  | Activities Existing Customer Selling Engaged Count | false |  |  |
| users_activities | trueai_purpose_exist_cust_selling_eng_dur | Activities Existing Customer Selling Engaged Duration | FLOAT |  | Activities Existing Customer Selling Engaged Duration | false |  |  |
| users_activities | trueai_purpose_exist_cust_selling_eng_unique_ids | Activities Existing Customer Selling Engaged Unique Ids | INTEGER |  | Activities Existing Customer Selling Engaged Unique Ids | false |  |  |
| users_activities | trueai_purpose_exist_cust_selling_unique_ids | Activities Existing Customer Selling Unique Ids | INTEGER |  | Activities Existing Customer Selling Unique Ids | false |  |  |
| users_activities | trueai_purpose_internal_count | Activities Internal Count | INTEGER |  | Activities Internal Count | false |  |  |
| users_activities | trueai_purpose_internal_dur | Activities Internal Duration | FLOAT |  | Activities Internal Duration | false |  |  |
| users_activities | trueai_purpose_internal_eng_count | Activities Internal Engaged Count | INTEGER |  | Activities Internal Engaged Count | false |  |  |
| users_activities | trueai_purpose_internal_eng_dur | Activities Internal Engaged Duration | FLOAT |  | Activities Internal Engaged Duration | false |  |  |
| users_activities | trueai_purpose_internal_eng_unique_ids | Activities Internal Engaged Unique Ids | INTEGER |  | Activities Internal Engaged Unique Ids | false |  |  |
| users_activities | trueai_purpose_internal_unique_ids | Activities Internal Unique Ids | INTEGER |  | Activities Internal Unique Ids | false |  |  |
| users_activities | trueai_purpose_new_logo_count | Activities New Logo Count | INTEGER |  | Activities New Logo Count | false |  |  |
| users_activities | trueai_purpose_new_logo_dur | Activities New Logo Duration | FLOAT |  | Activities New Logo Duration | false |  |  |
| users_activities | trueai_purpose_new_logo_eng_count | Activities New Logo Engaged Count | INTEGER |  | Activities New Logo Engaged Count | false |  |  |
| users_activities | trueai_purpose_new_logo_eng_dur | Activities New Logo Engaged Duration | FLOAT |  | Activities New Logo Engaged Duration | false |  |  |
| users_activities | trueai_purpose_new_logo_eng_unique_ids | Activities New Logo Engaged Unique Ids | INTEGER |  | Activities New Logo Engaged Unique Ids | false |  |  |
| users_activities | trueai_purpose_new_logo_unique_ids | Activities New Logo Unique Ids | INTEGER |  | Activities New Logo Unique Ids | false |  |  |
| users_activities | trueai_purpose_post_sales_count | Activities Post Selling Count | INTEGER |  | Activities Post Selling Count | false |  |  |
| users_activities | trueai_purpose_post_sales_dur | Activities Post Selling Duration | FLOAT |  | Activities Post Selling Duration | false |  |  |
| users_activities | trueai_purpose_post_sales_eng_count | Activities Post Selling Engaged Count | INTEGER |  | Activities Post Selling Engaged Count | false |  |  |
| users_activities | trueai_purpose_post_sales_eng_dur | Activities Post Selling Engaged Duration | FLOAT |  | Activities Post Selling Engaged Duration | false |  |  |
| users_activities | trueai_purpose_post_sales_eng_unique_ids | Activities Post Selling Engaged Unique Ids | INTEGER |  | Activities Post Selling Engaged Unique Ids | false |  |  |
| users_activities | trueai_purpose_post_sales_unique_ids | Activities Post Selling Unique Ids | INTEGER |  | Activities Post Selling Unique Ids | false |  |  |
| users_activities | trueai_purpose_prospecting_count | Activities Prospecting Count | INTEGER |  | Activities Prospecting Count | false |  |  |
| users_activities | trueai_purpose_prospecting_dur | Activities Prospecting Duration | FLOAT |  | Activities Prospecting Duration | false |  |  |
| users_activities | trueai_purpose_prospecting_eng_count | Activities Prospecting Engaged Count | INTEGER |  | Activities Prospecting Engaged Count | false |  |  |
| users_activities | trueai_purpose_prospecting_eng_dur | Activities Prospecting Engaged Duration | FLOAT |  | Activities Prospecting Engaged Duration | false |  |  |
| users_activities | trueai_purpose_prospecting_eng_unique_ids | Activities Prospecting Engaged Unique Ids | INTEGER |  | Activities Prospecting Engaged Unique Ids | false |  |  |
| users_activities | trueai_purpose_prospecting_unique_ids | Activities Prospecting Unique Ids | INTEGER |  | Activities Prospecting Unique Ids | false |  |  |
| users_activities | trueai_purpose_upselling_count | Deprecated field | INTEGER |  | Deprecated field | true |  |  |
| users_activities | trueai_purpose_upselling_dur | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_activities | trueai_purpose_upselling_eng_count | Deprecated field | INTEGER |  | Deprecated field | true |  |  |
| users_activities | trueai_purpose_upselling_eng_dur | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_activities | trueai_purpose_upselling_eng_unique_ids | Deprecated field | INTEGER |  | Deprecated field | true |  |  |
| users_activities | trueai_purpose_upselling_unique_ids | Deprecated field | INTEGER |  | Deprecated field | true |  |  |
| users_activities | trueai_type_auto_email_count | Activities Automated Email Count | INTEGER |  | Activities Automated Email Count | false |  |  |
| users_activities | trueai_type_auto_email_dur | Activities Automated Email Duration | FLOAT |  | Activities Automated Email Duration | false |  |  |
| users_activities | trueai_type_auto_email_eng_count | Activities Automated Email Engaged Count | INTEGER |  | Activities Automated Email Engaged Count | false |  |  |
| users_activities | trueai_type_auto_email_eng_dur | Activities Automated Email Engaged Duration | FLOAT |  | Activities Automated Email Engaged Duration | false |  |  |
| users_activities | trueai_type_auto_email_eng_unique_ids | Activities Automated Email Engaged Unique Ids | INTEGER |  | Activities Automated Email Engaged Unique Ids | false |  |  |
| users_activities | trueai_type_auto_email_purpose_exist_cust_selling_count | Activities Automated Email Existing Customer Selling Count | INTEGER |  | Activities Automated Email Existing Customer Selling Count | false |  |  |
| users_activities | trueai_type_auto_email_purpose_exist_cust_selling_eng_count | Activities Automated Email Existing Customer Selling Engaged Count | INTEGER |  | Activities Automated Email Existing Customer Selling Engaged Count | false |  |  |
| users_activities | trueai_type_auto_email_purpose_internal_count | Activities Automated Email Internal Count | INTEGER |  | Activities Automated Email Internal Count | false |  |  |
| users_activities | trueai_type_auto_email_purpose_internal_eng_count | Activities Automated Email Internal Engaged Count | INTEGER |  | Activities Automated Email Internal Engaged Count | false |  |  |
| users_activities | trueai_type_auto_email_purpose_new_logo_count | Activities Automated Email New Logo Count | INTEGER |  | Activities Automated Email New Logo Count | false |  |  |
| users_activities | trueai_type_auto_email_purpose_new_logo_eng_count | Activities Automated Email New Logo Engaged Count | INTEGER |  | Activities Automated Email New Logo Engaged Count | false |  |  |
| users_activities | trueai_type_auto_email_purpose_post_sales_count | Activities Automated Email Post Selling Count | INTEGER |  | Activities Automated Email Post Selling Count | false |  |  |
| users_activities | trueai_type_auto_email_purpose_post_sales_eng_count | Activities Automated Email Post Selling Engaged Count | INTEGER |  | Activities Automated Email Post Selling Engaged Count | false |  |  |
| users_activities | trueai_type_auto_email_purpose_prospecting_count | Activities Automated Email Prospecting Count | INTEGER |  | Activities Automated Email Prospecting Count | false |  |  |
| users_activities | trueai_type_auto_email_purpose_prospecting_eng_count | Activities Automated Email Prospecting Engaged Count | INTEGER |  | Activities Automated Email Prospecting Engaged Count | false |  |  |
| users_activities | trueai_type_auto_email_purpose_upselling_count | Deprecated field | INTEGER |  | Deprecated field | true |  |  |
| users_activities | trueai_type_auto_email_purpose_upselling_eng_count | Deprecated field | INTEGER |  | Deprecated field | true |  |  |
| users_activities | trueai_type_auto_email_unique_ids | Activities Automated Email Unique Ids | INTEGER |  | Activities Automated Email Unique Ids | false |  |  |
| users_activities | trueai_type_call_count | Activities Call Count | INTEGER |  | Activities Call Count | false |  |  |
| users_activities | trueai_type_call_dur | Activities Call Duration | FLOAT |  | Activities Call Duration | false |  |  |
| users_activities | trueai_type_call_eng_count | Activities Call Engaged Count | INTEGER |  | Activities Call Engaged Count | false |  |  |
| users_activities | trueai_type_call_eng_dur | Activities Call Engaged Duration | FLOAT |  | Activities Call Engaged Duration | false |  |  |
| users_activities | trueai_type_call_eng_unique_ids | Activities Call Engaged Unique Ids | INTEGER |  | Activities Call Engaged Unique Ids | false |  |  |
| users_activities | trueai_type_call_purpose_exist_cust_selling_count | Activities Call Existing Customer Selling Count | INTEGER |  | Activities Call Existing Customer Selling Count | false |  |  |
| users_activities | trueai_type_call_purpose_exist_cust_selling_eng_count | Activities Call Existing Customer Selling Engaged Count | INTEGER |  | Activities Call Existing Customer Selling Engaged Count | false |  |  |
| users_activities | trueai_type_call_purpose_internal_count | Activities Call Internal Count | INTEGER |  | Activities Call Internal Count | false |  |  |
| users_activities | trueai_type_call_purpose_internal_eng_count | Activities Call Internal Engaged Count | INTEGER |  | Activities Call Internal Engaged Count | false |  |  |
| users_activities | trueai_type_call_purpose_new_logo_count | Activities Call New Logo Count | INTEGER |  | Activities Call New Logo Count | false |  |  |
| users_activities | trueai_type_call_purpose_new_logo_eng_count | Activities Call New Logo Engaged Count | INTEGER |  | Activities Call New Logo Engaged Count | false |  |  |
| users_activities | trueai_type_call_purpose_post_sales_count | Activities Call Post Selling Count | INTEGER |  | Activities Call Post Selling Count | false |  |  |
| users_activities | trueai_type_call_purpose_post_sales_eng_count | Activities Call Post Selling Engaged Count | INTEGER |  | Activities Call Post Selling Engaged Count | false |  |  |
| users_activities | trueai_type_call_purpose_prospecting_count | Activities Call ProspectingCount | INTEGER |  | Activities Call ProspectingCount | false |  |  |
| users_activities | trueai_type_call_purpose_prospecting_eng_count | Activities Call Prospecting Engaged Count | INTEGER |  | Activities Call Prospecting Engaged Count | false |  |  |
| users_activities | trueai_type_call_purpose_upselling_count | Deprecated field | INTEGER |  | Deprecated field | true |  |  |
| users_activities | trueai_type_call_purpose_upselling_eng_count | Deprecated field | INTEGER |  | Deprecated field | true |  |  |
| users_activities | trueai_type_call_unique_ids | Activities Call Unique Ids | INTEGER |  | Activities Call Unique Ids | false |  |  |
| users_activities | trueai_type_email_count | Activities Email Count | INTEGER |  | Activities Email Count | false |  |  |
| users_activities | trueai_type_email_dur | Activities Email Duration | FLOAT |  | Activities Email Duration | false |  |  |
| users_activities | trueai_type_email_eng_count | Activities Email Engaged Count | INTEGER |  | Activities Email Engaged Count | false |  |  |
| users_activities | trueai_type_email_eng_dur | Activities Email Engaged Duration | FLOAT |  | Activities Email Engaged Duration | false |  |  |
| users_activities | trueai_type_email_eng_unique_ids | Activities Email Engaged Unique Ids | INTEGER |  | Activities Email Engaged Unique Ids | false |  |  |
| users_activities | trueai_type_email_purpose_exist_cust_selling_count | Activities Email Existing Customer Selling Count | INTEGER |  | Activities Email Existing Customer Selling Count | false |  |  |
| users_activities | trueai_type_email_purpose_exist_cust_selling_eng_count | Activities Email Existing Customer Selling Engaged Count | INTEGER |  | Activities Email Existing Customer Selling Engaged Count | false |  |  |
| users_activities | trueai_type_email_purpose_internal_count | Activities Email Internal Count | INTEGER |  | Activities Email Internal Count | false |  |  |
| users_activities | trueai_type_email_purpose_internal_eng_count | Activities Email Internal Engaged Count | INTEGER |  | Activities Email Internal Engaged Count | false |  |  |
| users_activities | trueai_type_email_purpose_new_logo_count | Activities Email New Logo Count | INTEGER |  | Activities Email New Logo Count | false |  |  |
| users_activities | trueai_type_email_purpose_new_logo_eng_count | Activities Email New Logo Engaged Count | INTEGER |  | Activities Email New Logo Engaged Count | false |  |  |
| users_activities | trueai_type_email_purpose_post_sales_count | Activities Email Post Selling Count | INTEGER |  | Activities Email Post Selling Count | false |  |  |
| users_activities | trueai_type_email_purpose_post_sales_eng_count | Activities Email Post Selling Engaged Count | INTEGER |  | Activities Email Post Selling Engaged Count | false |  |  |
| users_activities | trueai_type_email_purpose_prospecting_count | Activities Call Prospecting Count | INTEGER |  | Activities Call Prospecting Count | false |  |  |
| users_activities | trueai_type_email_purpose_prospecting_eng_count | Activities Call Prospecting Engaged Count | INTEGER |  | Activities Call Prospecting Engaged Count | false |  |  |
| users_activities | trueai_type_email_purpose_upselling_count | Deprecated field | INTEGER |  | Deprecated field | true |  |  |
| users_activities | trueai_type_email_purpose_upselling_eng_count | Deprecated field | INTEGER |  | Deprecated field | true |  |  |
| users_activities | trueai_type_email_unique_ids | Activities Email Unique Ids | INTEGER |  | Activities Email Unique Ids | false |  |  |
| users_activities | trueai_type_meeting_count | Activities Meeting Count | INTEGER |  | Activities Meeting Count | false |  |  |
| users_activities | trueai_type_meeting_dur | Activities Meeting Duration | FLOAT |  | Activities Meeting Duration | false |  |  |
| users_activities | trueai_type_meeting_eng_count | Activities Meeting Engaged Count | INTEGER |  | Activities Meeting Engaged Count | false |  |  |
| users_activities | trueai_type_meeting_eng_dur | Activities Meeting Engaged Duration | FLOAT |  | Activities Meeting Engaged Duration | false |  |  |
| users_activities | trueai_type_meeting_eng_unique_ids | Activities Meeting Engaged Unique Ids | INTEGER |  | Activities Meeting Engaged Unique Ids | false |  |  |
| users_activities | trueai_type_meeting_purpose_exist_cust_selling_count | Activities Meeting Existing Customer Selling Count | INTEGER |  | Activities Meeting Existing Customer Selling Count | false |  |  |
| users_activities | trueai_type_meeting_purpose_exist_cust_selling_eng_count | Activities Meeting Existing Customer Selling Engaged Count | INTEGER |  | Activities Meeting Existing Customer Selling Engaged Count | false |  |  |
| users_activities | trueai_type_meeting_purpose_internal_count | Activities Meeting Internal Count | INTEGER |  | Activities Meeting Internal Count | false |  |  |
| users_activities | trueai_type_meeting_purpose_internal_eng_count | Activities Meeting Internal Engaged Count | INTEGER |  | Activities Meeting Internal Engaged Count | false |  |  |
| users_activities | trueai_type_meeting_purpose_new_logo_count | Activities Meeting New Logo Count | INTEGER |  | Activities Meeting New Logo Count | false |  |  |
| users_activities | trueai_type_meeting_purpose_new_logo_eng_count | Activities Meeting New Logo Engaged Count | INTEGER |  | Activities Meeting New Logo Engaged Count | false |  |  |
| users_activities | trueai_type_meeting_purpose_post_sales_count | Activities Meeting Post Selling Count | INTEGER |  | Activities Meeting Post Selling Count | false |  |  |
| users_activities | trueai_type_meeting_purpose_post_sales_eng_count | Activities Meeting Post Selling Engaged Count | INTEGER |  | Activities Meeting Post Selling Engaged Count | false |  |  |
| users_activities | trueai_type_meeting_purpose_prospecting_count | Activities Meeting Prospecting Count | INTEGER |  | Activities Meeting Prospecting Count | false |  |  |
| users_activities | trueai_type_meeting_purpose_prospecting_eng_count | Activities Meeting Prospecting Engaged Count | INTEGER |  | Activities Meeting Prospecting Engaged Count | false |  |  |
| users_activities | trueai_type_meeting_purpose_upselling_count | Deprecated field | INTEGER |  | Deprecated field | true |  |  |
| users_activities | trueai_type_meeting_purpose_upselling_eng_count | Deprecated field | INTEGER |  | Deprecated field | true |  |  |
| users_activities | trueai_type_meeting_unique_ids | Activities Meeting Unique Ids | INTEGER |  | Activities Meeting Unique Ids | false |  |  |
| users_activities | trueai_type_nd_count | Activities Non Determinable Count | INTEGER |  | Activities Non Determinable Count | false |  |  |
| users_activities | trueai_type_nd_dur | Activities Non Determinable Duration | FLOAT |  | Activities Non Determinable Duration | false |  |  |
| users_activities | trueai_type_nd_eng_count | Activities Non Determinable Engaged Count | INTEGER |  | Activities Non Determinable Engaged Count | false |  |  |
| users_activities | trueai_type_nd_eng_dur | Activities Non Determinable Engaged Duration | FLOAT |  | Activities Non Determinable Engaged Duration | false |  |  |
| users_activities | trueai_type_nd_eng_unique_ids | Activities Non Determinable Engaged Unique Ids | INTEGER |  | Activities Non Determinable Engaged Unique Ids | false |  |  |
| users_activities | trueai_type_nd_purpose_exist_cust_selling_count | Activities Non Determinable Existing Customer Selling Count | INTEGER |  | Activities Non Determinable Existing Customer Selling Count | false |  |  |
| users_activities | trueai_type_nd_purpose_exist_cust_selling_eng_count | Activities Non Determinable Existing Customer Selling Engaged Count | INTEGER |  | Activities Non Determinable Existing Customer Selling Engaged Count | false |  |  |
| users_activities | trueai_type_nd_purpose_internal_count | Activities Non Determinable Internal Count | INTEGER |  | Activities Non Determinable Internal Count | false |  |  |
| users_activities | trueai_type_nd_purpose_internal_eng_count | Activities Non Determinable Internal Engaged Count | INTEGER |  | Activities Non Determinable Internal Engaged Count | false |  |  |
| users_activities | trueai_type_nd_purpose_new_logo_count | Activities Non Determinable New Logo Count | INTEGER |  | Activities Non Determinable New Logo Count | false |  |  |
| users_activities | trueai_type_nd_purpose_new_logo_eng_count | Activities Non Determinable New Logo Engaged Count | INTEGER |  | Activities Non Determinable New Logo Engaged Count | false |  |  |
| users_activities | trueai_type_nd_purpose_post_sales_count | Activities Non Determinable Post Selling Count | INTEGER |  | Activities Non Determinable Post Selling Count | false |  |  |
| users_activities | trueai_type_nd_purpose_post_sales_eng_count | Activities Non Determinable Post Selling Engaged Count | INTEGER |  | Activities Non Determinable Post Selling Engaged Count | false |  |  |
| users_activities | trueai_type_nd_purpose_prospecting_count | Activities Non Determinable Prospecting Count | INTEGER |  | Activities Non Determinable Prospecting Count | false |  |  |
| users_activities | trueai_type_nd_purpose_prospecting_eng_count | Activities Non Determinable Prospecting Engaged Count | INTEGER |  | Activities Non Determinable Prospecting Engaged Count | false |  |  |
| users_activities | trueai_type_nd_purpose_upselling_count | Deprecated field | INTEGER |  | Deprecated field | true |  |  |
| users_activities | trueai_type_nd_purpose_upselling_eng_count | Deprecated field | INTEGER |  | Deprecated field | true |  |  |
| users_activities | trueai_type_nd_unique_ids | Activities Non Determinable Unique Ids | INTEGER |  | Activities Non Determinable Unique Ids | false |  |  |
| users_activities | trueai_type_no_interaction_count | Activities No Interaction Count | INTEGER |  | Activities No Interaction Count | false |  |  |
| users_activities | trueai_type_no_interaction_dur | Activities No Interaction Duration | FLOAT |  | Activities No Interaction Duration | false |  |  |
| users_activities | trueai_type_no_interaction_eng_count | Activities No Interaction Engaged Count | INTEGER |  | Activities No Interaction Engaged Count | false |  |  |
| users_activities | trueai_type_no_interaction_eng_dur | Activities No Interaction Engaged Duration | FLOAT |  | Activities No Interaction Engaged Duration | false |  |  |
| users_activities | trueai_type_no_interaction_eng_unique_ids | Activities No Interaction Engaged Unique Ids | INTEGER |  | Activities No Interaction Engaged Unique Ids | false |  |  |
| users_activities | trueai_type_no_interaction_purpose_exist_cust_selling_count | Activities No Interaction Existing Customer Selling Count | INTEGER |  | Activities No Interaction Existing Customer Selling Count | false |  |  |
| users_activities | trueai_type_no_interaction_purpose_exist_cust_selling_eng_count | Activities No Interaction Existing Customer Selling Engaged Count | INTEGER |  | Activities No Interaction Existing Customer Selling Engaged Count | false |  |  |
| users_activities | trueai_type_no_interaction_purpose_internal_count | Activities No Interaction Internal Count | INTEGER |  | Activities No Interaction Internal Count | false |  |  |
| users_activities | trueai_type_no_interaction_purpose_internal_eng_count | Activities No Interaction Internal Engaged Count | INTEGER |  | Activities No Interaction Internal Engaged Count | false |  |  |
| users_activities | trueai_type_no_interaction_purpose_new_logo_count | Activities No Interaction New Logo Count | INTEGER |  | Activities No Interaction New Logo Count | false |  |  |
| users_activities | trueai_type_no_interaction_purpose_new_logo_eng_count | Activities No Interaction New Logo Engaged Count | INTEGER |  | Activities No Interaction New Logo Engaged Count | false |  |  |
| users_activities | trueai_type_no_interaction_purpose_post_sales_count | Activities No Interaction Post Selling Count | INTEGER |  | Activities No Interaction Post Selling Count | false |  |  |
| users_activities | trueai_type_no_interaction_purpose_post_sales_eng_count | Activities No Interaction Post Selling Engaged Count | INTEGER |  | Activities No Interaction Post Selling Engaged Count | false |  |  |
| users_activities | trueai_type_no_interaction_purpose_prospecting_count | Activities No Interaction Prospecting Count | INTEGER |  | Activities No Interaction Prospecting Count | false |  |  |
| users_activities | trueai_type_no_interaction_purpose_prospecting_eng_count | Activities No Interaction Prospecting Engaged Count | INTEGER |  | Activities No Interaction Prospecting Engaged Count | false |  |  |
| users_activities | trueai_type_no_interaction_purpose_upselling_count | Deprecated field | INTEGER |  | Deprecated field | true |  |  |
| users_activities | trueai_type_no_interaction_purpose_upselling_eng_count | Deprecated field | INTEGER |  | Deprecated field | true |  |  |
| users_activities | trueai_type_no_interaction_unique_ids | Activities No Interaction Unique Ids | INTEGER |  | Activities No Interaction Unique Ids | false |  |  |
| users_activities | trueai_type_social_count | Activities Social Count | INTEGER |  | Activities Social Count | false |  |  |
| users_activities | trueai_type_social_dur | Activities Social Duration | FLOAT |  | Activities Social Duration | false |  |  |
| users_activities | trueai_type_social_eng_count | Activities Social Engaged Count | INTEGER |  | Activities Social Engaged Count | false |  |  |
| users_activities | trueai_type_social_eng_dur | Activities Social Engaged Duration | FLOAT |  | Activities Social Engaged Duration | false |  |  |
| users_activities | trueai_type_social_eng_unique_ids | Activities Social Engaged Unique Ids | INTEGER |  | Activities Social Engaged Unique Ids | false |  |  |
| users_activities | trueai_type_social_purpose_exist_cust_selling_count | Activities Social Existing Customer Selling Count | INTEGER |  | Activities Social Existing Customer Selling Count | false |  |  |
| users_activities | trueai_type_social_purpose_exist_cust_selling_eng_count | Activities Social Existing Customer Selling Engaged Count | INTEGER |  | Activities Social Existing Customer Selling Engaged Count | false |  |  |
| users_activities | trueai_type_social_purpose_internal_count | Activities Social Internal Count | INTEGER |  | Activities Social Internal Count | false |  |  |
| users_activities | trueai_type_social_purpose_internal_eng_count | Activities Social Internal Engaged Count | INTEGER |  | Activities Social Internal Engaged Count | false |  |  |
| users_activities | trueai_type_social_purpose_new_logo_count | Activities Social New Logo Count | INTEGER |  | Activities Social New Logo Count | false |  |  |
| users_activities | trueai_type_social_purpose_new_logo_eng_count | Activities Social New Logo Engaged Count | INTEGER |  | Activities Social New Logo Engaged Count | false |  |  |
| users_activities | trueai_type_social_purpose_post_sales_count | Activities Social Post Selling Count | INTEGER |  | Activities Social Post Selling Count | false |  |  |
| users_activities | trueai_type_social_purpose_post_sales_eng_count | Activities Social Post Selling Engaged Count | INTEGER |  | Activities Social Post Selling Engaged Count | false |  |  |
| users_activities | trueai_type_social_purpose_prospecting_count | Activities Social Prospecting Count | INTEGER |  | Activities Social Prospecting Count | false |  |  |
| users_activities | trueai_type_social_purpose_prospecting_eng_count | Activities Social Prospecting Engaged Count | INTEGER |  | Activities Social Prospecting Engaged Count | false |  |  |
| users_activities | trueai_type_social_purpose_upselling_count | Deprecated field | INTEGER |  | Deprecated field | true |  |  |
| users_activities | trueai_type_social_purpose_upselling_eng_count | Deprecated field | INTEGER |  | Deprecated field | true |  |  |
| users_activities | trueai_type_social_unique_ids | Activities Social Unique Ids | INTEGER |  | Activities Social Unique Ids | false |  |  |
| users_activities | trueai_unique_ssr_ids | Activities Total Unique Ids | INTEGER |  | Activities Total Unique Ids | false |  |  |
| users_activities | trueai_user_role | Standardized Role | STRING | 150 | User's standardized and combined role | false |  |  |
| users_activities | trueai_user_role_alias | Standardized Role Aliased | STRING | 150 | User's standardized and combined role aliased | false |  |  |
| users_activities | trueai_user_role_dept | Standardized Role Function | STRING | 50 | User's function derived from the standardized and combined role | false |  |  |
| users_activities | trueai_user_role_function | Standardized Role Department | STRING | 50 | User's department derived from the standardized and combined role | false |  |  |
