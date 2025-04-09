
import React, { useState } from "react";
import { QrCode, LineChart, Users } from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import BusinessCollaborationsSection from "@/components/sections/BusinessCollaborationsSection";
import PackagesSection from "@/components/sections/PackagesSection";
import ContactSection from "@/components/sections/ContactSection";
import CTASection from "@/components/sections/CTASection";
import WhatsAppButton from "@/components/WhatsAppButton";
import BusinessCycleIllustration from "@/components/BusinessCycleIllustration";
import collaborations from "@/data/collaborations";

const Index = () => {
  const [isLanguageFrench, setIsLanguageFrench] = useState(false);

  const translations = {
    nav: {
      features: isLanguageFrench ? "Fonctionnalités" : "Features",
      howItWorks: isLanguageFrench ? "Comment ça marche" : "How It Works",
      pricing: isLanguageFrench ? "Tarifs" : "Pricing",
      contact: isLanguageFrench ? "Contact" : "Contact"
    },
    hero: {
      transform: isLanguageFrench ? "Transformez votre entreprise aujourd'hui" : "Transform Your Business Today",
      title: isLanguageFrench ? "Révolutionnez vos promotions avec des QR Codes intelligents" : "Revolutionizing Business Promotions with Smart QR Codes",
      subtitle: isLanguageFrench ? "Prix flexibles, offres transparentes et engagement client à portée de main" : "Flexible pricing, seamless offers, and customer engagement at your fingertips",
      learnMore: isLanguageFrench ? "En savoir plus" : "Learn More"
    },
    features: {
      title: isLanguageFrench ? "Tout ce dont vous avez besoin pour développer votre entreprise" : "Everything you need to grow your business",
      subtitle: isLanguageFrench ? "Des fonctionnalités puissantes pour gérer et développer votre entreprise efficacement" : "Powerful features to help you manage and scale your business efficiently"
    },
    businessCollaborations: {
      title: isLanguageFrench ? "Collaborations Commerciales" : "Business Collaborations",
      subtitle: isLanguageFrench ? "Découvrez comment nous travaillons avec des entreprises pour créer des solutions innovantes" : "Discover how we work with businesses to create innovative solutions"
    },
    howItWorks: {
      title: isLanguageFrench ? "Comment ça marche" : "How It Works",
      subtitle: isLanguageFrench ? "Commencez en quelques minutes avec notre processus simple en trois étapes" : "Get started in minutes with our simple three-step process"
    },
    packages: {
      title: isLanguageFrench ? "Forfaits de Messagerie Qromo" : "Qromo Messaging Packs",
      subtitle: isLanguageFrench ? "Atteignez vos clients de la manière qui vous convient" : "Reach Your Customers, Your Way",
      // Pack titles
      starterTitle: isLanguageFrench ? "Pack Boost Starter" : "Starter Boost Pack",
      starterTag: isLanguageFrench ? "Léger" : "Light",
      starterDescription: isLanguageFrench ? "Parfait pour les campagnes légères" : "Perfect for light campaigns",
      starterButton: isLanguageFrench ? "Commencer" : "Get Started",
      
      silverTitle: isLanguageFrench ? "Pack Reach Argent" : "Silver Reach Pack",
      silverTag: isLanguageFrench ? "Moyen" : "Medium",
      silverDescription: isLanguageFrench ? "Idéal pour les campagnes petites et moyennes" : "Ideal for small to medium-sized campaigns",
      silverButton: isLanguageFrench ? "Choisir" : "Choose Plan",
      
      goldTitle: isLanguageFrench ? "Pack Connect Or" : "Gold Connect Pack",
      goldTag: isLanguageFrench ? "Robuste" : "Robust",
      goldDescription: isLanguageFrench ? "Pour les entreprises prêtes à maximiser leur portée" : "For businesses ready to maximize their outreach",
      goldButton: isLanguageFrench ? "Maximiser" : "Maximize",
      
      diamondTitle: isLanguageFrench ? "Pack Impact Diamant" : "Diamond Impact Pack",
      diamondTag: isLanguageFrench ? "Premium" : "Premium",
      diamondDescription: isLanguageFrench ? "Une solution sur mesure pour une communication à fort impact" : "Tailored for high-volume communication with a premium edge",
      diamondButton: isLanguageFrench ? "Contactez-nous" : "Contact Sales",
      
      payAsYouGoTitle: isLanguageFrench ? "Paiement à la Consommation" : "Pay-As-You-Go",
      payAsYouGoTag: isLanguageFrench ? "Flexible" : "Flexible",
      payAsYouGoDescription: isLanguageFrench ? "Totale flexibilité, total contrôle" : "Total flexibility, total control",
      payAsYouGoButton: isLanguageFrench ? "Commencer" : "Get Started",
      
      // Common pack features
      sms: "SMS",
      bonusSms: isLanguageFrench ? "SMS Bonus GRATUITS" : "FREE Bonus SMS",
      noSubscription: isLanguageFrench ? "Aucun abonnement" : "No subscription",
      noExpiry: isLanguageFrench ? "Pas de date d'expiration" : "No expiry",
      onDemand: isLanguageFrench ? "Envoi à la demande" : "On-demand messaging",
      initialReach: isLanguageFrench ? "Engagement initial" : "Initial Customer Reach",
      expandedComm: isLanguageFrench ? "Communication élargie" : "Expanded Communication",
      strongerPresence: isLanguageFrench ? "Présence renforcée" : "Stronger Presence",
      maxImpact: isLanguageFrench ? "Impact maximal" : "Maximum Impact",
      pack: isLanguageFrench ? "/pack" : "/pack",
      perSms: isLanguageFrench ? "/SMS" : "/SMS"
    },
    contact: {
      title: isLanguageFrench ? "Contactez-nous" : "Get in Touch",
      subtitle: isLanguageFrench ? "Notre équipe est là pour vous aider" : "Our team is here to help you succeed",
      email: "Email",
      phone: isLanguageFrench ? "Téléphone" : "Phone",
      address: isLanguageFrench ? "Adresse" : "Address"
    },
    cta: {
      title: isLanguageFrench ? "Prêt à transformer votre entreprise ?" : "Ready to transform your business?",
      subtitle: isLanguageFrench ? "Rejoignez des milliers d'entreprises qui utilisent déjà Qromo pour développer leur clientèle et augmenter leurs revenus." : "Join thousands of businesses already using Qromo to grow your customer base and increase revenue."
    },
    chat: {
      title: isLanguageFrench ? "Chat en direct" : "Live Chat",
      underConstruction: isLanguageFrench ? "🚧 Notre chat est actuellement en construction. Veuillez nous contacter par email ou téléphone pour toute assistance." : "🚧 Our chat functionality is currently under construction. Please contact us via email or phone for assistance."
    }
  };

  // Translate features
  const translatedFeatures = [
    {
      icon: QrCode,
      title: isLanguageFrench ? "Codes QR Intelligents" : "Smart QR Codes",
      description: isLanguageFrench ? "Générez et gérez des codes QR dynamiques qui s'adaptent aux besoins de votre entreprise." : "Generate and manage dynamic QR codes that adapt to your business needs."
    },
    {
      icon: LineChart,
      title: isLanguageFrench ? "Tableau de Bord Analytique" : "Analytics Dashboard",
      description: isLanguageFrench ? "Suivez l'engagement client et mesurez le succès de vos campagnes en temps réel." : "Track customer engagement and measure the success of your campaigns in real-time."
    },
    {
      icon: Users,
      title: isLanguageFrench ? "Gestion de la Clientèle" : "Customer Management",
      description: isLanguageFrench ? "Construisez des relations plus solides avec vos clients grâce à des interactions personnalisées." : "Build stronger relationships with your customers through personalized interactions."
    }
  ];

  // Translate steps
  const translatedSteps = [
    {
      title: isLanguageFrench ? "Générer un Code QR" : "Generate QR Code",
      description: isLanguageFrench ? "Créez des codes QR personnalisés pour votre entreprise en quelques secondes avec notre plateforme intuitive." : "Create custom QR codes for your business in seconds with our intuitive platform."
    },
    {
      title: isLanguageFrench ? "Partager avec les Clients" : "Share with Customers",
      description: isLanguageFrench ? "Affichez vos codes QR en magasin ou en ligne pour que les clients accèdent facilement à vos offres." : "Display your QR codes in-store or online for customers to easily access your offers."
    },
    {
      title: isLanguageFrench ? "Suivre & Analyser" : "Track & Analyze",
      description: isLanguageFrench ? "Surveillez l'engagement des clients et optimisez vos campagnes avec des analyses en temps réel." : "Monitor customer engagement and optimize your campaigns with real-time analytics."
    }
  ];

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <NavBar 
        isLanguageFrench={isLanguageFrench} 
        setIsLanguageFrench={setIsLanguageFrench} 
        translations={translations.nav} 
      />

      {/* Hero Section */}
      <HeroSection 
        translations={translations.hero} 
        scrollToFeatures={scrollToFeatures} 
      />

      {/* Features Section */}
      <FeaturesSection 
        translations={translations.features} 
        features={translatedFeatures} 
      />

      {/* Business Cycle Illustration Section */}
      <BusinessCycleIllustration isLanguageFrench={isLanguageFrench} />

      {/* How It Works Section */}
      <HowItWorksSection 
        translations={translations.howItWorks} 
        steps={translatedSteps} 
      />

      {/* Business Collaborations Section */}
      <BusinessCollaborationsSection 
        translations={translations.businessCollaborations} 
        isLanguageFrench={isLanguageFrench}
        collaborations={collaborations}
      />

     
      {/* Packages Section */}
      <PackagesSection translations={translations.packages} />

      {/* Contact Section */}
      <ContactSection 
        translations={translations.contact} 
        isLanguageFrench={isLanguageFrench} 
      />

      {/* CTA Section */}
      <CTASection translations={translations.cta} />

      <Footer 
        isLanguageFrench={isLanguageFrench} 
        translations={{
          features: translations.nav.features,
          pricing: translations.nav.pricing,
          contact: translations.nav.contact
        }} 
      />

      
      {/* WhatsApp Button */}
      <WhatsAppButton 
        isLanguageFrench={isLanguageFrench}
        phoneNumber="+216 51 807 755"  // Replace with your actual WhatsApp business number
      />
    </div>
  );
};

export default Index;
