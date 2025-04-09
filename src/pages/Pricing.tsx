
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const Pricing = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Simple, Transparent Pricing
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Choose the plan that's right for your business. All plans include a 14-day free trial.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
        >
          {/* Basic Plan */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-gray-100 flex flex-col">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Basic</h3>
            <div className="text-3xl font-bold text-gray-900 mb-1">$19<span className="text-lg font-normal text-gray-500">/mo</span></div>
            <p className="text-gray-500 mb-6">For individuals and small projects</p>
            
            <ul className="space-y-3 mb-8">
              {["Up to 3 QR codes", "Basic analytics", "Email support", "Standard templates"].map((feature) => (
                <li key={feature} className="flex items-start">
                  <Check className="h-5 w-5 text-qromo flex-shrink-0 mr-2" />
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button className="mt-auto bg-white text-qromo border border-qromo hover:bg-qromo hover:text-white transition-colors">
              Get Started
            </Button>
          </div>

          {/* Starter Plan */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-gray-100 flex flex-col">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Starter</h3>
            <div className="text-3xl font-bold text-gray-900 mb-1">$29<span className="text-lg font-normal text-gray-500">/mo</span></div>
            <p className="text-gray-500 mb-6">Perfect for small businesses just getting started</p>
            
            <ul className="space-y-3 mb-8">
              {["Up to 5 QR codes", "Basic analytics", "Email support", "Standard templates"].map((feature) => (
                <li key={feature} className="flex items-start">
                  <Check className="h-5 w-5 text-qromo flex-shrink-0 mr-2" />
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button className="mt-auto bg-white text-qromo border border-qromo hover:bg-qromo hover:text-white transition-colors">
              Get Started
            </Button>
          </div>

          {/* Professional Plan */}
          <div className="bg-qromo text-white rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-qromo-dark text-white px-4 py-1 rounded-full text-sm font-medium">
              Most Popular
            </div>
            <h3 className="text-xl font-bold mb-2">Professional</h3>
            <div className="text-3xl font-bold mb-1">$79<span className="text-lg font-normal opacity-80">/mo</span></div>
            <p className="opacity-80 mb-6">For growing businesses with more demands</p>
            
            <ul className="space-y-3 mb-8">
              {["Up to 50 QR codes", "Advanced analytics", "Priority support", "Custom templates", "Social media integration"].map((feature) => (
                <li key={feature} className="flex items-start">
                  <Check className="h-5 w-5 text-white flex-shrink-0 mr-2" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button className="mt-auto bg-white text-qromo hover:bg-gray-100 transition-colors">
              Get Started
            </Button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-gray-100 flex flex-col">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise</h3>
            <div className="text-3xl font-bold text-gray-900 mb-1">$199<span className="text-lg font-normal text-gray-500">/mo</span></div>
            <p className="text-gray-500 mb-6">For large organizations with advanced needs</p>
            
            <ul className="space-y-3 mb-8">
              {["Unlimited QR codes", "Real-time analytics", "24/7 dedicated support", "Advanced customization", "API access", "User role management"].map((feature) => (
                <li key={feature} className="flex items-start">
                  <Check className="h-5 w-5 text-qromo flex-shrink-0 mr-2" />
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button className="mt-auto bg-white text-qromo border border-qromo hover:bg-qromo hover:text-white transition-colors">
              Contact Sales
            </Button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">Have questions about our pricing or need a custom solution?</p>
          <Button variant="outline" className="mx-auto">
            Contact Us <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;
