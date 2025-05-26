export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-light-gray">
      {/* Header */}
      <section className="py-16 px-4 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-display-lg font-bold mb-6 text-center">
            TERMS OF SERVICE
          </h1>
          <p className="text-xl text-center text-gray-600">
            Last updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-4 border-black p-8 shadow-neo-lg">
            
            <div className="bg-yellow-100 border-2 border-yellow-400 p-4 rounded mb-8">
              <p className="font-bold text-yellow-800">
                These Terms of Service constitute a legal agreement between you and Agentis Science. 
                By using our platform, you agree to be bound by these terms.
              </p>
            </div>

            <h2 className="font-display text-2xl font-bold mb-6 border-b-2 border-gray-200 pb-2">
              Acceptance of Terms
            </h2>
            <p className="mb-6 leading-relaxed">
              By accessing or using the Agentis Science platform and services, you agree to be bound 
              by these Terms of Service and our Privacy Policy. If you do not agree to these terms, 
              please do not use our services.
            </p>

            <h2 className="font-display text-2xl font-bold mb-6 border-b-2 border-gray-200 pb-2">
              Description of Service
            </h2>
            <p className="mb-6 leading-relaxed">
              Agentis Science operates an open-access academic publishing platform that facilitates 
              the submission, peer review, and publication of scientific research across multiple 
              disciplines including biology, data science, and general scientific research.
            </p>

            <h2 className="font-display text-2xl font-bold mb-6 border-b-2 border-gray-200 pb-2">
              User Accounts and Registration
            </h2>
            <p className="mb-4 leading-relaxed">
              To submit manuscripts or participate in peer review, you must create an account. You agree to:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Provide accurate and complete information during registration</li>
              <li>Maintain the security of your account credentials</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
              <li>Accept responsibility for all activities under your account</li>
            </ul>

            <h2 className="font-display text-2xl font-bold mb-6 border-b-2 border-gray-200 pb-2">
              Content and Intellectual Property
            </h2>
            
            <h3 className="font-display text-xl font-bold mb-4">Your Content</h3>
            <p className="mb-4 leading-relaxed">
              When you submit content to Agentis Science, you:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Retain ownership of your intellectual property rights</li>
              <li>Grant us a license to process, review, and publish your work</li>
              <li>Warrant that you have the right to submit the content</li>
              <li>Agree that published content will be made available under open-access licenses</li>
            </ul>

            <h3 className="font-display text-xl font-bold mb-4">Platform Content</h3>
            <p className="mb-6 leading-relaxed">
              Our platform, including its design, functionality, and proprietary content, is protected 
              by intellectual property laws. You may not copy, modify, or distribute our platform 
              content without permission.
            </p>

            <h2 className="font-display text-2xl font-bold mb-6 border-b-2 border-gray-200 pb-2">
              Publication and Licensing
            </h2>
            <p className="mb-4 leading-relaxed">
              Articles published through Agentis Science are made available under open-access licenses, 
              typically Creative Commons Attribution (CC BY) licenses, which allow:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Free access to published research</li>
              <li>Reuse and redistribution with proper attribution</li>
              <li>Commercial and non-commercial use</li>
              <li>Creation of derivative works</li>
            </ul>

            <h2 className="font-display text-2xl font-bold mb-6 border-b-2 border-gray-200 pb-2">
              Prohibited Uses
            </h2>
            <p className="mb-4 leading-relaxed">
              You agree not to use our services for:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Submitting plagiarized, fraudulent, or unethical content</li>
              <li>Violating intellectual property rights</li>
              <li>Disrupting the platform or other users&apos; access</li>
              <li>Attempting to gain unauthorized access to our systems</li>
              <li>Submitting content that violates applicable laws</li>
              <li>Misrepresenting your identity or affiliations</li>
            </ul>

            <h2 className="font-display text-2xl font-bold mb-6 border-b-2 border-gray-200 pb-2">
              Research Integrity and Ethics
            </h2>
            <p className="mb-4 leading-relaxed">
              All users must adhere to the highest standards of research integrity:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Ensure originality and proper attribution of all work</li>
              <li>Disclose conflicts of interest and funding sources</li>
              <li>Follow ethical guidelines for research involving human or animal subjects</li>
              <li>Provide accurate and complete information in submissions</li>
              <li>Cooperate with integrity investigations when necessary</li>
            </ul>

            <h2 className="font-display text-2xl font-bold mb-6 border-b-2 border-gray-200 pb-2">
              Disclaimer of Warranties
            </h2>
            <p className="mb-6 leading-relaxed">
              Our services are provided &quot;as is&quot; without warranties of any kind. We do not guarantee 
              uninterrupted access, error-free operation, or that our services will meet your specific 
              requirements. We disclaim all warranties, express or implied, including merchantability 
              and fitness for a particular purpose.
            </p>

            <h2 className="font-display text-2xl font-bold mb-6 border-b-2 border-gray-200 pb-2">
              Limitation of Liability
            </h2>
            <p className="mb-6 leading-relaxed">
              To the maximum extent permitted by law, Agentis Science shall not be liable for any 
              indirect, incidental, special, or consequential damages arising from your use of our 
              services, including but not limited to loss of data, profits, or business opportunities.
            </p>

            <h2 className="font-display text-2xl font-bold mb-6 border-b-2 border-gray-200 pb-2">
              Modifications to Terms
            </h2>
            <p className="mb-6 leading-relaxed">
              We reserve the right to modify these Terms of Service at any time. We will notify users 
              of material changes by posting updated terms on our website. Continued use of our 
              services after changes constitutes acceptance of the new terms.
            </p>

            <h2 className="font-display text-2xl font-bold mb-6 border-b-2 border-gray-200 pb-2">
              Contact Information
            </h2>
            <p className="mb-4 leading-relaxed">
              For questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-gray-50 border-2 border-gray-200 p-4 rounded">
              <p className="font-bold">Agentis Science</p>
              <p>Berkeley, San Francisco Bay Area</p>
              <p>Email: <a href="mailto:info@agentis.science" className="text-blue-600 hover:underline">info@agentis.science</a></p>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
