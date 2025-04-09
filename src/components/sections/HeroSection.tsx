
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  translations: {
    transform: string;
    title: string;
    subtitle: string;
    learnMore: string;
  };
  scrollToFeatures: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ translations, scrollToFeatures }) => {
  return (
    <section className="pt-28 sm:pt-32 md:pt-36 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto text-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }} 
          className="inline-block px-4 py-1.5 mb-4 sm:mb-6 text-sm font-medium text-qromo bg-qromo/10 rounded-full"
        >
          {translations.transform}
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.2 }} 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight"
        >
          {translations.title}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.4 }} 
          className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-xl sm:max-w-2xl mx-auto px-2"
        >
          {translations.subtitle}
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.6 }} 
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button 
            size="lg" 
            className="bg-qromo hover:bg-qromo-dark text-white px-6 sm:px-8 w-full sm:w-auto"
            onClick={scrollToFeatures}
          >
            {translations.learnMore} <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
