-- Fix search_path for database functions to prevent security issues
-- All functions should have a fixed search_path set

-- Update update_product_content_last_updated function
CREATE OR REPLACE FUNCTION public.update_product_content_last_updated()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
BEGIN
    NEW.last_updated = NOW();
    RETURN NEW;
END;
$function$;

-- Update update_last_scraped function
CREATE OR REPLACE FUNCTION public.update_last_scraped()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
BEGIN
    NEW.last_scraped = NOW();
    RETURN NEW;
END;
$function$;

-- Update delete_all_website_content function
CREATE OR REPLACE FUNCTION public.delete_all_website_content()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
BEGIN
    DELETE FROM public.website_content WHERE TRUE;
END;
$function$;

-- Update update_product_url_analyses_last_updated function
CREATE OR REPLACE FUNCTION public.update_product_url_analyses_last_updated()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
BEGIN
  NEW.last_updated = NOW();
  RETURN NEW;
END;
$function$;

-- Update get_ai_system_prompt function
CREATE OR REPLACE FUNCTION public.get_ai_system_prompt(query text)
RETURNS text
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
BEGIN
    RETURN 'You are an AI assistant for CosmeDocs, a prestigious aesthetic clinic on Harley Street, London. 
    Use the following information to answer the query. If the information provided doesn''t fully answer the query, 
    you can use your general knowledge but prioritize the provided content.

    Key guidelines:
    - Focus on evidence-based medical information
    - Be clear about safety considerations
    - Mention the importance of professional consultation
    - Keep responses concise but informative
    - If mentioning booking, always include this exact markdown format: [Book an Appointment](https://med.as.me/schedule.php?appointmentType=16864702)
    - If mentioning prices or services, format any relevant links in markdown style: [Service Name](URL)
    - For booking queries, always mention phone: 0800 8600 178
    - Use natural language for regular text, only use markdown formatting for links
    
    Always maintain a professional, reassuring tone.';
END;
$function$;

-- Update cleanup_expired_results function
CREATE OR REPLACE FUNCTION public.cleanup_expired_results()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
BEGIN
    DELETE FROM public.serp_results WHERE expires_at < NOW();
    DELETE FROM public.search_responses WHERE expires_at < NOW();
END;
$function$;

-- Update update_treatment_videos_updated_at function
CREATE OR REPLACE FUNCTION public.update_treatment_videos_updated_at()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$function$;

-- Update update_contact_us_updated_at function
CREATE OR REPLACE FUNCTION public.update_contact_us_updated_at()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$function$;