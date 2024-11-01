import React from "react";
import Logo from "../../assets/image/logo/logo.png";

import Facebook from "../../assets/image/footer/facebook.svg";
import Instagram from "../../assets/image/footer/instagram.svg";
import Twitter from "../../assets/image/footer/twitter.svg";
import Tiktok from "../../assets/image/footer/tiktok.svg";

const Footer = () => {
  const year = new Date().getFullYear();

  const addressList = [
    {
      branch: "Senayan Branch",
      address: "Jl. Hang Tuah Raya No.35,<br/>Kby. Baru, South Jakarta -12120",
      phone: "+62 812-808-0011",
    },
    {
      branch: "Pluit Branch",
      address:
        "Ruko CBD Pluit No. B2,<br/>Jl. Pluit Selatan Raya, Penjaringan,<br/>North Jakarta City – 14440",
      phone: "+62 812-808-0011",
    },
  ];

  const link = [
    { name: "Home", url: "" },
    { name: "Our Services", url: "" },
    { name: "Doctors", url: "" },
    { name: "About Us", url: "" },
    { name: "Articles", url: "" },
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

  return (
    <aside className="flex w-full flex-col">
      <div className="divider divider-primary mb-12"></div>
      <div className="w-full px-4 lg:px-8">
        <a onClick={() => navigate("/")} className="cursor-pointer">
          <img src={Logo} alt="logo" className="mb-12 w-28 lg:mb-20 lg:w-36" />
        </a>

        <div className="flex flex-col gap-4 lg:flex-row lg:gap-0">
          <div className="flex flex-1 flex-col gap-4 pb-4 lg:gap-0 lg:pb-0">
            <div className="flex flex-1 flex-col gap-8 lg:flex-row lg:gap-16">
              {addressList.map((address, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-0 text-lg lg:gap-4"
                >
                  <h6 className="text-xl font-bold lg:text-base 2xl:text-lg">
                    {address.branch}
                  </h6>
                  <p
                    dangerouslySetInnerHTML={{ __html: address.address }}
                    className="pb-4 lg:pb-0"
                  />
                  <p>{address.phone}</p>
                </div>
              ))}
            </div>
            <p>hello@indodentalcenter.com</p>
          </div>
          <div className="flex w-80 flex-col gap-3 text-lg">
            <h6 className="text-xl font-bold text-neutral-400 lg:text-base 2xl:text-lg">
              Indo Dental Care
            </h6>
            {link.map((link, index) => (
              <a href={link.url} key={index} className="cursor-pointer">
                {link.name}
              </a>
            ))}
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
        Copyright (C) {year} DigitalNest - Indo Dental Center. All rights
        reserved.
      </p>
    </aside>
  );
};
export default Footer;
