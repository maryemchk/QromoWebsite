
import React, { useState } from 'react';
import { Mail, ArrowRight, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface MessageUsFormProps {
  isLanguageFrench: boolean;
}

const MessageUsForm: React.FC<MessageUsFormProps> = ({ isLanguageFrench }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const translations = {
    title: isLanguageFrench ? "Envoyez-nous un message" : "Message Us",
    email: isLanguageFrench ? "Email" : "Email",
    emailPlaceholder: isLanguageFrench ? "votre@email.com" : "your@email.com",
    message: isLanguageFrench ? "Message" : "Message",
    messagePlaceholder: isLanguageFrench ? "Comment pouvons-nous vous aider ?" : "How can we help you?",
    sendButton: isLanguageFrench ? "Envoyer" : "Send Message",
    sending: isLanguageFrench ? "Envoi en cours..." : "Sending...",
    validationError: {
      title: isLanguageFrench ? "Erreur de validation" : "Validation Error",
      description: isLanguageFrench ? "Veuillez remplir tous les champs." : "Please fill in all fields."
    },
    success: {
      title: isLanguageFrench ? "Message envoyé" : "Message Sent",
      description: isLanguageFrench ? "Nous vous répondrons bientôt." : "We'll get back to you soon."
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!email.trim() || !message.trim()) {
      toast({
        variant: "destructive",
        title: translations.validationError.title,
        description: translations.validationError.description,
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate sending the message
    setTimeout(() => {
      console.log('Message submitted:', { email, message });
      
      // Show success toast
      toast({
        variant: "success",
        title: translations.success.title,
        description: translations.success.description,
      });
      
      // Reset form
      setEmail('');
      setMessage('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-[#ECFDF5] rounded-full flex items-center justify-center">
          <Mail className="h-6 w-6 text-[#10B981]" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900">
          {translations.title}
        </h3>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            {translations.email}
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:border-transparent transition-all duration-200"
            placeholder={translations.emailPlaceholder}
            disabled={isSubmitting}
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            {translations.message}
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={4}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:border-transparent transition-all duration-200"
            placeholder={translations.messagePlaceholder}
            disabled={isSubmitting}
          />
        </div>
        
        <Button 
          type="submit" 
          variant="success"
          className="w-full group"
          disabled={isSubmitting}
        >
          {isSubmitting 
            ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {translations.sending}
                </>
              ) 
            : (
                <>
                  {translations.sendButton}
                  <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                </>
              )
          }
        </Button>
      </form>
    </div>
  );
};

export default MessageUsForm;
