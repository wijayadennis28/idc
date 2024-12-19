import React, { useEffect, useState } from "react";
import OurDoctorImg from "../../../assets/image/our-doctors/our-doctor.png";
import BackgroundImg from "../../../assets/image/our-doctors/background.jpg";
import DoctorsGrid from "../components/DoctorsGrid";
import Pill from "../components/Pill";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

import { useTranslation, Trans } from "react-i18next";

const OurDoctors = () => {
  const { t } = useTranslation();
  const [category, setCategory] = useState("All doctors");
  const [isLoading, setLoading] = useState(true);
  const [availableCategories, setAvailableCategories] = useState([
    "All doctors",
  ]);
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    getCategories().catch(console.error);
    getDoctors().catch(console.error);
  }, []);

  useEffect(() => {
    filterDoctors();
  }, [searchValue, category]);

  const getCategories = async () => {
    const response = await fetch(`${wpApiSettings.restUrl}wp/v2/services`);
    const services = await response.json();
    setAvailableCategories([
      "All doctors",
      ...services.map((service) => service.service_name),
    ]);
  };

  const getDoctors = async () => {
    setLoading(true);
    let doctors = [];
    let page = 1;
    let totalPages = 1;

    try {
      do {
        const response = await fetch(
          `${wpApiSettings.restUrl}wp/v2/doctors?per_page=100&page=${page}`,
        );
        const doctorsRaws = await response.json();

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        totalPages = parseInt(response.headers.get("X-WP-TotalPages")) || 1;
        doctors = doctors.concat(
          doctorsRaws.map((doctor) => ({
            permalink: doctor.link,
            thumbnail: doctor.thumbnail,
            name: doctor.title.rendered,
            service: doctor.service_name,
          })),
        );

        page++;
      } while (page <= totalPages);

      setDoctors(doctors);
      setFilteredDoctors(doctors);
    } catch (error) {
      console.error("Failed to fetch doctors:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const filterDoctors = () => {
    if (category !== "All doctors" && searchValue !== "") {
      setFilteredDoctors(
        doctors.filter(
          (doctor) =>
            doctor.service === category &&
            doctor.name.toLowerCase().includes(searchValue.toLowerCase()),
        ),
      );
    } else if (category !== "All doctors") {
      setFilteredDoctors(
        doctors.filter((doctor) => doctor.service === category),
      );
    } else if (searchValue !== "") {
      setFilteredDoctors(
        doctors.filter((doctor) =>
          doctor.name.toLowerCase().includes(searchValue.toLowerCase()),
        ),
      );
    } else {
      setFilteredDoctors(doctors);
    }
  };

  return (
    <div className="flex flex-col">
      <div
        style={{
          "--image-url": `url(${BackgroundImg})`,
        }}
        className={String.raw`mb-8 h-[355px] w-full bg-[image:var(--image-url)] bg-cover bg-center`}
      >
        <div className="flex h-full items-center justify-center bg-primary bg-opacity-75">
          <h1 className="text-center font-sans font-normal text-white">
            <Trans
              i18nKey="meetOurDentist.title"
              components={{ span: <span className="font-bold" /> }}
            />
          </h1>
        </div>
      </div>
      <div className="spa mx-6 mb-8 flex items-center gap-2">
        <MagnifyingGlassIcon className="size-8" />
        <input
          type="text"
          value={searchValue}
          placeholder={t("searchByName")}
          className="input w-full grow"
          onChange={handleSearch}
        />
      </div>
      <div className="carousel carousel-start mx-6 mb-8 flex gap-2">
        {availableCategories.map((currCategory) => (
          <Pill
            active={currCategory === category}
            text={currCategory}
            onClick={() => setCategory(currCategory)}
          />
        ))}
      </div>
      <div className="pb-24">
        <DoctorsGrid isLoading={isLoading} doctors={filteredDoctors} />
      </div>
    </div>
  );
};

export default OurDoctors;
