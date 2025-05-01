import React, { useState } from 'react';
import { Check, X, ArrowRight } from 'lucide-react';
import Section from './ui/Section';
import Button from './ui/Button';

type PricingPeriod = 'monthly' | 'yearly';

const plans = [
  {
    name: 'Starter',
    description: 'Perfect for small websites and beginners',
    monthlyPrice: 9999,
    yearlyPrice: 119988,
    features: [
      'Keyword tracking (up to 100 keywords)',
      'Basic site audit',
      'Weekly rank updates',
      'Email reports',
      'Single user'
    ],
    notIncluded: [
      'Competitor analysis',
      'Content optimization tools',
      'API access',
      'White-label reports'
    ]
  },
  {
    name: 'Professional',
    description: 'Ideal for growing businesses and marketing teams',
    monthlyPrice: 14999,
    yearlyPrice: 179988,
    features: [
      'Keyword tracking (up to 500 keywords)',
      'Advanced site audit',
      'Daily rank updates',
      'Email & dashboard reports',
      'Competitor analysis (up to 5 sites)',
      'Content optimization tools',
      'Up to 5 users'
    ],
    notIncluded: [
      'API access',
      'White-label reports'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    description: 'For agencies and large businesses',
    monthlyPrice: 19999,
    yearlyPrice: 192960,
    features: [
      'Unlimited keyword tracking',
      'Comprehensive site audit',
      'Real-time rank updates',
      'Custom reports',
      'Unlimited competitor analysis',
      'Advanced content optimization',
      'API access',
      'White-label reports',
      'Priority support',
      'Unlimited users'
    ],
    notIncluded: []
  }
];

export default function PricingSection() {
  const [period, setPeriod] = useState<PricingPeriod>('monthly');
  const [showTrialForm, setShowTrialForm] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    companyUrl: ''
  });
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    companyUrl: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: '',
      email: '',
      phone: '',
      company: '',
      companyUrl: ''
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
      isValid = false;
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required';
      isValid = false;
    }

    if (formData.companyUrl.trim() && !/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(formData.companyUrl)) {
      newErrors.companyUrl = 'Please enter a valid URL';
      isValid = false;
    }

    setFormErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user types
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
  
    setIsSubmitting(true);
  
    try {
      const response = await fetch('http://localhost:5000/api/trial', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          plan: selectedPlan,
          period: period
        }),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      console.log('Submission successful:', data);
      setSubmitSuccess(true);
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          companyUrl: ''
        });
        setSubmitSuccess(false);
        setShowTrialForm(false);
      }, 2000);
    } catch (error) {
      console.error('Submission error:', error);
      alert('There was an error submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const openTrialForm = (planName: string) => {
    setSelectedPlan(planName);
    setShowTrialForm(true);
  };

  return (
    <Section id="pricing" background="light">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <div className="inline-flex items-center px-3 py-1.5 mb-4 rounded-full bg-blue-100 text-blue-600 text-sm font-medium">
          <span>Simple Pricing</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Choose the Right Plan for Your Business</h2>
        <p className="text-lg text-gray-600 mb-8">
          All plans include a 14-day free trial. No credit card required.
        </p>
        
        <div className="flex items-center justify-center mb-8">
          <div className="relative inline-flex p-1 bg-gray-100 rounded-full">
            <button
              className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                period === 'monthly' 
                  ? 'bg-white text-gray-900 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => setPeriod('monthly')}
            >
              Monthly
            </button>
            <button
              className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                period === 'yearly' 
                  ? 'bg-white text-gray-900 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => setPeriod('yearly')}
            >
              Yearly
              <span className="absolute -top-3 -right-3 px-2 py-0.5 text-xs font-semibold bg-teal-100 text-teal-800 rounded-full">
                20% OFF
              </span>
            </button>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div 
            key={index} 
            className={`relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${
              plan.popular ? 'md:scale-105 md:-mt-4 md:mb-4 ring-2 ring-blue-500' : ''
            }`}
          >
            {plan.popular && (
              <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 text-sm font-bold uppercase tracking-wider">
                Most Popular
              </div>
            )}
            
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              
              <div className="mb-6">
                <span className="text-4xl font-bold">₹{period === 'monthly' ? plan.monthlyPrice.toLocaleString('en-IN') : plan.yearlyPrice.toLocaleString('en-IN')}</span>
                <span className="text-gray-500 ml-2">{period === 'monthly' ? '/month' : '/year'}</span>
              </div>
              
              <Button 
                variant={plan.popular ? 'primary' : 'outline'} 
                fullWidth 
                className="mb-8 group"
                onClick={() => openTrialForm(plan.name)}
              >
                Start Free Trial
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <div className="space-y-4">
                <p className="font-medium text-gray-800">What's included:</p>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {plan.notIncluded.length > 0 && (
                  <>
                    <p className="font-medium text-gray-800 mt-6">Not included:</p>
                    <ul className="space-y-3">
                      {plan.notIncluded.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <X className="w-5 h-5 text-gray-300 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-gray-500">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 bg-blue-50 rounded-xl p-8 md:p-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Need a custom solution?</h3>
            <p className="text-lg text-gray-600">
              Our enterprise solutions can be tailored to your specific needs.
              Contact our sales team to discuss a custom plan for your business.
            </p>
          </div>
          <div>
            <Button size="lg" onClick={() => window.location.href = '#contact'}>
              Contact Sales
            </Button>
          </div>
        </div>
      </div>

      {/* Free Trial Form Modal */}
      {showTrialForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-white rounded-xl max-w-md w-full p-8 relative transform transition-all duration-300 animate-scale-in">
            <button 
              onClick={() => {
                setShowTrialForm(false);
                setSubmitSuccess(false);
                setFormErrors({
                  name: '',
                  email: '',
                  phone: '',
                  company: '',
                  companyUrl: ''
                });
              }}
              className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 transition-colors"
              disabled={isSubmitting}
            >
              <X size={20} className="text-gray-500" />
            </button>
            
            {submitSuccess ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h2>
                <p className="text-gray-600">Your free trial request has been submitted.</p>
                <p className="text-gray-600">We'll contact you shortly.</p>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Start Your Free Trial</h2>
                <p className="text-gray-600 mb-6">You're signing up for the <span className="font-semibold">{selectedPlan}</span> plan</p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 border ${
                        formErrors.name ? 'border-red-500' : 'border-gray-300'
                      } rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all`}
                      disabled={isSubmitting}
                    />
                    {formErrors.name && (
                      <p className="mt-1 text-sm text-red-600">{formErrors.name}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 border ${
                        formErrors.email ? 'border-red-500' : 'border-gray-300'
                      } rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all`}
                      disabled={isSubmitting}
                    />
                    {formErrors.email && (
                      <p className="mt-1 text-sm text-red-600">{formErrors.email}</p>
                    )}
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
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 border ${
                        formErrors.company ? 'border-red-500' : 'border-gray-300'
                      } rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all`}
                      disabled={isSubmitting}
                    />
                    {formErrors.company && (
                      <p className="mt-1 text-sm text-red-600">{formErrors.company}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="companyUrl" className="block text-sm font-medium text-gray-700 mb-1">
                      Company Website URL
                    </label>
                    <input
                      type="url"
                      id="companyUrl"
                      name="companyUrl"
                      value={formData.companyUrl}
                      onChange={handleInputChange}
                      placeholder="https://example.com"
                      className={`w-full px-4 py-2 border ${
                        formErrors.companyUrl ? 'border-red-500' : 'border-gray-300'
                      } rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all`}
                      disabled={isSubmitting}
                    />
                    {formErrors.companyUrl && (
                      <p className="mt-1 text-sm text-red-600">{formErrors.companyUrl}</p>
                    )}
                    <p className="mt-1 text-xs text-gray-500">
                      Please include http:// or https://
                    </p>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full mt-6 hover:shadow-lg transition-shadow"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      'Start Free Trial'
                    )}
                  </Button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </Section>
  );
}