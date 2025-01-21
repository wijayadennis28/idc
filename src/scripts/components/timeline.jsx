import React, { useEffect, useRef, useState } from "react";
import TimelineObserver from "react-timeline-animation";

import timeline2001Img from "../../../assets/image/aboutus/timeline-2001.jpg";
import timeline2003Img from "../../../assets/image/aboutus/timeline-2003.jpg";
import timeline2007Img from "../../../assets/image/aboutus/timeline-2007.png";
import timeline2012Img from "../../../assets/image/aboutus/timeline-2012.jpg";
import timeline2023Img from "../../../assets/image/aboutus/timeline-2023.jpg";

import { useTranslation } from "react-i18next";
import { use } from "i18next";

const Timeline = ({ setObserver, callback }) => {
  const { t, i18n } = useTranslation();

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
    setTitle1(t("timeline.item1.title"));
    setDesc1(t("timeline.item1.description"));
    setFadeIn1(true); // Trigger fade-in animation for the first section
  };

  const someCallback2 = () => {
    setYear2("2003");
    setImage2(timeline2003Img);
    setTitle2(t("timeline.item2.title"));
    setDesc2(t("timeline.item2.description"));
    setFadeIn2(true); // Trigger fade-in animation for the second section
  };

  const someCallback3 = () => {
    setYear3("2007");
    setImage3(timeline2007Img);
    setTitle3(t("timeline.item3.title"));
    setDesc3(t("timeline.item3.description"));
    setFadeIn3(true); // Trigger fade-in animation for the second section
  };

  const someCallback4 = () => {
    setYear4("2012");
    setImage4(timeline2012Img);
    setTitle4(t("timeline.item4.title"));
    setDesc4(t("timeline.item4.description"));
    setFadeIn4(true); // Trigger fade-in animation for the second section
  };

  const someCallback5 = () => {
    setYear5("2023");
    setImage5(timeline2023Img);
    setTitle5(t("timeline.item5.title"));
    setDesc5(t("timeline.item5.description"));
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

  useEffect(() => {
    setTitle1(t("timeline.item1.title"));
    setDesc1(t("timeline.item1.description"));
    setTitle2(t("timeline.item2.title"));
    setDesc2(t("timeline.item2.description"));
    setTitle3(t("timeline.item3.title"));
    setDesc3(t("timeline.item3.description"));
    setTitle4(t("timeline.item4.title"));
    setDesc4(t("timeline.item4.description"));
    setTitle5(t("timeline.item5.title"));
    setDesc5(t("timeline.item5.description"));
  }, [i18n.language]);

  return (
    <div className="wrapper mb-16">
      <div id="timeline1" ref={timeline1} className="h-[410px] w-[1px] md:h-[320px] lg:h-[270px]" />
      <div className="circleWrapper gap-4 lg:gap-8">
        <div id="circle1" ref={circle1} className="circle"></div>
        <div
          className={`flex items-center gap-4 duration-700 lg:gap-8 ${fadeIn1 ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <p className={`font-bold text-primary transition-opacity`}>{year1}</p>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 md:gap-8 lg:flex-nowrap lg:gap-8 p-4">
            <div className="relative h-[150px] md:h-[200px] w-full max-w-[300px] overflow-hidden">
              <img
                src={image1}
                className="h-full w-full object-cover"
                alt={t("timelineImage.timelineImageAlt1")}
              />
              <div className="absolute inset-x-0 top-0 h-[50px] bg-gradient-to-b from-white to-transparent"></div>
              <div className="absolute inset-x-0 bottom-0 h-[50px] bg-gradient-to-t from-white to-transparent"></div>
              <div className="absolute inset-y-0 left-0 w-[50px] bg-gradient-to-r from-white to-transparent"></div>
              <div className="absolute inset-y-0 right-0 w-[50px] bg-gradient-to-l from-white to-transparent"></div>
            </div>
            <div className="description-block flex flex-col gap-2 transition-opacity">
              <h5 className="text-primary text-lg font-semibold">{title1}</h5>
              <p className="description-text text-sm leading-relaxed">{desc1}</p>
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
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 md:gap-8 lg:flex-nowrap lg:gap-8 p-4">
            <div className="relative h-[150px] md:h-[200px] w-full max-w-[300px] overflow-hidden">
              <img
                src={image2}
                className="h-full w-full object-cover"
                alt={t("timelineImage.timelineImageAlt2")}
              />
              <div className="absolute inset-x-0 top-0 h-[50px] bg-gradient-to-b from-white to-transparent"></div>
              <div className="absolute inset-x-0 bottom-0 h-[50px] bg-gradient-to-t from-white to-transparent"></div>
              <div className="absolute inset-y-0 left-0 w-[50px] bg-gradient-to-r from-white to-transparent"></div>
              <div className="absolute inset-y-0 right-0 w-[50px] bg-gradient-to-l from-white to-transparent"></div>
            </div>
            <div className="description-block flex flex-col gap-2 transition-opacity">
              <h5 className="text-primary text-lg font-semibold">{title2}</h5>
              <p className="description-text text-sm leading-relaxed">{desc2}</p>
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
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 md:gap-8 lg:flex-nowrap lg:gap-8 p-4">
            <div className="relative h-[150px] md:h-[200px] w-full max-w-[300px] overflow-hidden">
              <img
                src={image3}
                className="h-full w-full object-cover"
                alt={t("timelineImage.timelineImageAlt3")}
              />
              <div className="absolute inset-x-0 top-0 h-[50px] bg-gradient-to-b from-white to-transparent"></div>
              <div className="absolute inset-x-0 bottom-0 h-[50px] bg-gradient-to-t from-white to-transparent"></div>
              <div className="absolute inset-y-0 left-0 w-[50px] bg-gradient-to-r from-white to-transparent"></div>
              <div className="absolute inset-y-0 right-0 w-[50px] bg-gradient-to-l from-white to-transparent"></div>
            </div>
            <div className="description-block flex flex-col gap-2 transition-opacity lg:gap-2">
              <h5 className="text-primary text-lg font-semibold">{title3}</h5>
              <p className="description-text text-sm leading-relaxed">{desc3}</p>
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
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 md:gap-8 lg:flex-nowrap lg:gap-8 p-4">
            <div className="relative h-[150px] md:h-[200px] w-full max-w-[300px] overflow-hidden">
              <img
                src={image4}
                className="h-full w-full object-cover"
                alt={t("timelineImage.timelineImageAlt4")}
              />
              <div className="absolute inset-x-0 top-0 h-[50px] bg-gradient-to-b from-white to-transparent"></div>
              <div className="absolute inset-x-0 bottom-0 h-[50px] bg-gradient-to-t from-white to-transparent"></div>
              <div className="absolute inset-y-0 left-0 w-[50px] bg-gradient-to-r from-white to-transparent"></div>
              <div className="absolute inset-y-0 right-0 w-[50px] bg-gradient-to-l from-white to-transparent"></div>
            </div>
            <div className="description-block flex flex-col gap-2 transition-opacity lg:gap-2">
              <h5 className="text-primary text-lg font-semibold">{title4}</h5>
              <p className="description-text text-sm leading-relaxed">{desc4}</p>
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
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 md:gap-8 lg:flex-nowrap lg:gap-8 p-4">
            <div className="relative h-[150px] md:h-[200px] w-full max-w-[300px] overflow-hidden">
              <img
                src={image5}
                className="h-full w-full object-cover"
                alt={t("timelineImage.timelineImageAlt5")}
              />
              <div className="absolute inset-x-0 top-0 h-[50px] bg-gradient-to-b from-white to-transparent"></div>
              <div className="absolute inset-x-0 bottom-0 h-[50px] bg-gradient-to-t from-white to-transparent"></div>
              <div className="absolute inset-y-0 left-0 w-[50px] bg-gradient-to-r from-white to-transparent"></div>
              <div className="absolute inset-y-0 right-0 w-[50px] bg-gradient-to-l from-white to-transparent"></div>
            </div>
            <div className="description-block flex flex-col gap-2 transition-opacity lg:gap-2">
              <h5 className="text-primary text-lg font-semibold">{title5}</h5>
              <p className="description-text text-sm leading-relaxed">{desc5}</p>
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
