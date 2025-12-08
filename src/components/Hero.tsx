import { Button } from "@/components/ui/button";
import { Play, Download, Star } from "lucide-react";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    // Initialize scroll animations
    import('../utils/scrollAnimations').then(({ startScrollAnimations }) => {
      startScrollAnimations();
    });
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center section-padding gradient-hero">
      <div className="container-responsive text-center">
        {/* Badge */}
        <div className="animate-on-scroll inline-flex items-center gap-3 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-xl border border-purple-400/30 rounded-full px-6 py-3 text-sm font-medium text-purple-100 mb-6 sm:mb-8 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105">
          <Star className="w-4 h-4 text-purple-300 fill-purple-300" />
          Available on the iOS App Store
        </div>

        {/* Main Heading */}
        <h1 className="animate-on-scroll text-responsive-xl font-bold mb-4 sm:mb-6 text-foreground">
          <span className="block text-scriptly-animated">Scriptly</span>
          <span className="block text-subtitle-animated">
            Master Your Acting Craft
          </span>
        </h1>

        {/* Subtitle */}
        <p className="animate-on-scroll text-responsive-sm text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed mt-4 sm:mt-6">
          The ultimate mobile app for actors. Practice scenes, perfect your timing, 
          and elevate your performances with AI-powered coaching.
        </p>

        {/* Hero Image */}
        <div className="animate-scale relative mb-12 sm:mb-16">
          <div className="absolute inset-0 gradient-spotlight opacity-20 blur-3xl rounded-full"></div>
          <img
            src="/Sample_Script_iPhone.png"
            alt="Scriptly mobile interface"
            className="animate-float relative mx-auto w-full max-w-[150px] sm:max-w-[200px] md:max-w-[250px] lg:max-w-[300px] glass-card-hover rounded-2xl sm:rounded-3xl shadow-dramatic"
            loading="eager"
            decoding="async"
          />
        </div>

        {/* CTA Buttons */}
        <div className="animate-on-scroll flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="cta-bounce bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium px-4 py-2 sm:px-8 sm:py-4 text-sm sm:text-base rounded-xl shadow-lg shadow-purple-500/30 hover:shadow-purple-500/40 border border-purple-400/30">
            <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            Download the App
          </Button>
          <Button className="cta-bounce bg-gradient-to-r from-purple-600/20 to-blue-600/20 hover:from-purple-600/30 hover:to-blue-600/30 text-purple-100 font-medium px-4 py-2 sm:px-8 sm:py-4 text-sm sm:text-base rounded-xl backdrop-blur-xl border border-purple-400/30 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30">
            <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            Watch Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;