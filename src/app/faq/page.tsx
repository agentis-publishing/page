'use client'

import { useState } from 'react'
import { Button } from "@/components/neo/Button"

interface FAQItem {
  question: string
  answer: string
  category: string
}

const faqData: FAQItem[] = [
  // General Questions
  {
    category: "General",
    question: "What is Agentis Biology?",
    answer: "Agentis Biology is a peer-reviewed, AI-assisted, open-access journal focused on democratizing scientific publishing for research on proteins, nucleic acids, and microbial genomics. We combine traditional peer review with AI assistance to provide faster, more comprehensive manuscript evaluation."
  },
  {
    category: "General",
    question: "What types of research does Agentis Biology publish?",
    answer: "We publish original research articles, reviews, and short communications in the fields of protein science, nucleic acid research, microbial genomics, computational biology, and related interdisciplinary areas. We particularly welcome studies that use innovative computational approaches or AI methodologies."
  },
  {
    category: "General",
    question: "Is Agentis Biology truly open access?",
    answer: "Yes, all articles published in Agentis Biology are freely available to read, download, and share under Creative Commons licenses. There are no subscription fees or paywalls for readers."
  },

  // Submission Process
  {
    category: "Submission Process",
    question: "How do I submit a manuscript?",
    answer: "You can submit your manuscript through our online submission system. Simply create an account, upload your manuscript files, and complete the submission form. Our system supports various file formats including PDF, Word, and LaTeX."
  },
  {
    category: "Submission Process",
    question: "What file formats do you accept?",
    answer: "We accept manuscripts in PDF, Microsoft Word (.docx), and LaTeX formats. Supplementary materials can be submitted in various formats including images (PNG, JPG, TIFF), data files (CSV, Excel), and code repositories (GitHub links)."
  },
  {
    category: "Submission Process",
    question: "Are there any submission fees?",
    answer: "No, there are no submission fees. Agentis Biology is committed to making scientific publishing accessible to researchers regardless of their financial resources."
  },
  {
    category: "Submission Process",
    question: "Can I suggest reviewers for my manuscript?",
    answer: "Yes, you can suggest up to 3 potential reviewers during the submission process. Please provide their names, affiliations, and email addresses. However, the final selection of reviewers is at the discretion of our editorial team."
  },

  // AI-Assisted Review
  {
    category: "AI-Assisted Review",
    question: "How does the AI-assisted review process work?",
    answer: "Our AI system performs an initial analysis of your manuscript, checking for methodological soundness, statistical validity, and adherence to reporting standards. This AI assessment complements traditional peer review and helps identify potential issues early in the process."
  },
  {
    category: "AI-Assisted Review",
    question: "Will AI replace human reviewers?",
    answer: "No, AI will never replace human reviewers. Our AI system assists human experts by providing preliminary assessments and identifying potential concerns, but all final decisions are made by qualified human editors and reviewers with expertise in your field."
  },
  {
    category: "AI-Assisted Review",
    question: "Can I opt out of AI-assisted review?",
    answer: "While we recommend using our AI-assisted review for faster processing, you can request traditional peer review only. However, this may result in longer review times."
  },

  // Publication and Access
  {
    category: "Publication and Access",
    question: "How long does the review process take?",
    answer: "Our AI-assisted review process typically takes 2-4 weeks for initial assessment, followed by 4-6 weeks for peer review. The entire process from submission to decision usually takes 6-10 weeks, significantly faster than traditional journals."
  },
  {
    category: "Publication and Access",
    question: "What happens after my paper is accepted?",
    answer: "Once accepted, your paper will be published online within 1-2 weeks. We provide both HTML and PDF versions, and your paper will be assigned a DOI for permanent citation. All papers are also archived in major academic databases."
  },
  {
    category: "Publication and Access",
    question: "Can I update my published paper?",
    answer: "Yes, we support versioning. You can submit corrections, updates, or new versions of your paper. Each version is clearly marked and the publication history is maintained for transparency."
  },

  // Technical Support
  {
    category: "Technical Support",
    question: "I'm having trouble with the submission system. Who can help?",
    answer: "Our technical support team is available to help with submission issues. You can contact us at support@agentis.science or use the live chat feature on our website during business hours."
  },
  {
    category: "Technical Support",
    question: "Do you provide formatting assistance?",
    answer: "Yes, we offer formatting assistance for accepted manuscripts. Our editorial team can help ensure your paper meets our publication standards. We also provide LaTeX and Word templates to help with initial formatting."
  },
  {
    category: "Technical Support",
    question: "Can I track the status of my submission?",
    answer: "Yes, you can track your submission status through your author dashboard. You'll receive email notifications at each stage of the review process, and you can log in anytime to check the current status."
  }
]

const categories = ["General", "Submission Process", "AI-Assisted Review", "Publication and Access", "Technical Support"]

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("General")
  const [openItems, setOpenItems] = useState<Set<number>>(new Set())

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }

  const filteredFAQs = faqData.filter(item => item.category === selectedCategory)

  return (
    <div className="min-h-screen bg-light-gray">
      {/* Header */}
      <section className="py-20 px-4 bg-white border-b-3 border-black">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-display-lg font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Find answers to common questions about Agentis Biology, our submission process, 
            and AI-assisted peer review system.
          </p>
          <Button href="/contact" size="lg">
            Still have questions? Contact us
          </Button>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Category Navigation */}
            <div className="lg:col-span-1">
              <div className="bg-white border-4 border-black shadow-neo-lg p-6 sticky top-8">
                <h3 className="font-display font-bold text-xl mb-6">Categories</h3>
                <nav className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-4 py-3 font-bold uppercase tracking-wider transition-all duration-150 border-3 border-black ${
                        selectedCategory === category
                          ? 'bg-accent text-white shadow-neo-sm'
                          : 'bg-white text-black hover:bg-light-gray'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* FAQ Items */}
            <div className="lg:col-span-3">
              <div className="space-y-4">
                {filteredFAQs.map((item) => {
                  const globalIndex = faqData.indexOf(item)
                  const isOpen = openItems.has(globalIndex)
                  
                  return (
                    <div
                      key={globalIndex}
                      className="bg-white border-4 border-black shadow-neo hover:shadow-neo-hover transition-all duration-200"
                    >
                      <button
                        onClick={() => toggleItem(globalIndex)}
                        className="w-full text-left p-6 flex items-center justify-between hover:bg-light-gray transition-colors"
                      >
                        <h3 className="font-display font-bold text-lg pr-4">
                          {item.question}
                        </h3>
                        <div className={`text-2xl font-bold transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}>
                          +
                        </div>
                      </button>
                      
                      {isOpen && (
                        <div className="px-6 pb-6 border-t-3 border-black bg-light-gray">
                          <p className="text-gray-700 leading-relaxed pt-4">
                            {item.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4 bg-accent text-white border-t-3 border-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-display-md font-bold mb-6">
            Need More Help?
          </h2>
          <p className="text-xl mb-8 opacity-90">
                         Can&apos;t find the answer you&apos;re looking for? Our team is here to help.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              href="/contact"
            >
              Contact Support
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-accent"
              href="mailto:support@agentis.science"
            >
              Email Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 