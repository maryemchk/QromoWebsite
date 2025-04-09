
import React from "react";
import { Link } from "react-router-dom";
import { ArrowUp } from "lucide-react";

interface FooterProps {
  isLanguageFrench: boolean;
  translations: {
    features: string;
    pricing: string;
    contact: string;
  }
}

const Footer = ({ isLanguageFrench, translations }: FooterProps) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-white py-12 sm:py-16 border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4 sm:mb-6 group cursor-pointer" onClick={scrollToTop}>
              <img
                alt="Qromo Logo"
                src="/lovable-uploads/7841b287-0d27-42b2-ae04-c2d1b7bd1c08.png"
                className="h-10 object-contain transition-transform duration-300 group-hover:scale-110"
              />
              <span className="text-xl font-bold text-[#10B981]">Qromo</span>
            </div>
            <p className="text-gray-600 text-sm sm:text-base">
              {isLanguageFrench
                ? "Révolutionner les promotions commerciales avec des codes QR intelligents."
                : "Revolutionizing business promotions with smart QR codes."}
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">
              {isLanguageFrench ? "Produit" : "Product"}
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link to="/#features" className="text-gray-600 hover:text-[#10B981] transition-colors text-sm sm:text-base relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#10B981] after:transition-all hover:after:w-full">
                  {translations.features}
                </Link>
              </li>
              <li>
                <Link to="/#packages" className="text-gray-600 hover:text-[#10B981] transition-colors text-sm sm:text-base relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#10B981] after:transition-all hover:after:w-full">
                  {translations.pricing}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">
              {isLanguageFrench ? "Entreprise" : "Company"}
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link to="/#contact" className="text-gray-600 hover:text-[#10B981] transition-colors text-sm sm:text-base relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#10B981] after:transition-all hover:after:w-full">
                  {translations.contact}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">
              {isLanguageFrench ? "Juridique" : "Legal"}
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link to="#privacy" className="text-gray-600 hover:text-[#10B981] transition-colors text-sm sm:text-base relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#10B981] after:transition-all hover:after:w-full">
                  {isLanguageFrench ? "Confidentialité" : "Privacy"}
                </Link>
              </li>
              <li>
                <Link to="#terms" className="text-gray-600 hover:text-[#10B981] transition-colors text-sm sm:text-base relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#10B981] after:transition-all hover:after:w-full">
                  {isLanguageFrench ? "Conditions" : "Terms"}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-10 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm sm:text-base">
            © {new Date().getFullYear()} Qromo. {isLanguageFrench ? "Tous droits réservés." : "All rights reserved."}
          </p>
          <button 
            onClick={scrollToTop}
            className="mt-4 sm:mt-0 flex items-center text-[#10B981] hover:text-[#059669] transition-colors group"
          >
            <span className="mr-2">{isLanguageFrench ? "Retour en haut" : "Back to top"}</span>
            <ArrowUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
