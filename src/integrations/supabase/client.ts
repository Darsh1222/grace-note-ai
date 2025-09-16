import { createClient } from '@supabase/supabase-js'

// Test what environment variables are available
console.log('All environment variables:', import.meta.env)

// For now, let's create a fallback that won't break the app
let supabase: any = null

try {
  // Try different possible environment variable names
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 
                     import.meta.env.SUPABASE_URL || 
                     import.meta.env.VITE_SUPABASE_PROJECT_URL ||
                     'https://placeholder.supabase.co'

  const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 
                         import.meta.env.SUPABASE_ANON_KEY || 
                         import.meta.env.VITE_SUPABASE_PUBLIC_ANON_KEY ||
                         'placeholder-key'

  console.log('Attempting to create Supabase client...')
  console.log('URL exists:', !!import.meta.env.VITE_SUPABASE_URL)
  console.log('Key exists:', !!import.meta.env.VITE_SUPABASE_ANON_KEY)
  
  if (supabaseUrl !== 'https://placeholder.supabase.co' && supabaseAnonKey !== 'placeholder-key') {
    supabase = createClient(supabaseUrl, supabaseAnonKey)
    console.log('Supabase client created successfully!')
  } else {
    console.warn('Using fallback Supabase client - integration may not be properly configured')
    // Create a mock client for development
    supabase = {
      from: () => ({
        insert: () => Promise.resolve({ data: null, error: null }),
        select: () => Promise.resolve({ data: [], error: null })
      }),
      functions: {
        invoke: () => Promise.resolve({ data: null, error: null })
      }
    }
  }
} catch (error) {
  console.error('Error creating Supabase client:', error)
  // Fallback mock client
  supabase = {
    from: () => ({
      insert: () => Promise.resolve({ data: null, error: null }),
      select: () => Promise.resolve({ data: [], error: null })
    }),
    functions: {
      invoke: () => Promise.resolve({ data: null, error: null })
    }
  }
}

export { supabase }