
import React from "react";
import { motion } from "framer-motion";
import { QrCode, LineChart, MessageSquare, TrendingUp, Smartphone, Database, Bot, BarChart4, Users, ArrowRight, RefreshCw } from "lucide-react";

interface BusinessCycleIllustrationProps {
  isLanguageFrench: boolean;
}

const BusinessCycleIllustration: React.FC<BusinessCycleIllustrationProps> = ({
  isLanguageFrench
}) => {
  const translations = {
    title: isLanguageFrench ? "Comment fonctionne notre système alimenté par l'IA" : "How Our AI-Powered System Works",
    subtitle: isLanguageFrench ? "Un cycle d'engagement client complet pour développer votre entreprise" : "A complete customer engagement cycle to grow your business",
    steps: [{
      title: isLanguageFrench ? "Engagement Client" : "Customer Engagement",
      description: isLanguageFrench ? "Les clients scannent un code QR pour obtenir des promotions exclusives" : "Customers scan a QR code to unlock exclusive promotions",
      icon: QrCode,
      color: "bg-[#10B981]"
    }, {
      title: isLanguageFrench ? "Collecte de Données" : "Data Collection",
      description: isLanguageFrench ? "Les informations client sont collectées dans un tableau de bord intelligent" : "Customer information is collected in a smart dashboard",
      icon: LineChart,
      color: "bg-[#F43F5E]"
    }, {
      title: isLanguageFrench ? "Promotions SMS" : "SMS Promotions",
      description: isLanguageFrench ? "L'IA envoie des SMS personnalisés avec des offres spéciales" : "AI sends personalized SMS messages with special offers",
      icon: MessageSquare,
      color: "bg-[#8B5CF6]"
    }, {
      title: isLanguageFrench ? "Croissance Commerciale" : "Business Growth",
      description: isLanguageFrench ? "Augmentez les ventes et fidélisez vos clients avec des analyses de données" : "Increase sales and retain customers with data-driven insights",
      icon: TrendingUp,
      color: "bg-[#F59E0B]"
    }]
  };

  // Animation variants for the content
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };
  
  return (
    <section className="py-16 bg-white sm:py-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{
            opacity: 0,
            y: 20
          }} 
          whileInView={{
            opacity: 1,
            y: 0
          }} 
          transition={{
            duration: 0.5
          }} 
          viewport={{
            once: true
          }} 
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            {translations.title}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-xl sm:max-w-2xl mx-auto px-2">
            {translations.subtitle}
          </p>
        </motion.div>

        {/* Desktop Illustration */}
        <motion.div 
          className="hidden md:block max-w-6xl mx-auto" 
          variants={containerVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{
            once: true
          }}
        >
          <div className="relative flex flex-wrap justify-center">
            {/* Connecting Circle */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border-2 border-dashed border-gray-200 rounded-full"></div>
            
            {/* Center Icon - FIXED POSITIONING */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
              <div className="w-16 h-16 bg-[#10B981] rounded-full flex items-center justify-center shadow-lg animate-pop">
                <RefreshCw className="h-8 w-8 text-white" />
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-16">
              {translations.steps.map((step, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants} 
                  className="relative flex items-center m-6"
                >
                  <div className="flex flex-col items-center max-w-xs mx-auto text-center">
                    {/* Step number badge */}
                    <div className={`absolute top-0 -left-2 w-7 h-7 ${
                      index === 0 ? "bg-[#10B981]" : 
                      index === 1 ? "bg-[#F43F5E]" : 
                      index === 2 ? "bg-[#8B5CF6]" : 
                      "bg-[#F59E0B]"
                    } text-white rounded-full flex items-center justify-center text-xs font-bold shadow-md`}>
                      {index + 1}
                    </div>
                    
                    {/* Icon */}
                    <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center shadow-md mb-4`}>
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      {step.description}
                    </p>
                    
                    {/* Connecting Arrow */}
                    {index < translations.steps.length - 1 && (
                      <motion.div 
                        className="absolute right-[-50px] top-[30px]" 
                        initial={{
                          opacity: 0
                        }} 
                        animate={{
                          opacity: 1
                        }} 
                        transition={{
                          delay: 0.5 + index * 0.2,
                          duration: 0.5
                        }}
                      >
                        <ArrowRight className={`h-6 w-6 ${
                          index === 0 ? "text-[#10B981]" : 
                          index === 1 ? "text-[#F43F5E]" : 
                          index === 2 ? "text-[#8B5CF6]" : 
                          "text-[#F59E0B]"
                        }`} />
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Mobile Illustration - Vertical Flow */}
        <motion.div 
          className="md:hidden" 
          variants={containerVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{
            once: true
          }}
        >
          <div className="relative flex flex-col items-center">
            {/* Vertical Line */}
            <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-[#10B981] via-[#F43F5E] to-[#8B5CF6] h-full"></div>
            
            {translations.steps.map((step, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants} 
                className="flex flex-col items-center text-center mb-12 relative z-10"
              >
                {/* Icon */}
                <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center shadow-md mb-4`}>
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                
                {/* Step number badge */}
                <div className={`absolute top-0 -right-6 w-6 h-6 ${
                  index === 0 ? "bg-[#10B981]" : 
                  index === 1 ? "bg-[#F43F5E]" : 
                  index === 2 ? "bg-[#8B5CF6]" : 
                  "bg-[#F59E0B]"
                } text-white rounded-full flex items-center justify-center text-xs font-bold`}>
                  {index + 1}
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 max-w-xs">
                  {step.description}
                </p>
                
                {/* Arrow Down */}
                {index < translations.steps.length - 1 && (
                  <div className="my-4">
                    <motion.div 
                      animate={{
                        y: [0, 5, 0]
                      }} 
                      transition={{
                        repeat: Infinity,
                        duration: 1.5
                      }}
                    >
                      <ArrowRight className={`h-6 w-6 ${
                        index === 0 ? "text-[#10B981]" : 
                        index === 1 ? "text-[#F43F5E]" : 
                        index === 2 ? "text-[#8B5CF6]" : 
                        "text-[#F59E0B]"
                      } transform rotate-90`} />
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
            
            {/* Final Element */}
            <motion.div 
              variants={itemVariants} 
              className="w-16 h-16 bg-[#10B981] rounded-full flex items-center justify-center shadow-lg animate-pop"
            >
              <RefreshCw className="h-8 w-8 text-white" />
            </motion.div>
          </div>
        </motion.div>
        
        {/* Detailed Process Illustrations */}
        <div className="mt-16 sm:mt-24 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Step 1: Customer Engagement */}
            
            
            {/* Step 2: Data Collection */}
            
            
            {/* Step 3: SMS Promotions */}
            
            
            {/* Step 4: Business Growth */}
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessCycleIllustration;
