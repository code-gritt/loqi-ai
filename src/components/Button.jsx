import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  onClick,
  type = 'button',
  ...props 
}) => {
  const baseClasses = 'font-sora font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-pink text-white hover:bg-pink/90 focus:ring-pink/50 shadow-lg shadow-pink/30 hover:shadow-pink/50',
    secondary: 'bg-white text-navy border-2 border-navy hover:bg-navy hover:text-white focus:ring-navy/50',
    outline: 'bg-transparent text-pink border-2 border-pink hover:bg-pink hover:text-white focus:ring-pink/50',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;
  
  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
