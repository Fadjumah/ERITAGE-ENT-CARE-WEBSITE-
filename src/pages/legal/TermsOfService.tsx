import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingContactButtons from "@/components/layout/FloatingContactButtons";

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Eritage ENT Care</title>
        <meta name="description" content="Terms of Service for Eritage ENT Care. Read our terms and conditions for using our website and healthcare services." />
        <link rel="canonical" href="https://eritageentcare.com/terms-of-service" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-8">Terms of Service</h1>
              <p className="text-muted-foreground mb-8">Last updated: January 2026</p>

              <div className="prose prose-lg max-w-none space-y-8">
                <section>
                  <h2 className="text-2xl font-serif font-bold mb-4">1. Acceptance of Terms</h2>
                  <p className="text-foreground leading-relaxed">
                    By accessing and using the Eritage ENT Care website (www.eritageentcare.com), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-serif font-bold mb-4">2. Description of Services</h2>
                  <p className="text-foreground leading-relaxed mb-4">
                    Eritage ENT Care provides ear, nose, and throat (ENT) healthcare services in Entebbe, Uganda. Our website provides:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-foreground">
                    <li>Information about our ENT services and treatments</li>
                    <li>Online appointment booking</li>
                    <li>Health education articles and resources</li>
                    <li>Contact information for our clinic</li>
                    <li>A platform to ask ENT-related questions</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-serif font-bold mb-4">3. Medical Disclaimer</h2>
                  <p className="text-foreground leading-relaxed mb-4">
                    <strong>Important:</strong> The information provided on this website is for general informational and educational purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment.
                  </p>
                  <p className="text-foreground leading-relaxed mb-4">
                    Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read on this website.
                  </p>
                  <p className="text-foreground leading-relaxed">
                    If you think you may have a medical emergency, call your doctor or emergency services immediately.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-serif font-bold mb-4">4. Appointment Booking</h2>
                  <p className="text-foreground leading-relaxed mb-4">
                    When booking an appointment through our website:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-foreground">
                    <li>You agree to provide accurate and complete information</li>
                    <li>Appointment requests are subject to confirmation by our staff</li>
                    <li>We reserve the right to reschedule or cancel appointments if necessary</li>
                    <li>Please arrive on time for your scheduled appointments</li>
                    <li>Cancellations should be made at least 24 hours in advance when possible</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-serif font-bold mb-4">5. User Conduct</h2>
                  <p className="text-foreground leading-relaxed mb-4">
                    When using our website, you agree not to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-foreground">
                    <li>Violate any applicable laws or regulations</li>
                    <li>Provide false or misleading information</li>
                    <li>Interfere with the proper functioning of the website</li>
                    <li>Attempt to gain unauthorized access to our systems</li>
                    <li>Use the website for any unlawful or harmful purpose</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-serif font-bold mb-4">6. Intellectual Property</h2>
                  <p className="text-foreground leading-relaxed">
                    All content on this website, including text, graphics, logos, images, and software, is the property of Eritage ENT Care or its content suppliers and is protected by copyright and intellectual property laws. You may not reproduce, distribute, or create derivative works from this content without our express written permission.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-serif font-bold mb-4">7. Third-Party Links</h2>
                  <p className="text-foreground leading-relaxed">
                    Our website may contain links to third-party websites. These links are provided for your convenience only. We do not endorse or assume any responsibility for the content or practices of these third-party sites.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-serif font-bold mb-4">8. Limitation of Liability</h2>
                  <p className="text-foreground leading-relaxed">
                    To the fullest extent permitted by law, Eritage ENT Care shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our website or services. Our total liability shall not exceed the amount paid by you for the services in question.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-serif font-bold mb-4">9. Indemnification</h2>
                  <p className="text-foreground leading-relaxed">
                    You agree to indemnify and hold harmless Eritage ENT Care and its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising out of your use of our website or violation of these Terms of Service.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-serif font-bold mb-4">10. Governing Law</h2>
                  <p className="text-foreground leading-relaxed">
                    These Terms of Service shall be governed by and construed in accordance with the laws of the Republic of Uganda, without regard to its conflict of law provisions.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-serif font-bold mb-4">11. Changes to Terms</h2>
                  <p className="text-foreground leading-relaxed">
                    We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website after any changes constitutes your acceptance of the new terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-serif font-bold mb-4">12. Contact Information</h2>
                  <p className="text-foreground leading-relaxed mb-4">
                    For questions about these Terms of Service, please contact us:
                  </p>
                  <ul className="space-y-2 text-foreground">
                    <li><strong>Email:</strong> info@eritageentcare.com</li>
                    <li><strong>Phone:</strong> +256 740 166 778</li>
                    <li><strong>Address:</strong> Along Entebbe Road, Entebbe, Central Region, Uganda</li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </main>

        <Footer />
        <FloatingContactButtons />
      </div>
    </>
  );
};

export default TermsOfService;
