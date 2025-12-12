---
title: open_pipeline
hide_table_of_contents: true
---

This entity represents **open_pipeline** records in the Cien platform.

## Fields

| Entity | Field Name | Display Name | Data Type | Field Length | Description | Deprecated | Field Name Sfdc | Field Name Msdyn |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| open_pipeline | _sys_as_of | As of Date | DATETIME |  | The date of the last data request from the platform | false | SystemModstamp |  |
| open_pipeline | _sys_doc_id | Doc ID | STRING | 50 | Unique record identifier, based on the ID of the opp in the remote system (such as Salesforce ID) and date | false | Id |  |
| open_pipeline | _sys_filt_end_date | Filter End Date | DATE |  | The end date of the record, stripped of time | false |  |  |
| open_pipeline | _sys_filt_start_date | Filter Start Date | DATE |  | The start date of the record, stripped of time | false |  |  |
| open_pipeline | crm_booking_amt | CRM Booking Amount | CURRENCY |  | Opportunity's booking amount in the CRM | false | Amount |  |
| open_pipeline | crm_close_date | CRM Close Date | DATETIME |  | Opportunity's close date in the CRM | false | CloseDate |  |
| open_pipeline | crm_created_on | CRM Created On | DATETIME |  | Opportunity's creation date in the CRM | false | CreatedDate |  |
| open_pipeline | crm_creator_id | CRM Creator ID | STRING | 50 | Opportunity's creator's id in the CRM | false | CreatedById |  |
| open_pipeline | crm_opp_id | CRM Opp ID | STRING | 50 | Opportunity's id in the CRM | false | OpportunityId |  |
| open_pipeline | crm_stage_id | CRM Stage ID | STRING | 50 | Opportunity's stage ID in the CRM | false | StageId |  |
| open_pipeline | crm_stage_name | CRM Stage Name | STRING | 50 | Opportunity's stage name in the CRM | false | StageName |  |
| open_pipeline | crm_stage_num | CRM Stage Num | STRING | 50 | Opportunity's stage number in the CRM | false | Probability |  |
| open_pipeline | cust_bool1 | cust_bool1 | BOOLEAN |  | cust_bool1 | false |  |  |
| open_pipeline | cust_bool2 | cust_bool2 | BOOLEAN |  | cust_bool2 | false |  |  |
| open_pipeline | cust_num1 | cust_num1 | FLOAT |  | cust_num1 | false |  |  |
| open_pipeline | cust_num2 | cust_num2 | FLOAT |  | cust_num2 | false |  |  |
| open_pipeline | cust_num3 | cust_num3 | FLOAT |  | cust_num3 | false |  |  |
| open_pipeline | cust_num4 | cust_num4 | FLOAT |  | cust_num4 | false |  |  |
| open_pipeline | cust_num5 | cust_num5 | FLOAT |  | cust_num5 | false |  |  |
| open_pipeline | cust_num6 | cust_num6 | FLOAT |  | cust_num6 | false |  |  |
| open_pipeline | cust_num7 | cust_num7 | FLOAT |  | cust_num7 | false |  |  |
| open_pipeline | cust_text1 | cust_text1 | STRING | 50 | cust_text1 | false |  |  |
| open_pipeline | cust_text2 | cust_text2 | STRING | 50 | cust_text2 | false |  |  |
| open_pipeline | cust_text3 | cust_text3 | STRING | 50 | cust_text3 | false |  |  |
| open_pipeline | cust_text4 | cust_text4 | STRING | 50 | cust_text4 | false |  |  |
| open_pipeline | cust_text5 | cust_text5 | STRING | 50 | cust_text5 | false |  |  |
| open_pipeline | trueai_act_adj_dur | Activities Adj Duration | FLOAT |  | Activities Adj Duration | false |  |  |
| open_pipeline | trueai_act_adj_dur_rule | Activities Adj Duration Rule | INTEGER |  | Activities Adj Duration Rule | false |  |  |
| open_pipeline | trueai_act_adj_eng_dur | Activities Adj Engaged Duration | FLOAT |  | Activities Adj Engaged Duration | false |  |  |
| open_pipeline | trueai_act_count | Activities Count | INTEGER |  | Activities Count | false |  |  |
| open_pipeline | trueai_act_dur | Activities Duration | FLOAT |  | Activities Duration | false |  |  |
| open_pipeline | trueai_act_eng_count | Activities Engaged Count | INTEGER |  | Activities Engaged Count | false |  |  |
| open_pipeline | trueai_act_eng_dur | Activities Engaged Duration | FLOAT |  | Activities Engaged Duration | false |  |  |
| open_pipeline | trueai_act_last_eng | Activities Last Engaged | DATETIME |  | Activities Last Engaged | false |  |  |
| open_pipeline | trueai_act_type_auto_email_count | Activities Automated Email Count | INTEGER |  | Activities Automated Email Count | false |  |  |
| open_pipeline | trueai_act_type_auto_email_dur | Activities Automated Email Duration | FLOAT |  | Activities Automated Email Duration | false |  |  |
| open_pipeline | trueai_act_type_auto_email_eng_count | Activities Automated Email Engaged Count | INTEGER |  | Activities Automated Email Engaged Count | false |  |  |
| open_pipeline | trueai_act_type_call_count | Activities Call Count | INTEGER |  | Activities Call Count | false |  |  |
| open_pipeline | trueai_act_type_call_dur | Activities Call Duration | FLOAT |  | Activities Call Duration | false |  |  |
| open_pipeline | trueai_act_type_call_eng_count | Activities Call Engaged Count | INTEGER |  | Activities Call Engaged Count | false |  |  |
| open_pipeline | trueai_act_type_email_count | Activities Email Count | INTEGER |  | Activities Email Count | false |  |  |
| open_pipeline | trueai_act_type_email_dur | Activities Email Duration | FLOAT |  | Activities Email Duration | false |  |  |
| open_pipeline | trueai_act_type_email_eng_count | Activities Email Engaged Count | INTEGER |  | Activities Email Engaged Count | false |  |  |
| open_pipeline | trueai_act_type_meeting_count | Activities Meeting Count | INTEGER |  | Activities Meeting Count | false |  |  |
| open_pipeline | trueai_act_type_meeting_dur | Activities Meeting Durationuratin | FLOAT |  | Activities Meeting Durationuratin | false |  |  |
| open_pipeline | trueai_act_type_meeting_eng_count | Activities Meeting Engaged Count | INTEGER |  | Activities Meeting Engaged Count | false |  |  |
| open_pipeline | trueai_act_type_nd_count | Activities Non Determinable Count | INTEGER |  | Activities Non Determinable Count | false |  |  |
| open_pipeline | trueai_act_type_nd_dur | Activities Non Determinable Duration | FLOAT |  | Activities Non Determinable Duration | false |  |  |
| open_pipeline | trueai_act_type_nd_eng_count | Activities Non Determinable Engaged Count | INTEGER |  | Activities Non Determinable Engaged Count | false |  |  |
| open_pipeline | trueai_act_type_no_interaction_count | Activities No Interaction Count | INTEGER |  | Activities No Interaction Count | false |  |  |
| open_pipeline | trueai_act_type_no_interaction_dur | Activities No Interaction Duration | FLOAT |  | Activities No Interaction Duration | false |  |  |
| open_pipeline | trueai_act_type_no_interaction_eng_count | Activities No Interaction Engaged Count | INTEGER |  | Activities No Interaction Engaged Count | false |  |  |
| open_pipeline | trueai_act_type_social_count | Activities Social Count | INTEGER |  | Activities Social Count | false |  |  |
| open_pipeline | trueai_act_type_social_dur | Activities Social Duration | FLOAT |  | Activities Social Duration | false |  |  |
| open_pipeline | trueai_act_type_social_eng_count | Activities Social Engaged Count | INTEGER |  | Activities Social Engaged Count | false |  |  |
| open_pipeline | trueai_attention_value_expected_success_prob | Expected Success Probability | FLOAT |  | Expected Success Probability | false |  |  |
| open_pipeline | trueai_attention_value_score | Attention Value Score | FLOAT |  | Attention Value Score | false |  |  |
| open_pipeline | trueai_attention_value_success_prob | Calibrated Success Probability | FLOAT |  | Calibrated Success Probability | false |  |  |
| open_pipeline | trueai_attention_value_text | Attention Value Text | STRING | 500 | Attention Value Text | false |  |  |
| open_pipeline | trueai_avg_step_sequence | Average Step Sequence Number Across All Opportunities | FLOAT |  | Average Step Sequence Number Across All Opportunities | false |  |  |
| open_pipeline | trueai_booking_amt | Booking Amount | CURRENCY |  | Opportunity's booking amount | false |  |  |
| open_pipeline | trueai_can_be_excluded | Can Be Excluded | BOOLEAN |  | Boolean flag that indicates whether the record is redundant | false |  |  |
| open_pipeline | trueai_current_prob_of_win | Current Probability of Win | FLOAT |  | Current probability of win of the opportunity | false |  |  |
| open_pipeline | trueai_days_in_opp | Days Since Opportunity Open | INTEGER |  | Days Since Opportunity Open | false |  |  |
| open_pipeline | trueai_days_in_stage | Days In Stage | INTEGER |  | Days In Stage | false |  |  |
| open_pipeline | trueai_days_pushed_pulled | Difference In Days Between The Opportunity Expected Close Date and The Actual Close Date | INTEGER |  | Difference In Days Between The Opportunity Expected Close Date and The Actual Close Date | false |  |  |
| open_pipeline | trueai_init_close_date | Initial Close Date of Opp | DATETIME |  | Initial Close Date of Opp | false |  |  |
| open_pipeline | trueai_is_closed | Is Closed | BOOLEAN |  | Boolean flag that indicates whether the opportunity is closed | false |  |  |
| open_pipeline | trueai_is_won | Is Won | BOOLEAN |  | Boolean flag that indicates whether the opportunity is won | false |  |  |
| open_pipeline | trueai_owner_act_capt_lvl | Stage Owner Activity Capture Level | FLOAT |  | Stage Owner Activity Capture Level | false |  |  |
| open_pipeline | trueai_owner_act_capt_lvl_conf | Stage Owner Activity Capture Level Confidence | FLOAT |  | Stage Owner Activity Capture Level Confidence | false |  |  |
| open_pipeline | trueai_owner_id | Owner ID of Opp | STRING | 50 | Owner ID of Opp | false |  |  |
| open_pipeline | trueai_owner_prep_factor | Stage Owner Prep Factor | FLOAT |  | Stage Owner Prep Factor | false |  |  |
| open_pipeline | trueai_pace_score | Pace Score | FLOAT |  | Pace Score | false |  |  |
| open_pipeline | trueai_pace_score_days_in_opp | Pace Score Days Since Opportunity Open | FLOAT |  | Pace Score Days Since Opportunity Open | false |  |  |
| open_pipeline | trueai_pace_score_days_in_stage | Pace Score Days In Stage | FLOAT |  | Days In Stage | false |  |  |
| open_pipeline | trueai_pace_tier | Pace Tier 0-5 | INTEGER |  | Pace Tier 0-5 | false |  |  |
| open_pipeline | trueai_pipeline_name | Pipeline Name | STRING | 150 | Pipeline name of the opportunity | false |  |  |
| open_pipeline | trueai_pred_booking_amt | Predicted Booking Amount | CURRENCY |  | Predicted Booking Amount | false |  |  |
| open_pipeline | trueai_pred_close_date | Predicted Close Date | DATETIME |  | Predicted Close Date | false |  |  |
| open_pipeline | trueai_sort_id | Sortable ID | STRING | 50 | Sortable ID | false |  |  |
| open_pipeline | trueai_stage | Normalized Stage | STRING | 50 | Opportunity's normalized stage | false |  |  |
| open_pipeline | trueai_stage_id | Stage ID | STRING | 150 | Opportunity's stage ID | false |  |  |
| open_pipeline | trueai_stage_name | Stage Name | STRING | 150 | Opportunity's stage name | false |  |  |
| open_pipeline | trueai_step_sequence | Step Sequence | INTEGER |  | Ordinal number based on the position of the step in the sequence | false |  |  |
| open_pipeline | trueai_success_prob | Success Probability of Opp | FLOAT |  | Success Probability of Opp | false |  |  |
