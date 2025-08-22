
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type SectionProps = {
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLElement>;

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <motion.section
        ref={ref}
        className={cn(className)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0 },
        }}
        {...props}
      >
        {children}
      </motion.section>
    );
  }
);

Section.displayName = 'Section';
