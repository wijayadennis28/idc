import React, { useEffect, useState } from "react";
import OurClinicImg from "../../../assets/image/our-services/our-clinic.jpg";
import Departments from "../components/Departments";
import ClinicEquipmentSlider from "../components/Slider";

import { useTranslation, Trans } from "react-i18next";

const OurServices = () => {
  const { t } = useTranslation();

  const [equipments, setEquipments] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadDepartments() {
      const response = await fetch("/wp-json/wp/v2/services");
      if (!response.ok) {
        // oups! something went wrong
        return;
      }

      const departments = await response.json();
      setDepartments(departments);
    }

    loadDepartments().catch(console.error);
  }, []);

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
              <Trans
                i18nKey="exploreServices"
                components={{ span: <span className="font-bold" /> }}
              />
            </h1>
          </div>
        </div>
        <div className="w-full pb-24 max-sm:px-4 sm:flex sm:justify-center">
          <Departments departments={departments} />
        </div>
      </div>
      <section className="bg-white px-4 py-16 sm:px-8 md:px-12 lg:px-16 xl:px-24">
        <h1 className="mb-8 text-center text-primary">
          {t("clinicEquipment.title")}
        </h1>
        <p className="mx-auto mb-8 max-w-lg text-center sm:max-w-2xl">
          {t("clinicEquipment.description")}
        </p>
        <ClinicEquipmentSlider equipments={equipments} isLoading={isLoading} />
      </section>
    </>
  );
};

export default OurServices;
