
import React from "react";

interface CTASectionProps {
  translations: {
    title: string;
    subtitle: string;
  };
}

const CTASection: React.FC<CTASectionProps> = ({ translations }) => {
  return (
    <section className="py-16 sm:py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            {translations.title}
          </h2>
          <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 px-2">
            {translations.subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
