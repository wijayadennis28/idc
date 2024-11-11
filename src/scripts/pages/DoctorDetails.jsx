import React, { useEffect, useState } from "react"
import BannerBg from "../../../assets/image/our-doctors/doctor-banner.png";
import DoctorDummyImage from "../../../assets/image/doctors/dr-michael.jpg";
import {MapPinIcon} from '@heroicons/react/24/outline'
import MakeAppointment from "../components/MakeAppointment";
import Loading from "../components/Loading";


const DoctorDetails = () => {
  const [doctor, setDoctor] = useState(null);
  const [modal, setModal] = useState({show: false, title: '', imageUrl: ''});
  
  useEffect(() => {
    getDoctor().catch(console.error);
  }, []);

  const getDoctor = async () => {
    const slug = window.location.pathname.split('/')[2];
      const response = await fetch(`/wp-json/wp/v2/doctors?slug=${slug}`);
      if (!response.ok) {
        throw new Error('Service not found');
      }

      const doctors = await response.json();
      setDoctor(doctors[0]);
  };

  if (!doctor) return <Loading/>;

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
              <li className="text-secondary"><a>{doctor.service_name}</a></li>
              <li className="text-[#4D4757]">{doctor.title.rendered}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8 px-8 pb-24">
        <div className="flex flex-col gap-4 basis-0 grow items-center">
          <figure>
            <img
              src={doctor.thumbnail}
              alt="Doctor"
              className="h-[450px] object-cover rounded-2xl" />
          </figure>
          <h3 className="text-[#4D4757] text-center">{doctor.title.rendered}</h3>
          <p className="text-[#4D4757] text-center">{doctor.service_name}</p>
        </div>
        <div className="flex flex-col gap-6 basis-0 grow">
          <div className="flex flex-col gap-2">
            <h4 className="text-primary font-normal">About us</h4>
            <div className="text-[#4D4757]" dangerouslySetInnerHTML={{__html: doctor.content.rendered}}></div>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-primary font-normal">Specialisation</h4>
            <ul className="list-disc list-inside">
              {Object.values(doctor.meta.specialisation).map((specialisation) => (
                <li><p className="text-[#4D4757] inline">{specialisation.title}</p></li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-primary font-normal">Qualification & Certification</h4>
            <ul className="list-disc list-inside">
              {Object.values(doctor.meta.certification).map((certification) => (
                <li><a className="cursor-pointer underline text-[#4D4757]" onClick={() => setModal({show: true, title: certification.title, imageUrl: certification.image})}><p className="inline">{certification.title}</p></a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-6 basis-0 grow">
          <div className="flex flex-col gap-2">
            <h4 className="text-primary font-normal">Schedule</h4>
            <div className="p-4">
              {Object.values(doctor.meta.schedule).map((schedule, i, arr) => {
                if (i < arr.length - 1) {
                  return (<>
                    <p className="text-[#4D4757]">{`${schedule.day}: ${schedule.from} - ${schedule.to}`}</p>
                    <div className="divider my-0"></div>
                  </>);
                }
                return (<>
                  <p className="text-[#4D4757]">{`${schedule.day}: ${schedule.from} - ${schedule.to}`}</p>
                </>)
              })}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-primary font-normal">Location</h4>
            <div className=" flex flex-col gap-2 p-4">
              <div className="flex gap-2 items-center"><MapPinIcon className="size-6"/><p className="font-bold">Indo Dental Center - Senayan Branch</p></div>
              <div className="divider my-0"></div>
              <p className="text-[#4D4757]">Jl. Hang Tuah Raya No.35, Kby. Baru, South Jakarta - 12120</p>
              <button className="btn btn-primary w-full" onClick={() => window.open('https://wa.me/+628128080011', "_blank")}>Book an appointment</button>
            </div>
            <div className=" flex flex-col gap-2 p-4">
              <div className="flex gap-2 items-center"><MapPinIcon className="size-6"/><p className="font-bold">Indo Dental Center - Pluit Branch</p></div>
              <div className="divider my-0"></div>
              <p className="text-[#4D4757]">Ruko CBD Pluit No. B2, Jl. Pluit Selatan Raya, Penjaringan, North Jakarta City - 14440</p>
              <button className="btn btn-primary w-full" onClick={() => window.open('https://wa.me/+628128080011', "_blank")}>Book an appointment</button>
            </div>
          </div>
        </div>
      </div>
      <MakeAppointment />
      <dialog className="modal modal-middle" open={modal.show}>
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle bg-secondary text-white absolute right-4 top-3" onClick={() => setModal({show: false})}>✕</button>
          </form>
          <h4 className="font-normal text-primary text-center mb-4">{modal.title}</h4>
          <img src={modal.imageUrl}/>
        </div>
      </dialog>
    </div>
  )
};

export default DoctorDetails;
