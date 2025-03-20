import React from 'react';

const clients = [
  {
    logo: 'https://github.com/morelowelds/images/blob/main/ecopetrol_logo.png?raw=true',
    name: 'Ecopetrol',
  },
  {
    logo: 'https://github.com/morelowelds/images/blob/main/metrogas_logo.png?raw=true',
    name: 'Metrogas',
  },
  {
    logo: 'https://github.com/morelowelds/images/blob/main/pepsico_logo.png?raw=true',
    name: 'PepsiCo',
  },
  {
    logo: 'https://github.com/morelowelds/images/blob/main/pyd_logo.png?raw=true',
    name: 'PyD',
  },
  {
    logo: 'https://github.com/morelowelds/images/blob/main/colflo_logo.png?raw=true',
    name: 'Colflo',
  },
];

const Clients = () => {
  return (
    <div className="py-16 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Nuestros Clientes</h2>
        <div className="relative overflow-hidden bg-white p-8 rounded-lg shadow-2xl">
          <div className="flex animate-scroll">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-16 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;