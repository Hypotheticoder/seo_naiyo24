import React from 'react';
import { ArrowRight } from 'lucide-react';
import Section from './ui/Section';
import Button from './ui/Button';

export default function CTASection() {
  return (
    <Section background="dark" fullWidth>
      <div className="relative overflow-hidden">
        {/* Background design elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500 opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-teal-500 opacity-10 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
              Ready to Transform Your <span className="text-blue-400">SEO Strategy</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already growing with Naiyo24's powerful SEO platform.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                size="lg"
                className="group"
                onClick={() => {
                  const pricingSection = document.getElementById('pricing');
                  if (pricingSection) {
                    pricingSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Start Your Free Trial
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Schedule a Demo
              </Button>
            </div>
          </div>
          
          <div className="mt-16 bg-gray-800 rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Stay Updated with SEO Trends</h3>
                <p className="text-gray-300 mb-6">
                  Subscribe to our newsletter for the latest SEO tips, algorithm updates, and exclusive content.
                </p>
                
                <form className="space-y-4">
                  <div>
                    <label htmlFor="email" className="sr-only">Email address</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <Button fullWidth>
                    Subscribe to Newsletter
                  </Button>
                </form>
                <p className="mt-4 text-sm text-gray-400">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Our Guarantee</h3>
                <div className="space-y-4">
                  {[
                    'No credit card required for free trial',
                    '14-day risk-free trial period',
                    'Cancel anytime with no questions asked',
                    'Full data export if you decide to leave'
                  ].map((item, i) => (
                    <div key={i} className="flex items-start">
                      <svg className="w-5 h-5 text-green-400 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-700">
                  <div className="flex items-center">
                    <div className="flex -space-x-2 mr-4">
                      {[...Array(3)].map((_, i) => (
                        <img
                          key={i}
                          src={`https://images.pexels.com/photos/${414100 + i * 10000}/pexels-photo-${414100 + i * 10000}.jpeg?auto=compress&cs=tinysrgb&w=100`}
                          alt="User"
                          className="w-10 h-10 rounded-full border-2 border-gray-800"
                        />
                      ))}
                    </div>
                    <p className="text-sm text-gray-400">
                      Joined by <span className="font-medium text-white">2,500+</span> SEO professionals
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}