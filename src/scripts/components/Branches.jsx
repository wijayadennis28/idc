import React from "react";
import { useTranslation } from "react-i18next";

const Branches = ({ showTitle = false, btnColor = "primary" }) => {
  const { t } = useTranslation();
  const branches = [
    {
      name: t("branch.senayan"),
      address: "Jl. Hang Tuah Raya No.35, Kby. Baru, South Jakarta - 12120",
      schedule: [
        t("schedule.list.weekday"),
        t("schedule.list.saturday"),
        t("schedule.list.sunday"),
      ],
      phone: "+628128080011",
      phoneLabel: "Senayan",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2281968094794!2d106.79508307575067!3d-6.2336209937545455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1d91cc5e8e4f%3A0x482830c08a46f6e2!2sINDO%20DENTAL%20CENTER%20-%20Klinik%20Gigi%20Spesialis!5e0!3m2!1sen!2sid!4v1729369270940!5m2!1sen!2sid.",
    },
    {
      name: t("branch.pluit"),
      address:
        "Ruko CBD Pluit No. B2, Jl. Pluit Selatan Raya, Penjaringan, North Jakarta City - 14440",
      schedule: [t("schedule.list.weekday"), t("schedule.list.saturday")],
      phone: "+6281218186161",
      phoneLabel: "Pluit",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.0180537971087!2d106.78734657575!3d-6.128272493858513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1d6bd3175651%3A0xea7f602f2981257!2sINDO%20DENTAL%20CENTER%20-%20Klinik%20Gigi%20Spesialis!5e0!3m2!1sen!2sid!4v1729369350556!5m2!1sen!2sid",
    },
  ];

  return (
    <div id="branches" className="flex flex-col gap-8">
      {showTitle && <h4>{t("address")}</h4>}
      {branches.map((branch, index) => (
        <div
          key={index}
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
              className={`btn w-full ${
                btnColor === "primary"
                  ? "border-none bg-primary text-white hover:bg-[#4b3478] active:bg-[#4b3478]"
                  : "btn-primary"
              }`}
              onClick={() => {
                window.open(`https://wa.me/${branch.phone}`, "_blank");
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
