import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Section from './ui/Section';

const faqs = [
  {
    question: "How quickly will I see results from using Naiyo24?",
    answer: "Most customers start seeing initial improvements in their rankings within 2-4 weeks. However, significant SEO results typically take 3-6 months, depending on your industry competition, website history, and current optimization level. Our platform provides real-time tracking so you can monitor your progress from day one."
  },
  {
    question: "Do you offer support for local SEO?",
    answer: "Yes, Naiyo24 includes specialized tools for local SEO optimization. Our platform helps you optimize Google My Business listings, local citations, and location-specific keywords. The Professional and Enterprise plans include advanced local SEO features such as competitor mapping and local backlink analysis."
  },
  {
    question: "Can I track my competitors' rankings?",
    answer: "Absolutely. With our competitor analysis tools, you can monitor your competitors' rankings for your target keywords, analyze their content strategy, and identify opportunities to outrank them. The Professional plan allows tracking up to 5 competitors, while the Enterprise plan offers unlimited competitor tracking."
  },
  {
    question: "Is Naiyo24 suitable for e-commerce websites?",
    answer: "Yes, Naiyo24 is designed to work exceptionally well for e-commerce websites. We offer specialized tools for product page optimization, category page analysis, and e-commerce-specific keyword research. Our platform integrates with popular e-commerce platforms like Shopify, WooCommerce, and Magento."
  },
  {
    question: "Can I switch between plans?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll get immediate access to additional features and your billing will be prorated for the remainder of your billing cycle. When downgrading, changes will take effect at the start of your next billing cycle."
  },
  {
    question: "Do you offer white-label reporting?",
    answer: "White-label reporting is available on our Enterprise plan. This allows agencies and consultants to generate custom branded reports with their own logo and styling. You can schedule automated report delivery to clients and customize exactly what data is displayed."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <Section id="faq" background="light">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <div className="inline-flex items-center px-3 py-1.5 mb-4 rounded-full bg-blue-100 text-blue-600 text-sm font-medium">
          <span>Frequently Asked Questions</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Got Questions? We've Got Answers</h2>
        <p className="text-lg text-gray-600">
          Still have questions? Contact our support team at 
          <a href="mailto:support@naiyo24.com" className="text-blue-600 hover:text-blue-700 font-medium ml-1">
            support@naiyo24.com
          </a>
        </p>
      </div>
      
      <div className="max-w-3xl mx-auto divide-y divide-gray-200 dark:divide-gray-700">
        {faqs.map((faq, index) => (
          <div key={index} className="py-5">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex w-full justify-between items-center text-left focus:outline-none"
            >
              <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                {faq.question}
              </h3>
              <span className="ml-6 flex-shrink-0">
                {openIndex === index ? (
                  <ChevronUp className="h-6 w-6 text-blue-500" />
                ) : (
                  <ChevronDown className="h-6 w-6 text-gray-500" />
                )}
              </span>
            </button>
            
            <div 
              className={`mt-2 pr-12 transition-all duration-300 ease-in-out overflow-hidden ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="text-gray-600">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}