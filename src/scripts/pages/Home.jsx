import React, { useState, useEffect, useRef } from "react";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";

import { Splide, SplideSlide } from "@splidejs/react-splide";

import PopUpMap from "../components/PopUpMap";
import Departments from "../components/Departments";
import PartnersList from "../components/PartnersList";
import Social from "../components/Social";
import IdcCard from "../components/IdcCard";

import useScreenSize from "../../utils/useScreenSize";

// image
import Hero1Img from "../../../assets/image/home/hero/hero-1.jpg";
import Hero2Img from "../../../assets/image/home/hero/hero-2.jpg";
import Hero3Img from "../../../assets/image/home/hero/hero-3.jpg";

import WhyChooseUs1Img from "../../../assets/image/home/why-choose-us/affordable-care.png";
import WhyChooseUs2Img from "../../../assets/image/home/why-choose-us/specialized-treatments.png";
import WhyChooseUs3Img from "../../../assets/image/home/why-choose-us/patient-centric-service.png";
import WhyChooseUsBgImg from "../../../assets/image/home/why-choose-us/background.svg";

import DrgRickyImg from "../../../assets/image/doctors/drg-ricky.png";

import OurClinicImg from "../../../assets/image/home/services/background.jpg";

const Home = () => {
  const screenSize = useScreenSize();
  const paginationRef = useRef(null);
  const [ourPartnerList, setOurPartnerList] = useState([]);
  const [doctorList, setDoctorList] = useState([]);
  const [testimonies, setTestimonies] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [topDoctors, setTopDoctors] = useState([]);

  useEffect(() => {
    loadPartners().catch(console.error);
    loadDoctors().catch(console.error);
    loadTestimonies().catch(console.error);
    loadDepartments().catch(console.error);
  }, []);

  async function loadPartners() {
    try {
      const response = await fetch("/wp-json/wp/v2/partners");
      if (!response.ok) {
        throw new Error("Failed to fetch partners data");
      }

      const partners = await response.json();

      setOurPartnerList(() => {
        return partners.map((partner) => ({
          title: partner.title.rendered,
          logo: partner.meta.icon[0],
        }));
      });
    } catch (error) {
      console.error("Error loading partners:", error);
    }
  }

  async function loadDoctors() {
    try {
      const response = await fetch("/wp-json/wp/v2/doctors");
      if (!response.ok) {
        throw new Error("Failed to fetch doctors data");
      }

      const doctors = await response.json();
      setDoctorList(doctors);
    } catch (error) {
      console.error("Error loading doctors:", error);
    }
  }

  async function loadTestimonies() {
    try {
      const response = await fetch("/wp-json/wp/v2/testimonies");
      if (!response.ok) {
        throw new Error("Failed to fetch testimonies data");
      }

      const testimonies = await response.json();
      setTestimonies(testimonies);
    } catch (error) {
      console.error("Error loading testimonies:", error);
    }
  }

  async function loadDepartments() {
    const response = await fetch("/wp-json/wp/v2/services");
    if (!response.ok) {
      // oups! something went wrong
      return;
    }

    const departments = await response.json();
    setDepartments(departments);

    setTopDoctors(() => {
      const servicesDoctors = [];

      departments.forEach((department) => {
        const doctor = department.doctors[0];
        if (
          doctor &&
          servicesDoctors.findIndex((d) => d.name === doctor.name) === -1
        ) {
          servicesDoctors.push(doctor);
        }
      });

      return servicesDoctors;
    });
  }

  const whyChooseUs = [
    {
      title: "Affordable Care",
      desc: "We offer competitive pricing to ensure that top-notch dental care is within everyone's reach. Quality service shouldn't break the bank.",
      image: WhyChooseUs1Img,
    },
    {
      title: "Specialized Treatments",
      desc: "Our team of specialists is trained in various dental fields to provide you with comprehensive care. Whatever your dental needs, we have the expertise to handle them",
      image: WhyChooseUs2Img,
    },
    {
      title: "Patient-Centric Service",
      desc: "Your comfort and satisfaction are our top priorities. We tailor our services to meet your unique needs, ensuring a personalized and stress-free experience.",
      image: WhyChooseUs3Img,
    },
  ];

  useEffect(() => {
    const movePagination = () => {
      const pagination = document.querySelector(
        "#hero-splide .splide__pagination",
      ); // Find the pagination
      if (pagination && paginationRef.current) {
        paginationRef.current.appendChild(pagination); // Move the pagination
      }
    };

    // Ensure Splide has rendered before moving pagination
    setTimeout(movePagination, 100);
  }, []);

  const openModal = () => {
    const dialog = document.getElementById("map-modal");
    dialog.showModal();
  };

  return (
    <>
      <div>
        <div
          className="relative h-fit w-full overflow-hidden max-lg:flex max-lg:flex-col-reverse lg:h-[85vh] lg:max-h-[600px] xl:max-h-[1684px] 2xl:h-[87vh]"
          id="hero"
        >
          <div className="bg-primary text-white lg:bg-transparent">
            <div className="relative z-20 flex flex-col gap-6 px-4 max-lg:-top-4 lg:absolute lg:inset-x-0 lg:bottom-0 lg:px-16 lg:pb-8">
              <span className="badge bg-[color:#FCFBFD] bg-opacity-70 p-4 uppercase">
                Simplify Your Smile Journey
              </span>
              <div className="flex flex-col max-lg:gap-6 lg:flex-row">
                <div className="flex flex-1 flex-col gap-6">
                  <h1>One Stop Family Dental Center</h1>
                  <p>
                    From routine family dental checkups to implants to cosmetic
                    dentistry. Our team expertly guides and helps you to achieve
                    your dream smile. Make an Appointment today!
                  </p>
                </div>
              </div>

              <div className="flex h-full items-center max-lg:w-full max-lg:flex-col max-lg:gap-6">
                <button
                  className="btn btn-primary flex w-fit max-lg:w-full"
                  onClick={openModal}
                >
                  Make an Appointment today!{" "}
                  <ArrowLongRightIcon className="size-5" />
                </button>
                <div
                  className="home-splide flex flex-1 justify-end"
                  ref={paginationRef}
                ></div>
              </div>
            </div>
          </div>
          <div className="h-full w-full">
            <Splide
              options={{
                type: "loop",
                autoplay: true,
                drag: false,
              }}
              id="hero-splide"
            >
              <div className="splide__arrows hidden" />
              {[Hero1Img, Hero2Img, Hero3Img].map((value, index) => (
                <SplideSlide key={index}>
                  <div className="h-fit w-full lg:h-[85vh] lg:max-h-[600px] xl:max-h-[1684px] 2xl:h-[87vh]">
                    <img
                      src={value}
                      alt="Hero Background"
                      className={`h-full w-full object-cover object-center`}
                    />
                  </div>
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </div>
        <div
          className="bg-auto bg-left bg-no-repeat"
          style={{ backgroundImage: `url(${WhyChooseUsBgImg})` }}
        >
          <div
            id="our-partner"
            className="flex flex-col items-center gap-8 py-16"
          >
            <h1 className="text-center font-normal text-primary">
              <span className="font-bold">Our</span> partners
            </h1>
            <PartnersList list={ourPartnerList} slider={true} />
          </div>
          <div
            id="why-choose-us"
            className="flex flex-col items-center gap-8 px-8 py-16"
          >
            <h1 className="text-center font-normal text-primary">
              Why<span className="font-bold"> choose us</span>
            </h1>
            <div className="w-full max-sm:px-4 sm:flex sm:justify-center">
              <div className="flex max-w-[2292px] flex-wrap justify-stretch gap-8 max-lg:flex-col max-lg:gap-4 max-lg:px-4 max-md:gap-8 max-md:px-4 max-sm:px-0 md:justify-center">
                {whyChooseUs.map((why, index) => (
                  <>
                    <IdcCard key={index} title={why.title} image={why.image} />
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div id="service" className="mb-12 flex flex-col items-center">
          <div
            className="flex h-72 w-full items-center justify-center bg-cover bg-center bg-no-repeat 2xl:h-96"
            style={{
              backgroundImage: `url(${OurClinicImg})`,
            }}
          >
            <h1 className="px-4 text-center font-normal text-white">
              Explore our <span className="font-bold">services</span>
            </h1>
          </div>
          <div className="relative -top-24 w-full max-sm:px-4 sm:flex sm:justify-center">
            <Departments departments={departments} />
          </div>
        </div>
        <div
          className="flex justify-center bg-[color:#E0EFF3]"
          id="meet-our-dentist"
        >
          <div className="flex max-w-[2400px] flex-col-reverse justify-between overflow-hidden md:flex-row md:gap-16 lg:gap-32">
            <div className="px-8 py-8 md:px-0 md:py-0 md:ps-16 lg:w-4/6">
              <div className="flex h-full flex-col justify-center gap-2 md:gap-3 lg:gap-6">
                <h1 className="font-medium text-primary">
                  Meet with our{" "}
                  <span className="font-bold">expert dentist,</span>
                  <br />
                  Just for you
                </h1>
                <p className="max-md:pb-8">
                  We pride ourselves on delivering the best service in dental
                  care. From routine checkups to advanced treatments, our
                  dedicated team is committed to providing you with
                  personalized, top-quality care that ensures your smile shines
                  its brightest.
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  <div className="avatar-group flex -space-x-4 md:hidden lg:flex rtl:space-x-reverse">
                    {doctorList.slice(0, 4).map((doctor, index) => (
                      <div className="avatar border-none" key={index}>
                        <div className="w-8 min-[400px]:w-10 lg:w-12">
                          <img
                            src={doctor?.thumbnail}
                            alt={doctor?.slug}
                            style={{
                              width: "100%",
                              height: "auto",
                              imageRendering: "auto",
                            }}
                          />
                        </div>
                      </div>
                    ))}

                    <div className="avatar placeholder border">
                      <div className="w-8 bg-secondary text-neutral-content min-[400px]:w-10 lg:w-12">
                        <span>{doctorList.length - 4}+</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={openModal}
                    className="btn btn-primary w-fit max-md:btn-sm max-md:h-10 max-md:text-[11px]"
                  >
                    Make an Appointment today!{" "}
                    <ArrowLongRightIcon className="size-3 lg:size-5" />
                  </button>
                </div>
              </div>
            </div>
            <div className="splide-hide-arrow splide-hide-pagination max-h-[612px] w-full max-w-[588px] md:w-[2775px] lg:w-6/12 2xl:w-4/12">
              <Splide
                options={{
                  type: "loop",
                  autoplay: true,
                  drag: false,
                  interval: 2500,
                }}
                id="hero-splide"
              >
                {topDoctors.map(
                  (value, index) =>
                    value.thumbnail && (
                      <SplideSlide key={index}>
                        <img
                          src={value.thumbnail}
                          alt={value.name + " image"}
                          className="aspect-square w-full md:aspect-auto"
                        />
                      </SplideSlide>
                    ),
                )}
              </Splide>
            </div>
          </div>
        </div>
        {testimonies.length > 0 && (
          <div
            className="my-24 flex items-center justify-center overflow-hidden"
            id="happy-client"
          >
            <div className="max-w-[2400px]">
              <div className="mb-16 flex flex-col items-center gap-4 text-center">
                <h1 className="font-normal text-primary max-lg:w-screen max-lg:px-8">
                  A lot of <span className="font-bold">happy patients</span>
                </h1>
                <p className="max-w-[850px] max-lg:w-screen max-lg:px-4">
                  At Indo Dental Center, our greatest pride comes from the
                  smiles we help create. But don't just take our word for
                  it—hear directly from our satisfied patients!
                </p>
              </div>
              <div className="splide-hide-arrow w-full max-sm:w-screen">
                {testimonies.length < 3 && screenSize > 768 ? (
                  <>
                    <div className="flex w-full flex-row-reverse justify-center gap-4 px-4 lg:gap-12">
                      {testimonies.map((testimony, index) => (
                        <div
                          className="card h-[520px] w-96 bg-primary text-white max-2xl:h-[480px]"
                          key={index}
                        >
                          <figure className="h-1/2 w-full overflow-hidden">
                            <img
                              src={testimony?.meta.photo}
                              alt="patient image"
                            />
                          </figure>
                          <div className="card-body h-1/2">
                            <h2 className="card-title">
                              {testimony.title.rendered}
                            </h2>
                            <div className="divider m-0 p-0 before:h-[1px] before:bg-white after:h-[1px] after:bg-white"></div>
                            <p>{testimony.meta?.testimony}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <>
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
                          640: {
                            perPage: 1,
                            gap: "1px",
                            padding: "1px",
                          },
                        },
                      }}
                    >
                      {testimonies.map((testimony, index) => (
                        <SplideSlide
                          key={index}
                          className="max-sm:flex max-sm:w-screen max-sm:items-center max-sm:justify-center"
                        >
                          <div className="card h-[520px] bg-primary text-white max-2xl:h-[480px] max-sm:w-[90vw]">
                            <figure className="h-1/2 w-full overflow-hidden">
                              <img
                                src={testimony?.meta.photo}
                                alt="patient image"
                              />
                            </figure>
                            <div className="card-body h-1/2 gap-1 max-md:p-4 md:gap-2">
                              <h2 className="card-title">
                                {testimony.title.rendered}
                              </h2>
                              <div className="divider m-0 p-0 before:h-[1px] before:bg-white after:h-[1px] after:bg-white"></div>
                              <p>{testimony.meta?.testimony}</p>
                            </div>
                          </div>
                        </SplideSlide>
                      ))}
                    </Splide>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
        <Social />
      </div>
      <PopUpMap />
    </>
  );
};

export default Home;
