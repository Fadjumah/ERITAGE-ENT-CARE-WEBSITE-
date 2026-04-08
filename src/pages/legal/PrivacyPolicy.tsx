import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingContactButtons from "@/components/layout/FloatingContactButtons";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Eritage ENT Care</title>
        <meta name="description" content="Privacy Policy for Eritage ENT Care. Learn how we collect, use, and protect your personal information." />
        <link rel="canonical" href="https://eritageentcare.com/privacy-policy" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-8">Privacy Policy</h1>
              <p className="text-muted-foreground mb-8">Last updated: January 2026</p>

              <div className="prose prose-lg max-w-none space-y-8">
                <section>
                  <h2 className="text-2xl font-serif font-bold mb-4">1. Introduction</h2>
                  <p className="text-foreground leading-relaxed mb-4">
                    Eritage ENT Care ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website www.eritageentcare.com and use our healthcare services.
                  </p>
                  <p className="text-foreground leading-relaxed">
                    Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-serif font-bold mb-4">2. Information We Collect</h2>
                  <h3 className="text-xl font-serif font-semibold mb-3">Personal Information</h3>
                  <p className="text-foreground leading-relaxed mb-4">
                    We may collect personal information that you voluntarily provide to us when you:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-foreground mb-4">
                    <li>Book an appointment through our website</li>
                    <li>Submit a question through our "Ask an ENT Specialist" feature</li>
                    <li>Contact us via phone, email, or WhatsApp</li>
                    <li>Subscribe to our health tips or newsletter</li>
                  </ul>
                  <p className="text-foreground leading-relaxed">
                    This information may include your name, phone number, email address, and health-related queries.
                  </p>

                  <h3 className="text-xl font-serif font-semibold mb-3 mt-6">Automatically Collected Information</h3>
                  <p className="text-foreground leading-relaxed">
                    When you visit our website, we may automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-serif font-bold mb-4">3. How We Use Your Information</h2>
                  <p className="text-foreground leading-relaxed mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-foreground">
                    <li>Schedule and manage your medical appointments</li>
                    <li>Respond to your health-related inquiries</li>
                    <li>Provide and improve our healthcare services</li>
                    <li>Send you appointment reminders and follow-up communications</li>
                    <li>Analyze website usage to improve user experience</li>
                    <li>Comply with legal and regulatory requirements</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-serif font-bold mb-4">4. Cookies and Advertising</h2>
                  <p className="text-foreground leading-relaxed mb-4">
                    Our website uses cookies to enhance your browsing experience. We also use third-party advertising services, including Google AdSense, which may use cookies to serve ads based on your prior visits to our website.
                  </p>
                  <p className="text-foreground leading-relaxed mb-4">
                    Google's use of advertising cookies enables it and its partners to serve ads based on your visit to our site and/or other sites on the Internet. You may opt out of personalized advertising by visiting{" "}
                    <a href="https://www.google.com/settings/ads" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                      Google Ads Settings
                    </a>.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-serif font-bold mb-4">5. Data Security</h2>
                  <p className="text-foreground leading-relaxed">
                    We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-serif font-bold mb-4">6. Third-Party Services</h2>
                  <p className="text-foreground leading-relaxed">
                    Our website may contain links to third-party websites and services. We are not responsible for the privacy practices of these third parties. We encourage you to read the privacy policies of any third-party sites you visit.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-serif font-bold mb-4">7. Your Rights</h2>
                  <p className="text-foreground leading-relaxed mb-4">
                    You have the right to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-foreground">
                    <li>Access the personal information we hold about you</li>
                    <li>Request correction of inaccurate information</li>
                    <li>Request deletion of your personal information</li>
                    <li>Opt out of marketing communications</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-serif font-bold mb-4">8. Contact Us</h2>
                  <p className="text-foreground leading-relaxed mb-4">
                    If you have questions about this Privacy Policy or our privacy practices, please contact us:
                  </p>
                  <ul className="space-y-2 text-foreground">
                    <li><strong>Email:</strong> info@eritageentcare.com</li>
                    <li><strong>Phone:</strong> +256 740 166 778</li>
                    <li><strong>Address:</strong> Along Entebbe Road, Entebbe, Central Region, Uganda</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-serif font-bold mb-4">9. Changes to This Policy</h2>
                  <p className="text-foreground leading-relaxed">
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                  </p>
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

export default PrivacyPolicy;
