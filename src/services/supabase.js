import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://tglevulrwqzgzccisctz.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRnbGV2dWxyd3F6Z3pjY2lzY3R6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc3Njk4ODUsImV4cCI6MjAzMzM0NTg4NX0.vttoz4NP0vXU4s2oRpIJXGA-SLDILWm8VM4avooWPS8";
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;