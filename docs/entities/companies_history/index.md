---
title: companies_history
---

This entity represents **companies_history** records in the Cien platform.

## Fields

| Entity | Field Name | Display Name | Data Type | Field Length | Description | Deprecated | Field Name Sfdc | Field Name Msdyn |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| companies_history | _sys_as_of | As of Date | DATETIME |  | The date of the last data request from the platform | false |  |  |
| companies_history | _sys_co_id | Company ID | STRING | 50 | The Cien company ID | false |  |  |
| companies_history | _sys_doc_id | Doc ID | STRING | 50 | Unique record identifier | false |  |  |
| companies_history | _sys_filt_end_date | Filter End Date | DATE |  | The end date of the record, stripped of time | false |  |  |
| companies_history | _sys_filt_start_date | Filter Start Date | DATE |  | The start date of the record, stripped of time | false |  |  |
| companies_history | _sys_image_size | Image Size | STRING | 50 | The processing cluster imaging size | false |  |  |
| companies_history | _sys_last_modified_on | Last Modified On | DATETIME |  | The date of the last data modification in the platform | false |  |  |
| companies_history | _sys_processed_as_of | Processed As of Date | DATETIME |  | The date of running the export | false |  |  |
| companies_history | _sys_reference_date | Reference Date | DATETIME |  | The reference date used as benchmark for the calculations | false |  |  |
| companies_history | _sys_scheduled_daily | Scheduled Daily | BOOLEAN |  | Boolean flag indicating whether the company is scheduled daily | false |  |  |
| companies_history | _sys_scheduled_weekly | Scheduled Weekly | BOOLEAN |  | Boolean flag indicating whether the company is scheduled weekly | false |  |  |
| companies_history | _sys_version | Version | STRING | 50 | The current release version | false |  |  |
| companies_history | accounts_avg_match_conf | Accounts Avg Match Confidence | FLOAT |  | Average match confidence for accounts | false |  |  |
| companies_history | added_on | added on | DATETIME |  | Added On Date | false |  |  |
| companies_history | co_hq_country | co_hq_country | STRING | 100 | co_hq_country | false |  |  |
| companies_history | co_target_geo | co_target_geo | STRING | 100 | co_target_geo | false |  |  |
| companies_history | co_target_market | co_target_market | STRING | 100 | co_target_market | false |  |  |
| companies_history | co_type_industry | co_type_industry | STRING | 100 | co_type_industry | false |  |  |
| companies_history | company_currency | Company Currency | STRING | 50 | Company's currency | false |  |  |
| companies_history | company_currency_symbol | Company Currency Symbol | STRING | 50 | Company's currency symbol | false |  |  |
| companies_history | company_logo | Company Logo | STRING | 50 | Company's logo URL | false |  |  |
| companies_history | company_name | Company Name | STRING | 50 | Company name | false |  |  |
| companies_history | consolidation_status | consolidation_status | STRING | 100 | consolidation_status | false |  |  |
| companies_history | contacts_avg_match_conf | Contacts Avg Match Confidence | FLOAT |  | Average match confidence for contacts | false |  |  |
| companies_history | crm_conn_status | crm_conn_status | STRING | 100 | crm_conn_status | false |  |  |
| companies_history | deactivated_on | deactivated_on | DATETIME |  | deactivated_on | false |  |  |
| companies_history | dev_tracked | Dev Tracked | BOOLEAN |  | Boolean flag indicating whether the company is dev tracked | false |  |  |
| companies_history | di_acv_company_size_factors | Acv Company Size Factors | OBJECT | 500000 | Company size factors impacting the ACV | false |  |  |
| companies_history | di_acv_country_factors | Acv Country Factors | OBJECT | 500000 | Country factors impacting the ACV | false |  |  |
| companies_history | di_acv_industry_factors | Acv Industry Factors | OBJECT | 500000 | Industry factors impacting the ACV | false |  |  |
| companies_history | di_amt_won_last12months | Amount Won Last12months | CURRENCY |  | Sum of booking amounts of opportunities won in the past 12 months | false |  |  |
| companies_history | di_pred_all_label | Quality Score All Label | STRING | 50 | Overall quality score label | false |  |  |
| companies_history | di_pred_all_score | Quality Score All | FLOAT |  | Overall quality score | false |  |  |
| companies_history | di_pred_existing_customer_selling_attempts | Predicted Existing Customer Selling Attempts | INTEGER |  | Number of datapoints used to determine the R2 score of the probability of existing customer selling win | false |  |  |
| companies_history | di_pred_existing_customer_selling_auc | Predicted Existing Customer Selling AUC | FLOAT |  | AUC score of the probability of existing customer selling win | false |  |  |
| companies_history | di_pred_existing_customer_selling_avg_p_val | Predicted Existing Customer Selling Avg. P Val | FLOAT |  | Average predicted probability of existing customer selling win | false |  |  |
| companies_history | di_pred_existing_customer_selling_end_date | Predicted Existing Customer Selling End Date | DATETIME |  | End of the period used to compute the R2 score of the probability of existing customer selling win | false |  |  |
| companies_history | di_pred_existing_customer_selling_r2 | Predicted Existing Customer Selling R2 | FLOAT |  | R2 score of the probability of existing customer selling win | false |  |  |
| companies_history | di_pred_existing_customer_selling_r2_data | Predicted Existing Customer Selling R2 Data | OBJECT | 2000 | Coordinates data used to determine the R2 score of the probability of existing customer selling win | false |  |  |
| companies_history | di_pred_existing_customer_selling_score | Quality Score Existing Customer Selling | FLOAT |  | Quality score for existing customer selling activities | false |  |  |
| companies_history | di_pred_existing_customer_selling_start_date | Predicted Existing Customer Selling Start Date | DATETIME |  | Start of the period used to compute the R2 score of the probability of existing customer selling win | false |  |  |
| companies_history | di_pred_existing_customer_selling_successes | Predicted Existing Customer Selling Successes | INTEGER |  | Number of successful outcomes in the sample used to determine the R2 score of the probability of existing customer selling win | false |  |  |
| companies_history | di_pred_new_logo_attempts | Predicted New Logo Attempts | INTEGER |  | Number of datapoints used to determine the R2 score of the probability of new logo win | false |  |  |
| companies_history | di_pred_new_logo_auc | Predicted New Logo AUC | FLOAT |  | AUC score of the probability of new logo win | false |  |  |
| companies_history | di_pred_new_logo_avg_p_val | Predicted New Logo Avg. P Val | FLOAT |  | Average predicted probability of new logo win | false |  |  |
| companies_history | di_pred_new_logo_end_date | Predicted New Logo End Date | DATETIME |  | End of the period used to compute the R2 score of the probability of new logo win | false |  |  |
| companies_history | di_pred_new_logo_r2 | Predicted New Logo R2 | FLOAT |  | R2 score of the probability of new logo win | false |  |  |
| companies_history | di_pred_new_logo_r2_data | Predicted New Logo R2 Data | OBJECT | 2000 | Coordinates data used to determine the R2 score of the probability of new logo win | false |  |  |
| companies_history | di_pred_new_logo_score | Quality Score New Logo Selling | FLOAT |  | Quality score for new logo selling activities | false |  |  |
| companies_history | di_pred_new_logo_start_date | Predicted New Logo Start Date | DATETIME |  | Start of the period used to compute the R2 score of the probability of new logo win | false |  |  |
| companies_history | di_pred_new_logo_successes | Predicted New Logo Successes | INTEGER |  | Number of successful outcomes in the sample used to determine the R2 score of the probability of new logo win | false |  |  |
| companies_history | di_pred_post_sales_attempts | Predicted Post Sales Attempts | INTEGER |  | Number of datapoints used to determine the R2 score of the probability of next opportunity creation | false |  |  |
| companies_history | di_pred_post_sales_auc | Predicted Post Sales AUC | FLOAT |  | AUC score of the probability of next opportunity creation | false |  |  |
| companies_history | di_pred_post_sales_avg_p_val | Predicted Post Sales Avg. P Val | FLOAT |  | Average predicted probability of next opportunity creation | false |  |  |
| companies_history | di_pred_post_sales_end_date | Predicted Post Sales End Date | DATETIME |  | End of the period used to compute the R2 score of the probability of next opportunity creation | false |  |  |
| companies_history | di_pred_post_sales_qual_bucket_tiers | Predicted Post Sales Quality Bucket Tiers | OBJECT | 2000 | Tiers for the probability of next opportunity creation prediction buckets | false |  |  |
| companies_history | di_pred_post_sales_r2 | Predicted Post Sales R2 | FLOAT |  | R2 score of the probability of next opportunity creation | false |  |  |
| companies_history | di_pred_post_sales_r2_data | Predicted Post Sales R2 Data | OBJECT | 2000 | Coordinates data used to determine the R2 score of the probability of next opportunity creation | false |  |  |
| companies_history | di_pred_post_sales_score | Quality Score Post Sales Support | FLOAT |  | Quality score for post sales support activities | false |  |  |
| companies_history | di_pred_post_sales_start_date | Predicted Post Sales Start Date | DATETIME |  | Start of the period used to compute the R2 score of the probability of next opportunity creation | false |  |  |
| companies_history | di_pred_post_sales_successes | Predicted Post Sales Successes | INTEGER |  | Number of successful outcomes in the sample used to determine the R2 score of the probability of next opportunity creation | false |  |  |
| companies_history | di_pred_prospecting_attempts | Predicted Prospecting Attempts | INTEGER |  | Number of datapoints used to determine the R2 score of the probability of conversion | false |  |  |
| companies_history | di_pred_prospecting_auc | Predicted Prospecting AUC | FLOAT |  | AUC score of the probability of conversion | false |  |  |
| companies_history | di_pred_prospecting_avg_p_val | Predicted Prospecting Avg. P Val | FLOAT |  | Average predicted probability of conversion | false |  |  |
| companies_history | di_pred_prospecting_end_date | Predicted Prospecting End Date | DATETIME |  | End of the period used to compute the R2 score of the probability of conversion | false |  |  |
| companies_history | di_pred_prospecting_model_reset_on | Predicted Prospecting Model Reset on | DATETIME |  | Date when the probability of conversion model was last trained | false |  |  |
| companies_history | di_pred_prospecting_qual_bucket_tiers | Predicted Prospecting Quality Bucket Tiers | OBJECT | 2000 | Tiers for the probability of conversion prediction buckets | false |  |  |
| companies_history | di_pred_prospecting_r2 | Predicted Prospecting R2 | FLOAT |  | R2 score of the probability of conversion | false |  |  |
| companies_history | di_pred_prospecting_r2_data | Predicted Prospecting R2 Data | OBJECT | 2000 | Coordinates data used to determine the R2 score of the probability of conversion | false |  |  |
| companies_history | di_pred_prospecting_score | Quality Score Prospecting | FLOAT |  | Quality score for prospecting activities | false |  |  |
| companies_history | di_pred_prospecting_start_date | Predicted Prospecting Start Date | DATETIME |  | Start of the period used to compute the R2 score of the probability of conversion | false |  |  |
| companies_history | di_pred_prospecting_successes | Predicted Prospecting Successes | INTEGER |  | Number of successful outcomes in the sample used to determine the R2 score of the probability of conversion | false |  |  |
| companies_history | di_pred_selling_existing_customer_qual_bucket_tiers | Predicted Exsiting Customer Selling Quality Bucket Tiers | OBJECT | 2000 | Tiers for the probability of existing_customer_selling opportunity win prediction buckets | false |  |  |
| companies_history | di_pred_selling_new_logo_qual_bucket_tiers | Predicted Selling New Logo Quality Bucket Tiers | OBJECT | 2000 | Tiers for the probability of new logo opportunity win prediction buckets | false |  |  |
| companies_history | di_success_prob_training_score | Success Probability Training Score | FLOAT |  | Average AUC score of the success probability when training | false |  |  |
| companies_history | di_success_prob_validation_score | Success Probability Validation Score | FLOAT |  | Average AUC score of the success probability on the validation set | false |  |  |
| companies_history | erp_conn_status | erp_conn_status | STRING | 100 | erp_conn_status | false |  |  |
| companies_history | fiscal_year_offset | Fiscal Year Offset | INTEGER |  | Fiscal year offset | false |  |  |
| companies_history | founded_year | founded_year | INTEGER |  | founded_year | false |  |  |
| companies_history | geo_api_requests_accounts | geo_api_requests_accounts | INTEGER |  | Number of geocoding API requests sent | false |  |  |
| companies_history | geo_api_requests_contacts | geo_api_requests_contacts | INTEGER |  | Number of geocoding API requests sent | false |  |  |
| companies_history | geo_api_requests_hr_users | geo_api_requests_hr_users | INTEGER |  | Number of geocoding API requests sent | false |  |  |
| companies_history | geo_api_requests_leads | geo_api_requests_leads | INTEGER |  | Number of geocoding API requests sent | false |  |  |
| companies_history | geo_api_requests_users | geo_api_requests_users | INTEGER |  | Number of geocoding API requests sent | false |  |  |
| companies_history | geo_required_accounts | geo_required_accounts | INTEGER |  | Number of docs that require geocoding API requests | false |  |  |
| companies_history | geo_required_contacts | geo_required_contacts | INTEGER |  | Number of docs that require geocoding API requests | false |  |  |
| companies_history | geo_required_hr_users | geo_required_hr_users | INTEGER |  | Number of docs that require geocoding API requests | false |  |  |
| companies_history | geo_required_leads | geo_required_leads | INTEGER |  | Number of docs that require geocoding API requests | false |  |  |
| companies_history | geo_required_users | geo_required_users | INTEGER |  | Number of docs that require geocoding API requests | false |  |  |
| companies_history | job_status | job_status | STRING | 100 | job_status | false |  |  |
| companies_history | leads_avg_match_conf | Leads Avg Match Confidence | FLOAT |  | Average match confidence for leads | false |  |  |
| companies_history | matched_accounts_percentage | Matched Accounts Percentage | FLOAT |  | Percentage of matched accounts | false |  |  |
| companies_history | matched_contacts_percentage | Matched Contacts Percentage | FLOAT |  | Percentage of matched contacts | false |  |  |
| companies_history | matched_leads_percentage | Matched Leads Percentage | FLOAT |  | Percentage of matched leads | false |  |  |
| companies_history | min_ext_match_confidence | Min Ext Match Confidence | FLOAT |  | Minimum external match confidence | false |  |  |
| companies_history | partner_base64_logo | Partner Base64 Logo | OBJECT | 10000 | Partner company logo | false |  |  |
| companies_history | partner_co_id | Partner Company ID | STRING | 50 | Partner company ID | false |  |  |
| companies_history | partner_name | Partner Name | STRING | 50 | Partner company name | false |  |  |
| companies_history | partner_product_name | Partner Product Name | STRING | 50 | Partner company product name | false |  |  |
| companies_history | pbi_report_links | pbi_report_links | OBJECT | 50000 | PBI report page links | false |  |  |
| companies_history | pbi_version | pbi_version | STRING | 50 | PBI report version | false |  |  |
| companies_history | pbi_workspace_name | PowerBI workspace Name | STRING | 100 | Workspace or group name in powerBI | false |  |  |
| companies_history | pbi_workspace_url | PowerBI workspace url | STRING | 100 | Workspace or group url in powerBI | false |  |  |
| companies_history | primary_contact | primary_contact | STRING | 100 | primary_contact | false |  |  |
| companies_history | processing_all_last_attempt | Processing All Last Attempt | DATETIME |  | Date of last attempt to run the company's processing | false |  |  |
| companies_history | processing_all_last_success | Processing All Last Success | DATETIME |  | Date of last successful attempt to run the company's processing | false |  |  |
| companies_history | processing_all_last_success_time_sec | Processing All Last Success Time Sec | FLOAT |  | Time in seconds it took to run the company's processing | false |  |  |
| companies_history | processing_api_export_last_attempt | Processing Api Export Last Attempt | DATETIME |  | Date of last attempt to run the company's API exports | false |  |  |
| companies_history | processing_api_export_last_success | Processing Api Export Last Success | DATETIME |  | Date of last successful attempt to run the company's API exports | false |  |  |
| companies_history | processing_api_export_last_success_time_sec | Processing Api Export Last Success Time Sec | FLOAT |  | Time in seconds it took to run the company's API exports | false |  |  |
| companies_history | processing_max_last_modified_on_act | Processing Max Last Modified On Activities | DATETIME |  | Latest system modstamp date on activities | false |  |  |
| companies_history | processing_max_last_modified_on_opp_histories | Processing Max Last Modified On Opp Histories | DATETIME |  | Latest system modstamp date on opp_histories | false |  |  |
| companies_history | processing_max_last_modified_on_opps | Processing Max Last Modified On Opps | DATETIME |  | Latest system modstamp date on opps | false |  |  |
| companies_history | processing_max_last_modified_on_users | Processing Max Last Modified On Users | DATETIME |  | Latest system modstamp date on users | false |  |  |
| companies_history | processing_mode | Processing Mode | STRING | 50 | Processing mode | false |  |  |
| companies_history | processing_post_ssr_ml_last_attempt | Post ssr last attempt | DATETIME |  | Last time the post ssr jobstep was attempted | false |  |  |
| companies_history | processing_post_ssr_ml_last_success | Post ssr last attempt | DATETIME |  | Last time the post ssr jobstep was successful | false |  |  |
| companies_history | processing_post_ssr_ml_last_success_time_sec | Post ssr last attempt | FLOAT |  | Time taken for the last time the post ssr jobstep was successful | false |  |  |
| companies_history | processing_pre_ssr_ml_last_attempt | Last time the pre ssr jobstep was attempted | DATETIME |  | Last time the pre ssr jobstep was attempted | false |  |  |
| companies_history | processing_pre_ssr_ml_last_success | Last time the pre ssr jobstep was successful | DATETIME |  | Last time the pre ssr jobstep was successful | false |  |  |
| companies_history | processing_pre_ssr_ml_last_success_time_sec | Time taken for the Last time the pre ssr jobstep was successful | FLOAT |  | Time taken for the Last time the pre ssr jobstep was successful | false |  |  |
| companies_history | processing_sync_last_attempt | Processing Sync Last Attempt | DATETIME |  | Date of last attempt to run the company's sync | false |  |  |
| companies_history | processing_sync_last_success | Processing Sync Last Success | DATETIME |  | Date of last successful attempt to run the company's sync | false |  |  |
| companies_history | processing_sync_last_success_time_sec | Processing Sync Last Success Time Sec | FLOAT |  | Time in seconds it took to run the company's sync | false |  |  |
| companies_history | processing_transform_last_attempt | Processing Transform Last Attempt | DATETIME |  | Date of last attempt to run the company's raw transform | false |  |  |
| companies_history | processing_transform_last_success | Processing Transform Last Success | DATETIME |  | Date of last successful attempt to run the company's raw transform | false |  |  |
| companies_history | processing_transform_last_success_time_sec | Processing Transform Last Success Time Sec | FLOAT |  | Time in seconds it took to run the company's raw transform | false |  |  |
| companies_history | purged_on | purged_on | DATETIME |  | purged_on | false |  |  |
| companies_history | ref_currency | ref_currency | STRING | 100 | ref_currency | false |  |  |
| companies_history | ref_dare_potential_growth_rate | ref_dare_potential_growth_rate | FLOAT |  | ref_dare_potential_growth_rate | false |  |  |
| companies_history | region | region | STRING | 100 | region | false |  |  |
| companies_history | status | status | STRING | 100 | STATUS | false |  |  |
| companies_history | total_employees | total_employees | INTEGER |  | total_employees | false |  |  |
| companies_history | ttm_ref_date_bookings | TTM_ref_date_bookings | INTEGER |  | TTM_ref_date_bookings | false |  |  |
| companies_history | ttm_ref_date_revenue | TTM_ref_date_revenue | INTEGER |  | TTM_ref_date_revenue | false |  |  |
| companies_history | users | Users | INTEGER |  | Number of users | false |  |  |
| companies_history | users_active | Users Active | INTEGER |  | Number of active users | false |  |  |
| companies_history | users_hr_file | users_hr_file | INTEGER |  | users_hr_file | false |  |  |
| companies_history | users_match_hr_id | users_match_hr_id | INTEGER |  | users_match_hr_id | false |  |  |
| companies_history | users_match_hr_id_nd_role | users_match_hr_id_nd_role | INTEGER |  | users_match_hr_id_nd_role | false |  |  |
| companies_history | users_non_match_hr_id_leads | users_non_match_hr_id_leads | INTEGER |  | users_non_match_hr_id_leads | false |  |  |
| companies_history | users_non_match_hr_id_nd_group | users_non_match_hr_id_nd_group | INTEGER |  | users_non_match_hr_id_nd_group | false |  |  |
| companies_history | users_non_match_hr_id_pipeline | users_non_match_hr_id_pipeline | INTEGER |  | users_non_match_hr_id_pipeline | false |  |  |
| companies_history | users_non_match_hr_id_won_deals | users_non_match_hr_id_won_deals | INTEGER |  | users_non_match_hr_id_won_deals | false |  |  |
| companies_history | users_sales | Users Sales | INTEGER |  | Number of active sales users | false |  |  |
