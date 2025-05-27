import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export async function middleware(req: NextRequest) {
  // Create a Supabase client configured to use cookies
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  // Refresh the session if it exists
  const { data: { session }, error } = await supabase.auth.getSession();
  
  if (error) {
    console.error('Session error in middleware:', error);
  }

  // Return the response
  return res;
}

// Specify the paths that require authentication
export const config = {
  matcher: [
    // Match all paths except for these ones
    '/((?!_next/static|_next/image|favicon.ico|assets|api|login|signup).*)',
  ],
}; 