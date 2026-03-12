import React, { useEffect, useState } from "react";
import DoctorsGrid from "../components/DoctorsGrid";
import WhyChooseUs from "../components/WhyChooseUs";
import ServiceTypesSection from "../components/ServiceTypesSection";
import Pill from "../components/Pill";
import Loading from "../components/Loading";
import Slider from "../components/Slider";
import PartnersList from "../components/PartnersList";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import useScreenSize from "../../utils/useScreenSize";
import logoWithoutTextBig from "../../../assets/image/logo/logo-without-text-big.svg";

import landscape1 from "../../../assets/image/cta/landscape-1.jpg";
import landscape2 from "../../../assets/image/cta/landscape-2.jpg";
import portrait1 from "../../../assets/image/cta/portrait-1.jpg";
import portrait2 from "../../../assets/image/cta/portrait-2.jpg";
import square from "../../../assets/image/cta/square.jpg";

import { ArrowLongRightIcon } from "@heroicons/react/24/solid";

import { useTranslation, Trans } from "react-i18next";

const ServiceDetails = () => {
  const { t } = useTranslation();
  const screenSize = useScreenSize();
  const [service, setService] = useState(null);
  const [ourPartnerList, setOurPartnerList] = useState([]);
  const [testimonies, setTestimonies] = useState([]);
  useEffect(() => {
    async function loadServiceDetails() {
      const slug = window.location.pathname.split("/").filter(Boolean).pop();
      const response = await fetch(
        `${wpApiSettings.restUrl}wp/v2/services?slug=${slug}`,
      );
      if (!response.ok) {
        throw new Error("Service not found");
      }

      const service = await response.json();
      setService(service[0]);
    }

    loadServiceDetails().catch(console.error);
  }, []);

  useEffect(() => {
    async function loadPartners() {
      try {
        const response = await fetch(`${wpApiSettings.restUrl}wp/v2/partners`);
        if (!response.ok) throw new Error("Failed to fetch partners");
        const partners = await response.json();
        setOurPartnerList(partners.map((p) => ({ title: p.title.rendered, logo: p.meta.icon[0] })));
      } catch (error) {
        console.error("Error loading partners:", error);
      }
    }
    loadPartners();
  }, []);

  useEffect(() => {
    async function loadTestimonies() {
      try {
        const response = await fetch(`${wpApiSettings.restUrl}wp/v2/testimonies`);
        if (!response.ok) throw new Error("Failed to fetch testimonies");
        const data = await response.json();
        setTestimonies(data);
      } catch (error) {
        console.error("Error loading testimonies:", error);
      }
    }
    loadTestimonies();
  }, []);

  const openModal = () => {
    window.open("https://wa.me/+628128080011", "_blank");
  };

  const getOurWorks = () => {
    if (!service) return [];
    return Object.values(service.meta.our_works).map((ourWork, i) => ({
      id: i,
      imageUrl: ourWork.image,
      title: { rendered: ourWork.title },
      content: { rendered: ourWork.content },
    }));
  };

  const getDoctors = () => {
    return service.doctors.map((doctor) => ({
      ...doctor,
      service: service.title.rendered,
      specialisation: doctor.meta?.specialisation,
    }));
  };

  const [fullDoctors, setFullDoctors] = useState([]);

  useEffect(() => {
    if (!service?.doctors?.length) return;
    async function enrichDoctors() {
      const enriched = await Promise.all(
        service.doctors.map(async (doctor) => {
          const slug = doctor.permalink.split("/").filter(Boolean).pop();
          try {
            const res = await fetch(`${wpApiSettings.restUrl}wp/v2/doctors?slug=${slug}`);
            const data = await res.json();
            const full = data[0];
            return {
              ...doctor,
              service: service.title.rendered,
              specialisation: full?.meta?.specialisation,
            };
          } catch {
            return { ...doctor, service: service.title.rendered };
          }
        })
      );
      setFullDoctors(enriched);
    }
    enrichDoctors();
  }, [service]);

  if (!service) return <Loading />;

  return (
    <div className="flex flex-col gap-8">
      <div
        style={{
          "--image-url": `url(${service.meta.image})`,
        }}
        className="min-h-48 w-full bg-[#FCFBFD] bg-[length:40%] bg-right bg-no-repeat md:bg-[image:var(--image-url)]"
      >
        <div className="flex h-full w-full flex-col justify-center bg-gradient-to-r from-[#FCFBFD] from-60% to-[#FCFBFD]/50 p-8 md:px-16 md:py-12">
          <div className="breadcrumbs text-sm">
            <ul>
              <li className="text-secondary">
                <a href="/our-services">{t("pages.ourServices")}</a>
              </li>
              <li
                className="text-[#4D4757]"
                dangerouslySetInnerHTML={{ __html: service.title.rendered }}
              ></li>
            </ul>
          </div>
          <h1
            className="text-primary"
            dangerouslySetInnerHTML={{ __html: service.title.rendered }}
          ></h1>
          <div
            className="w-full py-8 text-center text-[#4D4757] md:w-[60%] md:text-left"
            dangerouslySetInnerHTML={{ __html: service.content.rendered }}
          ></div>
        </div>
      </div>
      <ServiceTypesSection service={service} />
      {Object.values(service.meta.our_works).length > 0 && (
        <div className="p-8">
          <h2 className="mb-8 text-center text-4xl font-bold text-purple-900">
            {t("ourWorks.title")}
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-[#4D4757]">
            {t("ourWorks.description")}
          </p>
          <Slider equipments={getOurWorks()} isLoading={!service} />
        </div>
      )}
      <WhyChooseUs />
      <DoctorsGrid doctors={fullDoctors.length ? fullDoctors : getDoctors()} isLoading={!service} showHeading={true} />
      {testimonies.length > 0 && (
        <div className="my-24 flex items-center justify-center overflow-hidden" id="happy-client">
          <div className="max-w-[2400px]">
            <div className="mb-16 flex flex-col items-center gap-4 text-center">
              <h1 className="font-normal text-primary max-lg:w-screen max-lg:px-8">
                <Trans
                  i18nKey="happyPatient.title"
                  components={{ span: <span className="font-bold" /> }}
                />
              </h1>
              <p className="max-w-[850px] max-lg:w-screen max-lg:px-4">
                {t("happyPatient.description")}
              </p>
            </div>
            <div className="splide-hide-arrow w-full max-sm:w-screen">
              {testimonies.length < 3 && screenSize > 768 ? (
                <div className="flex w-full flex-row-reverse justify-center gap-4 px-4 lg:gap-12">
                  {testimonies.map((testimony, index) => (
                    <div className="card h-[640px] w-96 bg-primary text-white max-2xl:h-[580px]" key={index}>
                      <figure className="h-1/2 w-full overflow-hidden">
                        <img src={testimony?.meta.photo} alt="patient image" />
                      </figure>
                      <div className="card-body h-1/2">
                        <h2 className="card-title">{testimony.title.rendered}</h2>
                        <div className="divider m-0 p-0 before:h-[1px] before:bg-white after:h-[1px] after:bg-white"></div>
                        <p>{testimony.meta?.testimony}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <Splide
                  className="clients-splide"
                  options={{
                    type: "loop",
                    perPage: 2,
                    focus: "center",
                    gap: "2rem",
                    padding: "47rem",
                    autoplay: true,
                    breakpoints: {
                      640: { perPage: 1, gap: "1px", padding: "1px" },
                    },
                  }}
                >
                  {testimonies.map((testimony, index) => (
                    <SplideSlide key={index} className="max-sm:flex max-sm:w-screen max-sm:items-center max-sm:justify-center">
                      <div className="card h-[640px] bg-primary text-white max-2xl:h-[580px] max-sm:w-[90vw]">
                        <figure className="h-1/2 w-full overflow-hidden">
                          <img src={testimony?.meta.photo} alt="patient image" />
                        </figure>
                        <div className="card-body h-1/2 gap-1 max-md:p-4 md:gap-2">
                          <h2 className="card-title">{testimony.title.rendered}</h2>
                          <div className="divider m-0 p-0 before:h-[1px] before:bg-white after:h-[1px] after:bg-white"></div>
                          <p>{testimony.meta?.testimony}</p>
                        </div>
                      </div>
                    </SplideSlide>
                  ))}
                </Splide>
              )}
            </div>
          </div>
        </div>
      )}
      <div className="flex justify-center py-8">
        <div className="m-4 w-full max-w-[2400px] md:m-8">
          <div className="flex min-h-[420px] overflow-hidden rounded-2xl bg-[#EDE8F5]">
            {/* Left: text + button */}
            <div className="flex flex-1 flex-col justify-between p-8 text-center md:p-12 md:text-left lg:px-16 lg:py-14">
              <div className="flex flex-col items-center gap-6 md:items-start">
                <h1 className="text-primary">
                  <Trans i18nKey="readyToTransform" components={{ span: <span className="font-normal" /> }} />
                </h1>
                <p>{t("makeAppointmentDesc")}</p>
              </div>
              <button
                className="btn btn-primary mt-8 w-fit md:mt-0"
                onClick={openModal}
              >
                {t("makeAppointmentToday")}{" "}
                <ArrowLongRightIcon className="size-5" />
              </button>
            </div>
            {/* Right: photo grid (desktop only) */}
            <div className="hidden md:flex flex-1 items-center justify-center py-6 pr-8">
              <div className="grid w-full grid-cols-3 gap-3">
                <div />
                <img
                  src={portrait1}
                  alt="placeholder"
                  className="portrait h-64 w-full rounded-xl object-cover"
                />
                <img
                  src={square}
                  alt="placeholder"
                  className="aspect-square w-3/4 self-end rounded-xl object-cover"
                />
                <img
                  src={landscape1}
                  alt="placeholder"
                  className="h-44 w-full rounded-xl object-cover"
                />
                <img
                  src={portrait2}
                  alt="placeholder"
                  className="portrait h-80 w-full rounded-xl object-cover"
                />
                <img
                  src={landscape2}
                  alt="placeholder"
                  className="h-44 w-full rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="our-partner" className="flex flex-col items-center gap-8 py-16">
        <h1 className="text-center font-normal text-primary">
          <Trans
            i18nKey="ourPartners"
            components={{ span: <span className="font-bold" /> }}
          />
        </h1>
        <PartnersList list={ourPartnerList} slider={true} />
      </div>
    </div>
  );
};

export default ServiceDetails;
