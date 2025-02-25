import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import useScreenSize from "../../utils/useScreenSize";

const Partners = ({ list = [], slider = false }) => {
  const screenSize = useScreenSize();

  if (slider && screenSize < 540) {
    return (
      <div className="splide-hide-pagination splide-hide-arrow h-full w-full object-cover md:hidden">
        <Splide
          options={{
            type: "loop",
            perPage: 1,
            padding: screenSize * 0.275,
            focus: "center",
            autoplay: true,
          }}
        >
          {list.map((partner, index) => (
            <SplideSlide
              key={index}
              className="flex w-screen items-center justify-center"
            >
              <div className="flex h-24 w-40 items-center justify-center rounded-lg border border-solid border-neutral-400 bg-white shadow-sm md:w-48">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-20 max-w-28"
                />
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    );
  }

  return (
    <div className="flex max-w-[1400px] flex-wrap justify-center gap-4 md:gap-8">
      {list.map((partner, index) => (
        <div
          key={index}
          className="flex h-24 w-40 items-center justify-center rounded-lg border border-solid border-neutral-400 bg-white shadow-sm md:w-48"
        >
          <img
            src={partner.logo}
            alt={partner.title}
            className="max-h-20 max-w-28"
          />
        </div>
      ))}
    </div>
  );
};

export default Partners;
