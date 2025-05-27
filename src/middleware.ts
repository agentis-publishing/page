import { createServerClient } from '@supabase/ssr';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  // Create a Supabase client configured to use cookies
  let supabaseResponse = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value));
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // Refresh the session if it exists
  const { data: { session }, error } = await supabase.auth.getSession();
  
  if (error) {
    console.error('Session error in middleware:', error);
  }

  // Return the response
  return supabaseResponse;
}

// Specify the paths that require authentication
export const config = {
  matcher: [
    // Match all paths except for these ones
    '/((?!_next/static|_next/image|favicon.ico|assets|api|login|signup).*)',
  ],
}; 