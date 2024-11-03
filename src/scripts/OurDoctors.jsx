import React, { useState } from "react";
import OurDoctorImg from "../../assets/image/our-doctors/our-doctor.png";
import MakeAppointment from './components/MakeAppointment';
import DoctorsGrid from "./components/DoctorsGrid";
import Pill from "./components/Pill";
import {MagnifyingGlassIcon} from '@heroicons/react/24/solid'

const OurDoctors = () => {
  const [category, setCategory] = useState("All doctors");
  const availableCategories = ["All doctors", "Korean Doctors", "General Dentistry", "Prosthodontics", "Conservation & Endodontics", "Oral Surgeon"];
  return (
    <div className="flex flex-col">
      <div
        style={{
          '--image-url': `url(${OurDoctorImg})`,
        }}
        className={String.raw`w-full h-[355px] mb-8 bg-cover bg-left bg-[image:var(--image-url)]`}
      >
        <div className="flex justify-center items-center bg-primary bg-opacity-75 h-full">
          <h1 className="font-sans text-white font-normal">Meet with our <span className="font-bold italic">Expert Dentist,</span> Just for You</h1>
        </div>
      </div>
      <div className="flex mx-6 mb-8 gap-2 items-center spa">
        <MagnifyingGlassIcon className="size-8"/>
        <input type="text" placeholder="Search by name" className="input w-full grow"/>
      </div>
      <div className=" carousel carousel-start flex mx-6 mb-8 gap-6">
        {availableCategories.map((currCategory) => (
          <Pill active={currCategory === category} text={currCategory} onClick={() => setCategory(currCategory)}/>
        ))}
      </div>
      <DoctorsGrid/>
      <MakeAppointment/>
    </div>
  )
};

export default OurDoctors;
