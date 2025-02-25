import React, { useEffect, useState } from "react";
import BannerBg from "../../../assets/image/our-doctors/doctor-banner.png";
import NewBannerBg from "../../../assets/image/our-doctors/new-doctor-banner.png";
import DoctorDummyImage from "../../../assets/image/doctors/dr-michael.jpg";
import { MapPinIcon } from "@heroicons/react/24/outline";
import Loading from "../components/Loading";
import { useTranslation } from "react-i18next";

const DoctorDetails = () => {
  const { t } = useTranslation();
  const [doctor, setDoctor] = useState(null);
  const [modal, setModal] = useState({ show: false, title: "", imageUrl: "" });

  useEffect(() => {
    getDoctor().catch(console.error);
  }, []);

  const getDoctor = async () => {
    const slug = window.location.pathname.split("/").filter(Boolean).pop();
    const response = await fetch(`${wpApiSettings.restUrl}wp/v2/doctors?slug=${slug}`);
    if (!response.ok) {
      throw new Error("Service not found");
    }

    const doctors = await response.json();
    setDoctor(doctors[0]);
  };

  if (!doctor) return <Loading />;

  return (
    <div className="flex flex-col gap-8">
      <div
        style={{
          "--image-url": `url(${NewBannerBg})`,
        }}
        className="h-24 w-full bg-contain bg-right bg-no-repeat md:h-48 md:bg-[image:var(--image-url)]"
      >
        <div className="h-full w-full bg-gradient-to-bl from-transparent to-white to-75% p-8 md:px-8 md:py-16">
          <div class="breadcrumbs text-sm">
            <ul className="flex-wrap">
              <li className="text-secondary">
                <a href="/our-doctors">{t("pages.doctors")}</a>
              </li>
              <li className="text-secondary">{doctor.service_name}</li>
              <li className="text-[#4D4757]">{doctor.title.rendered}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8 px-8 pb-24 md:flex-row">
        <div className="flex grow basis-0 flex-col items-center gap-4">
          <figure>
            <img
              src={doctor.thumbnail}
              alt="Doctor"
              className="h-[450px] rounded-2xl object-cover"
            />
          </figure>
          <h3 className="text-center text-[#4D4757]">
            {doctor.title.rendered}
          </h3>
          <p className="text-center text-[#4D4757]">{doctor.service_name}</p>
        </div>
        <div className="flex grow basis-0 flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h4 className="font-normal text-primary">{t("pages.aboutUs")}</h4>
            <div
              className="text-[#4D4757]"
              dangerouslySetInnerHTML={{ __html: doctor.content.rendered }}
            ></div>
          </div>
          {Object.values(doctor.meta.specialisation).length > 0 && (
            <div className="flex flex-col gap-2">
              <h4 className="font-normal text-primary">
                {t("specialization")}
              </h4>
              <ul className="list-inside list-disc">
                {Object.values(doctor.meta.specialisation).map(
                  (specialisation) => (
                    <li>
                      <p className="inline text-[#4D4757]">
                        {specialisation.title}
                      </p>
                    </li>
                  ),
                )}
              </ul>
            </div>
          )}
          {Object.values(doctor.meta.certification).length > 0 && (
            <div className="flex flex-col gap-2">
              <h4 className="font-normal text-primary">{t("qualification")}</h4>
              <ul className="list-inside list-disc">
                {Object.values(doctor.meta.certification).map(
                  (certification) => (
                    <li>
                      <a
                        className="cursor-pointer text-[#4D4757] underline"
                        onClick={() =>
                          setModal({
                            show: true,
                            title: certification.title,
                            imageUrl: certification.image,
                          })
                        }
                      >
                        <p className="inline">{certification.title}</p>
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>
          )}
        </div>
        <div className="flex grow basis-0 flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h4 className="font-normal text-primary">{t("schedule.title")}</h4>
            <div className="p-4">
              {Object.values(doctor.meta.schedule).map((schedule, i, arr) => {
                if (i < arr.length - 1) {
                  return (
                    <>
                      <p className="text-[#4D4757]">
                        {schedule.from && schedule.to
                          ? `${schedule.day ? `${schedule.day}:` : ""} ${schedule.from} - ${schedule.to}`
                          : schedule.notes && !schedule.day
                            ? `${schedule.notes}`
                            : schedule.notes
                              ? `${schedule.day ? `${schedule.day}:` : ""} ${schedule.notes}`
                              : `${schedule.day}`}
                      </p>
                      <div className="divider my-0"></div>
                    </>
                  );
                }
                return (
                  <>
                    <p className="text-[#4D4757]">
                      {schedule.from && schedule.to
                        ? `${schedule.day ? `${schedule.day}:` : ""} ${schedule.from} - ${schedule.to}`
                        : schedule.notes && !schedule.day
                          ? `${schedule.notes}`
                          : schedule.notes
                            ? `${schedule.day ? `${schedule.day}:` : ""} ${schedule.notes}`
                            : `${schedule.day}`}
                    </p>
                  </>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-normal text-primary">{t("Location")}</h4>
            <div className="flex flex-col gap-2 p-4">
              <div className="flex items-center gap-2">
                <MapPinIcon className="size-6" />
                <p className="font-bold">
                  Indo Dental Center - {t("branch.senayan")}
                </p>
              </div>
              <div className="divider my-0"></div>
              <p className="text-[#4D4757]">
                Jl. Hang Tuah Raya No.35, Kby. Baru, South Jakarta - 12120
              </p>
              <button
                id="doctor-whatsapp-senayan"
                className="btn btn-primary w-full"
                onClick={() =>
                  window.open("https://wa.me/+6281218186161", "_blank")
                }
              >
                {t("makeAppointment")}
              </button>
            </div>
            <div className="flex flex-col gap-2 p-4">
              <div className="flex items-center gap-2">
                <MapPinIcon className="size-6" />
                <p className="font-bold">
                  Indo Dental Center - {t("branch.pluit")}
                </p>
              </div>
              <div className="divider my-0"></div>
              <p className="text-[#4D4757]">
                Ruko CBD Pluit No. B2, Jl. Pluit Selatan Raya, Penjaringan,
                North Jakarta City - 14440
              </p>
              <button
                id="doctor-whatsapp-pluit"
                className="btn btn-primary w-full"
                onClick={() =>
                  window.open("https://wa.me/+628128080011", "_blank")
                }
              >
                {t("makeAppointment")}
              </button>
            </div>
          </div>
        </div>
      </div>
      <dialog className="modal modal-middle" open={modal.show}>
        <div className="modal-box">
          <form method="dialog">
            <button
              className="btn btn-circle btn-sm absolute right-4 top-3 bg-secondary text-white"
              onClick={() => setModal({ show: false })}
            >
              ✕
            </button>
          </form>
          <h4 className="mb-4 text-center font-normal text-primary">
            {modal.title}
          </h4>
          <img src={modal.imageUrl} />
        </div>
      </dialog>
    </div>
  );
};

export default DoctorDetails;
