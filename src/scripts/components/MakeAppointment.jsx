import React from "react";

import { ArrowLongRightIcon } from "@heroicons/react/24/solid";

import PopUpMap from "./PopUpMap";

import logoWithoutTextBig from "../../../assets/image/logo/logo-without-text-big.svg";

const onClick = () => {
  document.getElementById("map-modal").showModal();
};

const MakeAppointment = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-full max-w-[1643px] p-4 md:p-8" id="make-appointment">
          <div className="hidden h-28 md:flex lg:h-44">
            <div className="flex-1"></div>
            <div className="flex flex-1 justify-center">
              <div className="absolute">
                <img
                  src={logoWithoutTextBig}
                  alt="logo"
                  className="size-[380px] lg:size-[439px]"
                />
              </div>
            </div>
          </div>
          <div className="flex rounded-2xl bg-[color:#E0EFF3] px-2 py-16 text-center md:px-8 md:py-8 md:text-left lg:p-16">
            <div className="flex flex-1 flex-col items-center gap-6 md:items-start">
              <h1 className="text-primary">
                <span className="font-normal">Ready to transform</span> your
                smile
              </h1>
              <p>
                Your journey to a confident, beautiful smile starts here.
                <br />
                Let's make it happen together!
              </p>
              <button className="btn btn-primary w-fit" onClick={onClick}>
                Make an Appointment today!{" "}
                <ArrowLongRightIcon className="size-5" />
              </button>
            </div>
            <div className="hidden flex-1 md:flex"></div>
          </div>
        </div>
      </div>
      <PopUpMap />
    </>
  );
};

export default MakeAppointment;
