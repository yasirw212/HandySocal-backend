
// Import dotenv and call config() to access the variables set within the .env file.
require('dotenv').config()

const {createClient} = require('@supabase/supabase-js')

const supaBaseUrl = process.env.SUPABASE_URL
const supaBaseSecret = process.env.SUPABASE_SECRET

const supaBase = createClient(supaBaseUrl, supaBaseSecret)

module.exports = supaBase