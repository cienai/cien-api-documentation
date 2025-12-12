---
title: ssr_history
---

This entity represents **ssr_history** records in the Cien platform.

## Fields

| Entity | Field Name | Display Name | Data Type | Field Length | Description | Deprecated | Field Name Sfdc | Field Name Msdyn |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ssr_history | _sys_as_of | As of Date | DATETIME |  | The date of the last data request from the platform | false |  |  |
| ssr_history | _sys_doc_id | Doc ID | STRING | 50 | Unique record identifier, based on the ID of the document in the remote system (such as Salesforce ID) | false |  |  |
| ssr_history | _sys_filt_end_date | Filter End Date | DATE |  | The end date of the record, stripped of time | false |  |  |
| ssr_history | _sys_filt_start_date | Filter Start Date | DATE |  | The start date of the record, stripped of time | false |  |  |
| ssr_history | _sys_ssr_id | SSR ID | STRING | 50 | Id of the SSR document the record belongs to | false |  |  |
| ssr_history | account_crm_custom_value_1 | Account CRM Custom Value 1 | STRING | 150 | Custom categorical variable on the account | false |  |  |
| ssr_history | account_crm_custom_value_2 | Account CRM Custom Value 2 | STRING | 150 | Custom categorical variable on the account | false |  |  |
| ssr_history | account_crm_custom_value_3 | Account CRM Custom Value 3 | STRING | 150 | Custom categorical variable on the account | false |  |  |
| ssr_history | entity_account_id | Entity Account ID | STRING | 50 | Account id, if account already exists | false |  |  |
| ssr_history | entity_crm_custom_value_1 | Entity CRM Custom Value 1 | STRING | 150 | Custom categorical variable | false |  |  |
| ssr_history | entity_crm_custom_value_2 | Entity CRM Custom Value 2 | STRING | 150 | Custom categorical variable | false |  |  |
| ssr_history | entity_crm_custom_value_3 | Entity CRM Custom Value 3 | STRING | 150 | Custom categorical variable | false |  |  |
| ssr_history | entity_hat_lead_recycled | Entity Hat Lead Recycled | BOOLEAN |  | Boolean flag that indicates whether the current step is recycled | false |  |  |
| ssr_history | entity_hat_lead_restarted | Entity Hat Lead Restarted | BOOLEAN |  | Boolean flag that indicates whether the current step is restarted | false |  |  |
| ssr_history | entity_hat_lead_winback | Entity Hat Lead Winback | BOOLEAN |  | Boolean flag that indicates whether the current step is winback | false |  |  |
| ssr_history | entity_lead_id | Entity Lead ID | STRING | 50 | Lead id, if the prospecting object is a lead | false |  |  |
| ssr_history | entity_opp_id | Entity Opp ID | STRING | 50 | Opportunity id on selling steps, first opportunity id on steps prior to that, last opportunity id on post-sales support steps | false |  |  |
| ssr_history | entity_primary | Entity Primary | STRING | 50 | Entity of the primary object related to the step | false |  |  |
| ssr_history | entity_primary_crm_complt | Entity Primary CRM Completeness | FLOAT |  | Completeness score of the account based on the CRM data | false |  |  |
| ssr_history | entity_primary_doc_id | Entity Primary Doc ID | STRING | 50 | Unique record identifier of the primary object related to the step, based on the ID of the document in the remote system (such as Salesforce ID) | false |  |  |
| ssr_history | entity_primary_trueai_complt | Entity Primary Completeness | FLOAT |  | Completeness score of the account based on the standardized data | false |  |  |
| ssr_history | entity_qual_bucket | Entity Quality Bucket | STRING | 50 | Quality bucket based on the probability of success | false |  |  |
| ssr_history | entity_qual_bucket_num | Entity Quality Bucket Num | INTEGER |  | Quality bucket expressed as an integer from 1 to 5 based on the probability of success | false |  |  |
| ssr_history | opp_arr_amt | Opp ARR Amount | CURRENCY |  | Opportunity's ARR amount | false |  |  |
| ssr_history | opp_booking_amt | Opp Booking Amount | CURRENCY |  | Opportunity's booking amount | false |  |  |
| ssr_history | opp_crm_pipeline_name | Opp CRM Pipeline Name | STRING | 150 | CRM pipeline name | false |  |  |
| ssr_history | opp_crm_stage | Opp CRM Stage | STRING | 150 | Opportunity's current CRM stage name, present in selling steps | false |  |  |
| ssr_history | opp_crm_type | Opp CRM Type | STRING | 50 | Opportunity's CRM type, present in selling steps | false |  |  |
| ssr_history | opp_cross_sale_amt | Opp Cross-Sale Amount | CURRENCY |  | Opportunity's cross-sale amount | false |  |  |
| ssr_history | opp_downgrade_amt | Opp downgrade Amount | CURRENCY |  | Opportunity's downgrade amount | false |  |  |
| ssr_history | opp_erp | Opp Is ERP | BOOLEAN | 50 | Boolean flag that indicates whether the current step is based on an ERP order | false |  |  |
| ssr_history | opp_existing_customer_selling_combination | Opp Existing Customer Selling Combination | BOOLEAN | 50 | Boolean flag that indicates whether the current step is combination | false |  |  |
| ssr_history | opp_existing_customer_selling_cross_sale | Opp Existing Customer Selling Cross-Sale | BOOLEAN | 50 | Boolean flag that indicates whether the current step is cross-sale | false |  |  |
| ssr_history | opp_existing_customer_selling_downgrade | Opp Existing Customer Selling Downgrade | BOOLEAN | 50 | Boolean flag that indicates whether the current step is downgrade | false |  |  |
| ssr_history | opp_existing_customer_selling_expansion | Opp Existing Customer Selling Expansion | BOOLEAN | 50 | Boolean flag that indicates whether the current step is expansion | false |  |  |
| ssr_history | opp_existing_customer_selling_renewal | Opp Existing Customer Selling Renewal | BOOLEAN | 50 | Boolean flag that indicates whether the current step is renewal | false |  |  |
| ssr_history | opp_expansion_amt | Opp expansion Amount | CURRENCY |  | Opportunity's expansion amount | false |  |  |
| ssr_history | opp_final_stage | Opp Final Stage | STRING | 50 | Opportunity's current normalized stage, present in selling steps | false |  |  |
| ssr_history | opp_initial_amt | Opp Initial Amount | CURRENCY |  | Opportunity's booking amount in the first opportunity history entry, present in selling steps | false |  |  |
| ssr_history | opp_initial_close_date | Opp Initial Close Date | DATETIME |  | Opportunity's close date in the first opportunity history entry, present in selling steps | false |  |  |
| ssr_history | opp_late_date | Opp Late Date | DATETIME |  | Date when the opportunity entered the late stage, present in selling steps | false |  |  |
| ssr_history | opp_lost_crm_stage | Opp Lost Crm Stage | STRING | 50 | Opportunity's last crm stage, before it was lost | false |  |  |
| ssr_history | opp_lost_stage | Opp Lost Stage | STRING | 50 | Opportunity's last normalized stage, before it was lost | false |  |  |
| ssr_history | opp_mid_date | Opp Mid Date | DATETIME |  | Date when the opportunity entered the middle stage, present in selling steps | false |  |  |
| ssr_history | opp_nd_amt | Opp ND Amount | CURRENCY |  | Opportunity's ND amount | false |  |  |
| ssr_history | opp_nnb_amt | Opp NNB Amount | CURRENCY |  | Opportunity's NNB amount | false |  |  |
| ssr_history | opp_one_time_amt | Opp one time Amount | CURRENCY |  | Opportunity's one time amount | false |  |  |
| ssr_history | opp_pipeline_amt | Opp Pipeline Amount | CURRENCY |  | Pipeline amount created in step | false |  |  |
| ssr_history | opp_pipeline_name | Opp Pipeline Name | STRING | 150 | Pipeline name of the opportunity | false |  |  |
| ssr_history | opp_pred_booking_amt | Deprecated field | CURRENCY |  | Deprecated field | true |  |  |
| ssr_history | opp_renewal_amt | Opp renewal Amount | CURRENCY |  | Opportunity's renewal amount | false |  |  |
| ssr_history | opp_sale_type | Opp Sale Type | STRING | 50 | Opportunity's sale type, present in selling steps | false |  |  |
| ssr_history | opp_stage | Opp Stage Name | STRING | 150 | Opportunity's stage name | false |  |  |
| ssr_history | opp_upsell_combination | Deprecated field | BOOLEAN | 50 | Deprecated field | true |  |  |
| ssr_history | opp_upsell_cross_sale | Deprecated field | BOOLEAN | 50 | Deprecated field | true |  |  |
| ssr_history | opp_upsell_downgrade | Deprecated field | BOOLEAN | 50 | Deprecated field | true |  |  |
| ssr_history | opp_upsell_expansion | Deprecated field | BOOLEAN | 50 | Deprecated field | true |  |  |
| ssr_history | opp_upsell_renewal | Deprecated field | BOOLEAN | 50 | Deprecated field | true |  |  |
| ssr_history | opp_won_amt | Opp Won Amount | CURRENCY |  | Opportunity's value when closed, present in closed selling steps | false |  |  |
| ssr_history | step_ae_count_involved | Number of AE users Involved | INTEGER | 50 | Count of account executives (AEs) involved in the step as the owner of activities related to the step. | false |  |  |
| ssr_history | step_am_count_involved | Number of AM users Involved | INTEGER | 50 | Count of account managers (AMs) involved in the step as the owner of activities related to the step. | false |  |  |
| ssr_history | step_days_pushed_pulled | Difference In Days Between The Step Length and Expected Step Length | INTEGER |  | Difference in days between the step length and expected step length | false |  |  |
| ssr_history | step_end_date | Step End Date | DATETIME |  | End date of the step | false |  |  |
| ssr_history | step_end_rule | Step End Rule | INTEGER |  | Rule used to determine the end date of the step | false |  |  |
| ssr_history | step_expected_length_in_days | Expected Step Length In Days | INTEGER |  | Expected number of days from the step start date to end date | false |  |  |
| ssr_history | step_handed_off_to_id | Step Handed Off To ID | STRING | 50 | ID of the users the step was handed off to | false |  |  |
| ssr_history | step_id | Step ID | STRING | 50 | Id of the step, specific to every step name | false |  |  |
| ssr_history | step_length_in_days | Step Length In Days | INTEGER |  | Number of days from the step start date to end date | false |  |  |
| ssr_history | step_mgmt_count_involved | Number of MGMT users Involved | INTEGER | 50 | Count of management (MGMT) users involved in the step as the owner of activities related to the step. | false |  |  |
| ssr_history | step_mgr_act | Step Manager Activities | INTEGER |  | Number of activities performed during the step by a manager | false |  |  |
| ssr_history | step_mgr_involved | Manager Involved | BOOLEAN | 50 | Boolean flag indicating whether a manager was involved in the step, either as the owner of the step or as the owner of activities related to the step. | false |  |  |
| ssr_history | step_mkt_count_involved | Number of MKT users Involved | INTEGER | 50 | Count of marketing (MKT) users involved in the step as the owner of activities related to the step. | false |  |  |
| ssr_history | step_name | Step Name | STRING | 50 | Name of the step | false |  |  |
| ssr_history | step_next_qual_bucket | Next Step Success Prob Quality Bucket | STRING | 50 | Quality bucket of the next step based on the probability of success | false |  |  |
| ssr_history | step_next_qual_bucket_num | Next Step Success Prob Quality Bucket Num | INTEGER |  | Quality bucket of the next step expressed as an integer from 1 to 5 based on the probability of success | false |  |  |
| ssr_history | step_next_success_prob | Step Next Success Prob | FLOAT |  | Probability of successful outcome of the step | false |  |  |
| ssr_history | step_other_count_involved | Number of OTHER users Involved | INTEGER | 50 | Count of other users involved in the step as the owner of activities related to the step. | false |  |  |
| ssr_history | step_outcome | Step Outcome | STRING | 50 | Outcome of the step, if end date present | false |  |  |
| ssr_history | step_outcome_rule | Step Outcome Rule | INTEGER |  | Rule used to determine the outcome of the step, if end date present | false |  |  |
| ssr_history | step_owner_act | Step Owner Activities | FLOAT |  | Number of activities performed by the owner of the step | false |  |  |
| ssr_history | step_owner_act_capt_lvl | Step Owner Activities Capture Level | FLOAT |  | Act_capture_level score of the owner of the step | false |  |  |
| ssr_history | step_owner_dur | Step Owner Duration | FLOAT |  | Duration of activities performed by the owner of the step | false |  |  |
| ssr_history | step_owner_expected_dur | Step Owner Expected Duration | FLOAT |  | Expected duration of activities performed by the owner of the step | false |  |  |
| ssr_history | step_owner_id | Step Owner ID | STRING | 50 | Id of the owner of the step | false |  |  |
| ssr_history | step_owner_prep_factor | Step Owner Prep Factor | FLOAT |  | Prep factor of the owner of the step | false |  |  |
| ssr_history | step_owner_rule | Step Owner Rule | INTEGER |  | Rule used to determine the owner of the step | false |  |  |
| ssr_history | step_owner_user_role | Step Owner Standardized Role | STRING | 50 | User role of the owner of the step | false |  |  |
| ssr_history | step_received_from_id | Step Received From ID | STRING | 50 | ID of the user the step was received from | false |  |  |
| ssr_history | step_sales_engineer_involved | Sales Engineer Involved | BOOLEAN | 50 | Boolean flag indicating whether a sales engineer was involved in the step, either as the owner of the step or as the owner of activities related to the step. | false |  |  |
| ssr_history | step_sdr_count_involved | Number of SDR users Involved | INTEGER | 50 | Count of sales development representatives (SDRs) involved in the step as the owner of activities related to the step. | false |  |  |
| ssr_history | step_sequence | Step Sequence | INTEGER |  | Ordinal number based on the position of the step in the sequence | false |  |  |
| ssr_history | step_start_date | Step Start Date | DATETIME |  | Start date of the step | false |  |  |
| ssr_history | step_sub_type | Step Sub Type | STRING | 50 | Sub type of the step | false |  |  |
| ssr_history | step_success | Step Success | BOOLEAN |  | Boolean flag that indicates whether the outcome of the step was successful | false |  |  |
| ssr_history | step_success_prob | Step Success Prob | FLOAT |  | Probability of successful outcome of the step | false |  |  |
| ssr_history | step_success_prob_factors | Deprecated field | OBJECT | 500000 | Deprecated field | true |  |  |
| ssr_history | step_users_tot | Step Users Total | INTEGER |  | Number of users involved in the step, based on activities and ownership | false |  |  |
| ssr_history | stkhlds_all_act_count | Stakeholders All Activities Count | INTEGER |  | Number of activities performed during the step | false |  |  |
| ssr_history | stkhlds_all_act_eng_count | Stakeholders All Activities Engaged Count | INTEGER |  | Number of engaged activities performed during the step | false |  |  |
| ssr_history | stkhlds_all_act_type_auto_email_count | Stakeholders All Automated Email Count | INTEGER |  | Number of automated emails performed during the step | false |  |  |
| ssr_history | stkhlds_all_act_type_auto_email_eng_count | Stakeholders All Automated Email Engaged Count | INTEGER |  | Number of engaged automated emails performed during the step | false |  |  |
| ssr_history | stkhlds_all_act_type_call_count | Stakeholders All Phone Call Count | INTEGER |  | Number of calls performed during the step | false |  |  |
| ssr_history | stkhlds_all_act_type_call_eng_count | Stakeholders All Phone Call Engaged Count | INTEGER |  | Number of engaged calls performed during the step | false |  |  |
| ssr_history | stkhlds_all_act_type_email_count | Stakeholders All Email Count | INTEGER |  | Number of emails performed during the step | false |  |  |
| ssr_history | stkhlds_all_act_type_email_eng_count | Stakeholders All Email Engaged Count | INTEGER |  | Number of engaged emails performed during the step | false |  |  |
| ssr_history | stkhlds_all_act_type_meeting_count | Stakeholders All Meeting Count | INTEGER |  | Number of meetings performed during the step | false |  |  |
| ssr_history | stkhlds_all_act_type_meeting_eng_count | Stakeholders All Meeting Engaged Count | INTEGER |  | Number of engaged meetings performed during the step | false |  |  |
| ssr_history | stkhlds_all_act_type_nd_count | Stakeholders All Non Determinable Count | INTEGER |  | Number of activities with unknown type performed during the step | false |  |  |
| ssr_history | stkhlds_all_act_type_nd_eng_count | Stakeholders All Non Determinable Engaged Count | INTEGER |  | Number of engaged activities with unknown type performed during the step | false |  |  |
| ssr_history | stkhlds_all_act_type_no_interaction_count | Stakeholders All No Interaction Count | INTEGER |  | Number of activities with no customer interaction performed during the step | false |  |  |
| ssr_history | stkhlds_all_act_type_no_interaction_eng_count | Stakeholders All No Interaction Engaged Count | INTEGER |  | Number of engaged activities with no customer interaction performed during the step | false |  |  |
| ssr_history | stkhlds_all_act_type_social_count | Stakeholders All Social Count | INTEGER |  | Number of social media activities performed during the step | false |  |  |
| ssr_history | stkhlds_all_act_type_social_eng_count | Stakeholders All Social Engaged Count | INTEGER |  | Number of engaged social media activities performed during the step | false |  |  |
| ssr_history | stkhlds_all_adj_dur | Stakeholders All Adj Duration | FLOAT |  | Adjusted duration of activities performed during the step | false |  |  |
| ssr_history | stkhlds_all_adj_dur_conf | Stakeholders All Adj Duration Confidence | FLOAT |  | Confidence in the adjusted duration of activities performed during the step | false |  |  |
| ssr_history | stkhlds_all_adj_dur_prior_step | Stakeholders All Adj Duration For The Prior Step | FLOAT |  | Adjusted duration of activities performed during the prior step | false |  |  |
| ssr_history | stkhlds_all_adj_dur_rule | Stakeholders All Adj Duration Rule | INTEGER |  | Rule used to determine the adjusted duration of activities performed during the step | false |  |  |
| ssr_history | stkhlds_all_adj_eng_dur | Stakeholders All Adj Engaged Duration | FLOAT |  | Adjusted duration of engaged activities performed during the step | false |  |  |
| ssr_history | stkhlds_all_contacts_count | Stakeholders All Contacts Count | INTEGER |  | Number of contacts involved in the step | false |  |  |
| ssr_history | stkhlds_all_dur | Stakeholders All Duration | FLOAT |  | Duration of activities performed during the step | false |  |  |
| ssr_history | stkhlds_all_dur_eng | Stakeholders All Duration Engaged | FLOAT |  | Duration of activities performed during the step | false |  |  |
| ssr_history | stkhlds_all_first_act | Stakeholders All First Activities | DATETIME |  | Date when the first activity was performed during the step | false |  |  |
| ssr_history | stkhlds_all_first_eng | Stakeholders All First Engagement | DATETIME |  | Date when the first engaged activity was performed during the step | false |  |  |
| ssr_history | stkhlds_all_last_act | Stakeholders All Last Activity | DATETIME |  | Date when the last activity was performed during the step | false |  |  |
| ssr_history | stkhlds_all_last_eng | Stakeholders All Last Engagement | DATETIME |  | Date when the last engaged activity was performed during the step | false |  |  |
| ssr_history | stkhlds_all_max_title_seniority | Stakeholders All Max Title Seniority | STRING | 50 | Highest seniority amongst all contacts of the step | false |  |  |
| ssr_history | stkhlds_all_most_common_title_dept | Stakeholders All Most Common Title Department | STRING | 50 | Most common department amongst all contacts of the step | false |  |  |
| ssr_history | stkhlds_all_most_common_title_seniority | Stakeholders All Most Common Title Seniority | STRING | 50 | Most common seniority amongst all contacts of the step | false |  |  |
| ssr_history | stkhlds_all_unique_title_depts | Stakeholders All Unique Title Depts | INTEGER |  | Unique departments amongst all contacts of the step | false |  |  |
| ssr_history | stkhlds_all_unique_title_seniorities | Stakeholders All Unique Title Seniorities | INTEGER |  | Unique seniority in all contacts of the step | false |  |  |
| ssr_history | stkhlds_primary_contact_act_count | Stakeholders Primary Contact Activities Count | INTEGER |  | Number of activities performed by the primary stakeholder during the step | false |  |  |
| ssr_history | stkhlds_primary_contact_act_eng_count | Stakeholders Primary Contact Activities Engaged Count | INTEGER |  | Number of engaged activities performed by the primary stakeholder during the step | false |  |  |
| ssr_history | stkhlds_primary_contact_dur | Stakeholders Primary Contact Duration | FLOAT |  | Duration of activities performed by the primary contact of the step during the step | false |  |  |
| ssr_history | stkhlds_primary_contact_eng_dur | Stakeholders Primary Contact Engaged Duration | FLOAT |  | Duration of activities performed by the primary contact of the step during the step | false |  |  |
| ssr_history | stkhlds_primary_contact_first_act | Stakeholders Primary Contact First Activities | DATETIME |  | Date when the first activity by the primary contact was performed during the step | false |  |  |
| ssr_history | stkhlds_primary_contact_first_eng | Stakeholders Primary Contact First Engagement | DATETIME |  | Date when the first engaged activity by the primary contact was performed during the step | false |  |  |
| ssr_history | stkhlds_primary_contact_last_act | Stakeholders Primary Contact Last Activity | DATETIME |  | Date when the last activity by the primary contact was performed during the step | false |  |  |
| ssr_history | stkhlds_primary_contact_last_eng | Stakeholders Primary Contact Last Engagement | DATETIME |  | Date when the last engaged activity by the primary contact was performed during the step | false |  |  |
| ssr_history | stkhlds_primary_contact_title_dept | Stakeholders Primary Contact Title Department | STRING | 50 | Department of the primary contact of the step | false |  |  |
| ssr_history | stkhlds_primary_contact_title_seniority | Stakeholders Primary Contact Title Seniority | STRING | 50 | Seniority of the primary contact of the step | false |  |  |
| ssr_history | stkhlds_primary_entity_id | Stakeholders Primary Entity ID | STRING | 50 | Id of the primary contact of the step | false |  |  |
| ssr_history | stkhlds_primary_entity_type | Stakeholders Primary Contact Is Lead | STRING | 50 | Entity of the primary contact of the step: lead or contact | false |  |  |
| ssr_history | stkhlds_secondary_contact_act_count | Stakeholders Secondary Contact Activities Count | INTEGER |  | Number of activities performed by the secondary stakeholder during the step | false |  |  |
| ssr_history | stkhlds_secondary_contact_act_eng_count | Stakeholders Secondary Contact Activities Engaged Count | INTEGER |  | Number of engaged activities performed by the secondary stakeholder during the step | false |  |  |
| ssr_history | stkhlds_secondary_contact_dur | Stakeholders Secondary Contact Duration | FLOAT |  | Duration of activities performed by the secondary contact of the step during the step | false |  |  |
| ssr_history | stkhlds_secondary_contact_eng_dur | Stakeholders Secondary Contact Engaged Duration | FLOAT |  | Duration of activities performed by the secondary contact of the step during the step | false |  |  |
| ssr_history | stkhlds_secondary_contact_first_act | Stakeholders Secondary Contact First Activities | DATETIME |  | Date when the first activity by the secondary contact was performed during the step | false |  |  |
| ssr_history | stkhlds_secondary_contact_first_eng | Stakeholders Secondary Contact First Engagement | DATETIME |  | Date when the first engaged activity by the secondary contact was performed during the step | false |  |  |
| ssr_history | stkhlds_secondary_contact_last_act | Stakeholders Secondary Contact Last Activity | DATETIME |  | Date when the last activity by the secondary contact was performed during the step | false |  |  |
| ssr_history | stkhlds_secondary_contact_last_eng | Stakeholders Secondary Contact Last Engagement | DATETIME |  | Date when the last engaged activity by the secondary contact was performed during the step | false |  |  |
| ssr_history | stkhlds_secondary_contact_title_dept | Stakeholders Secondary Contact Title Department | STRING | 50 | Department of the secondary contact of the step | false |  |  |
| ssr_history | stkhlds_secondary_contact_title_seniority | Stakeholders Secondary Contact Title Seniority | STRING | 50 | Seniority of the secondary contact of the step | false |  |  |
| ssr_history | stkhlds_secondary_entity_id | Stakeholders Secondary Entity ID | STRING | 50 | Id of the secondary contact of the step | false |  |  |
| ssr_history | stkhlds_secondary_entity_type | Stakeholders Secondary Contact Is Lead | STRING | 50 | Entity of the secondary contact of the step: lead or contact | false |  |  |
| ssr_history | vi_value_created | Value Created | CURRENCY |  | Value created during the step | false |  |  |
| ssr_history | vi_value_delivered | Value Delivered | CURRENCY |  | Value delivered at the end of the step | false |  |  |
| ssr_history | vi_value_repeat | Value Repeat | CURRENCY |  | Repeat value of the step | false |  |  |
