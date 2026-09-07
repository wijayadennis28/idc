import React from "react";
import { useTranslation } from "react-i18next";
import useBranches from "../utils/useBranches";

import Logo from "../../assets/image/logo/logo.png";

import Facebook from "../../assets/image/footer/facebook.svg";
import Instagram from "../../assets/image/footer/instagram.svg";
import Tiktok from "../../assets/image/footer/tiktok.svg";

const path = `${wpApiSettings.homeUrl}`;

const Footer = () => {
  const { t } = useTranslation();
  const { branches: addressList } = useBranches();

  const year = new Date().getFullYear();

  const link = [
    {
      name: t("pages.home"),
      URL: "/",
    },
    {
      name: t("pages.ourServices"),
      URL: "/our-services",
    },
    {
      name: t("pages.doctors"),
      URL: "/our-doctors",
    },
    {
      name: t("pages.aboutUs"),
      URL: "/about-us",
    },
    {
      name: t("pages.articles"),
      URL: "/articles",
    },
  ];

  const socialMedia = [
    {
      name: "facebook",
      url: "https://www.facebook.com/IndoDentalCenter/",
      icon: Facebook,
    },
    {
      name: "instagram",
      url: "https://www.instagram.com/indodentalcenter/",
      icon: Instagram,
    },
    {
      name: "tiktok",
      url: "https://www.tiktok.com/@indodentalcenter",
      icon: Tiktok,
    },
  ];

  const handleClick = (path, event) => {
    if (
      window.location.pathname.replace(/\/+$/, "") === path.replace(/\/+$/, "")
    ) {
      event.preventDefault();
    }
  };

  return (
    <aside className="flex w-full flex-col">
      <div className="divider divider-primary mb-12"></div>
      <div className="w-full px-4 lg:px-8">
        <a
          href="/"
          className="cursor-pointer"
          onClick={(e) => handleClick("/", e)}
        >
          <img src={Logo} alt="logo" className="mb-12 w-28 lg:mb-20 lg:w-36" />
        </a>

        <div className="flex flex-col gap-4 lg:flex-row lg:gap-0">
          <div className="flex flex-1 flex-col gap-4 pb-4 lg:gap-0 lg:pb-0">
            <div className="flex flex-1 flex-col gap-8 lg:flex-row lg:gap-16">
              {addressList.map((address) => (
                <div
                  key={address.slug || address.id}
                  className="flex min-w-0 flex-1 basis-0 flex-col gap-0 text-lg lg:gap-4"
                >
                  <h6 className="text-xl font-bold lg:text-base 2xl:text-lg">
                    {address.name}
                  </h6>
                  <p className="pb-4 lg:pb-0">{address.address}</p>
                  <a href={address.whatsapp} target="_blank" rel="noopener noreferrer">
                    {address.phone}
                  </a>
                </div>
              ))}
            </div>
            <p>hello@indodentalcenter.com</p>
          </div>
          <div className="flex w-80 flex-col gap-3 text-lg">
            <h6 className="text-xl font-bold text-neutral-400 lg:text-base 2xl:text-lg">
              Indo Dental Center
            </h6>
            {link.map((link, index) => {
              // Normalize wpApiSettings.homeUrl (remove trailing slash)
              const basePath = wpApiSettings.homeUrl.replace(/\/+$/, "");

              // Dynamically construct the URL
              const adjustedURL =
                link.URL === "/" // If it's the homepage
                  ? basePath // Use basePath directly for the homepage
                  : `${basePath}${link.URL}`;

              return (
                <a
                  href={adjustedURL} 
                  key={index}
                  className="cursor-pointer"
                  onClick={(e) => handleClick(adjustedURL, e)}
                >
                  {link.name}
                </a>
              );
            })}
          </div>
        </div>
        <div className="flex justify-center gap-4 py-4 lg:justify-start">
          {socialMedia.map((social, index) => (
            <a href={social.url} target="_blank">
              <button
                index={index}
                className="btn btn-primary size-9 !rounded-lg !p-0"
                style={{ minHeight: "36px", padding: "0" }}
              >
                <img
                  src={social.icon}
                  alt="facebook"
                  className="size-6 max-w-max"
                />
              </button>
            </a>
          ))}
        </div>
      </div>
      <p className="w-full p-4 text-center text-neutral-400">
        {t("copyright", { year })}
      </p>
    </aside>
  );
};
export default Footer;
