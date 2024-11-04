import React, { useEffect, useState, useRef } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const ClinicEquipmentSlider = () => {
  const [equipments, setEquipments] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 
  const splideRef = useRef(null); 

  useEffect(() => {
    async function fetchEquipments() {
      try {
        const response = await fetch("/wp-json/wp/v2/clinic-equipments");
        const data = await response.json();

        const equipmentsWithMedia = await Promise.all(
          data.map(async (equipment) => {
            const mediaResponse = await fetch(`/wp-json/wp/v2/media/${equipment.featured_media}`);
            const mediaData = await mediaResponse.json();
            return {
              ...equipment,
              imageUrl: mediaData.source_url,
            };
          })
        );

        setEquipments(equipmentsWithMedia);
      } catch (error) {
        console.error('Error fetching clinic equipments:', error);
      } finally {
        setIsLoading(false); 
      }
    }

    fetchEquipments();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="spinner border-t-4 border-blue-500 border-solid rounded-full w-8 h-8 animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="clinic-equipment-slider text-center p-5">
      <Splide
        ref={splideRef}
        options={{
          type: 'loop',
          gap: '1rem',
          autoplay: true,
          interval: 3000,
          pagination: false,
          arrows: false,
        }}
      >
        {equipments.map((equipment) => (
          <SplideSlide key={equipment.id}>
            <div className="relative rounded-lg overflow-hidden group"  style={{borderRadius: '8px'}}>
              <img src={equipment.imageUrl} alt={equipment.title.rendered} className="w-full h-auto rounded-lg" />
              {/* Gradient overlay */}
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-purple-900 to-transparent rounded-lg"></div>
              
              <div className="absolute bottom-5 left-5 text-white p-3 text-left transform group-hover:translate-y-0 translate-y-4 transition-transform duration-300 ease-out">
                <h3 className="text-lg font-semibold">{equipment.title.rendered}</h3>
                <div
                  className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2"
                  dangerouslySetInnerHTML={{ __html: equipment.content.rendered }}
                />
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default ClinicEquipmentSlider;
