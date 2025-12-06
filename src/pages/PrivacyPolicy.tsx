import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  useEffect(() => {
    // Initialize scroll animations
    import('../utils/scrollAnimations').then(({ startScrollAnimations }) => {
      startScrollAnimations();
    });
  }, []);

  return (
    <div className="pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="section-padding gradient-hero">
        <div className="container-responsive text-center">
          <h1 className="animate-on-scroll text-responsive-xl font-bold mb-4 sm:mb-6 text-foreground">
            Privacy Policy
            <span className="block text-scriptly-animated">
              Scriptly
            </span>
          </h1>
          <p className="animate-on-scroll text-responsive-sm text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <p className="animate-on-scroll text-xs sm:text-sm text-muted-foreground italic">
            Last Updated: December 1, 2025
          </p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="section-padding bg-background">
        <div className="container-responsive max-w-4xl">
          <Card className="p-6 sm:p-8 md:p-10 bg-gradient-to-r from-purple-600/5 to-blue-600/5 backdrop-blur-xl border border-purple-400/20 rounded-xl shadow-lg">
            <div className="prose prose-sm sm:prose-base max-w-none text-muted-foreground">
              
              <div className="animate-on-scroll mb-8">
                <h2 className="text-responsive-lg font-bold mb-4 text-foreground border-b border-purple-400/30 pb-2">
                  Introduction
                </h2>
                <p className="mb-4 leading-relaxed">
                  Scriptly ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our iOS mobile application ("App"). Please read this Privacy Policy carefully.
                </p>
                <p className="leading-relaxed">
                  By using Scriptly, you agree to the collection and use of information in accordance with this policy.
                </p>
              </div>

              <div className="animate-on-scroll mb-8">
                <h2 className="text-responsive-lg font-bold mb-4 text-foreground border-b border-purple-400/30 pb-2">
                  1. Information We Collect
                </h2>
                
                <h3 className="text-lg font-semibold mb-3 text-foreground mt-6">1.1 Script Data (Stored Locally Only)</h3>
                <p className="font-semibold mb-2">What We Collect:</p>
                <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
                  <li>Script content (text, dialogue, stage directions)</li>
                  <li>Script metadata (name, file size, file type, emoji)</li>
                  <li>Character information</li>
                  <li>Voice assignments</li>
                  <li>Parsed script lines</li>
                  <li>Scene information</li>
                  <li>User notes and annotations</li>
                  <li>Rehearsal session data</li>
                </ul>
                
                <p className="font-semibold mb-2">How We Store It:</p>
                <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
                  <li>✅ <strong>100% Local Storage</strong>: All script data is stored exclusively on your device using iOS UserDefaults and FileManager</li>
                  <li>✅ <strong>Never Uploaded to Cloud</strong>: Your scripts never leave your device and are not stored on any server</li>
                  <li>✅ <strong>iOS Data Protection</strong>: iOS automatically encrypts UserDefaults when your device is locked</li>
                  <li>✅ <strong>No Cloud Backup</strong>: Scripts are not synced to iCloud or any cloud service</li>
                </ul>
                <p className="mb-4"><strong>Privacy Benefit:</strong> Your scripts are completely private and never accessible to us or any third party.</p>

                <h3 className="text-lg font-semibold mb-3 text-foreground mt-6">1.2 Analytics Data (Optional, With Your Consent)</h3>
                <p className="font-semibold mb-2">What We Collect (If You Consent):</p>
                <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
                  <li>App usage statistics (features used, session duration)</li>
                  <li>Performance metrics (app launch time, processing times)</li>
                  <li>Feature usage patterns (which features you use most)</li>
                  <li>Error rates and success rates</li>
                </ul>
                <p className="mb-4"><strong>Purpose:</strong> To understand how users interact with the app and improve the user experience.</p>

                <h3 className="text-lg font-semibold mb-3 text-foreground mt-6">1.3 Crash Reports (Optional, With Your Consent)</h3>
                <p className="font-semibold mb-2">What We Collect (If You Consent):</p>
                <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
                  <li>Crash logs and error reports</li>
                  <li>App state information at time of crash</li>
                  <li>Device information (iOS version, device model)</li>
                  <li>Performance metrics (memory usage, storage usage)</li>
                </ul>
                <p className="mb-4"><strong>Purpose:</strong> To identify and fix bugs, improve app stability and reliability.</p>

                <h3 className="text-lg font-semibold mb-3 text-foreground mt-6">1.4 Data Sent for Processing (Temporary)</h3>
                <p className="mb-2">When you use certain features, we temporarily send script content to our processing servers:</p>
                <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
                  <li><strong>Script Parsing</strong>: Script content is sent to Supabase Edge Functions for AI-powered parsing (uses OpenAI GPT-4)</li>
                  <li><strong>AI Insights</strong>: Script content and your questions are sent for AI-generated insights (uses OpenAI)</li>
                  <li><strong>Text-to-Speech (TTS)</strong>: Script lines are sent for voice generation (uses OpenAI TTS)</li>
                  <li><strong>Ask Scriptly</strong>: Your questions and script context are sent for AI responses (uses OpenAI)</li>
                </ul>
                <p className="font-semibold mb-2">Important Notes:</p>
                <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
                  <li>⚠️ Script content is sent to third-party services (Supabase, OpenAI) for processing</li>
                  <li>⚠️ Script content is NOT stored on our servers after processing</li>
                  <li>⚠️ Script content may be cached temporarily by Supabase for performance (up to 30 days)</li>
                  <li>✅ Processing is done server-side - your device never directly connects to OpenAI</li>
                  <li>✅ Rate limiting is in place to prevent abuse and control costs</li>
                </ul>

                <h3 className="text-lg font-semibold mb-3 text-foreground mt-6">1.5 Information We Do NOT Collect</h3>
                <p className="mb-2">We do NOT collect:</p>
                <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
                  <li>❌ Personal identification information (name, email, phone number)</li>
                  <li>❌ Location data</li>
                  <li>❌ Contacts or address book information</li>
                  <li>❌ Photos or media files (except scripts you upload)</li>
                  <li>❌ Payment information (handled by Apple App Store)</li>
                  <li>❌ Biometric data</li>
                  <li>❌ Device identifiers used for tracking across apps</li>
                </ul>
              </div>

              <div className="animate-on-scroll mb-8">
                <h2 className="text-responsive-lg font-bold mb-4 text-foreground border-b border-purple-400/30 pb-2">
                  2. How We Use Your Information
                </h2>
                <p className="mb-4 leading-relaxed">
                  We use the information we collect to provide, maintain, and improve our services, process your requests, and ensure the security of our app.
                </p>
              </div>

              <div className="animate-on-scroll mb-8">
                <h2 className="text-responsive-lg font-bold mb-4 text-foreground border-b border-purple-400/30 pb-2">
                  3. Data Storage and Security
                </h2>
                <p className="mb-4 leading-relaxed">
                  All script data is stored locally on your device using iOS UserDefaults, encrypted by iOS Data Protection API when your device is locked. Script content sent for processing is not permanently stored on our servers.
                </p>
              </div>

              <div className="animate-on-scroll mb-8">
                <h2 className="text-responsive-lg font-bold mb-4 text-foreground border-b border-purple-400/30 pb-2">
                  4. Data Sharing and Disclosure
                </h2>
                <p className="mb-4 leading-relaxed">
                  We share data with third-party services (Supabase, OpenAI, Firebase) only for processing and analytics purposes. We do not sell your data. For more details, see the full privacy policy.
                </p>
              </div>

              <div className="animate-on-scroll mb-8">
                <h2 className="text-responsive-lg font-bold mb-4 text-foreground border-b border-purple-400/30 pb-2">
                  5. Your Privacy Rights
                </h2>
                <p className="mb-4 leading-relaxed">
                  You have full control over your local data. You can delete scripts at any time, disable analytics and crash reporting in Privacy Settings, and delete all data by deleting the app.
                </p>
              </div>

              <div className="animate-on-scroll mb-8">
                <h2 className="text-responsive-lg font-bold mb-4 text-foreground border-b border-purple-400/30 pb-2">
                  6. Children's Privacy
                </h2>
                <p className="mb-4 leading-relaxed">
                  Scriptly is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13.
                </p>
              </div>

              <div className="animate-on-scroll mb-8">
                <h2 className="text-responsive-lg font-bold mb-4 text-foreground border-b border-purple-400/30 pb-2">
                  7. Data Retention
                </h2>
                <p className="mb-4 leading-relaxed">
                  Local data is stored on your device until you delete it. Server-side data (script content) is not permanently stored and is cached temporarily (up to 30 days).
                </p>
              </div>

              <div className="animate-on-scroll mb-8">
                <h2 className="text-responsive-lg font-bold mb-4 text-foreground border-b border-purple-400/30 pb-2">
                  8. International Data Transfers
                </h2>
                <p className="mb-4 leading-relaxed">
                  Your information may be transferred to and processed in countries other than your country of residence. By using Scriptly, you consent to these transfers.
                </p>
              </div>

              <div className="animate-on-scroll mb-8">
                <h2 className="text-responsive-lg font-bold mb-4 text-foreground border-b border-purple-400/30 pb-2">
                  9. Changes to This Privacy Policy
                </h2>
                <p className="mb-4 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy in the app and updating the "Last Updated" date.
                </p>
              </div>

              <div className="animate-on-scroll mb-8">
                <h2 className="text-responsive-lg font-bold mb-4 text-foreground border-b border-purple-400/30 pb-2">
                  10. Contact Us
                </h2>
                <p className="mb-4 leading-relaxed">
                  If you have any questions about this Privacy Policy or our data practices, please contact us at: <a href="mailto:scriptlyactingapp@gmail.com" className="text-purple-400 hover:text-purple-300 underline">scriptlyactingapp@gmail.com</a>
                </p>
              </div>

              <div className="animate-on-scroll mt-8 p-6 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-xl border-l-4 border-purple-400/50">
                <h3 className="text-lg font-semibold mb-4 text-foreground">Summary</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>✅ <strong>Your scripts are stored 100% locally</strong> - never uploaded to cloud storage</li>
                  <li>✅ <strong>Analytics and crash reporting are optional</strong> - you control them in Privacy Settings</li>
                  <li>⚠️ <strong>Script content is sent to third-party services</strong> for AI processing (required for AI features)</li>
                  <li>✅ <strong>No personal information is collected</strong></li>
                  <li>✅ <strong>You can delete all data</strong> by deleting the app</li>
                </ul>
                <p className="mt-4 font-semibold text-foreground">
                  Your privacy is important to us. We've designed Scriptly to keep your scripts private and secure.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-xl border-t border-purple-400/20 text-purple-100 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-4">
            <div className="text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-purple-100">Scriptly</h3>
              <p className="text-sm sm:text-base text-purple-200">Master your craft. Anytime, anywhere.</p>
            </div>
            <div className="flex gap-3 sm:gap-4">
              <a
                href="https://instagram.com/scriptlyapp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
              >
                <Button variant="ghost" size="icon" className="touch-target text-purple-200 hover:text-purple-100 hover:bg-purple-500/20 border border-purple-400/30">
                  <Instagram className="w-5 h-5" />
                </Button>
              </a>
            </div>
          </div>
          <div className="text-center sm:text-left text-purple-200 text-xs sm:text-sm">
            <div className="mb-2">
              © 2025 Scriptly. All rights reserved. Available in the iOS App Store.
            </div>
            <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
              <Link 
                to="/privacy-policy" 
                className="text-purple-300 hover:text-purple-100 underline transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms-of-service" 
                className="text-purple-300 hover:text-purple-100 underline transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;

