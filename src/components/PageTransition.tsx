
import { motion, AnimatePresence } from "framer-motion";
import { ReactNode, useState, useEffect } from "react";
import LoadingIndicator from "./LoadingIndicator";

interface PageTransitionProps {
  children: ReactNode;
}

const variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1.0],
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.2,
    },
  },
};

export default function PageTransition({ children }: PageTransitionProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show loading state briefly
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600); // Show loading for 600ms

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingIndicator />}
      </AnimatePresence>
      
      <motion.div
        variants={variants}
        initial="initial"
        animate={isLoading ? "initial" : "animate"}
        exit="exit"
        className="w-full"
      >
        {children}
      </motion.div>
    </>
  );
}
