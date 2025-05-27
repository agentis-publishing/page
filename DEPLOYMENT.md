# Deployment Instructions for Cloudflare Pages

## Environment Variables Setup

For the authentication system to work properly, you need to set the following environment variables in your Cloudflare Pages project:

### Required Environment Variables

1. `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
2. `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Your Supabase anon/public key

### How to Set Environment Variables in Cloudflare Pages

1. Go to your Cloudflare Pages project dashboard
2. Navigate to **Settings** → **Environment variables**
3. Click **Add variable**
4. Add the following variables:
   - Variable name: `NEXT_PUBLIC_SUPABASE_URL`
   - Value: Your Supabase URL (e.g., `https://your-project.supabase.co`)
   
5. Add another variable:
   - Variable name: `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - Value: Your Supabase anon key (found in your Supabase project settings)

6. Make sure to add these variables for both **Production** and **Preview** environments

### Getting Your Supabase Credentials

1. Log in to your [Supabase Dashboard](https://app.supabase.com)
2. Select your project
3. Go to **Settings** → **API**
4. Copy:
   - **Project URL** → Use this for `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public** key → Use this for `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### After Setting Environment Variables

After adding the environment variables:
1. Trigger a new deployment (push a commit or click "Retry deployment")
2. The authentication system should now work properly

## Troubleshooting

If authentication is still not working:
1. Check the browser console for error messages
2. Verify that the environment variables are correctly set in Cloudflare Pages
3. Ensure the Supabase project is properly configured with the correct redirect URLs