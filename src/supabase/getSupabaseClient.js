import { createClient } from "@supabase/supabase-js";

let supabaseClient = undefined;

export function getSupabaseClient() {
  const supabaseUrl = "https://xyzcompany.supabase.co";
  const publicAnonKey = "public-anon-key";

  if (supabaseClient == undefined) {
    supabaseClient = createClient(supabaseUrl, publicAnonKey);
  }

  return supabaseClient;
}
