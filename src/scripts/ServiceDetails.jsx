import React from "react";
import BannerBg from "../../assets/image/our-services/department-banner/general-dentist.png";
import DoctorsGrid from "./components/DoctorsGrid";
import MakeAppointment from "./components/MakeAppointment";
import Pill from "./components/Pill";

const ServiceDetails = () => {
  return (
    <div className="flex flex-col gap-8">
      <div
        style={{
          "--image-url": `url(${BannerBg})`,
        }}
        className="flex h-48 w-full flex-col justify-center bg-[image:var(--image-url)] bg-contain bg-right bg-no-repeat px-8"
      >
        <div className="breadcrumbs text-sm">
          <ul>
            <li className="text-secondary">
              <a>Our Services</a>
            </li>
            <li className="text-[#4D4757]">General Dentistry</li>
          </ul>
        </div>
        <h1 className="text-primary">General Dentistry</h1>
      </div>
      <div className="flex justify-around gap-8 px-8">
        <div className="w-1/2 py-8">
          <p className="text-[#4D4757]">
            At Indo Dental Center, our general dentists are experts on
            preventing, diagnosing, and treating common dental issues. We cater
            to regular check-ups, cleanings, fillings for cavities, root canals,
            gum care, and advice on how to maintain good oral hygiene at home.
            Our general dentists ensures that your teeth and gums are in the
            best shape possible, guiding you on the path to a lifelong,
            confident smile.
          </p>
        </div>
        <div className="flex w-1/2 flex-col gap-2">
          <h4 className="font-normal text-primary">Type of service</h4>
          <div className="collapse collapse-arrow border">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-lg font-bold text-[#4D4757]">
              Teeth Whitening
            </div>
            <div className="collapse-content font-normal text-[#4D4757]">
              <div className="divider mb-4 mt-0"></div>
              <p>
                Unveil your brightest smileening services, designed to safely
                and effectively remove stains and discoloration, giving you a
                dazzling, confidence-boosting result in just one visit.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow border">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-lg font-bold text-[#4D4757]">
              Teeth Whitening
            </div>
            <div className="collapse-content font-normal text-[#4D4757]">
              <div className="divider mb-4 mt-0"></div>
              <p>
                Unveil your brightest smileening services, designed to safely
                and effectively remove stains and discoloration, giving you a
                dazzling, confidence-boosting result in just one visit.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow border">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-lg font-bold text-[#4D4757]">
              Teeth Whitening
            </div>
            <div className="collapse-content font-normal text-[#4D4757]">
              <div className="divider mb-4 mt-0"></div>
              <p>
                Unveil your brightest smileening services, designed to safely
                and effectively remove stains and discoloration, giving you a
                dazzling, confidence-boosting result in just one visit.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-8">
        <Pill active={true} text="General Dentist"/>
      </div>
      <DoctorsGrid />
      <MakeAppointment />
    </div>
  );
};

export default ServiceDetails;
