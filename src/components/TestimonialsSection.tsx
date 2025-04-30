import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import Section from './ui/Section';

const testimonials = [
  {
    quote: "Naiyo24 transformed our SEO strategy. Within three months, our organic traffic increased by 145% and our conversions improved dramatically.",
    author: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechFlow Inc.",
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300",
    stars: 5
  },
  {
    quote: "The insights from Naiyo24's competitive analysis helped us identify gaps in our content strategy. We're now ranking for keywords we never thought possible.",
    author: "Michael Chen",
    role: "SEO Specialist",
    company: "Growth Partners",
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=300",
    stars: 5
  },
  {
    quote: "As an e-commerce business, visibility is everything. Naiyo24's local SEO tools helped us dominate in our target markets, increasing foot traffic by 78%.",
    author: "Emma Rodriguez",
    role: "E-commerce Manager",
    company: "Urban Styles",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300",
    stars: 4
  },
  {
    quote: "The dashboard is intuitive and the weekly reports save me hours of analysis. I can now focus on implementing strategies rather than gathering data.",
    author: "David Park",
    role: "Content Strategist",
    company: "MediaPulse",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300",
    stars: 5
  }
];

export default function TestimonialsSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  
  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoplay]);
  
  const nextSlide = () => {
    setAutoplay(false);
    setActiveSlide((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevSlide = () => {
    setAutoplay(false);
    setActiveSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <Section id="testimonials" background="gradient">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <div className="inline-flex items-center px-3 py-1.5 mb-4 rounded-full bg-blue-100 text-blue-600 text-sm font-medium">
          <span>Customer Success Stories</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Trusted by Leading Brands</h2>
        <p className="text-lg text-gray-600">
          See how businesses like yours have achieved remarkable results with Naiyo24's SEO platform.
        </p>
      </div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
        <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-10 overflow-hidden">
          <div 
            className="transition-opacity duration-500"
            style={{ opacity: activeSlide === 0 ? 1 : 0, display: activeSlide === 0 ? 'block' : 'none' }}
          >
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-blue-100 rounded-full opacity-20"></div>
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-teal-100 rounded-full opacity-20"></div>
            
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="transition-all duration-500 flex flex-col md:flex-row items-center"
                style={{ 
                  opacity: activeSlide === index ? 1 : 0,
                  display: activeSlide === index ? 'flex' : 'none' 
                }}
              >
                <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
                  <div className="relative">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1 shadow-md">
                      <div className="bg-blue-50 rounded-full p-2">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-2/3 md:pl-8">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonial.stars 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-gray-300'
                        } mr-1`}
                      />
                    ))}
                  </div>
                  
                  <blockquote className="text-xl md:text-2xl font-medium text-gray-800 mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-gray-600">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="absolute top-1/2 -translate-y-1/2 left-0 flex space-x-2">
          <button 
            onClick={prevSlide}
            className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors duration-200"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
        </div>
        
        <div className="absolute top-1/2 -translate-y-1/2 right-0 flex space-x-2">
          <button 
            onClick={nextSlide}
            className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors duration-200"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>
        
        <div className="mt-8 flex justify-center">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setAutoplay(false);
                setActiveSlide(index);
              }}
              className={`w-3 h-3 mx-1 rounded-full transition-all duration-200 ${
                activeSlide === index 
                  ? 'bg-blue-600 w-6' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
      
      <div className="mt-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {['TechCrunch', 'Forbes', 'Business Insider', 'Entrepreneur'].map((brand, index) => (
            <div key={index} className="flex justify-center">
              <div className="text-xl md:text-2xl font-bold text-gray-400">{brand}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}