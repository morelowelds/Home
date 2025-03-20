import React from 'react';

const VideoSection = () => {
  return (
    <div className="py-16 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Conozca Nuestro Trabajo</h2>
        <div className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto">
          <iframe
            src="https://www.youtube.com/embed/DgYLdsbNWLM?si=og1G_OwVKO6kKjlq"
            title="Morelo Welds Video"
            className="w-full h-[500px] rounded-lg shadow-2xl"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default VideoSection;