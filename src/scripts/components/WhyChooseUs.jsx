import React from "react";
import { useTranslation } from "react-i18next";
import { ArrowsPointingInIcon, CheckBadgeIcon, UserIcon } from "@heroicons/react/24/outline";
import AffordableCareImg from "../../../assets/image/home/why-choose-us/affordable-care.png";

const WhyChooseUs = () => {
  const { t } = useTranslation();

  const items = [
    {
      icon: ArrowsPointingInIcon,
      title: t("whyChooseUsItem.affordableCare"),
      description: t("whyChooseUsItem.affordableCareDesc"),
    },
    {
      icon: CheckBadgeIcon,
      title: t("whyChooseUsItem.specializedTreatments"),
      description: t("whyChooseUsItem.specializedTreatmentsDesc"),
    },
    {
      icon: UserIcon,
      title: t("whyChooseUsItem.patientCentricService"),
      description: t("whyChooseUsItem.patientCentricServiceDesc"),
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Two-column content section */}
      <div className="flex flex-col gap-8 bg-[#EDE8F5] px-8 py-12 md:flex-row md:items-center md:px-16 md:py-16 lg:px-24">
        {/* Left: title + subtitle */}
        <div className="flex flex-1 flex-col gap-4">
          <h2 className="text-[#2D2B3D]">
            Why your smile is{" "}
            <span className="font-normal">in safe hands.</span>
          </h2>
          <p className="max-w-sm text-gray-500">
            We combine world-class clinical expertise with a gentle, personalized
            approach to ensure every visit is as rewarding as the results.
          </p>
        </div>

        {/* Right: three feature items */}
        <div className="flex flex-1 flex-col gap-8">
          {items.map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              {/* Icon box */}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white p-2 shadow-sm">
                <item.icon className="h-6 w-6 text-[#2D2B3D]" />
              </div>
              {/* Text */}
              <div className="flex flex-col gap-1">
                <h4 className="font-bold text-[#2D2B3D]">{item.title}</h4>
                <p className="text-sm leading-relaxed text-gray-500">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full-width clinic photo — overlaps slightly into the section above */}
      <div className="-mt-8 px-8 pb-4">
        <div className="w-full overflow-hidden rounded-2xl shadow-md">
          <img
            src={AffordableCareImg}
            alt="Affordable Care"
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
