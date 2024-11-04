import React from "react";
import OurClinicImg from "../../../assets/image/our-services/our-clinic.jpg";
import Departments from "../components/Departments";
import MakeAppointment from '../components/MakeAppointment';

const OurServices = () => {
  return (
    <div className="flex flex-col">
      <div
        style={{
          '--image-url': `url(${OurClinicImg})`,
        }}
        className={String.raw`w-full h-72 bg-cover bg-center bg-[image:var(--image-url)]`}
      >
        <div className="flex justify-center items-center bg-primary bg-opacity-75 h-full">
          <h1 className="font-sans text-white font-normal">We provide the <span className="font-bold italic">best service</span></h1>
        </div>
      </div>
      <div className="pb-24">
        <Departments/>
      </div>
      <MakeAppointment/>
    </div>
  )
};

export default OurServices;
