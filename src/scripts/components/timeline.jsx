import React, { useEffect, useRef, useState } from "react";
import TimelineObserver from "react-timeline-animation";

import timeline2001Img from "../../../assets/image/aboutus/timeline-2001.jpg";
import timeline2003Img from "../../../assets/image/aboutus/timeline-2003.jpg";
import timeline2007Img from "../../../assets/image/aboutus/timeline-2007.png";
import timeline2012Img from "../../../assets/image/aboutus/timeline-2012.jpg";
import timeline2023Img from "../../../assets/image/aboutus/timeline-2023.jpg";

const Timeline = ({ setObserver, callback }) => {
  const [year1, setYear1] = useState("");
  const [year2, setYear2] = useState("");
  const [year3, setYear3] = useState("");
  const [year4, setYear4] = useState("");
  const [year5, setYear5] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");
  const [image5, setImage5] = useState("");
  const [title1, setTitle1] = useState("");
  const [title2, setTitle2] = useState("");
  const [title3, setTitle3] = useState("");
  const [title4, setTitle4] = useState("");
  const [title5, setTitle5] = useState("");
  const [desc1, setDesc1] = useState("");
  const [desc2, setDesc2] = useState("");
  const [desc3, setDesc3] = useState("");
  const [desc4, setDesc4] = useState("");
  const [desc5, setDesc5] = useState("");

  const [fadeIn1, setFadeIn1] = useState(false);
  const [fadeIn2, setFadeIn2] = useState(false);
  const [fadeIn3, setFadeIn3] = useState(false);
  const [fadeIn4, setFadeIn4] = useState(false);
  const [fadeIn5, setFadeIn5] = useState(false);

  const timeline1 = useRef(null);
  const timeline2 = useRef(null);
  const timeline3 = useRef(null);
  const timeline4 = useRef(null);
  const timeline5 = useRef(null);
  const timeline6 = useRef(null);
  const circle1 = useRef(null);
  const circle2 = useRef(null);
  const circle3 = useRef(null);
  const circle4 = useRef(null);
  const circle5 = useRef(null);

  const someCallback = () => {
    setYear1("2001");
    setImage1(timeline2001Img);
    setTitle1(
      "On July 28, 2001, the first Indo Dental Center clinic opened in Pluit Putri, North Jakarta.",
    );
    setDesc1(
      "That year, we began our dream and journey to provide the best dental care services.",
    );
    setFadeIn1(true); // Trigger fade-in animation for the first section
  };

  const someCallback2 = () => {
    setYear2("2003");
    setImage2(timeline2003Img);
    setTitle2(
      "Two years later, in 2003, we relocated to Pluit Putra, North Jakarta.",
    );
    setDesc2(
      "Starting with just two doctors, we slowly grew and began serving more patients with high dedication.",
    );
    setFadeIn2(true); // Trigger fade-in animation for the second section
  };

  const someCallback3 = () => {
    setYear3("2007");
    setImage3(timeline2007Img);
    setTitle3(
      "At the end of 2007, we took a significant step by establishing our first permanent location in Pluit, North Jakarta.",
    );
    setDesc3(
      "Indo Dental Center opened at CBD Pluit, focusing on specialist services and a dental laboratory— a new concept at the time.",
    );
    setFadeIn3(true); // Trigger fade-in animation for the second section
  };

  const someCallback4 = () => {
    setYear4("2012");
    setImage4(timeline2012Img);
    setTitle4(
      "In 2012, driven by our commitment to continually improve service quality, we opened a branch in Wolter Monginsidi, South Jakarta.",
    );
    setDesc4(
      "From just a few doctors, our team has grown to more than 20 dental specialists, all ready to provide the best care for you.",
    );
    setFadeIn4(true); // Trigger fade-in animation for the second section
  };

  const someCallback5 = () => {
    setYear5("2023");
    setImage5(timeline2023Img);
    setTitle5(
      "In August 2023, Indo Dental Center settled in Hang Tuah, South Jakarta.",
    );
    setDesc5(
      "We are proud to have been serving the community for over 23 years and treating more than 4,000 patients annually. We are ready to become your One-Stop Family Dental Center!",
    );
    setFadeIn5(true); // Trigger fade-in animation for the second section
  };

  useEffect(() => {
    setObserver(timeline1.current);
    setObserver(timeline2.current);
    setObserver(timeline3.current);
    setObserver(timeline4.current);
    setObserver(timeline5.current);
    setObserver(timeline6.current);
    setObserver(circle1.current, someCallback);
    setObserver(circle2.current, someCallback2);
    setObserver(circle3.current, someCallback3);
    setObserver(circle4.current, someCallback4);
    setObserver(circle5.current, someCallback5);
  }, []);

  return (
    <div className="wrapper mb-16">
      <div id="timeline1" ref={timeline1} className="h-52 w-[1px]" />
      <div className="circleWrapper gap-4 lg:gap-8">
        <div id="circle1" ref={circle1} className="circle"></div>
        <div
          className={`flex items-center gap-4 duration-700 lg:gap-8 ${fadeIn1 ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <p className={`font-bold text-primary transition-opacity`}>{year1}</p>
          <div className="flex flex-wrap items-center gap-4 lg:flex-nowrap lg:gap-8">
            <div className="relative w-[300px] h-[200px] overflow-hidden">
              <img
                src={image1}
                className="w-full h-full object-cover"
                alt="Timeline Image"
              />
              <div className="absolute inset-x-0 top-0 h-[50px] bg-gradient-to-b from-white to-transparent"></div>
              <div className="absolute inset-x-0 bottom-0 h-[50px] bg-gradient-to-t from-white to-transparent"></div>
              <div className="absolute inset-y-0 left-0 w-[50px] bg-gradient-to-r from-white to-transparent"></div>
              <div className="absolute inset-y-0 right-0 w-[50px] bg-gradient-to-l from-white to-transparent"></div>
            </div>
            <div className="description-block flex flex-col gap-1 transition-opacity lg:gap-2">
              <h5 className="text-primary">{title1}</h5>
              <p className="description-text">{desc1}</p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="timeline2"
        ref={timeline2}
        className="h-[410px] w-[1px] md:h-[320px] lg:h-[270px]"
      />
      <div className="circleWrapper gap-4 lg:gap-8">
        <div id="circle2" ref={circle2} className="circle"></div>
        <div
          className={`flex items-center gap-4 duration-700 lg:gap-8 ${fadeIn2 ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <p className={`font-bold text-primary transition-opacity`}>{year2}</p>
          <div className="flex flex-wrap items-center gap-4 lg:flex-nowrap lg:gap-8">
            <div className="relative w-[300px] h-[200px] overflow-hidden">
              <img
                src={image2}
                className="w-full h-full object-cover"
                alt="Timeline Image"
              />
              <div className="absolute inset-x-0 top-0 h-[50px] bg-gradient-to-b from-white to-transparent"></div>
              <div className="absolute inset-x-0 bottom-0 h-[50px] bg-gradient-to-t from-white to-transparent"></div>
              <div className="absolute inset-y-0 left-0 w-[50px] bg-gradient-to-r from-white to-transparent"></div>
              <div className="absolute inset-y-0 right-0 w-[50px] bg-gradient-to-l from-white to-transparent"></div>
            </div>
            <div className="description-block flex flex-col gap-2 transition-opacity lg:gap-2">
              <h5 className="text-primary">{title2}</h5>
              <p className="description-text">{desc2}</p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="timeline3"
        ref={timeline3}
        className="h-[435px] w-[1px] md:h-[320px] lg:h-[270px]"
      />
      <div className="circleWrapper gap-4 lg:gap-8">
        <div id="circle3" ref={circle3} className="circle"></div>
        <div
          className={`flex items-center gap-4 duration-700 lg:gap-8 ${fadeIn3 ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <p className={`font-bold text-primary transition-opacity`}>{year3}</p>
          <div className="flex flex-wrap items-center gap-4 lg:flex-nowrap lg:gap-8">
            <div className="relative w-[300px] h-[200px] overflow-hidden">
              <img
                src={image3}
                className="w-full h-full object-cover"
                alt="Timeline Image"
              />
              <div className="absolute inset-x-0 top-0 h-[50px] bg-gradient-to-b from-white to-transparent"></div>
              <div className="absolute inset-x-0 bottom-0 h-[50px] bg-gradient-to-t from-white to-transparent"></div>
              <div className="absolute inset-y-0 left-0 w-[50px] bg-gradient-to-r from-white to-transparent"></div>
              <div className="absolute inset-y-0 right-0 w-[50px] bg-gradient-to-l from-white to-transparent"></div>
            </div>
            <div className="description-block flex flex-col gap-2 transition-opacity lg:gap-2">
              <h5 className="text-primary">{title3}</h5>
              <p className="description-text">{desc3}</p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="timeline4"
        ref={timeline4}
        className="h-[550px] w-[1px] md:h-[370px] lg:h-[270px]"
      />
      <div className="circleWrapper gap-4 lg:gap-8">
        <div id="circle4" ref={circle4} className="circle"></div>
        <div
          className={`flex items-center gap-4 duration-700 lg:gap-8 ${fadeIn4 ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <p className={`font-bold text-primary transition-opacity`}>{year4}</p>
          <div className="flex flex-wrap items-center gap-4 lg:flex-nowrap lg:gap-8">
            <div className="relative w-[300px] h-[200px] overflow-hidden">
              <img
                src={image4}
                className="w-full h-full object-cover"
                alt="Timeline Image"
              />
              <div className="absolute inset-x-0 top-0 h-[50px] bg-gradient-to-b from-white to-transparent"></div>
              <div className="absolute inset-x-0 bottom-0 h-[50px] bg-gradient-to-t from-white to-transparent"></div>
              <div className="absolute inset-y-0 left-0 w-[50px] bg-gradient-to-r from-white to-transparent"></div>
              <div className="absolute inset-y-0 right-0 w-[50px] bg-gradient-to-l from-white to-transparent"></div>
            </div>
            <div className="description-block flex flex-col gap-2 transition-opacity lg:gap-2">
              <h5 className="text-primary">{title4}</h5>
              <p className="description-text">{desc4}</p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="timeline5"
        ref={timeline5}
        className="h-[587px] w-[1px] md:h-[420px] lg:h-[270px]"
      />
      <div className="circleWrapper gap-4 lg:gap-8">
        <div id="circle5" ref={circle5} className="circle"></div>
        <div
          className={`flex items-center gap-4 duration-700 lg:gap-8 ${fadeIn5 ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <p className={`font-bold text-primary transition-opacity`}>{year5}</p>
          <div className="flex flex-wrap items-center gap-4 lg:flex-nowrap lg:gap-8">
            <div className="relative w-[300px] h-[200px] overflow-hidden">
              <img
                src={image5}
                className="w-full h-full object-cover"
                alt="Timeline Image"
              />
              <div className="absolute inset-x-0 top-0 h-[50px] bg-gradient-to-b from-white to-transparent"></div>
              <div className="absolute inset-x-0 bottom-0 h-[50px] bg-gradient-to-t from-white to-transparent"></div>
              <div className="absolute inset-y-0 left-0 w-[50px] bg-gradient-to-r from-white to-transparent"></div>
              <div className="absolute inset-y-0 right-0 w-[50px] bg-gradient-to-l from-white to-transparent"></div>
            </div>
            <div className="description-block flex flex-col gap-2 transition-opacity lg:gap-2">
              <h5 className="text-primary">{title5}</h5>
              <p className="description-text">{desc5}</p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="timeline6"
        ref={timeline6}
        className="h-[293px] w-[1px] md:h-60 lg:h-52"
      />
    </div>
  );
};

export default function App() {
  const [message, setMessage] = useState("");

  return (
    <div className="App">
      <TimelineObserver
        initialColor="#e5e5e5"
        fillColor="#654696"
        handleObserve={(setObserver) => (
          <Timeline className="timeline" setObserver={setObserver} />
        )}
      />
      <div className="stub2">{message}</div>
    </div>
  );
}
