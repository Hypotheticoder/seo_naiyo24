import React from 'react';
import { ChevronRight, Mail, Phone, MapPin, Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';
import Container from './ui/Container';

const footerLinks = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Testimonials', href: '#testimonials' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Roadmap', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '#' },
      { label: 'SEO Guide', href: '#' },
      { label: 'API Documentation', href: '#' },
      { label: 'Support Center', href: '#' },
      { label: 'Case Studies', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Press', href: '#' },
      { label: 'Partners', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
      { label: 'GDPR Compliance', href: '#' },
    ],
  },
];

const socialLinks = [
  { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
  { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
  { icon: <Facebook className="w-5 h-5" />, href: '#', label: 'Facebook' },
  { icon: <Instagram className="w-5 h-5" />, href: '#', label: 'Instagram' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white dark:bg-gray-800 dark:text-gray-300 pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 md:gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-blue-400">Naiyo24</h2>
              <p className="mt-4 text-gray-400 max-w-md">
                Empowering businesses with AI-powered SEO tools and actionable insights to dominate search rankings.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-blue-400 mt-0.5 mr-3" />
                <span className="text-gray-300">contact@naiyo24.com</span>
              </div>
              <div className="flex items-start">
                <Phone className="w-5 h-5 text-blue-400 mt-0.5 mr-3" />
                <span className="text-gray-300">+1 (888) 234-5678</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5 mr-3" />
                <span className="text-gray-300">123 Tech Park, Suite 500<br />San Francisco, CA 94103</span>
              </div>
            </div>
          </div>
          
          {footerLinks.map((column, i) => (
            <div key={i}>
              <h3 className="text-lg font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link, j) => (
                  <li key={j}>
                    <a 
                      href={link.href} 
                      className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group"
                    >
                      <ChevronRight className="w-4 h-4 mr-1 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="pt-8 mt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Naiyo24. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-4">
            {socialLinks.map((link, i) => (
              <a 
                key={i}
                href={link.href}
                className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition-colors duration-200"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}