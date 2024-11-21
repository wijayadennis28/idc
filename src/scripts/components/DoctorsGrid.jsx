import React from "react";
import Loading from "./Loading";

const DoctorsGrid = ({doctors, isLoading}) => {
  if (isLoading) return <Loading/>;

  return (
    <div className="flex flex-wrap gap-3 justify-evenly">
      {doctors.map((doctor, index) => (
        <a href={doctor.permalink} key={index}>
          <div className="card card-compact w-80 group">
            <figure className="rounded-2xl group-hover:bg-secondary group-hover:bg-opacity-15">
              <img
                src={doctor.thumbnail}
                alt="Doctor"
                className="object-cover -z-10" />
            </figure>
            <div className="card-body items-center text-center">
              <h4 className="card-title text-[#4D4757]">{doctor.name}</h4>
              <p className="text-[#4D4757]" dangerouslySetInnerHTML={{__html: doctor.service}}></p>
              <div className="card-actions items-center">
                <p className="text-secondary text-base">Discover more</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5 text-secondary inline">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  )
};

export default DoctorsGrid;
