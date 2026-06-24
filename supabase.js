const SUPABASE_URL = "https://wkuntngatmjxjqxapcgu.supabase.co";

const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndrdW50bmdhdG1qeGpxeGFwY2d1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIyOTcwOTksImV4cCI6MjA5Nzg3MzA5OX0.2Kjch8K_chweQCEDGsB9sRhALNNIzaePXceLZs8jGzs";

const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

console.log("SUPABASE OK");
console.log(supabaseClient);