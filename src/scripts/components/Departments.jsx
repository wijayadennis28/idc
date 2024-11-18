import React, { useState, useEffect } from "react";

import Loading from "./Loading";

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
    <div className="mt-8 flex max-w-[2292px] flex-wrap justify-stretch gap-12 max-lg:gap-4 max-lg:px-4 max-md:flex-col max-md:gap-8 max-md:px-4 md:justify-center">
      {departments.map((department, index) => (
        <a href={department.link} key={index}>
          <div className="group card relative h-56 w-[421px] overflow-hidden !bg-white bg-right bg-no-repeat text-primary-content hover:!bg-primary hover:!bg-none">
            <div className="card-body z-10 flex-row justify-between">
              <h4
                className="w-[168px] overflow-visible text-primary group-hover:text-white"
                dangerouslySetInnerHTML={{
                  __html: department.title.rendered,
                }}
              ></h4>
              <div className="card-actions hidden group-hover:block">
                <button className="btn btn-secondary no-animation text-base font-normal">
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
            <div className="absolute -right-36 group-hover:hidden">
              <img
                src={department.meta?.image}
                alt={department.title.rendered + " image"}
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
