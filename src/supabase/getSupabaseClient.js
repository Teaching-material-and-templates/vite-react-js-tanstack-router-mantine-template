import { createClient } from "@supabase/supabase-js";

// #######################################################
// MODIFY THESE VARIABLES, TO YOUR SUPABASE INSTALLATION.
// #######################################################
const supabaseUrl = "https://xyzcompany.supabase.co";
const publicAnonKey = "public-anon-key";
// #######################################################

let supabaseClientSingletong = undefined;
export function getSupabaseClient() {
  if (supabaseClientSingletong == undefined) {
    supabaseClientSingletong = createClient(supabaseUrl, publicAnonKey);
  }

  return supabaseClientSingletong;
}
