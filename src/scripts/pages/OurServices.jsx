import React, { useEffect, useState } from "react";
import OurClinicImg from "../../../assets/image/our-services/our-clinic.jpg";
import Departments from "../components/Departments";
import MakeAppointment from "../components/MakeAppointment";
import ClinicEquipmentSlider from "../components/Slider";

const OurServices = () => {
  const [equipments, setEquipments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchEquipments() {
      try {
        const response = await fetch("/wp-json/wp/v2/clinic-equipments");
        const data = await response.json();

        const equipmentsWithMedia = await Promise.all(
          data.map(async (equipment) => {
            const mediaResponse = await fetch(
              `/wp-json/wp/v2/media/${equipment.featured_media}`,
            );
            const mediaData = await mediaResponse.json();
            return {
              ...equipment,
              imageUrl: mediaData.source_url,
            };
          }),
        );

        setEquipments(equipmentsWithMedia);
      } catch (error) {
        console.error("Error fetching clinic equipments:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchEquipments();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center">
        <div
          style={{
            "--image-url": `url(${OurClinicImg})`,
          }}
          className={String.raw`h-72 w-full bg-[image:var(--image-url)] bg-cover bg-center`}
        >
          <div className="flex h-full items-center justify-center bg-primary bg-opacity-75">
            <h1 className="text-center font-sans font-normal text-white">
              We provide the{" "}
              <span className="font-bold italic">best services</span>
            </h1>
          </div>
        </div>
        <div className="w-full pb-24 max-sm:px-4 sm:flex sm:justify-center">
          <Departments />
        </div>
      </div>
      <section className="bg-white px-4 py-16 sm:px-8 md:px-12 lg:px-16 xl:px-24">
        <h1 className="mb-8 text-center text-primary">
          Our Complete Clinic Equipment
        </h1>
        <p className="mx-auto mb-8 max-w-lg text-center sm:max-w-2xl">
          Here, exceptional care is enhanced through high-quality and modern
          tools.
        </p>
        <ClinicEquipmentSlider equipments={equipments} isLoading={isLoading} />
      </section>
    </>
  );
};

export default OurServices;
