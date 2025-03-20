import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const testimonials = [
  {
    text: "Gracias a Morelo Welds, logramos cumplir con las exigencias de soldadura en nuestra refinería sin retrasos.",
    author: "Gerente de Ingeniería",
  },
  {
    text: "Su equipo certificado nos ayudó a optimizar la calidad y seguridad en la construcción de nuestra planta minera.",
    author: "Director de Operaciones",
  },
];

const Testimonials = () => {
  return (
    <div className="py-16 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Casos de Éxito</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg shadow-2xl border border-gray-700"
            >
              <p className="text-lg mb-4 text-gray-200">"{testimonial.text}"</p>
              <p className="font-bold text-blue-400">– {testimonial.author}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="https://api.whatsapp.com/send/?phone=573136547095&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <MessageCircle className="w-6 h-6 mr-2" />
            Contáctanos por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;