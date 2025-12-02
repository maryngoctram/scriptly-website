import { lazy, Suspense } from "react";
import Hero from "@/components/Hero";
import Workflow from "@/components/Workflow";

// Lazy load non-critical components
const Features = lazy(() => import("@/components/Features"));
const AppPreview = lazy(() => import("@/components/AppPreview"));
const Footer = lazy(() => import("@/components/Footer"));

const Home = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Workflow />
      <Suspense fallback={<div className="h-96 bg-background" />}>
        <Features />
      </Suspense>
      <Suspense fallback={<div className="h-96 bg-background" />}>
        <AppPreview />
      </Suspense>
      <Suspense fallback={<div className="h-32 bg-background" />}>
        <Footer />
      </Suspense>
    </main>
  );
};

export default Home;
