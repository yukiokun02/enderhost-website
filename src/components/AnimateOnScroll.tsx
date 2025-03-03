
import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

type AnimationVariant = 
  | 'fade-up'
  | 'fade-down'
  | 'fade-left'
  | 'fade-right'
  | 'zoom-in'
  | 'zoom-out'
  | 'none';

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
  rootMargin?: string;
}

const variants = {
  'fade-up': {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  },
  'fade-down': {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0 }
  },
  'fade-left': {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 }
  },
  'fade-right': {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 }
  },
  'zoom-in': {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  },
  'zoom-out': {
    hidden: { opacity: 0, scale: 1.2 },
    visible: { opacity: 1, scale: 1 }
  },
  'none': {
    hidden: { opacity: 1 },
    visible: { opacity: 1 }
  }
};

export default function AnimateOnScroll({
  children,
  className,
  variant = 'fade-up',
  delay = 0,
  duration = 0.5,
  threshold = 0.1,
  once = true,
  rootMargin = '0px'
}: AnimateOnScrollProps) {
  const { ref, isVisible } = useScrollAnimation({
    threshold,
    rootMargin,
    once
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      variants={variants[variant]}
      transition={{ 
        duration, 
        delay,
        ease: [0.25, 0.1, 0.25, 1.0]
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
