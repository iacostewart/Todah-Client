export interface Campaign{
    id?:number;
    modified_date?:Date;
    created_date?: Date;
    project_img_thumb_url?: string;
    creator_id?: number;
    organization_name: string;
    organization_ein?: string;
    project_title: string;
    project_purpose: string;
    project_website?: string;
    project_image?: string;
    //^ should be required - once functional
    finished_step_one?: boolean;
    slider_inputs?: string;
    slider_ranges?: string;
    goal_currency?: string;
    goal?: number;
    //campain goal 
    finished_step_two?: boolean;
    end_date?: string;
    //end date
    is_published?: boolean;
    funder_count?: number;
    funded_amount_currency?: string;
    funded_amount?: number;
    project_video?: string;
    project_short_description: string;
    project_category_id?: number;
    is_approved?: boolean;
    initial_funds_currency?: string;
    initial_funds?: number;
    //precamp stuffs
    organization_chapter_name?: string;
    organization_staff_name?: string;
    external_payment_portal?: string;
    is_personal_cause?: boolean;
    project_beneficiary?: string;
    campaign_slug: string;
    never_event?: boolean;
    project_role: string;
    facebook_url?: string;
    instagram_url?: string;
    twitter_url?: string;
    youtube_url?: string;
    allow_cash_donations?: boolean;
    published_email_sent?: boolean;
    client_is_paying_platform_fees?: boolean;
    launch_date?: Date;
}