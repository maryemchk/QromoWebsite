
import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import MessageUsForm from "@/components/MessageUsForm";

interface ContactSectionProps {
  translations: {
    title: string;
    subtitle: string;
    email: string;
    phone: string;
    address: string;
  };
  isLanguageFrench: boolean;
}

const ContactSection: React.FC<ContactSectionProps> = ({ translations, isLanguageFrench }) => {
  return (
    <section id="contact" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            {translations.title}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-xl sm:max-w-2xl mx-auto px-2">
            {translations.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-qromo/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-qromo" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-600">contact.qromo@gmail.com</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-qromo/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-qromo" />
              </div>
              <h3 className="font-semibold mb-2">
                {translations.phone}
              </h3>
              <p className="text-gray-600">+216 55 132 130</p>
              <p className="text-gray-600">+216 51 807 755</p>

            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-qromo/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-qromo" />
              </div>
              <h3 className="font-semibold mb-2">
                {translations.address}
              </h3>
              <p className="text-gray-600">BP 223 Av. de la Corniche</p>
              <p className="text-gray-600">Monastir, Tunisia</p>
            </div>
          </div>
          
          {/* Message Us Form */}
          <div className="lg:col-span-3">
            <MessageUsForm isLanguageFrench={isLanguageFrench} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
