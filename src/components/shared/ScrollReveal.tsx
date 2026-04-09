 import React, { ReactNode } from 'react';
 import { useScrollReveal } from '@/hooks/useScrollReveal';
 import { cn } from '@/lib/utils';
 
 interface ScrollRevealProps {
   children: ReactNode;
   animation?: 'fade-in' | 'fade-in-up' | 'slide-in-left' | 'slide-in-right';
   delay?: number;
   className?: string;
 }
 
 const ScrollReveal = ({ 
   children, 
   animation = 'fade-in', 
   delay = 0,
   className 
 }: ScrollRevealProps) => {
   const { ref, isVisible } = useScrollReveal();
 
   const animationClasses: Record<string, string> = {
     'fade-in': 'animate-fade-in',
     'fade-in-up': 'animate-fade-in',
     'slide-in-left': 'animate-fade-in',
     'slide-in-right': 'animate-fade-in',
   };
 
   return (
     <div
       ref={ref}
       className={cn(
         'transition-all duration-500',
         isVisible ? animationClasses[animation] : 'opacity-0 translate-y-4',
         className
       )}
       style={{ transitionDelay: `${delay}ms` }}
     >
       {children}
     </div>
   );
 };
 
 export default ScrollReveal;