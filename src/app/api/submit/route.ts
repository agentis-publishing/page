import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const supabase = createRouteHandlerClient({ cookies })
    
    // Check authentication
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Parse form data
    const formData = await request.formData()
    
    // Extract text fields
    const title = formData.get('title') as string
    const authorsString = formData.get('authors') as string
    const abstract = formData.get('abstract') as string
    const keywordsString = formData.get('keywords') as string
    const mainManuscript = formData.get('mainManuscript') as string
    const references = formData.get('references') as string
    const figureLegends = formData.get('figureLegends') as string
    const coverLetter = formData.get('coverLetter') as string
    const aiReviewOptIn = formData.get('aiReviewOptIn') === 'true'
    
    // Parse arrays
    const authors = JSON.parse(authorsString)
    const keywords = keywordsString.split(',').map(k => k.trim()).filter(k => k)
    
    // Handle supplementary file upload if present
    let suppPath = null
    const supplementaryFiles = formData.get('supplementaryFiles') as File | null
    
    if (supplementaryFiles && supplementaryFiles.size > 0) {
      const fileExt = supplementaryFiles.name.split('.').pop()
      const fileName = `${user.id}/${Date.now()}_supplementary.${fileExt}`
      
      const { error: uploadError } = await supabase.storage
        .from('supplementary-files')
        .upload(fileName, supplementaryFiles)
        
      if (uploadError) {
        console.error('Upload error:', uploadError)
        return NextResponse.json({ error: 'Failed to upload supplementary files' }, { status: 500 })
      }
      
      suppPath = fileName
    }

    // Insert submission into database
    const { data, error } = await supabase
      .from('submissions')
      .insert({
        user_id: user.id,
        title,
        authors: authors.map((author: any) => author.name), // Store only names as string array
        abstract,
        keywords,
        main_manuscript: mainManuscript,
        manuscript_references: references, // Note: DB column is 'manuscript_references'
        figure_legends: figureLegends,
        cover_letter: coverLetter,
        ai_review_opt_in: aiReviewOptIn,
        supp_path: suppPath,
        status: 'received'
      })
      .select()
      .single()

    if (error) {
      console.error('Submission error:', error)
      return NextResponse.json({ error: 'Failed to submit paper' }, { status: 500 })
    }

    // TODO: Send confirmation email via Resend API

    return NextResponse.json({ 
      success: true, 
      submissionId: data.id,
      message: 'Paper submitted successfully!'
    }, { status: 200 })
    
  } catch (error) {
    console.error('Unexpected error:', error)
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 })
  }
}