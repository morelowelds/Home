import React from 'react';
import { motion } from 'framer-motion';
import { Search, Zap, Building2, LineChart } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Ensayos No Destructivos (END)',
    description: 'Inspección visual, líquidos penetrantes, partículas magnéticas, ultrasonido.',
  },
  {
    icon: Zap,
    title: 'Soldadura Industrial',
    description: 'SMAW, GMAW, GTAW, FCAW para estructuras, tuberías y equipos a presión.',
  },
  {
    icon: Building2,
    title: 'Fabricación de Estructuras Metálicas',
    description: 'Diseño y construcción de tanques, contenedores y estructuras pesadas.',
  },
  {
    icon: LineChart,
    title: 'Asesoría en Soldadura e Ingeniería',
    description: 'Normativas, procedimientos, certificaciones y seguridad.',
  },
];

const Services = () => {
  return (
    <div id="services" className="py-16 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Servicios Especializados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg shadow-2xl border border-gray-700"
            >
              <service.icon className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-4 text-white">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;