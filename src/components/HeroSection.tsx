import React, { useState } from 'react';
import { ArrowRight, BarChart2, Search, TrendingUp, X } from 'lucide-react';
import Button from './ui/Button';
import Container from './ui/Container';

export default function HeroSection() {
  const [showTrialForm, setShowTrialForm] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    companyUrl: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowTrialForm(false);
  };

  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden relative">
      {/* Background elements with your pulse animation */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-100 rounded-full filter blur-[100px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-teal-100 rounded-full filter blur-[100px] opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center px-3 py-1.5 mb-4 rounded-full bg-blue-100 text-blue-600 text-sm font-medium animate-fade-in">
              <TrendingUp size={16} className="mr-2" />
              <span>Boost your SEO performance</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight animate-fade-in-up">
              Supercharge Your <span className="text-blue-600">SEO</span> with AI-Powered Analytics
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in-up delay-100">
              Naiyo24 helps businesses optimize their search engine visibility with advanced AI analytics, real-time monitoring, and actionable insights.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-up delay-200">
              <Button 
                size="lg" 
                className="group hover:shadow-lg transition-shadow"
                onClick={() => setShowTrialForm(true)}
              >
                Start Your Free Trial
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="hover:shadow-lg transition-shadow"
                onClick={() => setShowDemoModal(true)}
              >
                See How It Works
              </Button>
            </div>
            
            <div className="mt-8 flex items-center justify-center lg:justify-start animate-fade-in-up delay-300">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <img
                    key={i}
                    src={`https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100`}
                    alt="User"
                    className="w-8 h-8 rounded-full border-2 border-white transition-transform hover:scale-110 hover:z-10"
                  />
                ))}
              </div>
              <span className="ml-4 text-sm text-gray-500">
                <span className="font-medium text-gray-900">2,500+</span> companies trust Naiyo24
              </span>
            </div>
          </div>
          
          {/* Right content with float animation */}
          <div className="w-full lg:w-1/2 relative animate-fade-in-right">
            <div className="rounded-xl shadow-2xl bg-white overflow-hidden transform transition-all hover:scale-[1.02] duration-300 hover:shadow-3xl animate-float">
              <div className="h-12 bg-gray-100 flex items-center px-4 border-b">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="bg-white rounded-md flex items-center py-1 px-3 text-sm text-gray-500 w-4/5">
                    <Search size={14} className="text-gray-400 mr-2" />
                    naiyo24.com/analytics
                  </div>
                </div>
              </div>
              <div className="p-8 bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-blue-50 rounded-lg p-5 hover:-translate-y-1 transition-transform">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-medium text-gray-800">Traffic Overview</h3>
                      <BarChart2 size={20} className="text-blue-600" />
                    </div>
                    <p className="text-3xl font-bold text-gray-900">+127%</p>
                    <p className="text-sm text-gray-600">vs last month</p>
                  </div>
                  <div className="bg-teal-50 rounded-lg p-5 hover:-translate-y-1 transition-transform">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-medium text-gray-800">Keyword Ranking</h3>
                      <TrendingUp size={20} className="text-teal-600" />
                    </div>
                    <p className="text-3xl font-bold text-gray-900">Top 3</p>
                    <p className="text-sm text-gray-600">for 15 keywords</p>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-6 hover:-translate-y-1 transition-transform">
                  <h3 className="font-medium text-gray-800 mb-4">Performance Metrics</h3>
                  <div className="space-y-4">
                    {['Organic Traffic', 'Backlinks', 'Page Speed'].map((metric, i) => (
                      <div key={i} className="flex items-center">
                        <div className="w-full h-2 bg-gray-200 rounded-full mr-2">
                          <div 
                            className={`h-2 rounded-full ${
                              i === 0 ? 'bg-blue-500 w-[85%]' : 
                              i === 1 ? 'bg-teal-500 w-[70%]' : 
                              'bg-purple-500 w-[92%]'
                            } transition-all duration-1000 ease-out`}
                            style={{ transitionDelay: `${i * 200}ms` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium min-w-[60px] text-right">
                          {i === 0 ? '85%' : i === 1 ? '70%' : '92%'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Free Trial Form Modal */}
      {showTrialForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-white rounded-xl max-w-md w-full p-8 relative transform transition-all duration-300 animate-scale-in">
            <button 
              onClick={() => setShowTrialForm(false)}
              className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X size={20} className="text-gray-500" />
            </button>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Start Your Free Trial</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                />
              </div>
              
              <div>
                <label htmlFor="companyUrl" className="block text-sm font-medium text-gray-700 mb-1">
                  Company URL
                </label>
                <input
                  type="url"
                  id="companyUrl"
                  name="companyUrl"
                  value={formData.companyUrl || ''}
                  onChange={handleInputChange}
                  placeholder="https://example.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                />
              </div>
              
              <Button type="submit" className="w-full mt-6 hover:shadow-lg transition-shadow">
                Start Free Trial
              </Button>
            </form>
          </div>
        </div>
      )}

      {/* Demo Modal */}
      {showDemoModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-white rounded-xl max-w-4xl w-full p-8 relative transform transition-all duration-300 animate-scale-in">
            <button 
              onClick={() => setShowDemoModal(false)}
              className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X size={20} className="text-gray-500" />
            </button>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How Naiyo24 Works</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg hover:shadow-md transition-all animate-float" style={{ animationDuration: '7s' }}>
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Connect Your Data</h3>
                <p className="text-gray-600">
                  Integrate with your website, Google Analytics, and Search Console in minutes.
                </p>
              </div>
              
              <div className="bg-teal-50 p-6 rounded-lg hover:shadow-md transition-all animate-float" style={{ animationDuration: '7s', animationDelay: '0.5s' }}>
                <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <span className="text-teal-600 font-bold">2</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Get AI Analysis</h3>
                <p className="text-gray-600">
                  Our AI identifies optimization opportunities and tracks your rankings.
                </p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg hover:shadow-md transition-all animate-float" style={{ animationDuration: '7s', animationDelay: '1s' }}>
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <span className="text-purple-600 font-bold">3</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Implement & Grow</h3>
                <p className="text-gray-600">
                  Follow our actionable recommendations to boost your organic traffic.
                </p>
              </div>
            </div>
            
            <div className="mt-8 bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-4">Ready to see it in action?</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => {
                    setShowDemoModal(false);
                    setShowTrialForm(true);
                  }}
                  className="hover:shadow-lg transition-shadow"
                >
                  Start Free Trial
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => setShowDemoModal(false)}
                  className="hover:shadow-lg transition-shadow"
                >
                  Watch Video Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}