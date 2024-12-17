import React from "react";
import Branches from "../components/Branches";
import Timeline from "../components/timeline";

import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <div>
      <section
        className="relative flex h-64 w-full items-center justify-center bg-cover bg-right bg-no-repeat text-white md:h-80 lg:h-96"
        style={{
          backgroundImage: `url('http://indodentalcenter.local/wp-content/themes/idc/assets/image/aboutus/AboutUs.jpg')`,
        }}
      >
        <div className="relative z-10 px-4 text-center md:px-8">
          <h1>{t("pages.aboutUs")}</h1>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-8 md:px-12 lg:px-16 xl:px-24">
        <h1 className="mb-8 text-center text-primary">
          {t("ourMilestone.title")}
        </h1>
        <p className="mx-auto mb-8 max-w-lg text-center sm:max-w-2xl">
          {t("ourMilestone.description")}
        </p>
        <Timeline />
      </section>

      <div className="m-4 lg:m-8">
        <Branches showTitle={true} />
      </div>
    </div>
  );
};

export default AboutUs;
