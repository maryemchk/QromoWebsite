
import React from "react";
import { motion } from "framer-motion";
import { Users, Award, Globe, Landmark } from "lucide-react";

const About = () => {
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
            About Qromo
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Revolutionizing business promotions through innovative QR code solutions
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20"
        >
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2019, Qromo emerged from a simple observation: businesses needed a better way to connect with customers in an increasingly digital world. Our founders, with backgrounds in technology and marketing, set out to create a platform that would bridge the gap between physical and digital experiences.
            </p>
            <p className="text-gray-600 mb-4">
              What started as a simple QR code generator has evolved into a comprehensive platform that helps thousands of businesses across the globe engage with their customers in meaningful ways. Our mission is to empower businesses of all sizes to create seamless, personalized customer experiences through innovative QR code solutions.
            </p>
            <p className="text-gray-600">
              Today, Qromo serves clients ranging from small local businesses to global enterprises, all united by the desire to connect with their customers in more effective and measurable ways.
            </p>
          </div>
          <div className="flex items-center justify-center lg:justify-end">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" 
              alt="Team collaboration" 
              className="rounded-2xl shadow-lg w-full max-w-md h-auto object-cover"
            />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-3xl p-8 sm:p-12 mb-20"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: "Customer Focus", description: "We put our customers at the center of everything we do, constantly seeking ways to add value." },
              { icon: Award, title: "Innovation", description: "We're committed to pushing boundaries and finding new ways to solve problems." },
              { icon: Globe, title: "Inclusivity", description: "We believe in creating solutions that work for businesses of all sizes and industries." },
              { icon: Landmark, title: "Integrity", description: "We operate with transparency and honesty in all our business practices." }
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 bg-qromo/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-7 w-7 text-qromo" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Our Global Presence</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            With team members across 12 countries and clients in over 50 countries, Qromo is truly a global company bringing innovative QR solutions to businesses worldwide.
          </p>
          <div className="relative aspect-[16/9] max-w-4xl mx-auto">
            <img 
              src="https://images.unsplash.com/photo-1589894404892-1010c2294adc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" 
              alt="Global map" 
              className="rounded-xl shadow-md w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
