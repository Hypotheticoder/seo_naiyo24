import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

// Updated Button component to ensure consistent alignment and dark mode support
const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700 dark:bg-teal-500 dark:hover:bg-teal-600 shadow-md',
  secondary: 'bg-teal-500 text-white hover:bg-teal-600 dark:bg-blue-600 dark:hover:bg-blue-700 shadow-md',
  outline: 'bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-teal-500 dark:text-teal-500 dark:hover:bg-teal-50',
  ghost: 'bg-transparent text-blue-600 hover:bg-blue-50 dark:text-teal-500 dark:hover:bg-teal-50'
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'text-sm py-1.5 px-3 rounded-md',
  md: 'text-base py-2 px-4 rounded-lg',
  lg: 'text-lg py-2.5 px-6 rounded-lg'
};

// Added consistent alignment style to Button component
const baseAlignment = 'flex items-center justify-center';

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  fullWidth = false,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        ${baseAlignment} 
        ${variantStyles[variant]} 
        ${sizeStyles[size]} 
        ${fullWidth ? 'w-full' : ''} 
        transition-all duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;