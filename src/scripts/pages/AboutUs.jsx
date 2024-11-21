import React, { useEffect, useState } from "react";
import MakeAppointment from "../components/MakeAppointment";
import Branches from "../components/Branches";
import Timeline from "../components/timeline";

const AboutUs = () => {
  return (
    <div>
      <section
        className="relative flex h-64 w-full items-center justify-center bg-cover bg-right bg-no-repeat text-white md:h-80 lg:h-96"
        style={{
          backgroundImage: `url('http://indodentalcenter.local/wp-content/themes/idc/assets/image/aboutus/AboutUs.jpg')`,
        }}
      >
        <div className="relative z-10 px-4 text-center md:px-8">
          <h1>About Us</h1>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-8 md:px-12 lg:px-16 xl:px-24">
        <h1 className="mb-8 text-center text-primary">Our Milestone</h1>
        <p className="mx-auto mb-8 max-w-lg text-center sm:max-w-2xl">
          We’re dedicated to transforming your dental experience. From routine
          checkups to advanced cosmetic procedures, our expert team is here to
          make your dream smile a reality.
        </p>
        <Timeline />
      </section>

      <div className="m-4 lg:m-8">
        <Branches showTitle={true} />
      </div>
      <div className="max-md:py-6">
        <MakeAppointment />
      </div>
    </div>
  );
};

export default AboutUs;
