import React, { useState, useEffect } from "react";
import removeHTMLTags from "../../utils/removeHTMLTags";

import Loading from "./Loading";

//Departments Icon
import { ReactComponent as GeneralDentistIcon } from "../../../assets/image/our-services/department-icon/general-dentist.svg";
import { ReactComponent as OralSurgeryIcon } from "../../../assets/image/our-services/department-icon/oral-surgery.svg";
import { ReactComponent as OrthodonticIcon } from "../../../assets/image/our-services/department-icon/orthodontic.svg";
import { ReactComponent as PediatricDentistryIcon } from "../../../assets/image/our-services/department-icon/pediatric-dentistry.svg";
import { ReactComponent as PeriodonticIcon } from "../../../assets/image/our-services/department-icon/periodontic.svg";
import { ReactComponent as ProsthodonticsIcon } from "../../../assets/image/our-services/department-icon/prosthodontics.svg";
import { ReactComponent as ToothConservationIcon } from "../../../assets/image/our-services/department-icon/tooth-conservation-and-endodotic.svg";

//Departments Background
import GeneralDentistBg from "../../../assets/image/our-services/department-bg/general-dentist.png";
import OralSurgeryBg from "../../../assets/image/our-services/department-bg/oral-surgery.png";
import OrthodonticBg from "../../../assets/image/our-services/department-bg/orthodontic.png";
import PediatricDentistryBg from "../../../assets/image/our-services/department-bg/pediatric-dentistry.png";
import PeriodonticBg from "../../../assets/image/our-services/department-bg/periodontic.png";
import ProsthodonticsBg from "../../../assets/image/our-services/department-bg/prosthodontics.png";
import ToothConservationBg from "../../../assets/image/our-services/department-bg/tooth-conservation-and-endodotic.png";

const Departments = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    async function loadDepartments() {
      const response = await fetch("/wp-json/wp/v2/our-services");
      if (!response.ok) {
        // oups! something went wrong
        return;
      }

      const departments = await response.json();
      setDepartments(departments);
    }

    loadDepartments().catch(console.error);
  }, []);

  const getFirstSentence = (string) => {
    return string.split(".")[0];
  };

  const getCardIcon = (slug) => {
    if (slug === "general-dentist") return <GeneralDentistIcon />;
    else if (slug === "oral-surgery") return <OralSurgeryIcon />;
    else if (slug === "orthodontic") return <OrthodonticIcon />;
    else if (slug === "pediatric-dentistry") return <PediatricDentistryIcon />;
    else if (slug === "periodontic") return <PeriodonticIcon />;
    else if (slug === "prosthodontics") return <ProsthodonticsIcon />;
    else if (slug === "tooth-conservation-and-endodotic")
      return <ToothConservationIcon />;
  };

  const getCardBackground = (slug) => {
    if (slug === "general-dentist") return GeneralDentistBg;
    else if (slug === "oral-surgery") return OralSurgeryBg;
    else if (slug === "orthodontic") return OrthodonticBg;
    else if (slug === "pediatric-dentistry") return PediatricDentistryBg;
    else if (slug === "periodontic") return PeriodonticBg;
    else if (slug === "prosthodontics") return ProsthodonticsBg;
    else if (slug === "tooth-conservation-and-endodotic")
      return ToothConservationBg;
  };

  if (departments.length === 0) return <Loading />;

  return (
    <div className="mt-8 flex max-w-[2292px] flex-wrap justify-center gap-10 2xl:gap-12">
      {departments.map((department, index) => (
        <a href={department.link} key={index}>
          <div
            style={{
              backgroundImage: `url(${getCardBackground(department.slug)})`,
            }}
            className="group card h-full w-[360px] cursor-pointer bg-[color:#fcfbfd] bg-[length:40%] bg-right-top bg-no-repeat hover:bg-primary hover:!bg-none 2xl:w-[420px]"
          >
            <div className="card-body">
              <div className="mb-8 flex justify-between">
                {getCardIcon(department.slug)}
                <div className="card-actions">
                  <button className="btn btn-secondary no-animation hidden text-base font-normal group-hover:block">
                    See details
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="ml-2 inline size-5 text-secondary"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <h4
                className="text-primary group-hover:text-white"
                dangerouslySetInnerHTML={{ __html: department.title.rendered }}
              ></h4>
              <p
                className="font-normal text-[#4D4757] group-hover:text-white"
                dangerouslySetInnerHTML={{
                  __html: getFirstSentence(
                    removeHTMLTags(department.content.rendered),
                  ),
                }}
              ></p>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Departments;
