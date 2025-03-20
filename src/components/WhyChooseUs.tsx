import React from 'react';
import { motion } from 'framer-motion';
import { Award, Clock, Shield, Star, ThumbsUp, MessageCircle } from 'lucide-react';

const features = [
  {
    icon: Award,
    text: 'Certificaciones internacionales en soldadura (AWS, ASME, API)',
  },
  {
    icon: Star,
    text: 'Más de 15 años de experiencia en el sector industrial',
  },
  {
    icon: Shield,
    text: 'Proyectos exitosos con empresas del sector petrolero y minero',
  },
  {
    icon: ThumbsUp,
    text: 'Garantía en calidad, seguridad y cumplimiento de normativas',
  },
  {
    icon: Clock,
    text: 'Tiempos de entrega óptimos y servicio 24/7',
  },
];

const WhyChooseUs = () => {
  return (
    <div className="py-16 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">¿Por qué elegir Morelo Welds?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg shadow-2xl border border-gray-700"
            >
              <div className="flex items-center mb-4">
                <feature.icon className="w-8 h-8 text-blue-400 mr-3" />
                <p className="text-lg text-gray-200">{feature.text}</p>
              </div>
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

export default WhyChooseUs;