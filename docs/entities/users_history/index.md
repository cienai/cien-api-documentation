---
title: users_history
hide_table_of_contents: true
---

This entity represents **users_history** records in the Cien platform.

## Fields

| Entity | Field Name | Display Name | Data Type | Field Length | Description | Deprecated | Field Name Sfdc | Field Name Msdyn |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| users_history | _sys_as_of | As of Date | DATETIME |  | The last date of the month that the record applies to (for past months) or the last date of aggregated data (for the present month) | false |  |  |
| users_history | _sys_co_id | Company ID | STRING | 50 | The Cien company ID | false |  |  |
| users_history | _sys_doc_id | Doc ID | STRING | 50 | Unique record identifier, based on the ID of the document in the remote system (such as Salesforce ID) and date | false |  |  |
| users_history | _sys_filt_end_date | Filter End Date | DATE |  | The last date of the month that the record applies to (for past months) or the last date of aggregated data (for the present month), stripped of time | false |  |  |
| users_history | _sys_filt_start_date | Filter Start Date | DATE |  | The first date of the month that the records applies to, stripped of time | false |  |  |
| users_history | _sys_is_active | Is Active | BOOLEAN |  | Boolean flag that indicates whether the record was set to inactive in the remote system | false |  |  |
| users_history | _sys_is_deleted | Is Deleted | BOOLEAN |  | Boolean flag that indicates whether the record was set to deleted in the remote system | false |  |  |
| users_history | _sys_user_id | User ID | STRING | 50 | The ID of the document in the remote system (such as Salesforce ID) | false |  |  |
| users_history | ci_act_capt_lvl | Activities Capture Level | FLOAT |  | User's act_capture_level score in the period | false |  |  |
| users_history | ci_act_capt_lvl_conf | Activities Capture Level Confidence | FLOAT |  | User's act_capture_level score confidence in the period | false |  |  |
| users_history | ci_act_capt_lvl_pi_exist_cust_expect_owner_dur | Activities Capture Level Peek Inside Existing Customer Selling Expected Owner Duration | FLOAT |  | Expected duration of activities performed on existing customer selling steps that completed in the period | false |  |  |
| users_history | ci_act_capt_lvl_pi_exist_cust_expect_owner_dur_closed_lost | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | ci_act_capt_lvl_pi_exist_cust_expect_owner_dur_closed_won | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | ci_act_capt_lvl_pi_exist_cust_owner_act | Activities Capture Level Peek Inside Existing Customer Selling Owner Activities | INTEGER |  | Number of owner activities performed on existing customer selling steps that completed in the period | false |  |  |
| users_history | ci_act_capt_lvl_pi_exist_cust_owner_act_closed_lost | Deprecated field | INTEGER |  | Deprecated field | true |  |  |
| users_history | ci_act_capt_lvl_pi_exist_cust_owner_act_closed_won | Deprecated field | INTEGER |  | Deprecated field | true |  |  |
| users_history | ci_act_capt_lvl_pi_exist_cust_owner_dur | Activities Capture Level Peek Inside Existing Customer Selling Owner Duration | FLOAT |  | Duration of activities performed on existing customer selling steps that completed in the period | false |  |  |
| users_history | ci_act_capt_lvl_pi_exist_cust_owner_dur_closed_lost | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | ci_act_capt_lvl_pi_exist_cust_owner_dur_closed_won | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | ci_act_capt_lvl_pi_exist_cust_steps | Activities Capture Level Peek Inside Existing Customer Selling Steps | INTEGER |  | Number of existing customer selling steps that completed in the period | false |  |  |
| users_history | ci_act_capt_lvl_pi_exist_cust_steps_closed_lost | Deprecated field | INTEGER |  | Deprecated field | true |  |  |
| users_history | ci_act_capt_lvl_pi_exist_cust_steps_closed_won | Deprecated field | INTEGER |  | Deprecated field | true |  |  |
| users_history | ci_act_capt_lvl_pi_new_logo_expected_owner_dur | Activities Capture Level Peek Inside New Logo Expected Owner Duration | FLOAT |  | Expected duration of activities performed on new logo selling steps that completed in the period | false |  |  |
| users_history | ci_act_capt_lvl_pi_new_logo_expected_owner_dur_closed_lost | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | ci_act_capt_lvl_pi_new_logo_expected_owner_dur_closed_won | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | ci_act_capt_lvl_pi_new_logo_owner_act | Activities Capture Level Peek Inside New Logo Owner Activities | INTEGER |  | Number of owner activities performed on new logo selling steps that completed in the period | false |  |  |
| users_history | ci_act_capt_lvl_pi_new_logo_owner_act_closed_lost | Deprecated field | INTEGER |  | Deprecated field | true |  |  |
| users_history | ci_act_capt_lvl_pi_new_logo_owner_act_closed_won | Deprecated field | INTEGER |  | Deprecated field | true |  |  |
| users_history | ci_act_capt_lvl_pi_new_logo_owner_dur | Activities Capture Level Peek Inside New Logo Owner Duration | FLOAT |  | Duration of activities performed on new logo selling steps that completed in the period | false |  |  |
| users_history | ci_act_capt_lvl_pi_new_logo_owner_dur_closed_lost | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | ci_act_capt_lvl_pi_new_logo_owner_dur_closed_won | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | ci_act_capt_lvl_pi_new_logo_steps | Activities Capture Level Peek Inside New Logo Steps | INTEGER |  | Number of new logo selling steps that completed in the period | false |  |  |
| users_history | ci_act_capt_lvl_pi_new_logo_steps_closed_lost | Deprecated field | INTEGER |  | Deprecated field | true |  |  |
| users_history | ci_act_capt_lvl_pi_new_logo_steps_closed_won | Deprecated field | INTEGER |  | Deprecated field | true |  |  |
| users_history | ci_act_capt_lvl_pi_post_sales_expect_owner_dur | Activities Capture Level Peek Inside Post Sales Expected Owner Duration | FLOAT |  | Expected duration of activities performed on post-sales support steps that completed in the period | false |  |  |
| users_history | ci_act_capt_lvl_pi_post_sales_expect_owner_dur_churned | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | ci_act_capt_lvl_pi_post_sales_expect_owner_dur_sell_start | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | ci_act_capt_lvl_pi_post_sales_expect_owner_dur_upsell_start | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | ci_act_capt_lvl_pi_post_sales_owner_act | Activities Capture Level Peek Inside Post Sales Owner Activities | INTEGER |  | Number of owner activities performed on post-sales support steps that completed in the period | false |  |  |
| users_history | ci_act_capt_lvl_pi_post_sales_owner_act_churned | Deprecated field | INTEGER |  | Deprecated field | true |  |  |
| users_history | ci_act_capt_lvl_pi_post_sales_owner_act_sell_start | Deprecated field | INTEGER |  | Deprecated field | true |  |  |
| users_history | ci_act_capt_lvl_pi_post_sales_owner_act_upsell_start | Deprecated field | INTEGER |  | Deprecated field | true |  |  |
| users_history | ci_act_capt_lvl_pi_post_sales_owner_dur | Activities Capture Level Peek Inside Post Sales Owner Duration | FLOAT |  | Duration of activities performed on post-sales support steps that completed in the period | false |  |  |
| users_history | ci_act_capt_lvl_pi_post_sales_owner_dur_churned | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | ci_act_capt_lvl_pi_post_sales_owner_dur_sell_start | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | ci_act_capt_lvl_pi_post_sales_owner_dur_upsell_start | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | ci_act_capt_lvl_pi_post_sales_steps | Activities Capture Level Peek Inside Post Sales Steps | INTEGER |  | Number of post-sales support steps that completed in the period | false |  |  |
| users_history | ci_act_capt_lvl_pi_post_sales_steps_churned | Deprecated field | INTEGER |  | Deprecated field | true |  |  |
| users_history | ci_act_capt_lvl_pi_post_sales_steps_sell_start | Deprecated field | INTEGER |  | Deprecated field | true |  |  |
| users_history | ci_act_capt_lvl_pi_post_sales_steps_upsell_start | Deprecated field | INTEGER |  | Deprecated field | true |  |  |
| users_history | ci_act_capt_lvl_pi_prospecting_expect_owner_dur | Activities Capture Level Peek Inside Prospecting Expected Owner Duration | FLOAT |  | Expected duration of activities performed on prospecting steps that completed in the period | false |  |  |
| users_history | ci_act_capt_lvl_pi_prospecting_expect_owner_dur_abandoned | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | ci_act_capt_lvl_pi_prospecting_expect_owner_dur_converted | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | ci_act_capt_lvl_pi_prospecting_expect_owner_dur_disqual | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | ci_act_capt_lvl_pi_prospecting_owner_act | Activities Capture Level Peek Inside Prospecting Owner Activities | INTEGER |  | Number of owner activities performed on prospecting steps that completed in the period | false |  |  |
| users_history | ci_act_capt_lvl_pi_prospecting_owner_act_abandoned | Deprecated field | INTEGER |  | Deprecated field | true |  |  |
| users_history | ci_act_capt_lvl_pi_prospecting_owner_act_converted | Deprecated field | INTEGER |  | Deprecated field | true |  |  |
| users_history | ci_act_capt_lvl_pi_prospecting_owner_act_disqual | Deprecated field | INTEGER |  | Deprecated field | true |  |  |
| users_history | ci_act_capt_lvl_pi_prospecting_owner_dur | Activities Capture Level Peek Inside Prospecting Owner Duration | FLOAT |  | Duration of activities performed on prospecting steps that completed in the period | false |  |  |
| users_history | ci_act_capt_lvl_pi_prospecting_owner_dur_abandoned | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | ci_act_capt_lvl_pi_prospecting_owner_dur_converted | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | ci_act_capt_lvl_pi_prospecting_owner_dur_disqual | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | ci_act_capt_lvl_pi_prospecting_steps | Activities Capture Level Peek Inside Prospecting Steps | INTEGER |  | Number of prospecting steps that completed in the period | false |  |  |
| users_history | ci_act_capt_lvl_pi_prospecting_steps_abandoned | Deprecated field | INTEGER |  | Deprecated field | true |  |  |
| users_history | ci_act_capt_lvl_pi_prospecting_steps_converted | Deprecated field | INTEGER |  | Deprecated field | true |  |  |
| users_history | ci_act_capt_lvl_pi_prospecting_steps_disqual | Deprecated field | INTEGER |  | Deprecated field | true |  |  |
| users_history | ci_act_capt_lvl_pi_timeliness | Activities Capture Level Peek Inside Timeliness | FLOAT |  | User's timeliness score in the period | false |  |  |
| users_history | ci_act_capt_lvl_pi_tot_expect_owner_dur | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | ci_act_capt_lvl_pi_tot_owner_act | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | ci_act_capt_lvl_pi_tot_owner_dur | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | ci_act_capt_lvl_pi_tot_steps | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | ci_act_capt_lvl_pi_upselling_expect_owner_dur | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | ci_act_capt_lvl_pi_upselling_expect_owner_dur_closed_lost | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | ci_act_capt_lvl_pi_upselling_expect_owner_dur_closed_won | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | ci_act_capt_lvl_pi_upselling_owner_act | Deprecated field | INTEGER |  | Deprecated field | true |  |  |
| users_history | ci_act_capt_lvl_pi_upselling_owner_act_closed_lost | Deprecated field | INTEGER |  | Deprecated field | true |  |  |
| users_history | ci_act_capt_lvl_pi_upselling_owner_act_closed_won | Deprecated field | INTEGER |  | Deprecated field | true |  |  |
| users_history | ci_act_capt_lvl_pi_upselling_owner_dur | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | ci_act_capt_lvl_pi_upselling_owner_dur_closed_lost | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | ci_act_capt_lvl_pi_upselling_owner_dur_closed_won | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | ci_act_capt_lvl_pi_upselling_steps | Deprecated field | INTEGER |  | Deprecated field | true |  |  |
| users_history | ci_act_capt_lvl_pi_upselling_steps_closed_lost | Deprecated field | INTEGER |  | Deprecated field | true |  |  |
| users_history | ci_act_capt_lvl_pi_upselling_steps_closed_won | Deprecated field | INTEGER |  | Deprecated field | true |  |  |
| users_history | ci_act_capt_lvl_raw | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | ci_perf_qtly_avg_bookings_peers | Perf Qtly Avg. Bookings Peers | CURRENCY |  | Average quarterly sum of the booking amounts of opportunities won by the user's peers in the period | false |  |  |
| users_history | ci_perf_qtly_avg_pipeline_peers | Perf Qtly Avg. Pipeline Peers | CURRENCY |  | Average quarterly sum of the booking amounts of opportunities created by the user's peers in the period | false |  |  |
| users_history | ci_perf_qtly_bookings_user | Perf Qtly Bookings User | CURRENCY |  | Quarterly sum of the booking amounts of opportunities won by the user in the period | false |  |  |
| users_history | ci_perf_qtly_performance_peer_count | Perf Qtly Performance Tier Num Peers | INTEGER |  | Number of peers the user was compared to when determining the performance tier | false |  |  |
| users_history | ci_perf_qtly_performance_tier | Perf Qtly Performance Tier | STRING | 50 | User's performance tier expressed as "underperformer", "overperformer" or "performer", based on their quarterly sum of booking amounts of won opportunities compared to their peers | false |  |  |
| users_history | ci_perf_qtly_performance_tier_conf | Perf Qtly Performance Tier Confidence | FLOAT |  | User's performance tier confidence | false |  |  |
| users_history | ci_perf_qtly_performance_tier_num | Perf Qtly Performance Tier Num | INTEGER |  | User's performance tier expressed as an integer from 1 to 3, based on their quarterly sum of booking amounts of won opportunities compared to their peers | false |  |  |
| users_history | ci_perf_qtly_pipeline_user | Perf Qtly Pipeline User | CURRENCY |  | Quarterly sum of the booking amounts of opportunities created by the user in the period | false |  |  |
| users_history | ci_perf_ramping_status | Perf Ramping Status | STRING | 50 | User's ramping status indicating whether the user's tenure is lower than 6 months | false |  |  |
| users_history | ci_sb_close_ability | Deprecated field | STRING | 50 | Deprecated field | true |  |  |
| users_history | ci_sb_close_ability_conf | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | ci_sb_close_ability_num | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | ci_sb_closing_ability | Deprecated field | FLOAT |  | Deprecated field | false |  |  |
| users_history | ci_sb_closing_ability_actual_vs_predicted | Closing Ability Raw Actual Vs Predicted Ratio | FLOAT |  | The ratio between actual and expected success rate. Over 1 indicates an overperformance, lower than 1 indicates underperformance. | false |  |  |
| users_history | ci_sb_closing_ability_actual_vs_predicted_norm | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | ci_sb_closing_ability_actual_vs_predicted_smooth | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | ci_sb_closing_ability_conf | Closing Ability Confidence | FLOAT |  | The confidence value based on the number of actual samples vs. number of expected samples, adjusted with an exponent factor. | false |  |  |
| users_history | ci_sb_closing_ability_conf_expected_sample_count | Deprecated field | INTEGER |  | Deprecated field | true |  |  |
| users_history | ci_sb_closing_ability_num | Closing Ability Score | FLOAT |  | Closing ability final score as compared to peers. | false |  |  |
| users_history | ci_sb_closing_ability_opps_closed_count | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | ci_sb_closing_ability_opps_closed_prob_sum | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | ci_sb_closing_ability_opps_won_count | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | ci_sb_closing_ability_peer_actual_vs_pred_ratio_derived_max | Closing Ability Peer Actual Vs Predicted Ratio Max | FLOAT |  | Two standard deviations above the mean of the average vs expected success rate of the peer group. | false |  |  |
| users_history | ci_sb_closing_ability_peer_actual_vs_pred_ratio_derived_min | Closing Ability Peer Actual Vs Predicted Ratio Min | FLOAT |  | Two standard deviations below the mean of the average vs expected success rate of the peer group. | false |  |  |
| users_history | ci_sb_closing_ability_peer_actual_vs_predicted | Closing Ability Peer Actual Vs Predicted Mean | FLOAT |  | Mean of the average vs expected success rate of the peer group. | false |  |  |
| users_history | ci_sb_closing_ability_peer_opps_closed_count | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | ci_sb_closing_ability_peer_opps_closed_prob | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | ci_sb_closing_ability_peer_opps_won_count | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | ci_sb_closing_ability_tier | Closing Ability Score Tier | STRING | 50 | Closing ability final score tier as compared to peers. | false |  |  |
| users_history | ci_sb_deal_maxing | Deprecated field | FLOAT |  | Deprecated field | false |  |  |
| users_history | ci_sb_deal_maxing_actual_vs_predicted | Deal Maximizing Raw Actual Vs Predicted Ratio | FLOAT |  | The ratio between actual and expected success rate. Over 1 indicates an overperformance, lower than 1 indicates underperformance. | false |  |  |
| users_history | ci_sb_deal_maxing_conf | Deal Maximizing Confidence | FLOAT |  | The confidence value based on the number of actual samples vs. number of expected samples, adjusted with an exponent factor. | false |  |  |
| users_history | ci_sb_deal_maxing_num | Deal Maximizing Score | FLOAT |  | Deal maximizing final score as compared to peers. | false |  |  |
| users_history | ci_sb_deal_maxing_peer_actual_vs_pred_ratio_derived_max | Deal Maximizing Peer Actual Vs Predicted Ratio Max | FLOAT |  | Two standard deviations above the mean of the average vs expected success rate of the peer group. | false |  |  |
| users_history | ci_sb_deal_maxing_peer_actual_vs_pred_ratio_derived_min | Deal Maximizing Peer Actual Vs Predicted Ratio Min | FLOAT |  | Two standard deviations below the mean of the average vs expected success rate of the peer group. | false |  |  |
| users_history | ci_sb_deal_maxing_peer_actual_vs_predicted | Deal Maximizing Peer Actual Vs Predicted Mean | FLOAT |  | Mean of the average vs expected success rate of the peer group. | false |  |  |
| users_history | ci_sb_deal_maxing_tier | Deal Maximizing Score Tier | STRING | 50 | Deal maximizing final score tier as compared to peers. | false |  |  |
| users_history | ci_sb_disc_skills | Deprecated field | STRING | 50 | Deprecated field | true |  |  |
| users_history | ci_sb_disc_skills_conf | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | ci_sb_disc_skills_num | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | ci_sb_discov_skills | Deprecated field | FLOAT |  | Deprecated field | false |  |  |
| users_history | ci_sb_discov_skills_actual_vs_predicted | Discovery Skills Raw Actual Vs Predicted Ratio | FLOAT |  | The ratio between actual and expected success rate. Over 1 indicates an overperformance, lower than 1 indicates underperformance. | false |  |  |
| users_history | ci_sb_discov_skills_actual_vs_predicted_norm | Deprecated field | FLOAT |  | Deprecated field | false |  |  |
| users_history | ci_sb_discov_skills_actual_vs_predicted_smooth | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | ci_sb_discov_skills_conf | Discovery Skills Confidence | FLOAT |  | The confidence value based on the number of actual samples vs. number of expected samples, adjusted with an exponent factor. | false |  |  |
| users_history | ci_sb_discov_skills_conf_expected_sample_count | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | ci_sb_discov_skills_hatleads_closed_count | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | ci_sb_discov_skills_hatleads_closed_prob_sum | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | ci_sb_discov_skills_hatleads_converted_count | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | ci_sb_discov_skills_num | Discovery Skills Score | FLOAT |  | Discovery skills final score as compared to peers. | false |  |  |
| users_history | ci_sb_discov_skills_peer_actual_vs_pred_ratio_derived_max | Discovery Skills Peer Actual Vs Predicted Ratio Max | FLOAT |  | Two standard deviations above the mean of the average vs expected success rate of the peer group. | false |  |  |
| users_history | ci_sb_discov_skills_peer_actual_vs_pred_ratio_derived_min | Discovery Skills Peer Actual Vs Predicted Ratio Min | FLOAT |  | Two standard deviations below the mean of the average vs expected success rate of the peer group. | false |  |  |
| users_history | ci_sb_discov_skills_peer_actual_vs_predicted | Discovery Skills Peer Actual Vs Predicted Mean | FLOAT |  | Mean of the average vs expected success rate of the peer group. | false |  |  |
| users_history | ci_sb_discov_skills_peer_actual_vs_predicted_ratio_max | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | ci_sb_discov_skills_peer_actual_vs_predicted_ratio_min | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | ci_sb_discov_skills_peer_hatleads_closed_count | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | ci_sb_discov_skills_peer_hatleads_closed_prob_sum | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | ci_sb_discov_skills_peer_hatleads_converted_count | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | ci_sb_discov_skills_peer_post_sales_steps | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | ci_sb_discov_skills_peer_post_sales_steps_prob | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | ci_sb_discov_skills_peer_post_sales_steps_sell_start | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | ci_sb_discov_skills_peer_post_sales_steps_upsell_start | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | ci_sb_discov_skills_peer_recycled_steps | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | ci_sb_discov_skills_peer_recycled_steps_converted | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | ci_sb_discov_skills_peer_recycled_steps_prob | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | ci_sb_discov_skills_post_sales_steps | Deprecated field | INTEGER |  | Deprecated field | true |  |  |
| users_history | ci_sb_discov_skills_post_sales_steps_prob | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | ci_sb_discov_skills_post_sales_steps_sell_start | Deprecated field | INTEGER |  | Deprecated field | true |  |  |
| users_history | ci_sb_discov_skills_post_sales_steps_upsell_start | Deprecated field | INTEGER |  | Deprecated field | true |  |  |
| users_history | ci_sb_discov_skills_recycled_steps | Deprecated field | INTEGER |  | Deprecated field | true |  |  |
| users_history | ci_sb_discov_skills_recycled_steps_converted | Deprecated field | INTEGER |  | Deprecated field | true |  |  |
| users_history | ci_sb_discov_skills_recycled_steps_prob | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | ci_sb_discov_skills_tier | Discovery Skills Score Tier | STRING | 50 | Discovery skills final score tier as compared to peers. | false |  |  |
| users_history | ci_sb_engmt_ability | Deprecated field | FLOAT |  | Deprecated field | false |  |  |
| users_history | ci_sb_engmt_ability_actual_vs_predicted | Engagement Ability Raw Actual Vs Predicted Ratio | FLOAT |  | The ratio between actual and expected success rate. Over 1 indicates an overperformance, lower than 1 indicates underperformance. | false |  |  |
| users_history | ci_sb_engmt_ability_conf | Engagement Ability Confidence | FLOAT |  | The confidence value based on the number of actual samples vs. number of expected samples, adjusted with an exponent factor. | false |  |  |
| users_history | ci_sb_engmt_ability_num | Engagement Ability Score | FLOAT |  | Engagement ability final score as compared to peers. | false |  |  |
| users_history | ci_sb_engmt_ability_peer_actual_vs_pred_ratio_derived_max | Engagement Ability Peer Actual Vs Predicted Ratio Max | FLOAT |  | Two standard deviations above the mean of the average vs expected success rate of the peer group. | false |  |  |
| users_history | ci_sb_engmt_ability_peer_actual_vs_pred_ratio_derived_min | Engagement Ability Peer Actual Vs Predicted Ratio Min | FLOAT |  | Two standard deviations below the mean of the average vs expected success rate of the peer group. | false |  |  |
| users_history | ci_sb_engmt_ability_peer_actual_vs_predicted | Engagement Ability Peer Actual Vs Predicted Mean | FLOAT |  | Mean of the average vs expected success rate of the peer group. | false |  |  |
| users_history | ci_sb_engmt_ability_tier | Engagement Ability Score Tier | STRING | 50 | Engagement ability final score tier as compared to peers. | false |  |  |
| users_history | ci_sb_time_mgmt | Deprecated field | STRING | 50 | Deprecated field | true |  |  |
| users_history | ci_sb_time_mgmt_conf | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | ci_sb_time_mgmt_num | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | ci_sb_work_effort | Deprecated field | FLOAT |  | Deprecated field | false |  |  |
| users_history | ci_sb_work_effort_actual_vs_predicted | Work Effort Raw Actual Vs Predicted Ratio | FLOAT |  | The ratio between actual and expected success rate. Over 1 indicates an overperformance, lower than 1 indicates underperformance. | false |  |  |
| users_history | ci_sb_work_effort_conf | Work Effort Confidence | FLOAT |  | The confidence value based on the number of actual samples vs. number of expected samples, adjusted with an exponent factor. | false |  |  |
| users_history | ci_sb_work_effort_num | Work Effort Score | FLOAT |  | Work effort final score as compared to peers. | false |  |  |
| users_history | ci_sb_work_effort_peer_actual_vs_pred_ratio_derived_max | Work Effort Peer Actual Vs Predicted Ratio Max | FLOAT |  | Two standard deviations above the mean of the average vs expected success rate of the peer group. | false |  |  |
| users_history | ci_sb_work_effort_peer_actual_vs_pred_ratio_derived_min | Work Effort Peer Actual Vs Predicted Ratio Min | FLOAT |  | Two standard deviations below the mean of the average vs expected success rate of the peer group. | false |  |  |
| users_history | ci_sb_work_effort_peer_actual_vs_predicted | Work Effort Peer Actual Vs Predicted Mean | FLOAT |  | Mean of the average vs expected success rate of the peer group. | false |  |  |
| users_history | ci_sb_work_effort_tier | Work Effort Score Tier | STRING | 50 | Work effort final score tier as compared to peers. | false |  |  |
| users_history | ci_time_alloc_act_capt_lvl_adjustment | Time Allocation Activities Capture Level Adjustment | FLOAT |  | act_capture_level adjustment factor to account for the user's act_capture_level score | false |  |  |
| users_history | ci_time_alloc_conf | Time Allocation Confidence | FLOAT |  | User's time allocation values confidence in the period | false |  |  |
| users_history | ci_time_alloc_existing_customer_selling | Time Allocation Existing Customer Selling | FLOAT |  | Average number of weekly hours the user spent on existing customer selling activities in the period | false |  |  |
| users_history | ci_time_alloc_existing_customer_selling_dur | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | ci_time_alloc_existing_customer_selling_eng | Time Allocation Existing Customer Selling Engaged | FLOAT |  | Average number of weekly hours the user spent on engaged existing customer selling activities in the period | false |  |  |
| users_history | ci_time_alloc_existing_customer_selling_eng_dur | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | ci_time_alloc_internal | Time Allocation Internal | FLOAT |  | Average number of weekly hours the user spent on internal activities in the period | false |  |  |
| users_history | ci_time_alloc_internal_dur | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | ci_time_alloc_internal_eng | Time Allocation Internal Engaged | FLOAT |  | Average number of weekly hours the user spent on engaged internal activities in the period | false |  |  |
| users_history | ci_time_alloc_internal_eng_dur | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | ci_time_alloc_month_to_week_adjustment | Time Allocation Month to Week Adjustment | FLOAT |  | Week adjustment factor to convert monthly to weekly | false |  |  |
| users_history | ci_time_alloc_new_logo | Time Allocation New Logo | FLOAT |  | Average number of weekly hours the user spent on new logo selling activities in the period | false |  |  |
| users_history | ci_time_alloc_new_logo_dur | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | ci_time_alloc_new_logo_eng | Time Allocation New Logo Engaged | FLOAT |  | Average number of weekly hours the user spent on engaged new logo selling activities in the period | false |  |  |
| users_history | ci_time_alloc_new_logo_eng_dur | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | ci_time_alloc_post_sales | Time Allocation Post Sales | FLOAT |  | Average number of weekly hours the user spent on post-sales support activities in the period | false |  |  |
| users_history | ci_time_alloc_post_sales_dur | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | ci_time_alloc_post_sales_eng | Time Allocation Post Sales Engaged | FLOAT |  | Average number of weekly hours the user spent on engaged post-sales support activities in the period | false |  |  |
| users_history | ci_time_alloc_post_sales_eng_dur | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | ci_time_alloc_potential | Time Allocation Potential Hours in Month | FLOAT |  | Potential number of hours a user can put in during a given month | false |  |  |
| users_history | ci_time_alloc_prep_adjustment | Time Allocation Prep Adjustment | FLOAT |  | Prep adjustment factor to account for the preparation time needed apart from sales related activities | false |  |  |
| users_history | ci_time_alloc_prospecting | Time Allocation Prospecting | FLOAT |  | Average number of weekly hours the user spent on prospecting activities in the period | false |  |  |
| users_history | ci_time_alloc_prospecting_dur | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | ci_time_alloc_prospecting_eng | Time Allocation Prospecting Engaged | FLOAT |  | Average number of weekly hours the user spent on engaged prospecting activities in the period | false |  |  |
| users_history | ci_time_alloc_prospecting_eng_dur | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | ci_time_alloc_tot | Time Allocation Total | FLOAT |  | Average number of weekly hours the user spent on activities in the period | false |  |  |
| users_history | ci_time_alloc_tot_dur | Time Allocation Total Duration | FLOAT |  | Duration of the activities the user performed in the period | false |  |  |
| users_history | ci_time_alloc_tot_eng | Time Allocation Total Engaged | FLOAT |  | Average number of weekly hours the user spent on engaged activities in the period | false |  |  |
| users_history | ci_time_alloc_tot_eng_dur | Time Allocation Total Engaged Duration | FLOAT |  | Duration of the engaged activities the user performed in the period | false |  |  |
| users_history | ci_time_alloc_tot_selling | Time Allocation Total Selling | FLOAT |  | Average number of weekly hours the user spent on sales related activities in the period | false |  |  |
| users_history | ci_time_alloc_tot_selling_dur | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | ci_time_alloc_tot_selling_eng | Time Allocation Total Selling Engaged | FLOAT |  | Average number of weekly hours the user spent on engaged sales related activities in the period | false |  |  |
| users_history | ci_time_alloc_tot_selling_eng_dur | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | ci_time_alloc_upselling | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | ci_time_alloc_upselling_dur | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | ci_time_alloc_upselling_eng | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | ci_time_alloc_upselling_eng_dur | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | crm_addr_city | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | crm_addr_country | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | crm_addr_postal_code | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | crm_addr_state | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | crm_addr_street | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | crm_created_on | CRM Created On | DATETIME |  | User's creation date in the CRM | false |  |  |
| users_history | crm_creator_id | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | crm_dept | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | crm_division | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | crm_email | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | crm_first_name | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | crm_language_locale | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | crm_last_login_time | CRM Last Login Time | DATETIME |  | User's last login time in the CRM | false |  |  |
| users_history | crm_last_name | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | crm_locale | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | crm_mgr_id | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | crm_profile_url | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | crm_role | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | crm_time_zone | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | crm_title | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | crm_user_type | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | crm_username | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | trueai_billable | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | trueai_direct_reports | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | trueai_end_date | As Of Date in UTC | DATE |  | The date of the last data request from the platform in UTC | false |  |  |
| users_history | trueai_group | Group | STRING | 150 | User's group | false |  |  |
| users_history | trueai_group_conf | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | trueai_hire_date | Hire Date | DATETIME |  | User's hire date | false |  |  |
| users_history | trueai_is_mgr | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | trueai_mgr_id | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | trueai_mgr_id_conf | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | trueai_mgr_ids | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | trueai_role | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | trueai_role_conf | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | trueai_tenure | Tenure | INTEGER |  | Number of months since the user's hire date | false |  |  |
| users_history | trueai_termination_date | Termination Date | DATETIME |  | User's termination date | false |  |  |
| users_history | trueai_title | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | trueai_title_conf | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | trueai_tot_reports | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | trueai_user_behavior | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | trueai_user_behavior_conf | Deprecated field | FLOAT |  | Deprecated field | true |  |  |
| users_history | trueai_user_role | Standardized Role | STRING | 150 | User's standardized and combined role | false |  |  |
| users_history | trueai_user_role_alias | Standardized Role Aliased | STRING | 150 | User's standardized and combined role aliased | false |  |  |
| users_history | trueai_user_role_dept | Standardized Role Department | STRING | 50 | User's department derived from the standardized and combined role | false |  |  |
| users_history | trueai_user_role_function | Standardized Role Function | STRING | 50 | User's function derived from the standardized and combined role | false |  |  |
| users_history | vi_value_created_leads_and_accounts | Deprecated field | CURRENCY |  | Deprecated field | true |  |  |
| users_history | vi_value_created_leads_and_accounts_lead_gen | Deprecated field | CURRENCY |  | Deprecated field | true |  |  |
| users_history | vi_value_created_leads_and_accounts_repeat | Deprecated field | CURRENCY |  | Deprecated field | true |  |  |
| users_history | vi_value_created_leads_and_accounts_repeat_existing_customer | Deprecated field | CURRENCY |  | Deprecated field | true |  |  |
| users_history | vi_value_created_leads_and_accounts_repeat_new_logo | Deprecated field | CURRENCY |  | Deprecated field | true |  |  |
| users_history | vi_value_created_preselling | Deprecated field | CURRENCY |  | Deprecated field | true |  |  |
| users_history | vi_value_created_preselling_post_sales | Deprecated field | CURRENCY |  | Deprecated field | true |  |  |
| users_history | vi_value_created_preselling_prospecting | Deprecated field | CURRENCY |  | Deprecated field | true |  |  |
| users_history | vi_value_created_selling | Deprecated field | CURRENCY |  | Deprecated field | true |  |  |
| users_history | vi_value_created_selling_existing_customer | Deprecated field | CURRENCY |  | Deprecated field | true |  |  |
| users_history | vi_value_created_selling_new_logo | Deprecated field | CURRENCY |  | Deprecated field | true |  |  |
| users_history | vi_value_created_selling_upselling | Deprecated field | CURRENCY |  | Deprecated field | true |  |  |
| users_history | vi_value_created_tot | Deprecated field | CURRENCY |  | Deprecated field | true |  |  |
| users_history | vi_value_delivered_expect | Deprecated field | CURRENCY |  | Deprecated field | true |  |  |
| users_history | vi_value_delivered_leads_and_accounts | Deprecated field | CURRENCY |  | Deprecated field | true |  |  |
| users_history | vi_value_delivered_leads_and_accounts_lead_gen | Deprecated field | CURRENCY |  | Deprecated field | true |  |  |
| users_history | vi_value_delivered_leads_and_accounts_repeat | Deprecated field | CURRENCY |  | Deprecated field | true |  |  |
| users_history | vi_value_delivered_leads_and_accounts_repeat_existing_customer | Deprecated field | CURRENCY |  | Deprecated field | true |  |  |
| users_history | vi_value_delivered_leads_and_accounts_repeat_new_logo | Deprecated field | CURRENCY |  | Deprecated field | true |  |  |
| users_history | vi_value_delivered_potential | Deprecated field | CURRENCY |  | Deprecated field | true |  |  |
| users_history | vi_value_delivered_preselling | Deprecated field | CURRENCY |  | Deprecated field | true |  |  |
| users_history | vi_value_delivered_preselling_post_sales | Deprecated field | CURRENCY |  | Deprecated field | true |  |  |
| users_history | vi_value_delivered_preselling_prospecting | Deprecated field | CURRENCY |  | Deprecated field | true |  |  |
| users_history | vi_value_delivered_selling | Deprecated field | CURRENCY |  | Deprecated field | true |  |  |
| users_history | vi_value_delivered_selling_existing_customer | Deprecated field | CURRENCY |  | Deprecated field | true |  |  |
| users_history | vi_value_delivered_selling_new_logo | Deprecated field | CURRENCY |  | Deprecated field | true |  |  |
| users_history | vi_value_delivered_selling_upselling | Deprecated field | CURRENCY |  | Deprecated field | true |  |  |
| users_history | vi_value_delivered_tot | Deprecated field | CURRENCY |  | Deprecated field | true |  |  |
| users_history | vi_value_received_for_preselling | Deprecated field | CURRENCY |  | Deprecated field | true |  |  |
| users_history | vi_value_received_for_preselling_post_sales | Deprecated field | CURRENCY |  | Deprecated field | true |  |  |
| users_history | vi_value_received_for_preselling_prospecting | Deprecated field | CURRENCY |  | Deprecated field | true |  |  |
| users_history | vi_value_received_for_selling | Deprecated field | CURRENCY |  | Deprecated field | true |  |  |
| users_history | vi_value_received_for_selling_existing_customer | Deprecated field | CURRENCY |  | Deprecated field | true |  |  |
| users_history | vi_value_received_for_selling_new_logo | Deprecated field | CURRENCY |  | Deprecated field | true |  |  |
| users_history | vi_value_received_for_selling_upselling | Deprecated field | CURRENCY |  | Deprecated field | true |  |  |
| users_history | vi_value_received_tot | Deprecated field | CURRENCY |  | Deprecated field | true |  |  |
