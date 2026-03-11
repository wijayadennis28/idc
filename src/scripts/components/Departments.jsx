import React from "react";

import Loading from "./Loading";
import IdcCard from "./IdcCard";

const Departments = ({ departments = [] }) => {
  if (departments.length === 0) return <Loading />;

  return (
    <div className="mt-8 flex w-full max-w-[1200px] flex-wrap justify-center gap-6 px-4">
      {departments.map((department, index) => (
        <a href={department.link} key={index} className="block w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
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
