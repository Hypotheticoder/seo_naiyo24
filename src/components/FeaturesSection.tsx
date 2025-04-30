import React from 'react';
import { Search, BarChart2, TrendingUp, Globe, LineChart, Award, Monitor, RefreshCw } from 'lucide-react';
import Section from './ui/Section';

const features = [
  {
    icon: <Search className="w-6 h-6 text-blue-500" />,
    title: 'Keyword Analysis',
    description: 'Discover high-performing keywords for your industry with our AI-powered analysis tool.'
  },
  {
    icon: <BarChart2 className="w-6 h-6 text-blue-500" />,
    title: 'Competitor Tracking',
    description: 'Monitor your competitors\' strategies and stay ahead with actionable insights.'
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-blue-500" />,
    title: 'Performance Metrics',
    description: 'Track your SEO performance with comprehensive metrics and custom reports.'
  },
  {
    icon: <Globe className="w-6 h-6 text-blue-500" />,
    title: 'Global Rankings',
    description: 'Monitor your search rankings across different regions and search engines.'
  },
  {
    icon: <LineChart className="w-6 h-6 text-blue-500" />,
    title: 'Traffic Analysis',
    description: 'Get detailed insights into your website traffic sources and user behavior.'
  },
  {
    icon: <Award className="w-6 h-6 text-blue-500" />,
    title: 'Backlink Authority',
    description: 'Build and monitor your backlink profile to improve domain authority.'
  },
  {
    icon: <Monitor className="w-6 h-6 text-blue-500" />,
    title: 'Site Monitoring',
    description: '24/7 site monitoring to catch issues before they impact your rankings.'
  },
  {
    icon: <RefreshCw className="w-6 h-6 text-blue-500" />,
    title: 'Weekly Updates',
    description: 'Get weekly reports and updates on your SEO performance and improvements.'
  }
];

export default function FeaturesSection() {
  return (
    <Section id="features" background="gradient">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <div className="inline-flex items-center px-3 py-1.5 mb-4 rounded-full bg-blue-100 text-blue-600 text-sm font-medium">
          <Award size={16} className="mr-2" />
          <span>Powerful Features</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Everything You Need to Dominate Search Rankings</h2>
        <p className="text-lg text-gray-600">
          Our comprehensive suite of tools helps you optimize every aspect of your online presence,
          from keyword research to competitive analysis and performance tracking.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="bg-blue-50 p-3 rounded-lg inline-block mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-20 bg-white rounded-xl shadow-xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-8 md:p-12">
            <div className="inline-flex items-center px-3 py-1.5 mb-4 rounded-full bg-teal-100 text-teal-600 text-sm font-medium">
              <TrendingUp size={16} className="mr-2" />
              <span>Featured Tool</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">AI-Powered SEO Assistant</h3>
            <p className="text-gray-600 mb-6">
              Our intelligent SEO assistant provides real-time recommendations, 
              helping you optimize content as you create it. It analyzes your 
              content against top-ranking pages and suggests improvements for 
              better search visibility.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Real-time content optimization',
                'Keyword density analysis',
                'Readability scoring',
                'Competitor content comparison'
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <svg className="w-5 h-5 text-teal-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-50 flex items-center justify-center p-8">
            <div className="relative w-full max-w-md">
              <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
                <div className="space-y-4">
                  <div className="bg-blue-50 rounded p-4">
                    <h4 className="font-medium text-gray-800 mb-2">Content Analysis</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Keyword Density</span>
                        <span className="font-medium text-teal-600">Optimal</span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 rounded-full">
                        <div className="h-2 rounded-full bg-teal-500 w-[85%]"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Readability Score</h4>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div 
                          key={i} 
                          className={`h-8 flex-1 rounded ${
                            i < 4 ? 'bg-blue-500' : 'bg-gray-200'
                          }`}
                        ></div>
                      ))}
                    </div>
                    <div className="mt-1 text-sm text-gray-500 text-right">Very Good</div>
                  </div>
                  
                  <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-100">
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-yellow-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                      </svg>
                      <div>
                        <h5 className="font-medium text-gray-800">Suggestion</h5>
                        <p className="text-sm text-gray-600">Consider adding more multimedia content to improve engagement.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-100 rounded-full filter blur-xl opacity-70"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-teal-100 rounded-full filter blur-xl opacity-70"></div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}