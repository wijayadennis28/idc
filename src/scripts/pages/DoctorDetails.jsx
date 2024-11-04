import React from "react"
import BannerBg from "../../../assets/image/our-doctors/doctor-banner.png";
import DoctorDummyImage from "../../../assets/image/doctors/dr-michael.jpg";
import {MapPinIcon} from '@heroicons/react/24/outline'
import MakeAppointment from "../components/MakeAppointment";


const DoctorDetails = () => {
  return (
    <div className="flex flex-col gap-8">
      <div
        style={{
          '--image-url': `url(${BannerBg})`,
        }}
        className=" w-full h-24 md:h-48 md:bg-[image:var(--image-url)] bg-right bg-contain bg-no-repeat">
        <div className="w-full h-full p-8 md:px-8 md:py-16 bg-gradient-to-bl from-transparent to-white to-75%">
          <div class="breadcrumbs text-sm">
            <ul className="flex-wrap">
              <li className="text-secondary"><a>Doctor</a></li>
              <li className="text-secondary"><a>General Dentistry</a></li>
              <li className="text-[#4D4757]">drg. Michael Nathanael Mahama, MARS., Sp.Pros</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8 px-8 pb-24">
        <div className="flex flex-col gap-4 basis-0 grow items-center">
          <figure>
            <img
              src={DoctorDummyImage}
              alt="Doctor"
              className="h-[450px] object-cover rounded-2xl" />
          </figure>
          <h3 className="text-[#4D4757] text-center">drg. Michael Nathanael Mahama, MARS., Sp.Pros</h3>
          <p className="text-[#4D4757] text-center">General Dentist, Dental X-ray</p>
        </div>
        <div className="flex flex-col gap-6 basis-0 grow">
          <div className="flex flex-col gap-2">
            <h4 className="text-primary font-normal">About us</h4>
            <p className="text-[#4D4757]">drg. Michael Nathanael Mahama, MARS., Sp.Pros is a prosthodontist at INDO DENTAL CENTER. He specializes in providing natural-looking smile makeovers and is certified by Digital Smile Design App in Miami, USA. drg. Michael Nathanael Mahama, MARS., Sp.Pros is also a certified implantologist and has joined over 50 seminars and courses to further enhance his knowledge. He is trained by world renowned smile experts both nationally and internationally and has actively participated in numerous researches and publications with a focus on prosthetic rehabilitation including dentures and veneers.</p>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-primary font-normal">Specialisation</h4>
            <ul className="list-disc list-inside">
              <li><p className="text-[#4D4757] inline">Specialisation</p></li>
              <li><p className="text-[#4D4757] inline">Specialisation</p></li>
              <li><p className="text-[#4D4757] inline">Specialisation</p></li>
              <li><p className="text-[#4D4757] inline">Specialisation</p></li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-primary font-normal">Qualification & Certification</h4>
            <ul className="list-disc list-inside">
            <li><p className="text-[#4D4757] inline">Certification</p></li>
            <li><p className="text-[#4D4757] inline">Certification</p></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-6 basis-0 grow">
          <div className="flex flex-col gap-2">
            <h4 className="text-primary font-normal">Schedule</h4>
            <div className="p-4">
              <p className="text-[#4D4757]">Monday: 09.00 - 15.00</p>
              <div className="divider my-0"></div>
              <p className="text-[#4D4757]">Monday: 09.00 - 15.00</p>
              <div className="divider my-0"></div>
              <p className="text-[#4D4757]">Monday: 09.00 - 15.00</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-primary font-normal">Location</h4>
            <div className=" flex flex-col gap-2 p-4">
              <div className="flex gap-2 items-center"><MapPinIcon className="size-6"/><p className="font-bold">Indo Dental Center - North Jakarta</p></div>
              <div className="divider my-0"></div>
              <p className="text-[#4D4757]">CBD Pluit, Ruko, Jl. Pluit Selatan Raya No.B2, Pluit, Penjaringan, North Jakarta City, Jakarta 14440</p>
              <button className="btn btn-primary w-full">Book an appointment</button>
            </div>
          </div>
        </div>
      </div>
      <MakeAppointment />
    </div>
  )
};

export default DoctorDetails;
