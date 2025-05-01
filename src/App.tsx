import { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import PricingSection from './components/PricingSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import ContactSection from './components/ContactSection';
import AboutSection from './components/AboutSection';

function App() {
  // Update document title for SEO
  useEffect(() => {
    document.title = "Naiyo24 - AI-Powered SEO Platform for Business Growth";
    
    // Add meta description for better SEO
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Naiyo24 helps businesses optimize their search engine visibility with advanced AI analytics, real-time monitoring, and actionable insights.';
    document.head.appendChild(metaDescription);
    
    return () => {
      // Clean up when component unmounts
      document.head.removeChild(metaDescription);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <PricingSection />
        <TestimonialsSection />
        <FAQSection />
        <AboutSection />
        <ContactSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;