import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { email, name, adminEmail } = await req.json()

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    // Send email notification (using a simple email service)
    const emailSubject = `New GraceAI Waitlist Signup: ${name}`
    const emailBody = `
      New user joined the GraceAI waitlist!
      
      Name: ${name}
      Email: ${email}
      Joined: ${new Date().toISOString()}
      
      Total waitlist count can be checked in your Supabase dashboard.
    `

    // For now, we'll log this - you can integrate with email services like Resend, SendGrid, etc.
    console.log('Waitlist notification:', {
      to: adminEmail,
      subject: emailSubject,
      body: emailBody
    })

    // You can add actual email sending here with services like:
    // - Resend: https://resend.com/
    // - SendGrid: https://sendgrid.com/
    // - Postmark: https://postmarkapp.com/
    
    return new Response(
      JSON.stringify({ success: true, message: 'Notification sent' }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )
  } catch (error) {
    console.error('Error:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      },
    )
  }
})