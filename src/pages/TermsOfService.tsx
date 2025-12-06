import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const TermsOfService = () => {
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
            Terms of Service
            <span className="block text-scriptly-animated">
              Scriptly
            </span>
          </h1>
          <p className="animate-on-scroll text-responsive-sm text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
            Please read these terms carefully before using Scriptly. By using our app, you agree to be bound by these terms.
          </p>
          <p className="animate-on-scroll text-xs sm:text-sm text-muted-foreground italic">
            Last Updated: December 1, 2025
          </p>
        </div>
      </section>

      {/* Terms of Service Content */}
      <section className="section-padding bg-background">
        <div className="container-responsive max-w-4xl">
          <Card className="p-6 sm:p-8 md:p-10 bg-gradient-to-r from-purple-600/5 to-blue-600/5 backdrop-blur-xl border border-purple-400/20 rounded-xl shadow-lg">
            <div className="prose prose-sm sm:prose-base max-w-none text-muted-foreground">
              
              <div className="animate-on-scroll mb-8">
                <h2 className="text-responsive-lg font-bold mb-4 text-foreground border-b border-purple-400/30 pb-2">
                  1. Agreement to Terms
                </h2>
                <p className="mb-4 leading-relaxed">
                  By downloading, installing, accessing, or using Scriptly ("the App," "we," "our," or "us"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the App.
                </p>
                <p className="leading-relaxed">
                  We may update these Terms from time to time. We will notify you of any material changes by posting the updated Terms in the App and updating the "Last Updated" date. Your continued use of the App after such changes constitutes your acceptance of the new Terms.
                </p>
              </div>

              <div className="animate-on-scroll mb-8">
                <h2 className="text-responsive-lg font-bold mb-4 text-foreground border-b border-purple-400/30 pb-2">
                  2. Description of Service
                </h2>
                <p className="mb-4 leading-relaxed">Scriptly is a mobile application for iOS devices that helps actors and performers:</p>
                <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
                  <li>Upload and manage scripts</li>
                  <li>Parse scripts using AI-powered technology</li>
                  <li>Generate AI insights about scripts and characters</li>
                  <li>Practice lines with text-to-speech functionality</li>
                  <li>Organize and annotate scripts</li>
                  <li>Rehearse with speech recognition features</li>
                </ul>
                <p className="leading-relaxed">
                  The App processes scripts locally on your device. Some features require sending script content to third-party services (Supabase, OpenAI) for AI processing. See our <Link to="/privacy-policy" className="text-purple-400 hover:text-purple-300 underline">Privacy Policy</Link> for details.
                </p>
              </div>

              <div className="animate-on-scroll mb-8">
                <h2 className="text-responsive-lg font-bold mb-4 text-foreground border-b border-purple-400/30 pb-2">
                  3. Eligibility
                </h2>
                <p className="mb-4 leading-relaxed">
                  You must be at least 13 years old to use Scriptly. If you are under 18, you represent that you have your parent's or guardian's permission to use the App and that they have agreed to these Terms on your behalf.
                </p>
              </div>

              <div className="animate-on-scroll mb-8">
                <h2 className="text-responsive-lg font-bold mb-4 text-foreground border-b border-purple-400/30 pb-2">
                  4. Account and Registration
                </h2>
                <p className="mb-4 leading-relaxed">
                  <strong>Current Status:</strong> Scriptly does not require user accounts or registration. All data is stored locally on your device.
                </p>
                <p className="leading-relaxed">
                  <strong>Future Changes:</strong> If we add cloud sync or account features in the future, you may be required to create an account. We will notify you of any such changes and update these Terms accordingly.
                </p>
              </div>

              <div className="animate-on-scroll mb-8">
                <h2 className="text-responsive-lg font-bold mb-4 text-foreground border-b border-purple-400/30 pb-2">
                  5. Subscription Terms
                </h2>
                
                <h3 className="text-lg font-semibold mb-3 text-foreground mt-6">5.1 Subscription Plans</h3>
                <p className="mb-4">Scriptly offers the following subscription plans:</p>
                
                <div className="p-4 mb-4 bg-gradient-to-r from-green-600/10 to-green-500/10 rounded-lg border-l-4 border-green-400/50">
                  <h4 className="font-semibold mb-2 text-foreground">Free Tier</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Limited features (as specified in the App)</li>
                    <li>Basic functionality</li>
                    <li>Local script storage</li>
                    <li>Limited AI processing (subject to rate limits)</li>
                  </ul>
                </div>

                <div className="p-4 mb-4 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-lg border-l-4 border-purple-400/50">
                  <h4 className="font-semibold mb-2 text-foreground">Pro Subscription</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Unlimited scripts</li>
                    <li>Full access to all AI features</li>
                    <li>Advanced text-to-speech features</li>
                    <li>Priority processing</li>
                    <li>All premium features</li>
                  </ul>
                </div>

                <h3 className="text-lg font-semibold mb-3 text-foreground mt-6">5.2 Free Trial</h3>
                <p className="font-semibold mb-2">7-Day Free Trial:</p>
                <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
                  <li>New users are eligible for a 7-day free trial of the Pro subscription</li>
                  <li>The free trial begins immediately upon subscribing</li>
                  <li>During the trial period, you have full access to all Pro features</li>
                  <li>No charges will be made during the trial period</li>
                  <li>You can cancel at any time during the trial to avoid being charged</li>
                </ul>

                <h3 className="text-lg font-semibold mb-3 text-foreground mt-6">5.3 Subscription Pricing</h3>
                <div className="p-4 mb-4 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-lg border-l-4 border-purple-400/50">
                  <h4 className="font-semibold mb-2 text-foreground">Monthly Subscription</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li><strong>Price:</strong> $14.99 USD per month (or equivalent in your local currency)</li>
                    <li>Billed monthly through Apple App Store</li>
                    <li>Price may vary by region due to currency conversion and local taxes</li>
                  </ul>
                </div>

                <h3 className="text-lg font-semibold mb-3 text-foreground mt-6">5.4 Auto-Renewal</h3>
                <p className="mb-4 leading-relaxed">
                  Your subscription will automatically renew at the end of each billing period. You can turn off auto-renewal at any time in your Apple ID account settings.
                </p>

                <h3 className="text-lg font-semibold mb-3 text-foreground mt-6">5.5 Cancellation</h3>
                <p className="mb-4 leading-relaxed">
                  You can cancel your subscription at any time through your Apple ID account settings. Cancellation takes effect at the end of the current billing period.
                </p>

                <h3 className="text-lg font-semibold mb-3 text-foreground mt-6">5.6 Refunds</h3>
                <p className="mb-4 leading-relaxed">
                  Refunds are handled by Apple in accordance with Apple's refund policy. Apple typically offers a 14-day refund period for subscriptions.
                </p>
              </div>

              <div className="animate-on-scroll mb-8">
                <h2 className="text-responsive-lg font-bold mb-4 text-foreground border-b border-purple-400/30 pb-2">
                  6. Free Tier and Rate Limits
                </h2>
                <p className="mb-4 leading-relaxed">
                  The free tier includes basic features with rate limits. Pro subscriptions have higher limits or unlimited access to most features.
                </p>
              </div>

              <div className="animate-on-scroll mb-8">
                <h2 className="text-responsive-lg font-bold mb-4 text-foreground border-b border-purple-400/30 pb-2">
                  7. Acceptable Use
                </h2>
                <p className="mb-4 leading-relaxed">
                  You may use Scriptly for personal script management, professional acting preparation, and educational purposes. You agree not to use the App for illegal purposes or to violate any laws or third-party rights.
                </p>
              </div>

              <div className="animate-on-scroll mb-8">
                <h2 className="text-responsive-lg font-bold mb-4 text-foreground border-b border-purple-400/30 pb-2">
                  8. Intellectual Property
                </h2>
                <p className="mb-4 leading-relaxed">
                  Scriptly and all related content are owned by us and protected by intellectual property laws. You retain all rights to scripts and content you upload to the App.
                </p>
              </div>

              <div className="animate-on-scroll mb-8">
                <h2 className="text-responsive-lg font-bold mb-4 text-foreground border-b border-purple-400/30 pb-2">
                  9. Third-Party Services
                </h2>
                <p className="mb-4 leading-relaxed">
                  Scriptly uses third-party services (Supabase, OpenAI, Firebase, Apple App Store) to provide certain features. Your use of these services is subject to their respective terms and privacy policies.
                </p>
              </div>

              <div className="animate-on-scroll mb-8">
                <h2 className="text-responsive-lg font-bold mb-4 text-foreground border-b border-purple-400/30 pb-2">
                  10. Disclaimers
                </h2>
                <p className="mb-4 leading-relaxed">
                  The App is provided "as is" without warranties. We do not guarantee availability, accuracy of AI-generated content, or data storage. We recommend backing up important scripts outside the App.
                </p>
              </div>

              <div className="animate-on-scroll mb-8">
                <h2 className="text-responsive-lg font-bold mb-4 text-foreground border-b border-purple-400/30 pb-2">
                  11. Limitation of Liability
                </h2>
                <p className="mb-4 leading-relaxed">
                  To the maximum extent permitted by law, our liability is limited to the amount you paid for the App in the 12 months preceding any claim. If you are using the free tier, our liability is limited to $0.
                </p>
              </div>

              <div className="animate-on-scroll mb-8">
                <h2 className="text-responsive-lg font-bold mb-4 text-foreground border-b border-purple-400/30 pb-2">
                  12. Indemnification
                </h2>
                <p className="mb-4 leading-relaxed">
                  You agree to indemnify and hold us harmless from any claims arising from your use of the App, violation of these Terms, or violation of any third-party rights.
                </p>
              </div>

              <div className="animate-on-scroll mb-8">
                <h2 className="text-responsive-lg font-bold mb-4 text-foreground border-b border-purple-400/30 pb-2">
                  13. Termination
                </h2>
                <p className="mb-4 leading-relaxed">
                  You may stop using the App at any time by deleting it from your device. We may terminate your access if you violate these Terms. Your local data will remain on your device.
                </p>
              </div>

              <div className="animate-on-scroll mb-8">
                <h2 className="text-responsive-lg font-bold mb-4 text-foreground border-b border-purple-400/30 pb-2">
                  14. Dispute Resolution
                </h2>
                <p className="mb-4 leading-relaxed">
                  If you have a dispute, contact us first at <a href="mailto:scriptlyactingapp@gmail.com" className="text-purple-400 hover:text-purple-300 underline">scriptlyactingapp@gmail.com</a>. We will attempt to resolve disputes informally within 30 days.
                </p>
              </div>

              <div className="animate-on-scroll mb-8">
                <h2 className="text-responsive-lg font-bold mb-4 text-foreground border-b border-purple-400/30 pb-2">
                  15. Apple-Specific Terms
                </h2>
                <p className="mb-4 leading-relaxed">
                  Your use of Scriptly is also subject to Apple's App Store Terms of Service. Subscriptions are managed through Apple's App Store, and all subscription-related issues must be resolved through Apple Support.
                </p>
              </div>

              <div className="animate-on-scroll mb-8">
                <h2 className="text-responsive-lg font-bold mb-4 text-foreground border-b border-purple-400/30 pb-2">
                  16. Changes to Terms
                </h2>
                <p className="mb-4 leading-relaxed">
                  We may update these Terms from time to time. We will notify you of material changes in the App. Your continued use after changes constitutes acceptance.
                </p>
              </div>

              <div className="animate-on-scroll mb-8">
                <h2 className="text-responsive-lg font-bold mb-4 text-foreground border-b border-purple-400/30 pb-2">
                  17. Contact Information
                </h2>
                <p className="mb-4 leading-relaxed">
                  If you have questions about these Terms, please contact us at: <a href="mailto:scriptlyactingapp@gmail.com" className="text-purple-400 hover:text-purple-300 underline">scriptlyactingapp@gmail.com</a>
                </p>
              </div>

              <div className="animate-on-scroll mb-8">
                <h2 className="text-responsive-lg font-bold mb-4 text-foreground border-b border-purple-400/30 pb-2">
                  18. Miscellaneous
                </h2>
                <p className="mb-4 leading-relaxed">
                  These Terms, together with our <Link to="/privacy-policy" className="text-purple-400 hover:text-purple-300 underline">Privacy Policy</Link>, constitute the entire agreement between you and us regarding the App.
                </p>
              </div>

              <div className="animate-on-scroll mb-8">
                <h2 className="text-responsive-lg font-bold mb-4 text-foreground border-b border-purple-400/30 pb-2">
                  19. Acknowledgment
                </h2>
                <p className="mb-4 leading-relaxed">
                  By using Scriptly, you acknowledge that you have read and understood these Terms, agree to be bound by them, and will comply with all applicable laws and regulations.
                </p>
              </div>

              <div className="animate-on-scroll mt-8 p-6 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-xl border-l-4 border-purple-400/50">
                <h3 className="text-lg font-semibold mb-4 text-foreground">Summary of Key Points</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>✅ <strong>Subscription:</strong> $14.99/month with 7-day free trial</li>
                  <li>✅ <strong>Auto-Renewal:</strong> Automatically renews unless cancelled</li>
                  <li>✅ <strong>Cancellation:</strong> Cancel anytime through Apple ID settings</li>
                  <li>✅ <strong>Refunds:</strong> Handled by Apple (typically 14-day refund period)</li>
                  <li>✅ <strong>Your Data:</strong> Stored locally, you retain all rights</li>
                  <li>✅ <strong>AI Processing:</strong> Scripts temporarily sent to third-party services for processing</li>
                  <li>✅ <strong>Rate Limits:</strong> Apply to free tier, higher limits for Pro</li>
                  <li>✅ <strong>No Warranty:</strong> App provided "as is" without warranties</li>
                  <li>✅ <strong>Liability:</strong> Limited to subscription fees paid</li>
                </ul>
                <p className="mt-4 font-semibold text-foreground">
                  Your use of Scriptly is subject to these Terms. Please read them carefully.
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

export default TermsOfService;

