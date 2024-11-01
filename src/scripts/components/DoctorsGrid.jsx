import React from "react";
import DoctorDummyImage from "../../../assets/image/doctors/dr-michael.jpg";

const doctorsDummyData = [
  {
    name: "Drg Michael",
    specialty: ["General Denstist", "Dental X-ray"],
    photo: DoctorDummyImage,
  },
  {
    name: "Drg Michael",
    specialty: ["General Denstist", "Dental X-ray"],
    photo: DoctorDummyImage,
  },
  {
    name: "Drg Michael",
    specialty: ["General Denstist", "Dental X-ray"],
    photo: DoctorDummyImage,
  },
  {
    name: "Drg Michael",
    specialty: ["General Denstist", "Dental X-ray"],
    photo: DoctorDummyImage,
  },
  {
    name: "Drg Michael",
    specialty: ["General Denstist", "Dental X-ray"],
    photo: DoctorDummyImage,
  },
  {
    name: "Drg Michael",
    specialty: ["General Denstist", "Dental X-ray"],
    photo: DoctorDummyImage,
  },
]

const DoctorsGrid = () => {
  
  return (
    <div className="flex flex-wrap gap-3 justify-evenly">
      {doctorsDummyData.map((doctor) => (
        <div className="card card-compact w-80 group">
          <figure className="rounded-2xl group-hover:bg-secondary group-hover:bg-opacity-15">
            <img
              src={doctor.photo}
              alt="Doctor"
              className="h-[450px] object-cover -z-10" />
          </figure>
          <div className="card-body items-center text-center">
            <h4 className="card-title text-[#4D4757]">{doctor.name}</h4>
            <p className="text-[#4D4757]">{doctor.specialty.join(", ")}</p>
            <div className="card-actions items-center">
              <p className="text-secondary text-base">Discover more</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5 text-secondary inline">
                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
};

export default DoctorsGrid;
