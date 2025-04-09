
import React from "react";
import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  isLanguageFrench: boolean;
  phoneNumber: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
  isLanguageFrench, 
  phoneNumber 
}) => {
  // Format number and create WhatsApp URL
  // Remove any non-digit characters from the phone number
  const formattedNumber = phoneNumber.replace(/\D/g, '');
  const whatsappUrl = `https://wa.me/${formattedNumber}`;
  
  const tooltipText = isLanguageFrench 
    ? "Contactez-nous sur WhatsApp" 
    : "Contact us on WhatsApp";

  return (
    <div className="fixed bottom-20 sm:bottom-10 right-4 sm:right-6 z-50 group">
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366] hover:bg-[#20ba57] text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label={tooltipText}
      >
        <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
      </a>
      <div className="absolute -top-10 right-0 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        {tooltipText}
      </div>
    </div>
  );
};

export default WhatsAppButton;
