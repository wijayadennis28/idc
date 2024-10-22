import React, {useState, useEffect} from "react";
import removeHTMLTags from "../../utils/removeHTMLTags";

//Departments Icon
import {ReactComponent as GeneralDentistIcon} from '../../../assets/image/our-services/department-icon/general-dentist.svg';
import {ReactComponent as OralSurgeryIcon} from '../../../assets/image/our-services/department-icon/oral-surgery.svg';
import {ReactComponent as OrthodonticIcon} from '../../../assets/image/our-services/department-icon/orthodontic.svg';
import {ReactComponent as PediatricDentistryIcon} from '../../../assets/image/our-services/department-icon/pediatric-dentistry.svg';
import {ReactComponent as PeriodonticIcon} from '../../../assets/image/our-services/department-icon/periodontic.svg';
import {ReactComponent as ProsthodonticsIcon} from '../../../assets/image/our-services/department-icon/prosthodontics.svg';
import {ReactComponent as ToothConservationIcon} from '../../../assets/image/our-services/department-icon/tooth-conservation-and-endodotic.svg';

//Departments Background
import GeneralDentistBg from '../../../assets/image/our-services/department-bg/general-dentist.png';
import OralSurgeryBg from '../../../assets/image/our-services/department-bg/oral-surgery.png';
import OrthodonticBg from '../../../assets/image/our-services/department-bg/orthodontic.png';
import PediatricDentistryBg from '../../../assets/image/our-services/department-bg/pediatric-dentistry.png';
import PeriodonticBg from '../../../assets/image/our-services/department-bg/periodontic.png';
import ProsthodonticsBg from '../../../assets/image/our-services/department-bg/prosthodontics.png';
import ToothConservationBg from '../../../assets/image/our-services/department-bg/tooth-conservation-and-endodotic.png';

const Departments = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    async function loadDepartments() {
      const response = await fetch('/wp-json/wp/v2/our-services');
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
    return string.split('.')[0];
  };

  const getCardIcon = (slug) => {
    if (slug === "general-dentist") return <GeneralDentistIcon />
    else if (slug === "oral-surgery") return <OralSurgeryIcon />
    else if (slug === "orthodontic") return <OrthodonticIcon />
    else if (slug === "pediatric-dentistry") return <PediatricDentistryIcon />
    else if (slug === "periodontic") return <PeriodonticIcon />
    else if (slug === "prosthodontics") return <ProsthodonticsIcon />
    else if (slug === "tooth-conservation-and-endodotic") return <ToothConservationIcon />
  };

  const getCardBackground = (slug) => {
    if (slug === "general-dentist") return GeneralDentistBg
    else if (slug === "oral-surgery") return OralSurgeryBg
    else if (slug === "orthodontic") return OrthodonticBg
    else if (slug === "pediatric-dentistry") return PediatricDentistryBg
    else if (slug === "periodontic") return PeriodonticBg
    else if (slug === "prosthodontics") return ProsthodonticsBg
    else if (slug === "tooth-conservation-and-endodotic") return ToothConservationBg
  };

  return (
    <div className="flex flex-wrap gap-6 mt-8 justify-evenly">
      {departments.map((department, index) => (
        <div 
          style={{
            '--image-url': `url(${getCardBackground(department.slug)})`,
          }}
          className="card group w-[442px] h-fit bg-[image:var(--image-url)] bg-right-top bg-[length:50%] bg-no-repeat hover:bg-none hover:bg-primary"
        >
          <div className="card-body">
            <div className="flex justify-between mb-8">
              {getCardIcon(department.slug)}
              <div className="card-actions">
                <a href={department.link}>
                  <button className="btn btn-secondary text-base font-normal hidden group-hover:block" >See details
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5 text-secondary inline ml-2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </button>
                </a>
              </div>
            </div>
            <h4 className="card-title text-primary group-hover:text-white" dangerouslySetInnerHTML={{__html: department.title.rendered}}></h4>
            <p className="text-[#4D4757] font-normal group-hover:text-white" dangerouslySetInnerHTML={{__html: getFirstSentence(removeHTMLTags(department.content.rendered))}}></p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Departments;