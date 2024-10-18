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
        <div className="flex flex-col gap-8">
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
      </div>
    </div>
  );
};

export default Home;
