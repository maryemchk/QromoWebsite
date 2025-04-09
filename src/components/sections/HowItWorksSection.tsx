
import React from "react";
import { motion } from "framer-motion";

interface Step {
  title: string;
  description: string;
}

interface HowItWorksSectionProps {
  translations: {
    title: string;
    subtitle: string;
  };
  steps: Step[];
}

const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ translations, steps }) => {
  return (
    <section id="how-it-works" className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            {translations.title}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-xl sm:max-w-2xl mx-auto px-2">
            {translations.subtitle}
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <motion.div 
              key={step.title} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: index * 0.1 }} 
              viewport={{ once: true }} 
              className="text-center"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-qromo text-white rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-xl sm:text-2xl font-bold">
                {index + 1}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                {step.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
