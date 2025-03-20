import React from 'react';
import { Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <div className="py-16 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 text-white">¿Buscas expertos en soldadura industrial para tu próximo proyecto?</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <a
            href="https://api.whatsapp.com/send/?phone=573136547095&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-lg text-gray-200 hover:text-white transition-colors"
          >
            <Phone className="w-6 h-6 mr-2 text-blue-400" /> 3136547095
          </a>
          <a
            href="mailto:morelowelds@gmail.com.co"
            className="flex items-center text-lg text-gray-200 hover:text-white transition-colors"
          >
            <Mail className="w-6 h-6 mr-2 text-blue-400" /> morelowelds@gmail.com.co
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;