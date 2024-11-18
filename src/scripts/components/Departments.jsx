import React, { useState, useEffect } from "react";

import Loading from "./Loading";

import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

const Departments = () => {
  const [departments, setDepartments] = useState([]);

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

  if (departments.length === 0) return <Loading />;

  return (
    <div className="mt-8 flex max-w-[2292px] flex-wrap justify-stretch gap-8 max-lg:gap-4 max-lg:px-4 max-md:flex-col max-md:gap-8 max-md:px-4 md:justify-center">
      {departments.map((department, index) => (
        <a href={department.link} key={index}>
          <div className="group card relative h-48 w-[380px] overflow-hidden !bg-white bg-right bg-no-repeat text-primary-content hover:!bg-primary hover:!bg-none">
            <div className="card-body z-10 flex-row justify-between">
              <h4
                className="w-[168px] overflow-visible text-primary group-hover:text-white"
                dangerouslySetInnerHTML={{
                  __html: department.title.rendered,
                }}
              ></h4>
              <div className="card-actions hidden group-hover:block">
                <button className="btn btn-secondary no-animation btn-sm h-11 w-fit">
                  See details
                  <ArrowUpRightIcon className="w-4" />
                </button>
              </div>
            </div>
            <div className="absolute -right-36 group-hover:hidden">
              <img
                src={department.meta?.image}
                alt={department.title?.rendered + "image"}
                className="opacity-50"
              />
              <div class="absolute inset-0 w-10 bg-gradient-to-r from-white to-transparent"></div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Departments;
