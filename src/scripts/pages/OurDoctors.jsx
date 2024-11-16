import React, { useEffect, useState } from "react";
import OurDoctorImg from "../../../assets/image/our-doctors/our-doctor.png";
import MakeAppointment from '../components/MakeAppointment';
import DoctorsGrid from "../components/DoctorsGrid";
import Pill from "../components/Pill";
import {MagnifyingGlassIcon} from '@heroicons/react/24/solid'

const OurDoctors = () => {
  const [category, setCategory] = useState("All doctors");
  const [isLoading, setLoading] = useState(true);
  const [availableCategories, setAvailableCategories] = useState(["All doctors"]);
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    getCategories().catch(console.error);
    getDoctors().catch(console.error);
  }, []);

  useEffect(() => {
    filterDoctors();
  }, [searchValue, category]);

  const getCategories = async () => {
    const response = await fetch("/wp-json/wp/v2/services");
    const services = await response.json();
    setAvailableCategories(['All doctors', ...services.map((service) => service.title.rendered)]);
  };

  const getDoctors = async () => {
    setLoading(true);
    let doctors = [];
    let page = 1;
    let totalPages = 1;
  
    try {
      do {
        const response = await fetch(`/wp-json/wp/v2/doctors?per_page=100&page=${page}`);
        const doctorsRaws = await response.json();
  
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
  
        totalPages = parseInt(response.headers.get('X-WP-TotalPages')) || 1;
        doctors = doctors.concat(
          doctorsRaws.map((doctor) => ({
            permalink: doctor.link,
            thumbnail: doctor.thumbnail,
            name: doctor.title.rendered,
            service: doctor.service_name,
          }))
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
    if (category !== 'All doctors' && searchValue !== '') {
      setFilteredDoctors(doctors.filter((doctor) => doctor.service === category && doctor.name.toLowerCase().includes(searchValue.toLowerCase())));
    } else if (category !== 'All doctors'){
      setFilteredDoctors(doctors.filter((doctor) => doctor.service === category));
    } else if (searchValue !== '') {
      setFilteredDoctors(doctors.filter((doctor) => doctor.name.toLowerCase().includes(searchValue.toLowerCase())));
    } else {
      setFilteredDoctors(doctors);
    }
  };

  return (
    <div className="flex flex-col">
      <div
        style={{
          '--image-url': `url(${OurDoctorImg})`,
        }}
        className={String.raw`w-full h-[355px] mb-8 bg-cover bg-center bg-[image:var(--image-url)]`}
      >
        <div className="flex justify-center items-center bg-primary bg-opacity-75 h-full">
          <h1 className="font-sans text-white text-center font-normal">Meet with our <span className="font-bold italic">Expert Dentist,</span> Just for You</h1>
        </div>
      </div>
      <div className="flex mx-6 mb-8 gap-2 items-center spa">
        <MagnifyingGlassIcon className="size-8"/>
        <input type="text" value={searchValue} placeholder="Search by name" className="input w-full grow" onChange={handleSearch}/>
      </div>
      <div className=" carousel carousel-start flex mx-6 mb-8 gap-2">
        {availableCategories.map((currCategory) => (
          <Pill active={currCategory === category} text={currCategory} onClick={() => setCategory(currCategory)}/>
        ))}
      </div>
      <div className="pb-24">
        <DoctorsGrid isLoading={isLoading} doctors={filteredDoctors}/>
      </div>
      <MakeAppointment/>
    </div>
  )
};

export default OurDoctors;
