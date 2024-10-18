import React from "react";
import Logo from "../../assets/image/logo/logo.png";

import Facebook from "../../assets/image/footer/facebook.svg";
import Instagram from "../../assets/image/footer/instagram.svg";
import Twitter from "../../assets/image/footer/twitter.svg";
import Tiktok from "../../assets/image/footer/tiktok.svg";

const Footer = () => {
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
    <footer className="footer mt-4">
      <aside className="flex w-full flex-col">
        <div className="divider divider-primary mb-12"></div>
        <div className="w-full px-8">
          <img src={Logo} alt="logo" className="mb-20 h-16 w-36" />
          <div className="flex">
            <div className="flex flex-1 flex-col">
              <div className="flex flex-1 gap-16">
                {addressList.map((address, index) => (
                  <div key={index} className="flex flex-col gap-4 text-lg">
                    <h6>{address.branch}</h6>
                    <p dangerouslySetInnerHTML={{ __html: address.address }} />
                    <p>{address.phone}</p>
                  </div>
                ))}
              </div>
              <p>hello@indodentalcenter.com</p>
            </div>
            <div className="flex w-80 flex-col gap-3 text-lg">
              <h6 className="text-neutral-400">Company</h6>
              {link.map((link, index) => (
                <a href={link.url} key={index}>
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="flex gap-4 py-4">
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
          Copyright (C) 2024 DigitalNest - Indo Dental Center. All rights
          reserved.
        </p>
      </aside>
    </footer>
  );
};
export default Footer;
