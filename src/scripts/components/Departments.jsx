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
          <div
            style={{
              backgroundImage: `url(${department.meta.image})`,
            }}
            className="group card h-full w-[100%] cursor-pointer bg-[color:#fcfbfd] bg-[length:40%] bg-right-top bg-no-repeat hover:bg-primary hover:!bg-none md:w-[360px] 2xl:w-[420px]"
          >
            <div className="h-full w-full bg-gradient-to-bl from-white/50 to-40% to-white group-hover:!bg-none">
              <div className="card-body">
                <div className="mb-8 flex justify-between">
                  <img src={department.meta.icon}/>
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
                    __html: department.meta.card_text
                  }}
                ></p>
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Departments;
