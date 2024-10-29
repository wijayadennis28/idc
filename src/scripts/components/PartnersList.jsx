import React from "react";

const Partners = ({ list = [] }) => {
  return (
    <div className="flex max-w-[1400px] flex-wrap justify-center gap-4 md:gap-8">
      {list.map((partner, index) => (
        <div
          key={index}
          className="flex h-24 w-40 items-center justify-center rounded-lg border border-solid border-neutral-400 bg-white md:w-48"
        >
          <img
            // src={images[partner.logo]}
            alt={partner.name}
            className="max-h-20 max-w-28"
          />
        </div>
      ))}
    </div>
  );
};

export default Partners;
