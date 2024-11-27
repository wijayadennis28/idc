import React from "react";

import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

const IdcCard = ({ image, title, hover = false }) => {
  return (
    <>
      <div
        className={`group card relative h-44 w-full overflow-hidden !bg-white bg-right bg-no-repeat text-primary-content shadow sm:w-[340px] lg:h-48 lg:w-[380px] ${hover ? "hover:!bg-primary hover:!bg-none" : ""}`}
      >
        <div className="group card relative h-full w-full overflow-hidden">
          {/* Image and gradient */}
          <div
            className={`absolute inset-0 ${hover ? "group-hover:hidden" : ""}`}
          >
            {" "}
            <img
              src={image}
              alt={`${title} image`}
              className="h-full w-full object-cover opacity-50"
            />
            <div className="absolute inset-0 w-10 bg-gradient-to-r from-white to-transparent"></div>
          </div>

          {/* Card content */}
          <div className="card-body relative z-10 flex flex-row flex-wrap justify-between">
            <h4
              className={`overflow-visible text-primary ${hover ? "w-[138px] group-hover:text-white lg:w-[168px]" : ""} `}
              dangerouslySetInnerHTML={{
                __html: title,
              }}
            ></h4>
            {hover && (
              <div className={`card-actions hidden group-hover:block`}>
                <button className="btn btn-secondary no-animation btn-sm h-11 w-fit">
                  See details
                  <ArrowUpRightIcon className="w-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default IdcCard;
