import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const SUPABASE_URL = 'https://ilfzqfumaxhiiwgkvfam.supabase.co'
const SUPABASE_KEY = 'sb_publishable_DZs_Q03Zi-wCcYmpYpjuHg_9wbLvtCU'


const supabase = createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);
console.log("Auth.js Started");

const { data } = await supabase.auth.getSession();

// console.log("Session:", data.session);
// const {data} = await supabase.auth.getSession();

if(!data.session){
    window.location.href = "./login.html";
}
