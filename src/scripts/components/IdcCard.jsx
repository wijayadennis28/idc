import React from "react";

const IdcCard = ({ image, icon, title, description }) => {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl bg-[#FCFBFD] shadow-sm">
      {/* Top area: icon left, image right — fixed height so text below is never overlapped */}
      <div className="flex h-28 items-start">
        {/* Left: teal icon circle */}
        <div className="flex shrink-0 items-start p-5">
          <div className="flex h-14 w-14 items-center justify-center rounded-full">
            {icon ? (
              <img src={icon} alt={title} className="h-full w-full object-contain" />
            ) : (
              <span className="text-xl text-secondary">●</span>
            )}
          </div>
        </div>
        {/* Right: faded image, clipped to top-right corner */}
        {image && (
          <div className="relative h-full flex-1 overflow-hidden rounded-tr-2xl">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#FCFBFD] via-[#FCFBFD]/50 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#FCFBFD] via-transparent to-transparent"></div>
          </div>
        )}
      </div>
      {/* Text content — always below the image, never overlapped */}
      <div className="flex flex-col gap-2 p-5 pt-2">
        <h4
          className="font-bold text-secondary"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        {description && (
          <p className="text-sm leading-relaxed text-gray-500">{description}</p>
        )}
      </div>
    </div>
  );
};

export default IdcCard;
