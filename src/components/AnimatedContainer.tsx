import React from 'react';
import { fadeIn, rippleEffect } from '../utils/animations';

interface AnimatedContainerProps {
  children: React.ReactNode;
  className?: string;
  animation?: string;
  delay?: number;
  hover?: boolean;
  ripple?: boolean;
  float?: boolean;
}

export function AnimatedContainer({ 
  children, 
  className = '', 
  animation = fadeIn,
  delay = 0,
  hover = false,
  ripple = false,
  float = false
}: AnimatedContainerProps) {
  const combinedClassName = `
    ${animation} 
    ${className}
    ${hover ? 'transition-transform duration-300 hover:scale-105' : ''}
    ${float ? 'animate-float' : ''}
    ${ripple ? 'relative overflow-hidden' : ''}
  `.trim();

  return (
    <div 
      className={combinedClassName}
      style={{ animationDelay: `${delay}ms` }}
      onClick={ripple ? rippleEffect : undefined}
    >
      {children}
    </div>
  );
}