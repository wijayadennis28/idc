import React, { useEffect, useState } from "react";

const ServiceTypesSection = ({ service }) => {
  const [imageUrls, setImageUrls] = useState({});
  const [activeIndex, setActiveIndex] = useState(0);

  const serviceTypes = Object.values(service.meta.service_types || {}).filter(
    (t) => t.title,
  );

  // Fetch image URL for each service type that has an image ID
  useEffect(() => {
    async function fetchImages() {
      const results = {};
      await Promise.all(
        serviceTypes.map(async (type, index) => {
          if (!type.image) return;
          try {
            const res = await fetch(
              `${wpApiSettings.restUrl}wp/v2/media/${type.image}`,
            );
            const data = await res.json();
            results[index] = data.source_url;
          } catch (e) {
            console.error(`Failed to fetch image for service type ${index}`, e);
          }
        }),
      );
      setImageUrls(results);
    }
    if (serviceTypes.length) fetchImages();
  }, [service]);

  if (!serviceTypes.length) return null;

  const activeImageUrl = imageUrls[activeIndex];

  return (
    <div className="flex flex-col items-center gap-8 px-8 py-12">
      {/* Title */}
      {service.meta.service_types_title && (
        <h2 className="max-w-2xl text-center font-bold text-[#2D2B3D]">
          {service.meta.service_types_title}
        </h2>
      )}

      {/* Description */}
      {service.meta.services_type_desc && (
        <p className="max-w-xl text-center leading-relaxed text-gray-500">
          {service.meta.services_type_desc}
        </p>
      )}

      {/* Before / After image — changes with active card */}
      {activeImageUrl && (
        <div className="w-full max-w-3xl overflow-hidden rounded-2xl">
          <div className="flex justify-between px-1 pb-1 text-sm text-gray-400">
            <span>Before</span>
            <span>After</span>
          </div>
          <img
            key={activeImageUrl}
            src={activeImageUrl}
            alt="Before and After"
            className="h-auto w-full object-cover transition-opacity duration-300"
          />
        </div>
      )}

      {/* Service type cards */}
      <div className="flex w-full flex-col gap-0 md:flex-row">
        {serviceTypes.map((type, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={index}
              className={`group flex flex-1 cursor-pointer flex-col gap-2 border-t-4 p-6 transition-all duration-200 ${
                isActive
                  ? "border-secondary bg-secondary/10"
                  : "border-gray-200 hover:border-secondary/50 hover:bg-secondary/5"
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <h4
                className={`font-semibold transition-colors duration-200 ${
                  isActive
                    ? "text-secondary"
                    : "text-[#2D2B3D] group-hover:text-secondary/70"
                }`}
              >
                {type.title}
              </h4>
              <p className="text-sm leading-relaxed text-gray-500">
                {type.content}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceTypesSection;
