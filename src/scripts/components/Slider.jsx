import React, { useRef } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const ClinicEquipmentSlider = ({ equipments, isLoading }) => {
  const splideRef = useRef(null);

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
          perPage: 3,
          breakpoints: {
            768: { perPage: 1 },
            1024: { perPage: 2 },
          },
        }}
      >
        {equipments.map((equipment) => (
          <SplideSlide key={equipment.id}>
            <div className="flex flex-col items-center bg-gray-200 shadow-lg rounded-lg p-4 h-full overflow-auto">
              <img
                src={equipment.imageUrl}
                alt={equipment.title.rendered}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <div className="flex flex-col justify-between h-full">
                <h3 className="text-lg font-semibold mb-2">{equipment.title.rendered}</h3>
                <div
                  className="text-sm"
                  dangerouslySetInnerHTML={{ __html: equipment.content.rendered }}
                />
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
      {/* Custom Navigation Buttons */}
      <div className="mt-6 flex justify-center space-x-4">
        <button
          className="bg-[#00A4E4] px-4 py-2 rounded-full shadow-lg focus:outline-none flex items-center justify-center hover:bg-[#0090c5] transition-all duration-200"
          style={{ minWidth: '48px', borderRadius: '9999px' }}
          onClick={() => splideRef.current.splide.go('<')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
        </button>
        <button
          className="bg-[#00A4E4] px-4 py-2 rounded-full shadow-lg focus:outline-none flex items-center justify-center hover:bg-[#0090c5] transition-all duration-200"
          style={{ minWidth: '48px', borderRadius: '9999px' }}
          onClick={() => splideRef.current.splide.go('>')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ClinicEquipmentSlider;
