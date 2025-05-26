import { Button } from "@/components/neo/Button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/neo/Card"
import { Input } from "@/components/neo/Input"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-light-gray border-b-3 border-black">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-display-lg font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Have questions, feedback, or need assistance? We&apos;re here to help. Fill out the form below or use one of our direct contact methods.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 px-4 border-b-3 border-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="font-display text-display-md font-bold mb-8 border-b-3 border-accent pb-2 inline-block">
                Send us a Message
              </h2>

              <Card>
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div>
                      <label className="block font-bold text-sm mb-2">
                        YOUR NAME *
                      </label>
                      <Input
                        type="text"
                        placeholder="Enter your name"
                        required
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-sm mb-2">
                        YOUR EMAIL *
                      </label>
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        required
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-sm mb-2">
                        SUBJECT *
                      </label>
                      <select className="w-full px-4 py-3 bg-white border-3 border-black font-mono text-base focus:outline-none focus:shadow-neo-sm transition-shadow duration-150">
                        <option>Enter message subject</option>
                        <option>General Inquiry</option>
                        <option>Submission Question</option>
                        <option>Technical Support</option>
                        <option>Editorial Board</option>
                        <option>Partnership</option>
                        <option>Press Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-bold text-sm mb-2">
                        MESSAGE *
                      </label>
                      <textarea
                        className="w-full px-4 py-3 bg-white border-3 border-black font-mono text-base focus:outline-none focus:shadow-neo-sm transition-shadow duration-150 min-h-32"
                        placeholder="Enter your message"
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="font-display text-display-md font-bold mb-8 border-b-3 border-accent pb-2 inline-block">
                Get in Touch
              </h2>

              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <div className="w-16 h-16 bg-accent border-3 border-black flex items-center justify-center mb-4">
                      <span className="text-white font-bold text-2xl">📧</span>
                    </div>
                    <CardTitle>Email</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-2">
                      <strong>info@agentis.science</strong>
                    </p>
                    <p className="text-gray-700">
                      For general inquiries and support
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="w-16 h-16 bg-dark border-3 border-black flex items-center justify-center mb-4">
                      <span className="text-white font-bold text-2xl">📝</span>
                    </div>
                    <CardTitle>Editorial Office</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-2">
                      <strong>info@agentis.science</strong>
                    </p>
                    <p className="text-gray-700">
                      For manuscript submissions and editorial inquiries
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="w-16 h-16 bg-accent border-3 border-black flex items-center justify-center mb-4">
                      <span className="text-white font-bold text-2xl">🛠️</span>
                    </div>
                    <CardTitle>Support</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-2">
                      <strong>info@agentis.science</strong>
                    </p>
                    <p className="text-gray-700">
                      For technical assistance and account help
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="w-16 h-16 bg-accent border-3 border-black flex items-center justify-center mb-4">
                      <span className="text-white font-bold text-2xl">📍</span>
                    </div>
                    <CardTitle>Location</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-2">
                      <strong>Berkeley, San Francisco Bay Area</strong>
                    </p>
                    <p className="text-gray-700">
                      California, United States
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connect With Us */}
      <section className="py-20 px-4 bg-light-gray border-b-3 border-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-display-md font-bold mb-12 border-b-3 border-accent pb-2 inline-block">
            Connect With Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-16 h-16 bg-accent border-3 border-black flex items-center justify-center mb-4 mx-auto">
                  <span className="text-white font-bold text-xl">📱</span>
                </div>
                <CardTitle>Social Media</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Follow us for updates and announcements
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-16 h-16 bg-dark border-3 border-black flex items-center justify-center mb-4 mx-auto">
                  <span className="text-white font-bold text-xl">📰</span>
                </div>
                <CardTitle>Newsletter</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Subscribe to our newsletter for the latest research
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-16 h-16 bg-accent border-3 border-black flex items-center justify-center mb-4 mx-auto">
                  <span className="text-white font-bold text-xl">💬</span>
                </div>
                <CardTitle>Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Join our research community discussions
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-display-md font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Looking for quick answers? Check out our comprehensive FAQ section.
          </p>
          <Button size="lg" variant="outline" href="/faq">
            View FAQ
          </Button>
        </div>
      </section>
    </div>
  )
}