// supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://zmbguwvkcnfpdrqyovqr.supabase.co";
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InptYmd1d3ZrY25mcGRycXlvdnFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc0NTY4ODAsImV4cCI6MjA0MzAzMjg4MH0.7twv8FeC_wGh9yUEKKHz4doH_2S_hattKBHI4Tha5XA';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
