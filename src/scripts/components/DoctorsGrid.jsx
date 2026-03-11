import React from "react";
import Loading from "./Loading";
import { useTranslation, Trans } from "react-i18next";

const DoctorsGrid = ({ doctors, isLoading, showHeading = false }) => {
  const { t } = useTranslation();

  const openModal = (e) => {
    e.stopPropagation();
    window.open("https://wa.me/+628128080011", "_blank");
  };

  if (isLoading) return <Loading />;

  return (
    <div className="px-8 pt-8">
      {showHeading && (
        <div className="mb-8 flex flex-col gap-3">
          <h1 className="font-normal text-[#4D4757]">
            <Trans
              i18nKey="meetOurDentist.title"
              components={{ span: <span className="font-bold" /> }}
            />
          </h1>
          <p className="max-w-2xl text-[#4D4757]">
            {t("meetOurDentist.description")}
          </p>
        </div>
      )}
      <div className="flex flex-wrap justify-center gap-4">
        {doctors.map((doctor, index) => (
          <div
            key={index}
            className="group relative flex w-[calc(50%-8px)] flex-shrink-0 flex-col cursor-pointer overflow-hidden rounded-2xl bg-white shadow-sm md:block md:h-[440px] md:w-[calc(25%-12px)]"
            onClick={() => (window.location.href = doctor.permalink)}
          >
            {/* Doctor image */}
            <img
              src={doctor.thumbnail}
              alt={doctor.name}
              className="h-48 w-full object-cover object-top transition-transform duration-500 group-hover:scale-105 md:h-full"
            />

            {/* Mobile: content below image */}
            <div className="flex flex-1 flex-col justify-between p-3 text-center md:hidden">
              <h4 className="font-bold text-[#2D2B3D]">{doctor.name?.trim()}</h4>
              <div>
                <p className="mt-1 text-sm text-gray-500">{doctor.service}</p>
                <a
                  href={doctor.permalink}
                  className="mt-2 inline-block text-sm font-medium text-secondary"
                  onClick={(e) => e.stopPropagation()}
                >
                  Discover more →
                </a>
              </div>
            </div>

            {/* Normal state: teal bottom bar */}
            <div className="absolute bottom-0 left-0 right-0 hidden h-32 translate-y-0 flex-col justify-between bg-secondary/75 px-4 py-3 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-full md:flex">
              <h4 className="line-clamp-2 font-bold leading-snug text-white">{doctor.name?.trim()}</h4>
              <p className="text-sm text-white/80">{doctor.service}</p>
            </div>

            {/* Hover state: dark overlay */}
            <div className="absolute inset-0 hidden flex-col gap-4 bg-[#2D2B3D]/90 px-5 py-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:flex">
              <div className="flex min-h-0 flex-1 flex-col gap-1 overflow-y-auto">
                <h4 className="text-xl font-bold text-white">{doctor.name?.trim()}</h4>
                <p className="text-sm text-white/70">{doctor.service}</p>
                {(() => {
                  const specs = doctor.specialisation ?? doctor.meta?.specialisation;
                  return specs && Object.values(specs).length > 0 ? (
                    <div className="mt-3">
                      <h4 className="font-normal text-white">{t("specialization")}</h4>
                      <ul className="list-inside list-disc">
                        {Object.values(specs).map((s, i) => (
                          <li key={i} className="text-sm text-white/80">{s.title}</li>
                        ))}
                      </ul>
                    </div>
                  ) : null;
                })()}
              </div>
              <button
                className="btn btn-outline btn-sm w-full shrink-0 border-white text-white hover:bg-white hover:text-[#2D2B3D]"
                onClick={openModal}
              >
                {t("makeAppointment")}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorsGrid;
