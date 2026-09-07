import React from "react";
import { useTranslation } from "react-i18next";
import useBranches from "../../utils/useBranches";

const Branches = ({ showTitle = false, btnColor = "primary" }) => {
  const { t } = useTranslation();
  const { branches, isLoading } = useBranches();

  if (isLoading) return null;

  return (
    <div id="branches" className="flex flex-col gap-8">
      {showTitle && <h4>{t("address")}</h4>}
      {branches.map((branch) => (
        <div
          key={branch.slug || branch.id}
          className="flex flex-col gap-8 overflow-hidden bg-white lg:flex-row lg:gap-4"
        >
          <div className="h-fit w-full rounded-2xl bg-gray-100 p-4 lg:w-1/3">
            <h5 className="pb-2 font-semibold">{branch.name}</h5>
            <p className="pb-2">{branch.address}</p>
            <div className="mb-4">
              <p className="text-sm font-normal">{t("schedule.title")}</p>
              <ul className="ml-2 list-inside list-disc text-sm text-gray-500">
                {branch.schedule.map((time, idx) => (
                  <li key={idx}>{time}</li>
                ))}
              </ul>
            </div>
            <button
              id={branch.id}
              className={`btn w-full ${
                btnColor === "primary"
                  ? "border-none bg-primary text-white hover:bg-[#4b3478] active:bg-[#4b3478]"
                  : "btn-primary"
              }`}
              onClick={() => {
                window.open(branch.whatsapp, "_blank");
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 px-0.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                />
              </svg>
              {branch.phone} ({branch.phoneLabel})
            </button>
          </div>
          <div className="w-full lg:w-2/3">
            <div className="overflow-hidden rounded-2xl">
              <iframe
                src={branch.mapSrc}
                width="100%"
                className="h-[250px] w-full md:h-[300px] lg:h-[400px]"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Branches;
