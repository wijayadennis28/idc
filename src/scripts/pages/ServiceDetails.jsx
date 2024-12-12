import React, { useEffect, useState } from "react";
import DoctorsGrid from "../components/DoctorsGrid";
import Pill from "../components/Pill";
import Loading from "../components/Loading";
import Slider from "../components/Slider";

const ServiceDetails = () => {
  const [service, setService] = useState(null);
  useEffect(() => {
    async function loadServiceDetails() {
      const slug = window.location.pathname.split("/")[2];
      const response = await fetch(`/wp-json/wp/v2/services?slug=${slug}`);
      if (!response.ok) {
        throw new Error("Service not found");
      }

      const service = await response.json();
      setService(service[0]);
    }

    loadServiceDetails().catch(console.error);
  }, []);

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
    }));
  };

  if (!service) return <Loading />;

  return (
    <div className="flex flex-col gap-8">
      <div
        style={{
          "--image-url": `url(${service.meta.image})`,
        }}
        className="h-48 w-full bg-white bg-[length:40%] bg-right bg-no-repeat md:bg-[image:var(--image-url)]"
      >
        <div className="flex h-full w-full flex-col justify-center bg-gradient-to-r from-white from-60% to-white/50 px-8">
          <div className="breadcrumbs text-sm">
            <ul>
              <li className="text-secondary">
                <a href="/our-services">Our Services</a>
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
        </div>
      </div>
      <div className="lg flex flex-col justify-around gap-8 px-8 md:flex-row">
        <div
          className="grow basis-0 py-8 text-[#4D4757]"
          dangerouslySetInnerHTML={{ __html: service.content.rendered }}
        ></div>
        <div className="flex grow basis-0 flex-col gap-2">
          <h4 className="font-normal text-primary">Type of service</h4>
          {Object.values(service.meta.service_types).map((serviceType, i) => (
            <div className="collapse collapse-arrow border">
              <input
                type="radio"
                name="my-accordion-2"
                defaultChecked={i === 0}
              />
              <div className="collapse-title text-lg font-bold text-[#4D4757]">
                {serviceType.title}
              </div>
              <div className="collapse-content font-normal text-[#4D4757]">
                <div className="divider mb-4 mt-0"></div>
                <p>{serviceType.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {Object.values(service.meta.our_works).length > 0 && (
          <div className="p-8">
            <h2 className="mb-8 text-center text-4xl font-bold text-purple-900">
              Our Works
            </h2>
            <p className="mx-auto mb-16 max-w-2xl text-center text-[#4D4757]">
              At Indo Dental Center, we believe that exceptional care begins with
              exceptional tools. Our clinic is equipped with the latest,
              cutting-edge technology to ensure you receive the best possible
              treatment in a comfortable and efficient manner.
            </p>
            <Slider equipments={getOurWorks()} isLoading={!service} />
          </div>
        )
      }
      <div className="px-8">
        <Pill active={true} text={service.title.rendered} />
      </div>
      <DoctorsGrid doctors={getDoctors()} isLoading={!service} />
    </div>
  );
};

export default ServiceDetails;
