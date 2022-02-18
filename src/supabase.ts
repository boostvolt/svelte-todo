import { createClient } from '@supabase/supabase-js';

const supabaseUrl = String(import.meta.env.VITE_PUBLIC_SUPABSE_URL);
const supabaseAnonKey = String(import.meta.env.VITE_PUBLIC_ANON_KEY);

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
