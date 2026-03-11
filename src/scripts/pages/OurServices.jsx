import React, { useEffect, useState } from "react";
import OurClinicImg from "../../../assets/image/our-services/our-clinic.jpg";
import logoWithoutTextBig from "../../../assets/image/logo/logo-without-text-big.svg";
import Departments from "../components/Departments";
import ClinicEquipmentSlider from "../components/Slider";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";

import { useTranslation, Trans } from "react-i18next";

const OurServices = () => {
  const { t } = useTranslation();

  const [equipments, setEquipments] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const openModal = () => {
    window.open("https://wa.me/+628128080011", "_blank");
  };

  useEffect(() => {
    async function loadDepartments() {
      const response = await fetch(`${wpApiSettings.restUrl}wp/v2/services`);
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
        const response = await fetch(`${wpApiSettings.restUrl}wp/v2/clinic-equipments`);
        const data = await response.json();

        const equipmentsWithMedia = await Promise.all(
          data.map(async (equipment) => {
            const mediaResponse = await fetch(
              `${wpApiSettings.restUrl}wp/v2/media/${equipment.featured_media}`,
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
      <div className="flex justify-center py-8">
        <div className="relative m-4 w-full max-w-[2400px] md:m-8">
          <div className="hidden h-28 md:flex lg:h-44 xl:h-60">
            <div className="flex-1"></div>
            <div className="flex flex-1 justify-center">
              <div className="absolute top-16">
                <img
                  src={logoWithoutTextBig}
                  alt="logo"
                  className="size-[380px] lg:size-[439px] xl:size-[520px]"
                />
              </div>
            </div>
          </div>
          <div className="flex rounded-2xl bg-[color:#E0EFF3] px-2 py-20 text-center md:px-8 md:py-16 md:text-left lg:px-16 lg:py-24">
            <div className="flex flex-1 flex-col items-center gap-6 md:items-start md:justify-between">
              <div className="flex flex-col items-center gap-6 md:items-start">
                <h1 className="text-primary">
                  <Trans i18nKey="readyToTransform" components={{ span: <span className="font-normal" /> }} />
                </h1>
                <p>{t("makeAppointmentDesc")}</p>
              </div>
              <button className="btn btn-primary w-fit" onClick={openModal}>
                {t("makeAppointmentToday")}{" "}
                <ArrowLongRightIcon className="size-5" />
              </button>
            </div>
            <div className="hidden flex-1 md:flex"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
