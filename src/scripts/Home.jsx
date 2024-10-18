import React, { useState, useEffect } from "react";
import dummyWide from "../../assets/image/dummy/dummy-wide.jpg";
import images from "../utils/requireImages";

const Home = () => {
  const baseUrl = `${window.location.origin}/idc`;
  const [ourPartner, setOurPartner] = useState([]);

  const ourPartnerList = [
    {
      name: "Wide",
      logo: "dummy-wide.jpg",
    },
    {
      name: "tall",
      logo: "dummy-tall.jpg",
    },
    {
      name: "1x1",
      logo: "dummy-1x1.jpg",
    },
  ];

  const whyChooseUs = [
    {
      title: "Affordable Care",
      desc: "We offer competitive pricing to ensure that top-notch dental care is within everyone's reach. Quality service shouldn't break the bank.",
    },
    {
      title: "Specialized Treatments",
      desc: "Our team of specialists is trained in various dental fields to provide you with comprehensive care. Whatever your dental needs, we have the expertise to handle them",
    },
    {
      title: "Patient-Centric Service",
      desc: "Your comfort and satisfaction are our top priorities. We tailor our services to meet your unique needs, ensuring a personalized and stress-free experience.",
    },
  ];

  useEffect(() => {
    const partnerTemp = [];
    // split the list into 5
    for (let i = 0; i < ourPartnerList.length; i += 5) {
      partnerTemp.push(ourPartnerList.slice(i, i + 5));
    }
    setOurPartner(partnerTemp);
  }, []);

  return (
    <div>
      <div>
        <div id="our-partner" className="flex flex-col gap-8">
          <h2 className="text-center font-normal text-primary">
            <span className="font-bold italic">Our</span> partners
          </h2>
          {ourPartner.map((partnerList, index) => (
            <div key={index} className="flex items-center justify-center gap-8">
              {partnerList.map((partner, index) => (
                <div
                  key={index}
                  className="flex h-24 w-48 items-center justify-center rounded-lg border border-solid border-neutral-400"
                >
                  <img
                    src={images[partner.logo]}
                    alt={partner.name}
                    className="max-h-20 max-w-28"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
        <div id="why-choose-us">
          <h2 className="text-center font-normal text-primary">
            Why<span className="font-bold italic">choose us</span>
          </h2>
          <div className="flex justify-center gap-6">
            {whyChooseUs.map((why, index) => (
              <div
                key={index}
                className="flex h-80 flex-col gap-4 rounded-lg border border-solid border-transparent bg-primary bg-opacity-5 p-8"
                style={{ width: "442px" }}
              >
                <h5 className="font-bold text-primary">{why.title}</h5>
                <p>{why.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
