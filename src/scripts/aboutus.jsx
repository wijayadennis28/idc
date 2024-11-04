import React from "react";
import MakeAppointment from "./components/MakeAppointment";
import Branches from "./components/Branches";
import Timeline from "./components/timeline";
import ClinicEquipment from "./components/Slider";

const AboutUs = () => {
  return (
    <div>
      {/* About Us Section */}
      <section
        className="h-74 relative flex h-64 w-full items-center justify-center bg-cover bg-right bg-no-repeat text-white 2xl:h-96"
        style={{
          backgroundImage: `url('http://indodentalcenter.local/wp-content/themes/idc/assets/image/aboutus/AboutUs.jpg')`,
        }}
      >
        {/* Content */}
        <div className="relative z-10 text-center">
          <h2 className="text-3xl font-bold">About Us</h2>
        </div>
      </section>

      {/* Milestone Section */}
      <section className="bg-white px-4 py-16 md:px-16 lg:px-24">
        <h2 className="mb-8 text-center text-4xl font-bold text-purple-900">
          Our Milestone
        </h2>
        <p className="mx-auto mb-16 max-w-2xl text-center text-gray-700">
          We’re dedicated to transforming your dental experience. From routine
          checkups to advanced cosmetic procedures, our expert team is here to
          make your dream smile a reality.
        </p>

        {/* Timeline */}
        <Timeline />
      </section>

      {/* Our Works */}
      <section className="bg-white px-4 py-16 md:px-16 lg:px-24">
        <h2 className="mb-8 text-center text-4xl font-bold text-purple-900">
        Our Complete Clinic Equipment
        </h2>
        <p className="mx-auto mb-16 max-w-2xl text-center text-gray-700">
        At Indo Dental Center, we believe that exceptional care begins with exceptional tools. Our clinic is equipped with the latest, cutting-edge technology to ensure you receive the best possible treatment in a comfortable and efficient manner.
        </p>
      </section>
      <ClinicEquipment />
      <Branches showTitle={true} />
      <MakeAppointment />
    </div>
  );
};

export default AboutUs;
