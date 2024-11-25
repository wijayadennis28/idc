import React, { useEffect, useRef, useState } from "react";
import TimelineObserver from "react-timeline-animation";
import aboutUs from "../../../assets/image/aboutus/milestone.png";

const Timeline = ({ setObserver, callback }) => {
  const [year1, setYear1] = useState("");
  const [year2, setYear2] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [title1, setTitle1] = useState("");
  const [title2, setTitle2] = useState("");
  const [desc1, setDesc1] = useState("");
  const [desc2, setDesc2] = useState("");

  const [fadeIn1, setFadeIn1] = useState(false);
  const [fadeIn2, setFadeIn2] = useState(false);

  const timeline1 = useRef(null);
  const timeline2 = useRef(null);
  const timeline3 = useRef(null);
  const circle1 = useRef(null);
  const circle2 = useRef(null);

  const someCallback = () => {
    setYear1("2020");
    setImage1(aboutUs);
    setTitle1("Lorem ipsum dolor sit amet, consectetur adipiscing elit. 1");
    setDesc1(
      "We offer competitive pricing to ensure that top-notch dental care is within everyone's reach. Quality service shouldn't break the bank. 1",
    );
    setFadeIn1(true); // Trigger fade-in animation for the first section
  };

  const someCallback2 = () => {
    setYear2("2019");
    setImage2(aboutUs);
    setTitle2("Lorem ipsum dolor sit amet, consectetur adipiscing elit. 2");
    setDesc2(
      "We offer competitive pricing to ensure that top-notch dental care is within everyone's reach. Quality service shouldn't break the bank. 2",
    );
    setFadeIn2(true); // Trigger fade-in animation for the second section
  };

  useEffect(() => {
    setObserver(timeline1.current);
    setObserver(timeline2.current);
    setObserver(timeline3.current);
    setObserver(circle1.current, someCallback);
    setObserver(circle2.current, someCallback2);
  }, []);

  return (
    <div className="wrapper mb-16">
      <div id="timeline1" ref={timeline1} className="timeline text-primary" />
      <div className="circleWrapper gap-4 lg:gap-8">
        <div id="circle1" ref={circle1} className="circle"></div>
        <div
          className={`flex items-center gap-4 duration-700 lg:gap-8 ${fadeIn1 ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <p className={`font-bold text-primary transition-opacity`}>{year1}</p>
          <div className="flex flex-wrap items-center gap-4 lg:flex-nowrap lg:gap-8">
            <img src={image1} className={`timeline-imag transition-opacity`} />
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
        className="timeline-gap text-primary"
      />
      <div className="circleWrapper gap-4 lg:gap-8">
        <div id="circle2" ref={circle2} className="circle"></div>
        <div
          className={`flex items-center gap-4 duration-700 lg:gap-8 ${fadeIn2 ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <p className={`font-bold text-primary transition-opacity`}>{year2}</p>
          <div className="flex flex-wrap items-center gap-4 lg:flex-nowrap lg:gap-8">
            <img src={image2} className={`timeline-imag transition-opacity`} />
            <div className="description-block flex flex-col gap-2 transition-opacity lg:gap-2">
              <h5 className="text-primary">{title2}</h5>
              <p className="description-text">{desc2}</p>
            </div>
          </div>
        </div>
      </div>

      <div id="timeline3" ref={timeline3} className="timeline" />
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
