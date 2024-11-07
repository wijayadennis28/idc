import React, { useEffect, useState } from "react";
import MakeAppointment from "./components/MakeAppointment";
import Branches from "./components/Branches";
import Timeline from "./components/timeline";
import ClinicEquipmentSlider from "./components/Slider";

const AboutUs = () => {
  const [equipments, setEquipments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchEquipments() {
      try {
        const response = await fetch("/wp-json/wp/v2/clinic-equipments");
        const data = await response.json();

        const equipmentsWithMedia = await Promise.all(
          data.map(async (equipment) => {
            const mediaResponse = await fetch(`/wp-json/wp/v2/media/${equipment.featured_media}`);
            const mediaData = await mediaResponse.json();
            return {
              ...equipment,
              imageUrl: mediaData.source_url,
            };
          })
        );

        setEquipments(equipmentsWithMedia);
      } catch (error) {
        console.error('Error fetching clinic equipments:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchEquipments();
  }, []);

  return (
    <div>
      <section
        className="h-74 relative flex h-64 w-full items-center justify-center bg-cover bg-right bg-no-repeat text-white 2xl:h-96"
        style={{
          backgroundImage: `url('http://indodentalcenter.local/wp-content/themes/idc/assets/image/aboutus/AboutUs.jpg')`,
        }}
      >
        <div className="relative z-10 text-center">
          <h2 className="text-3xl font-bold">About Us</h2>
        </div>
      </section>

      <section className="bg-white px-4 py-16 md:px-16 lg:px-24">
        <h2 className="mb-8 text-center text-4xl font-bold text-purple-900">Our Milestone</h2>
        <p className="mx-auto mb-16 max-w-2xl text-center text-gray-700">
          We’re dedicated to transforming your dental experience. From routine
          checkups to advanced cosmetic procedures, our expert team is here to
          make your dream smile a reality.
        </p>
        <Timeline />
      </section>

      <section className="bg-white px-4 py-16 md:px-16 lg:px-24">
        <h2 className="mb-8 text-center text-4xl font-bold text-purple-900">Our Complete Clinic Equipment</h2>
        <p className="mx-auto mb-16 max-w-2xl text-center text-gray-700">
          At Indo Dental Center, we believe that exceptional care begins with
          exceptional tools. Our clinic is equipped with the latest,
          cutting-edge technology to ensure you receive the best possible
          treatment in a comfortable and efficient manner.
        </p>
        <ClinicEquipmentSlider equipments={equipments} isLoading={isLoading} />
      </section>
      
      <Branches showTitle={true} />
      <MakeAppointment />
    </div>
  );
};

export default AboutUs;
