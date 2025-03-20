import React from 'react';

const Hero = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div 
      className="min-h-screen relative flex items-center justify-center"
      style={{
        backgroundImage: 'url(https://github.com/morelowelds/images/blob/main/morelo_welds_soldadura_industrial_bogota_12.jpeg?raw=true)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50 backdrop-blur-[2px]" />
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
          SOLUCIONES EN SOLDADURA
          <span className="block mt-2 bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text">
            Para pequeñas, medianas y grandes industrias
          </span>
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed">
          Servicios de Calificación de soldadores, ensayos no destructivos y Fabricación metálica 
          para el sector petrolero, minero, energético y alimenticio.
        </h2>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="https://api.whatsapp.com/send/?phone=573136547095&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 px-10 rounded-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Contactar por WhatsApp
          </a>
          <button
            onClick={scrollToServices}
            className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-bold py-4 px-10 rounded-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Conoce más
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
