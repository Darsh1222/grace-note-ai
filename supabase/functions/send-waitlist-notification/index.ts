import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { Resend } from 'npm:resend@2.0.0'

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

    // Initialize Resend client
    const resend = new Resend(Deno.env.get('RESEND_API_KEY'))

    // Initialize Supabase client  
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    // Get total waitlist count
    const { count } = await supabase.from('waitlist').select('*', { count: 'exact', head: true })

    // Send email notification using Resend
    const emailSubject = `New GraceAI Waitlist Signup: ${name}`
    const emailBody = `
      <h2>🎉 New GraceAI Waitlist Signup!</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Joined:</strong> ${new Date().toLocaleString()}</p>
      <p><strong>Total Waitlist Members:</strong> ${count || 0}</p>
      
      <hr>
      <p><em>Check your Supabase dashboard for full waitlist management.</em></p>
    `

    const { error: emailError } = await resend.emails.send({
      from: 'GraceAI <onboarding@resend.dev>',
      to: [adminEmail],
      subject: emailSubject,
      html: emailBody
    })

    if (emailError) {
      console.error('Email sending error:', emailError)
      throw new Error(`Failed to send email: ${emailError.message}`)
    }

    console.log('Waitlist notification sent successfully to:', adminEmail)
    
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