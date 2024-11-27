import React, { useState, useEffect } from "react";

import Loading from "./Loading";
import IdcCard from "./IdcCard";

import useScreenSize from "../../utils/useScreenSize";

const Departments = ({ departments = [] }) => {
  const screenSize = useScreenSize();

  if (departments.length === 0) return <Loading />;

  return (
    <div className="mt-8 flex max-w-[2292px] flex-wrap justify-stretch gap-8 max-lg:gap-4 max-lg:px-4 max-md:flex-col max-md:gap-8 max-md:px-4 max-sm:px-0 md:justify-center">
      {departments.map((department, index) => (
        <a href={department.link} key={index}>
          <IdcCard
            image={department.meta?.image}
            title={department.title.rendered}
            hover={screenSize < 640 ? true : false}
          />
        </a>
      ))}
    </div>
  );
};

export default Departments;
