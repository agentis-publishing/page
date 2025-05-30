'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/neo/Button'
import { Input } from '@/components/neo/Input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/neo/Card'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export default function SubmitPaperPage() {
  const router = useRouter()
  const supabase = createClientComponentClient()
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    abstract: '',
    keywords: '',
    authors: [{ name: '', email: '', orcid: '', affiliation: '' }],
    mainManuscript: '',
    references: '',
    figureLegends: '',
    manuscriptFile: null as File | null,
    supplementaryFiles: null as File | null,
    coverLetter: '',
    aiReviewOptIn: true
  })

  const validateManuscript = (manuscript: string): boolean => {
    const requiredSections = ['introduction', 'methods', 'results', 'discussion', 'conclusion']
    const manuscriptLower = manuscript.toLowerCase()
    return requiredSections.every(section => manuscriptLower.includes(section))
  }

  const handleNext = () => {
    if (step === 3) {
      // Validate manuscript sections before proceeding
      if (!validateManuscript(formData.mainManuscript)) {
        alert('Your manuscript must include all required sections: Introduction, Methods, Results, Discussion, and Conclusion')
        return
      }
    }
    if (step < 4) setStep(step + 1)
  }

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    
    try {
      // Check if user is authenticated
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        alert('Please log in to submit a paper')
        router.push('/login')
        return
      }

      // Prepare form data
      const submitData = new FormData()
      submitData.append('title', formData.title)
      submitData.append('authors', JSON.stringify(formData.authors))
      submitData.append('abstract', formData.abstract)
      submitData.append('keywords', formData.keywords)
      submitData.append('mainManuscript', formData.mainManuscript)
      submitData.append('references', formData.references)
      submitData.append('figureLegends', formData.figureLegends)
      submitData.append('coverLetter', formData.coverLetter)
      submitData.append('aiReviewOptIn', formData.aiReviewOptIn.toString())
      
      if (formData.supplementaryFiles) {
        submitData.append('supplementaryFiles', formData.supplementaryFiles)
      }

      // Submit to API
      const response = await fetch('/api/submit', {
        method: 'POST',
        body: submitData
      })

      const result = await response.json()

      if (response.ok) {
        alert(`Paper submitted successfully! Submission ID: ${result.submissionId}`)
        router.push('/dashboard')
      } else {
        alert(result.error || 'Failed to submit paper')
      }
    } catch (error) {
      console.error('Submission error:', error)
      alert('An error occurred while submitting your paper')
    } finally {
      setIsSubmitting(false)
    }
  }

  const addAuthor = () => {
    setFormData({
      ...formData,
      authors: [...formData.authors, { name: '', email: '', orcid: '', affiliation: '' }]
    })
  }

  const removeAuthor = (index: number) => {
    setFormData({
      ...formData,
      authors: formData.authors.filter((_, i) => i !== index)
    })
  }

  const updateAuthor = (index: number, field: string, value: string) => {
    const updatedAuthors = formData.authors.map((author, i) => 
      i === index ? { ...author, [field]: value } : author
    )
    setFormData({ ...formData, authors: updatedAuthors })
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Progress Steps */}
        <div className="mb-12">
          <h1 className="font-display text-display-md font-black text-center mb-8">
            SUBMIT YOUR PAPER
          </h1>
          
          <div className="flex items-center justify-between max-w-2xl mx-auto">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center">
                <div
                  className={`
                    w-16 h-16 border-4 border-black
                    flex items-center justify-center
                    font-display font-black text-2xl
                    transition-all duration-200
                    ${step >= i 
                      ? 'bg-electric-blue text-white shadow-neo' 
                      : 'bg-white text-black'
                    }
                  `}
                >
                  {i}
                </div>
                {i < 4 && (
                  <div className={`
                    w-16 h-1 mx-2
                    ${step > i ? 'bg-electric-blue' : 'bg-gray-300'}
                  `} />
                )}
              </div>
            ))}
          </div>
          
          <div className="flex justify-between max-w-2xl mx-auto mt-4 text-sm font-bold uppercase tracking-wider">
            <span className={step >= 1 ? 'text-electric-blue' : 'text-gray-400'}>
              DETAILS
            </span>
            <span className={step >= 2 ? 'text-electric-blue' : 'text-gray-400'}>
              AUTHORS
            </span>
            <span className={step >= 3 ? 'text-electric-blue' : 'text-gray-400'}>
              MANUSCRIPT
            </span>
            <span className={step >= 4 ? 'text-electric-blue' : 'text-gray-400'}>
              REVIEW
            </span>
          </div>
        </div>

        <Card className="p-8">
          {/* Step 1: Paper Details */}
          {step === 1 && (
            <div className="space-y-6">
              <CardHeader>
                <CardTitle className="font-display text-3xl font-black">
                  PAPER DETAILS
                </CardTitle>
                <p className="text-gray-600">
                  Provide basic information about your research paper
                </p>
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  <label className="block font-bold text-sm uppercase tracking-wider mb-2">
                    PAPER TITLE *
                  </label>
                  <Input
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="Enter your paper title"
                    required
                  />
                </div>

                <div>
                  <label className="block font-bold text-sm uppercase tracking-wider mb-2">
                    ABSTRACT *
                  </label>
                  <textarea
                    value={formData.abstract}
                    onChange={(e) => setFormData({ ...formData, abstract: e.target.value })}
                    placeholder="Provide a comprehensive abstract of your research"
                    rows={6}
                    className="w-full px-4 py-3 bg-white border-4 border-black font-mono text-base
                             placeholder:text-gray-400 focus:outline-none focus:shadow-neo
                             transition-shadow duration-150 resize-none"
                    required
                  />
                </div>

                <div>
                  <label className="block font-bold text-sm uppercase tracking-wider mb-2">
                    KEYWORDS *
                  </label>
                  <Input
                    value={formData.keywords}
                    onChange={(e) => setFormData({ ...formData, keywords: e.target.value })}
                    placeholder="protein folding, CRISPR, genomics (comma-separated)"
                    required
                  />
                  <p className="text-sm text-gray-600 mt-2">
                    Enter 3-8 keywords separated by commas
                  </p>
                </div>
              </CardContent>
            </div>
          )}

          {/* Step 2: Authors */}
          {step === 2 && (
            <div className="space-y-6">
              <CardHeader>
                <CardTitle className="font-display text-3xl font-black">
                  AUTHORS
                </CardTitle>
                <p className="text-gray-600">
                  Add all authors and their affiliations
                </p>
              </CardHeader>

              <CardContent className="space-y-6">
                {formData.authors.map((author, index) => (
                  <div key={index} className="p-6 border-4 border-black bg-gray-50">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-bold text-lg">
                        AUTHOR {index + 1}
                      </h3>
                      {formData.authors.length > 1 && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeAuthor(index)}
                        >
                          REMOVE
                        </Button>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-bold text-sm uppercase tracking-wider mb-2">
                          FULL NAME *
                        </label>
                        <Input
                          value={author.name}
                          onChange={(e) => updateAuthor(index, 'name', e.target.value)}
                          placeholder="Dr. Jane Smith"
                          required
                        />
                      </div>

                      <div>
                        <label className="block font-bold text-sm uppercase tracking-wider mb-2">
                          EMAIL *
                        </label>
                        <Input
                          type="email"
                          value={author.email}
                          onChange={(e) => updateAuthor(index, 'email', e.target.value)}
                          placeholder="jane.smith@university.edu"
                          required
                        />
                      </div>

                      <div>
                        <label className="block font-bold text-sm uppercase tracking-wider mb-2">
                          ORCID ID
                        </label>
                        <Input
                          value={author.orcid}
                          onChange={(e) => updateAuthor(index, 'orcid', e.target.value)}
                          placeholder="0000-0000-0000-0000"
                        />
                      </div>

                      <div>
                        <label className="block font-bold text-sm uppercase tracking-wider mb-2">
                          AFFILIATION *
                        </label>
                        <Input
                          value={author.affiliation}
                          onChange={(e) => updateAuthor(index, 'affiliation', e.target.value)}
                          placeholder="University of Science"
                          required
                        />
                      </div>
                    </div>
                  </div>
                ))}

                <Button variant="outline" onClick={addAuthor} className="w-full">
                  + ADD ANOTHER AUTHOR
                </Button>
              </CardContent>
            </div>
          )}

          {/* Step 3: Manuscript Content */}
          {step === 3 && (
            <div className="space-y-6">
              <CardHeader>
                <CardTitle className="font-display text-3xl font-black">
                  MANUSCRIPT CONTENT
                </CardTitle>
                <p className="text-gray-600">
                  Paste your manuscript content and supporting materials
                </p>
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  <label className="block font-bold text-sm uppercase tracking-wider mb-2">
                    MAIN MANUSCRIPT *
                  </label>
                  <textarea
                    value={formData.mainManuscript}
                    onChange={(e) => setFormData({ ...formData, mainManuscript: e.target.value })}
                    placeholder="Paste your manuscript text here. Include sections: Introduction, Methods, Results, Discussion, Conclusion"
                    rows={12}
                    className="w-full px-4 py-3 bg-white border-4 border-black font-mono text-base
                             placeholder:text-gray-400 focus:outline-none focus:shadow-neo
                             transition-shadow duration-150 resize-none"
                    required
                  />
                  <p className="text-sm text-gray-600 mt-2">
                    Required sections: Introduction, Methods, Results, Discussion, Conclusion
                  </p>
                </div>

                <div>
                  <label className="block font-bold text-sm uppercase tracking-wider mb-2">
                    REFERENCES *
                  </label>
                  <textarea
                    value={formData.references}
                    onChange={(e) => setFormData({ ...formData, references: e.target.value })}
                    placeholder="Paste your references here in standard citation format"
                    rows={8}
                    className="w-full px-4 py-3 bg-white border-4 border-black font-mono text-base
                             placeholder:text-gray-400 focus:outline-none focus:shadow-neo
                             transition-shadow duration-150 resize-none"
                    required
                  />
                </div>

                <div>
                  <label className="block font-bold text-sm uppercase tracking-wider mb-2">
                    FIGURE LEGENDS
                  </label>
                  <textarea
                    value={formData.figureLegends}
                    onChange={(e) => setFormData({ ...formData, figureLegends: e.target.value })}
                    placeholder="Include captions for all figures (optional)"
                    rows={6}
                    className="w-full px-4 py-3 bg-white border-4 border-black font-mono text-base
                             placeholder:text-gray-400 focus:outline-none focus:shadow-neo
                             transition-shadow duration-150 resize-none"
                  />
                </div>

                <div>
                  <label className="block font-bold text-sm uppercase tracking-wider mb-4">
                    SUPPLEMENTARY FILES
                  </label>
                  <div
                    className="border-4 border-dashed border-black p-8 text-center
                             hover:bg-gray-50 transition-colors cursor-pointer relative"
                  >
                    <input
                      type="file"
                      onChange={(e) => {
                        const file = e.target.files?.[0]
                        if (file) {
                          setFormData({ ...formData, supplementaryFiles: file })
                        }
                      }}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      accept=".zip,.pdf,.doc,.docx"
                    />
                    <div className="text-4xl mb-2">📎</div>
                    <p className="font-bold text-lg mb-1">
                      {formData.supplementaryFiles 
                        ? formData.supplementaryFiles.name 
                        : 'DROP SUPPLEMENTARY FILES HERE'}
                    </p>
                    <p className="text-gray-600 mb-3 text-sm">
                      {formData.supplementaryFiles 
                        ? `Selected: ${(formData.supplementaryFiles.size / 1024 / 1024).toFixed(2)} MB`
                        : 'ZIP, PDF, or other supporting materials (optional)'}
                    </p>
                    <Button variant="outline" size="sm" type="button">
                      CHOOSE FILES
                    </Button>
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-sm uppercase tracking-wider mb-2">
                    COVER LETTER
                  </label>
                  <textarea
                    value={formData.coverLetter}
                    onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                    placeholder="Optional cover letter to the editors"
                    rows={4}
                    className="w-full px-4 py-3 bg-white border-4 border-black font-mono text-base
                             placeholder:text-gray-400 focus:outline-none focus:shadow-neo
                             transition-shadow duration-150 resize-none"
                  />
                </div>

                <div className="p-6 border-4 border-electric-blue bg-blue-50">
                  <div className="flex items-start gap-4">
                    <input
                      type="checkbox"
                      id="ai-review"
                      checked={formData.aiReviewOptIn}
                      onChange={(e) => setFormData({ ...formData, aiReviewOptIn: e.target.checked })}
                      className="w-6 h-6 border-4 border-black mt-1"
                    />
                    <div>
                      <label htmlFor="ai-review" className="font-bold text-lg cursor-pointer">
                        AI-ASSISTED REVIEW
                      </label>
                      <p className="text-sm text-gray-700 mt-1">
                        Opt-in to our AI-assisted peer review process for faster initial screening
                        and feedback. Human reviewers will still conduct the final review.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </div>
          )}

          {/* Step 4: Review & Submit */}
          {step === 4 && (
            <div className="space-y-6">
              <CardHeader>
                <CardTitle className="font-display text-3xl font-black">
                  REVIEW & SUBMIT
                </CardTitle>
                <p className="text-gray-600">
                  Review your submission before sending
                </p>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="p-6 border-4 border-black bg-gray-50">
                  <h3 className="font-bold text-lg mb-4">SUBMISSION SUMMARY</h3>
                  
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-bold">Title:</span> {formData.title || 'Not provided'}
                    </div>
                    <div>
                      <span className="font-bold">Authors:</span> {formData.authors.length} author(s)
                    </div>
                    <div>
                      <span className="font-bold">Keywords:</span> {formData.keywords || 'Not provided'}
                    </div>
                    <div>
                      <span className="font-bold">AI Review:</span> {formData.aiReviewOptIn ? 'Yes' : 'No'}
                    </div>
                  </div>
                </div>

                <div className="p-6 border-4 border-success bg-green-50">
                  <h3 className="font-bold text-lg mb-2">WHAT HAPPENS NEXT?</h3>
                  <ul className="text-sm space-y-1">
                    <li>• Initial review within 48 hours</li>
                    <li>• AI-assisted screening (if opted in)</li>
                    <li>• Peer review assignment within 1 week</li>
                    <li>• Review completion within 2-4 weeks</li>
                    <li>• Decision notification via email</li>
                  </ul>
                </div>

                <Button 
                  onClick={handleSubmit} 
                  className="w-full" 
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'SUBMITTING...' : 'SUBMIT PAPER FOR REVIEW'}
                </Button>
              </CardContent>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between mt-8 pt-8 border-t-4 border-black">
            <div>
              {step > 1 && (
                <Button variant="outline" onClick={handlePrevious}>
                  ← PREVIOUS
                </Button>
              )}
            </div>
            
            <div>
              {step < 4 && (
                <Button onClick={handleNext}>
                  NEXT →
                </Button>
              )}
            </div>
          </div>
        </Card>

        {/* Back to Home */}
        <div className="text-center mt-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-gray-600 font-bold hover:text-electric-blue transition-colors"
          >
            ← BACK TO HOME
          </Link>
        </div>
      </div>
    </div>
  )
} 