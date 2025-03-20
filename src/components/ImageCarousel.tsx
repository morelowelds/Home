import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const images = [
  'https://github.com/morelowelds/images/blob/main/morelo_welds_soldadura_industrial_bogota_1.jpeg?raw=true',
  'https://github.com/morelowelds/images/blob/main/morelo_welds_soldadura_industrial_bogota_2.jpeg?raw=true',
  'https://github.com/morelowelds/images/blob/main/morelo_welds_soldadura_industrial_bogota_3.jpeg?raw=true',
  'https://github.com/morelowelds/images/blob/main/morelo_welds_soldadura_industrial_bogota_4.jpeg?raw=true',
  'https://github.com/morelowelds/images/blob/main/morelo_welds_soldadura_industrial_bogota_5.jpeg?raw=true',
  'https://github.com/morelowelds/images/blob/main/morelo_welds_soldadura_industrial_bogota_6.jpeg?raw=true',
  'https://github.com/morelowelds/images/blob/main/morelo_welds_soldadura_industrial_bogota_7.jpeg?raw=true',
  'https://github.com/morelowelds/images/blob/main/morelo_welds_soldadura_industrial_bogota_8.jpeg?raw=true',
  'https://github.com/morelowelds/images/blob/main/morelo_welds_soldadura_industrial_bogota_9.jpeg?raw=true',
  'https://github.com/morelowelds/images/blob/main/morelo_welds_soldadura_industrial_bogota_10.jpeg?raw=true',
  'https://github.com/morelowelds/images/blob/main/morelo_welds_soldadura_industrial_bogota_11.jpeg?raw=true',
  'https://github.com/morelowelds/images/blob/main/morelo_welds_soldadura_industrial_bogota_12.jpeg?raw=true',
];

const ImageCarousel = () => {
  return (
    <div className="py-16 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Nuestros Proyectos</h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="mySwiper"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Proyecto ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg shadow-xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ImageCarousel;