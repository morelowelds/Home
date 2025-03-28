import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { CheckCircle2, Phone, Mail, Instagram } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function App() {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('servicios');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const carouselImages = Array.from({ length: 12 }, (_, i) => 
    `https://github.com/morelowelds/images/blob/main/morelo_welds_soldadura_industrial_bogota_${i + 1}.jpeg?raw=true`
  );

  const clientLogos = [
    'https://github.com/morelowelds/images/blob/main/ecopetrol_logo.png?raw=true',
    'https://github.com/morelowelds/images/blob/main/metrogas_logo.png?raw=true',
    'https://github.com/morelowelds/images/blob/main/pepsico_logo.png?raw=true',
    'https://github.com/morelowelds/images/blob/main/pyd_logo.png?raw=true',
    'https://github.com/morelowelds/images/blob/main/colflo_logo.png?raw=true'
  ];

  return (
    <div className="font-sans bg-gray-900">
      {/* Hero Section */}
      <section 
        className="min-h-screen relative flex items-center justify-center"
        style={{
          backgroundImage: `url(https://github.com/morelowelds/images/blob/main/morelo_welds_soldadura_industrial_bogota_12.jpeg?raw=true)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-75"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            🚀 SOLUCIONES EN SOLDADURA PARA Pequeñas, Medianas y Grandes industrias
          </motion.h1>
          <motion.h2 
            className="text-xl md:text-2xl mb-8 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Servicios de Calificación de soldadores, ensayos no destructivos y fabricación metálica para el sector petrolero, minero, energético y alimenticio.
          </motion.h2>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a 
              href="https://api.whatsapp.com/send/?phone=573136547095&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Contactar por WhatsApp
            </a>
            <button
              onClick={scrollToServices}
              className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Conoce más
            </button>
          </div>
        </div>
      </section>

      {/* Image Carousel */}
      <section className="py-16 bg-gray-900">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="max-w-7xl mx-auto"
        >
          {carouselImages.map((image, index) => (
            <SwiperSlide key={index}>
              <img 
                src={image} 
                alt={`Trabajo de soldadura ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">Conozca Nuestro Trabajo</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/DgYLdsbNWLM?si=og1G_OwVKO6kKjlq"
              title="Morelo Welds Video"
              className="w-full h-[500px] rounded-lg shadow-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">¿Por qué elegir Morelo Welds?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Certificaciones internacionales en soldadura (AWS, ASME, API)',
              'Más de 15 años de experiencia en el sector industrial',
              'Proyectos exitosos con empresas del sector petrolero y minero',
              'Garantía en calidad, seguridad y cumplimiento de normativas',
              'Tiempos de entrega óptimos y servicio 24/7'
            ].map((text, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CheckCircle2 className="text-blue-500 w-8 h-8 mb-4" />
                <p className="text-gray-300">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section id="servicios" className="py-16 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Servicios Especializados</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: '💡',
                title: 'Ensayos No Destructivos (END)',
                description: 'Inspección visual, líquidos penetrantes, partículas magnéticas, ultrasonido.'
              },
              {
                icon: '⚡',
                title: 'Soldadura Industrial',
                description: 'SMAW, GMAW, GTAW, FCAW para estructuras, tuberías y equipos a presión.'
              },
              {
                icon: '🏗️',
                title: 'Fabricación de Estructuras Metálicas',
                description: 'Diseño y construcción de tanques, contenedores y estructuras pesadas.'
              },
              {
                icon: '📊',
                title: 'Asesoría en Soldadura e Ingeniería',
                description: 'Normativas, procedimientos, certificaciones y seguridad.'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 p-8 rounded-lg border border-gray-700"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-4xl mb-4 block">{service.icon}</span>
                <h3 className="text-xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 bg-white overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Nuestros Clientes</h2>
        <div className="relative">
          <motion.div
            className="flex space-x-12"
            animate={{
              x: [0, -1000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {[...clientLogos, ...clientLogos].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Cliente ${index + 1}`}
                className="h-16 object-contain"
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Casos de Éxito</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                text: "Gracias a Morelo Welds, logramos cumplir con las exigencias de soldadura en nuestra refinería sin retrasos.",
                author: "Gerente de Ingeniería"
              },
              {
                text: "Su equipo certificado nos ayudó a optimizar la calidad y seguridad en la construcción de nuestra planta minera.",
                author: "Director de Operaciones"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 p-8 rounded-lg border border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-gray-300 italic mb-4">{testimonial.text}</p>
                <p className="font-semibold text-white">– {testimonial.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-blue-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-white">¿Buscas expertos en soldadura industrial para tu próximo proyecto?</h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a
              href="https://api.whatsapp.com/send/?phone=573136547095&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-8 py-3 rounded-lg font-semibold transition-colors text-white"
            >
              <Phone className="w-5 h-5" />
              3136547095
            </a>
            <a
              href="mailto:morelowelds@gmail.com.co"
              className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-8 py-3 rounded-lg font-semibold transition-colors text-white"
            >
              <Mail className="w-5 h-5" />
              morelowelds@gmail.com.co
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
            <div className="text-white text-lg font-semibold">
              Morelo Welds
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/morelowelds/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Morelo Welds. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;