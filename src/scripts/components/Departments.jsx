import React from "react";

import Loading from "./Loading";
import IdcCard from "./IdcCard";

const Departments = ({ departments = [] }) => {
  if (departments.length === 0) return <Loading />;

  return (
    <div className="mt-8 grid w-full max-w-[1200px] grid-cols-1 gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3">
      {departments.map((department, index) => (
        <a href={department.link} key={index} className="block">
          <IdcCard
            image={department.meta?.image}
            icon={department.meta?.icon}
            title={department.title.rendered}
            description={department.meta?.card_text}
          />
        </a>
      ))}
    </div>
  );
};

export default Departments;
