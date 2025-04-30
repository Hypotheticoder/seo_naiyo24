import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
}

const Container: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = '' 
}) => (
  <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

const Button: React.FC<{
  children: React.ReactNode;
  variant?: 'default' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  fullWidth?: boolean;
  onClick?: () => void;
}> = ({ 
  children, 
  variant = 'default', 
  size = 'md', 
  className = '', 
  fullWidth = false,
  onClick 
}) => {
  const baseClasses = `rounded-md font-medium transition-colors ${
    fullWidth ? 'w-full' : ''
  }`;
  
  const variantClasses = {
    default: 'bg-blue-600 text-white hover:bg-blue-700',
    outline: 'border border-blue-600 text-blue-600 hover:bg-blue-50',
  };
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };
  
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  
  const navItems: NavItem[] = [
    { label: 'Home', href: '#' },
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-soft-xl dark:bg-blue-950/90 dark:shadow-dark-xl' 
          : 'bg-transparent'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-600 dark:text-teal-400">
              Naiyo24
            </span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a 
                key={item.label}
                href={item.href}
                className="text-blue-900 hover:text-blue-600 dark:text-teal-100 dark:hover:text-teal-300 font-medium transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-teal-500 dark:hover:bg-teal-600" onClick={() => {
              const pricingSection = document.getElementById('pricing');
              if (pricingSection) {
                pricingSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}>
              Get Started
            </Button>
          </div>
          
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-blue-800 hover:bg-blue-100 dark:text-teal-300 dark:hover:bg-blue-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </Container>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-blue-950 shadow-soft-xl dark:shadow-dark-xl">
          <Container>
            <nav className="flex flex-col py-4 space-y-4">
              {navItems.map((item) => (
                <a 
                  key={item.label}
                  href={item.href}
                  className="text-blue-800 hover:text-blue-600 dark:text-teal-100 dark:hover:text-teal-300 font-medium py-2 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-teal-500 dark:hover:bg-teal-600 mt-4" onClick={() => {
                const pricingSection = document.getElementById('pricing');
                if (pricingSection) {
                  pricingSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}>
                Get Started
              </Button>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
};

export default Navbar;