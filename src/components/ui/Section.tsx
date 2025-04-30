import React from 'react';
import Container from './Container';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'light' | 'dark' | 'gradient' | 'transparent';
  fullWidth?: boolean;
}

const backgroundStyles = {
  light: 'bg-white',
  dark: 'bg-gray-900 text-white',
  gradient: 'bg-gradient-to-b from-blue-50 to-white',
  transparent: ''
};

export default function Section({
  children,
  className = '',
  id,
  background = 'light',
  fullWidth = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${backgroundStyles[background]} ${className}`}
    >
      {fullWidth ? children : <Container>{children}</Container>}
    </section>
  );
}