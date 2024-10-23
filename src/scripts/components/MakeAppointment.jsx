import React from "react";

import { ArrowLongRightIcon } from "@heroicons/react/24/solid";

import logoWithoutTextBig from "../../../assets/image/logo/logo-without-text-big.svg";

const MakeAppointment = () => {
  return (
    <div className="m-8" id="make-appointment">
      <div className="flex h-44">
        <div className="flex-1"></div>
        <div className="flex flex-1 justify-center">
          <div className="absolute">
            <img src={logoWithoutTextBig} alt="logo" style={{ width: 439 }} />
          </div>
        </div>
      </div>
      <div className="flex rounded-2xl bg-[color:#E0EFF3] p-16">
        <div className="flex flex-1 flex-col gap-6">
          <h1 className="text-primary">
            <span className="font-normal">Ready to transform</span> your smile
          </h1>
          <p>
            Your journey to a confident, beautiful smile starts here.
            <br />
            Let's make it happen together!
          </p>
          <button className="btn btn-primary w-fit">
            Make an Appointment today! <ArrowLongRightIcon className="size-5" />
          </button>
        </div>
        <div className="flex-1"></div>
      </div>
    </div>
  );
};

export default MakeAppointment;
