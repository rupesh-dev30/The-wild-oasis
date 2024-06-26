import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://mibzwqrttvneazhyhwui.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1pYnp3cXJ0dHZuZWF6aHlod3VpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkzMzA4NjAsImV4cCI6MjAzNDkwNjg2MH0.mgpz2LFLSyC3OabiRAViwI4zC2gYJ511JqFr8nS2eu0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
