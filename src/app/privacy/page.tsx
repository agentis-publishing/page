export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-light-gray">
      {/* Header */}
      <section className="py-16 px-4 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-display-lg font-bold mb-6 text-center">
            PRIVACY POLICY
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
            
            <h2 className="font-display text-2xl font-bold mb-6 border-b-2 border-gray-200 pb-2">
              Introduction
            </h2>
            <p className="mb-6 leading-relaxed">
              Agentis Science is committed to protecting your personal information and privacy. 
              This privacy policy describes how we collect, use, and protect information when you 
              use our publishing platform and services. We are dedicated to maintaining the highest 
              standards of integrity and transparency in all our data handling practices.
            </p>

            <h2 className="font-display text-2xl font-bold mb-6 border-b-2 border-gray-200 pb-2">
              Information We Collect
            </h2>
            
            <h3 className="font-display text-xl font-bold mb-4">Personal Information</h3>
            <p className="mb-4 leading-relaxed">
              We collect personal information when you interact with our platform:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Name, email address, and institutional affiliation when you register or submit manuscripts</li>
              <li>ORCID iD to help identify you and connect your work to your research profile</li>
              <li>Contact information including phone number and mailing address</li>
              <li>Academic credentials and areas of expertise for editorial and review purposes</li>
              <li>Payment information for processing publication fees</li>
            </ul>

            <h3 className="font-display text-xl font-bold mb-4">Technical Information</h3>
            <p className="mb-6 leading-relaxed">
              We automatically collect certain technical information to improve our services:
              IP address, browser type, device information, and usage patterns on our website.
              This helps us understand how users interact with our platform and optimize performance.
            </p>

            <h2 className="font-display text-2xl font-bold mb-6 border-b-2 border-gray-200 pb-2">
              How We Use Your Information
            </h2>
            <p className="mb-4 leading-relaxed">
              We use your personal information for the following purposes:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Processing and reviewing manuscript submissions</li>
              <li>Facilitating peer review and editorial processes</li>
              <li>Publishing accepted articles and research outputs</li>
              <li>Communicating with authors, reviewers, and editors</li>
              <li>Processing payments for publication fees</li>
              <li>Improving our services and user experience</li>
              <li>Ensuring compliance with publishing standards and research integrity</li>
            </ul>

            <h2 className="font-display text-2xl font-bold mb-6 border-b-2 border-gray-200 pb-2">
              Information Sharing and Disclosure
            </h2>
            <p className="mb-4 leading-relaxed">
              We may share your information in the following circumstances:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>With peer reviewers and editors for manuscript evaluation</li>
              <li>In published articles (author names, affiliations, and ORCID iDs)</li>
              <li>With service providers who assist in our operations</li>
              <li>When required by law or to protect our rights and safety</li>
              <li>With your explicit consent for other purposes</li>
            </ul>
            <p className="mb-6 leading-relaxed">
              We never sell or lease your personal information to third parties for commercial purposes.
            </p>

            <h2 className="font-display text-2xl font-bold mb-6 border-b-2 border-gray-200 pb-2">
              Data Security
            </h2>
            <p className="mb-6 leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal 
              information against unauthorized access, alteration, disclosure, or destruction. This 
              includes encryption, secure servers, and regular security assessments.
            </p>

            <h2 className="font-display text-2xl font-bold mb-6 border-b-2 border-gray-200 pb-2">
              Your Rights
            </h2>
            <p className="mb-4 leading-relaxed">
              You have the following rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Access and review your personal information</li>
              <li>Request corrections to inaccurate information</li>
              <li>Request deletion of your information (subject to legal and archival requirements)</li>
              <li>Withdraw consent for certain processing activities</li>
              <li>Object to processing based on legitimate interests</li>
            </ul>

            <h2 className="font-display text-2xl font-bold mb-6 border-b-2 border-gray-200 pb-2">
              Contact Information
            </h2>
            <p className="mb-4 leading-relaxed">
              If you have questions about this privacy policy or wish to exercise your rights, 
              please contact us:
            </p>
            <div className="bg-gray-50 border-2 border-gray-200 p-4 rounded">
              <p className="font-bold">Agentis Science</p>
              <p>Berkeley, San Francisco Bay Area</p>
              <p>Email: <a href="mailto:info@agentis.science" className="text-blue-600 hover:underline">info@agentis.science</a></p>
            </div>

            <h2 className="font-display text-2xl font-bold mb-6 border-b-2 border-gray-200 pb-2 mt-8">
              Changes to This Policy
            </h2>
            <p className="mb-6 leading-relaxed">
              We may update this privacy policy from time to time. We will notify you of any 
              material changes by posting the new policy on our website and updating the 
              &quot;Last updated&quot; date above.
            </p>

          </div>
        </div>
      </section>
    </div>
  )
}
