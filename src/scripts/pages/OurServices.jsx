import React from "react";
import OurClinicImg from "../../../assets/image/our-services/our-clinic.jpg";
import Departments from "../components/Departments";
import MakeAppointment from "../components/MakeAppointment";

const OurServices = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <div
          style={{
            "--image-url": `url(${OurClinicImg})`,
          }}
          className={String.raw`h-72 w-full bg-[image:var(--image-url)] bg-cover bg-center`}
        >
          <div className="flex h-full items-center justify-center bg-primary bg-opacity-75">
            <h1 className="text-center font-sans font-normal text-white">
              We provide the{" "}
              <span className="font-bold italic">best service</span>
            </h1>
          </div>
        </div>
        <div className="pb-24">
          <Departments />
        </div>
      </div>
      <MakeAppointment />
    </>
  );
};

export default OurServices;
