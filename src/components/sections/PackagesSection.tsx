
import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PackagesSectionProps {
  translations: {
    title: string;
    subtitle: string;
    starterTitle: string;
    starterTag: string;
    starterDescription: string;
    starterButton: string;
    silverTitle: string;
    silverTag: string;
    silverDescription: string;
    silverButton: string;
    goldTitle: string;
    goldTag: string;
    goldDescription: string;
    goldButton: string;
    diamondTitle: string;
    diamondTag: string;
    diamondDescription: string;
    diamondButton: string;
    payAsYouGoTitle: string;
    payAsYouGoTag: string;
    payAsYouGoDescription: string;
    payAsYouGoButton: string;
    sms: string;
    bonusSms: string;
    noSubscription: string;
    noExpiry: string;
    onDemand: string;
    initialReach: string;
    expandedComm: string;
    strongerPresence: string;
    maxImpact: string;
    pack: string;
    perSms: string;
  };
}

const PackagesSection: React.FC<PackagesSectionProps> = ({ translations }) => {
  return (
    <section id="packages" className="py-16 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            {translations.title}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-xl sm:max-w-2xl mx-auto px-2">
            {translations.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {/* Starter Boost Pack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-gray-100 flex flex-col"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900">
                {translations.starterTitle}
              </h3>
              <div className="bg-blue-100 px-3 py-1 rounded-full">
                <span className="text-blue-800 text-sm font-medium">
                  {translations.starterTag}
                </span>
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">
              55 DT<span className="text-lg font-normal text-gray-500">{translations.pack}</span>
            </div>
            <p className="text-gray-500 mb-6">
              {translations.starterDescription}
            </p>
            
            <ul className="space-y-3 mb-8">
              {[
                `500 ${translations.sms}`,
                `50 ${translations.bonusSms}`,
                translations.initialReach
              ].map((feature) => (
                <li key={feature} className="flex items-start">
                  <Check className="h-5 w-5 text-blue-500 flex-shrink-0 mr-2" />
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button className="mt-auto bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors">
              {translations.starterButton}
            </Button>
          </motion.div>

          {/* Silver Reach Pack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-gray-100 flex flex-col"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900">
                {translations.silverTitle}
              </h3>
              <div className="bg-gray-200 px-3 py-1 rounded-full">
                <span className="text-gray-700 text-sm font-medium">
                  {translations.silverTag}
                </span>
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">
              70 DT<span className="text-lg font-normal text-gray-500">{translations.pack}</span>
            </div>
            <p className="text-gray-500 mb-6">
              {translations.silverDescription}
            </p>
            
            <ul className="space-y-3 mb-8">
              {[
                `1000 ${translations.sms}`,
                `50 ${translations.bonusSms}`,
                translations.expandedComm
              ].map((feature) => (
                <li key={feature} className="flex items-start">
                  <Check className="h-5 w-5 text-gray-600 flex-shrink-0 mr-2" />
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button className="mt-auto bg-gray-800 hover:bg-gray-700 text-white transition-colors">
              {translations.silverButton}
            </Button>
          </motion.div>

          {/* Gold Connect Pack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-6 sm:p-8 shadow-md border border-amber-200 flex flex-col"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900">
                {translations.goldTitle}
              </h3>
              <div className="bg-amber-400/20 px-3 py-1 rounded-full">
                <span className="text-amber-700 text-sm font-medium">
                  {translations.goldTag}
                </span>
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">
              90 DT<span className="text-lg font-normal text-gray-500">{translations.pack}</span>
            </div>
            <p className="text-gray-500 mb-6">
              {translations.goldDescription}
            </p>
            
            <ul className="space-y-3 mb-8">
              {[
                `1500 ${translations.sms}`,
                `100 ${translations.bonusSms}`,
                translations.strongerPresence
              ].map((feature) => (
                <li key={feature} className="flex items-start">
                  <Check className="h-5 w-5 text-amber-600 flex-shrink-0 mr-2" />
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button className="mt-auto bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white transition-colors">
              {translations.goldButton}
            </Button>
          </motion.div>

          {/* Diamond Impact Pack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 sm:p-8 shadow-lg border border-purple-200 flex flex-col"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900">
                {translations.diamondTitle}
              </h3>
              <div className="bg-purple-200 px-3 py-1 rounded-full">
                <span className="text-purple-700 text-sm font-medium">
                  {translations.diamondTag}
                </span>
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">
              135 DT<span className="text-lg font-normal text-gray-500">{translations.pack}</span>
            </div>
            <p className="text-gray-500 mb-6">
              {translations.diamondDescription}
            </p>
            
            <ul className="space-y-3 mb-8">
              {[
                `2000 ${translations.sms}`,
                `150 ${translations.bonusSms}`,
                translations.maxImpact
              ].map((feature) => (
                <li key={feature} className="flex items-start">
                  <Check className="h-5 w-5 text-purple-600 flex-shrink-0 mr-2" />
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button className="mt-auto bg-purple-600 hover:bg-purple-700 text-white transition-colors">
              {translations.diamondButton}
            </Button>
          </motion.div>

          {/* Pay-As-You-Go */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-gray-100 flex flex-col"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900">
                {translations.payAsYouGoTitle}
              </h3>
              <div className="bg-green-100 px-3 py-1 rounded-full">
                <span className="text-green-800 text-sm font-medium">
                  {translations.payAsYouGoTag}
                </span>
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">
              0.110 DT<span className="text-lg font-normal text-gray-500">{translations.perSms}</span>
            </div>
            <p className="text-gray-500 mb-6">
              {translations.payAsYouGoDescription}
            </p>
            
            <ul className="space-y-3 mb-8">
              {[
                translations.noSubscription,
                translations.noExpiry,
                translations.onDemand
              ].map((feature) => (
                <li key={feature} className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0 mr-2" />
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button className="mt-auto bg-green-50 text-green-700 hover:bg-green-100 transition-colors">
              {translations.payAsYouGoButton}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
