import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, Mail, Instagram } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const FAQ = () => {
  useEffect(() => {
    // Initialize scroll animations
    import('../utils/scrollAnimations').then(({ startScrollAnimations }) => {
      startScrollAnimations();
    });
  }, []);

  const faqs = [
    {
      question: "What is Scriptly and how does it work?",
      answer: "Scriptly is the ultimate mobile app designed to help actors rehearse smarter and perform better. Powered by AI, it transforms the way you practice scripts—whether you're preparing for auditions, working on a role, or sharpening your craft.\n\nAll you need to do is upload your script (with any file type) on the app, wait for it to process, and you're ready to start using the AI-empowered features to help you begin rehearsing.\n\nInstead of juggling paper scripts or struggling to find rehearsal partners, Scriptly gives actors a smart, portable rehearsal companion—available anytime, anywhere."
    },
    {
      question: "Is Scriptly suitable for beginners?",
      answer: "Absolutely! Scriptly is designed for actors at all levels, from complete beginners to seasoned professionals. The app includes beginner-friendly tutorials, progressive difficulty levels, and personalized learning paths that adapt to your skill level and goals."
    },
    {
      question: "How does your AI Insights tool work?",
      answer: "The AI Insights tool acts like a smart coach built into the app. They analyze your scenes and characters to help you understand the background and context of your script. Instead of just running lines, you also get emotion-based, contextual feedback that helps you sharpen your performance and bring more depth to your character."
    },
    {
      question: "What devices will Scriptly support?",
      answer: "Scriptly will be available for iOS devices only (iPhone and iPad). There is no version for Android users at the moment. The app is optimized for both phone and tablet use, with features that take advantage of each device's capabilities."
    },
    {
      question: "How much will Scriptly cost?",
      answer: "Scriptly will offer an initial 3-day free trial. The pricing model for the app will be a monthly subscription paid in the app store."
    },
    {
      question: "Can I use Scriptly offline?",
      answer: "After the first rehearsal, many features of Scriptly will work offline, including script reading and basic practice tools. However, AI feedback, script downloads, and progress synchronization require an internet connection. We're working to maximize offline functionality."
    }
  ];

  return (
    <div className="pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="section-padding gradient-hero">
        <div className="container-responsive text-center">
          <h1 className="animate-on-scroll text-responsive-xl font-bold mb-4 sm:mb-6 text-foreground">
            Frequently Asked
            <span className="block text-scriptly-animated">
              Questions
            </span>
          </h1>
          <p className="animate-on-scroll text-responsive-sm text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
            Find answers to common questions about Scriptly and how it can help you master your acting craft.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-background">
        <div className="container-responsive max-w-4xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className={`bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-xl border border-purple-400/20 rounded-xl px-4 sm:px-6 shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20 transition-all duration-300 ${index % 2 === 0 ? 'animate-slide-left' : 'animate-slide-right'}`}>
                <AccordionTrigger className="text-left hover:no-underline py-4 sm:py-6">
                  <div className="flex items-center gap-3">
                    <HelpCircle className="animate-float w-4 h-4 sm:w-5 sm:h-5 text-purple-300 flex-shrink-0" />
                    <span className="font-semibold text-sm sm:text-base text-purple-100">{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-4 sm:pb-6 text-sm sm:text-base text-purple-200 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="animate-on-scroll text-responsive-lg font-bold mb-4 sm:mb-6 text-foreground">
            Still Have
            <span className="block text-scriptly-animated">
              Questions?
            </span>
          </h2>
          <p className="animate-on-scroll text-responsive-sm text-muted-foreground mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Our team is here to help. Reach out to us and we'll get back to you as soon as possible.
          </p>
          
          <div className="grid grid-cols-1 gap-6 max-w-2xl mx-auto">
            <Card className="animate-scale p-6 bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-xl border border-purple-400/20 rounded-xl text-center shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105">
              <div className="animate-float w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/30">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-purple-100">Email Support</h3>
              <p className="text-purple-200 mb-4 text-sm">
                Send us a detailed message and we'll respond as soon as possible.
              </p>
              <a href="mailto:support@scriptlyapp.com" className="inline-block">
                <Button variant="ghost" className="text-purple-300 hover:text-purple-200 hover:bg-purple-500/20 border border-purple-400/30">
                  Send Email
                </Button>
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="animate-on-scroll text-responsive-lg font-bold mb-4 sm:mb-6 text-foreground">
            Ready to Start Your
            <span className="block text-scriptly-animated">
              Acting Journey?
            </span>
          </h2>
          <p className="animate-on-scroll text-responsive-sm text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of actors who are already preparing for success with Scriptly.
          </p>
          <div className="animate-scale">
            <a
              href="https://apps.apple.com/us/app/scriptly-ai-acting-rehearsal/id6754227999"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-bounce bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium px-8 py-4 rounded-xl shadow-lg shadow-purple-500/30 hover:shadow-purple-500/40 border border-purple-400/30 inline-flex items-center justify-center"
            >
              Download the App
            </a>
          </div>
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

export default FAQ;
