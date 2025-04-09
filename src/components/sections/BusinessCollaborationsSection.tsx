
import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface Collaboration {
  icon: LucideIcon;
  title: string;
  titleFr: string;
  description: string;
  descriptionFr: string;
}

interface BusinessCollaborationsSectionProps {
  translations: {
    title: string;
    subtitle: string;
  };
  isLanguageFrench: boolean;
  collaborations: Collaboration[];
}

const BusinessCollaborationsSection: React.FC<BusinessCollaborationsSectionProps> = ({ 
  translations, 
  isLanguageFrench,
  collaborations 
}) => {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            {translations.title}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-xl sm:max-w-2xl mx-auto px-2">
            {translations.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {collaborations.map((collab, index) => (
            <motion.div
              key={isLanguageFrench ? collab.titleFr : collab.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-qromo/10 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <collab.icon className="h-5 w-5 sm:h-6 sm:w-6 text-qromo" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                {isLanguageFrench ? collab.titleFr : collab.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                {isLanguageFrench ? collab.descriptionFr : collab.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessCollaborationsSection;
