import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";

import Connect1Img from "../../../assets/image/home/connect/connect-1.jpg";
import Connect2Img from "../../../assets/image/home/connect/connect-2.png";
import Connect3Img from "../../../assets/image/home/connect/connect-3.png";
import Connect4Img from "../../../assets/image/home/connect/connect-4.png";
import Connect5Img from "../../../assets/image/home/connect/connect-5.png";
import Connect6Img from "../../../assets/image/home/connect/connect-6.png";
import Connect7Img from "../../../assets/image/home/connect/connect-7.png";
import ConnectLogoImg from "../../../assets/image/home/connect/connect-logo.png";
import ConnectArrowImg from "../../../assets/image/home/connect/arrow.svg";

import useScreenSize from "../../utils/useScreenSize";
import { useTranslation } from "react-i18next";

const Social = () => {
  const screenSize = useScreenSize();
  const { t } = useTranslation();

  const social = [
    { src: Connect2Img, alt: "connect-2" },
    { src: Connect3Img, alt: "connect-3" },
    { src: Connect4Img, alt: "connect-4" },
    { src: Connect1Img, alt: "connect-1" },
    { src: Connect5Img, alt: "connect-5" },
    { src: Connect6Img, alt: "connect-6" },
    { src: Connect7Img, alt: "connect-7" },
  ];

  return (
    <>
      {screenSize >= 1024 && (
        <>
          <div
            className="flex w-full justify-center py-16"
            id="connect-with-us"
          >
            <div className="flex max-w-[2400px] flex-col items-center gap-10">
              <h1 className="text-center font-normal text-primary">
                {t("connectWithUs.title")}
              </h1>
              <div className="flex w-full justify-center gap-4 pb-8">
                <div className="flex flex-1 gap-4">
                  <div className="relative flex flex-1 flex-col justify-center pb-20">
                    <img src={Connect2Img} alt="connect-2" className="w-fit" />
                    <div className="absolute -top-4 right-8">
                      <p className="absolute -top-6 left-28 w-64 text-primary">
                        {t("connectWithUs.item1")}
                      </p>
                      <img
                        src={ConnectArrowImg}
                        alt="arrow"
                        className="size-28 rotate-[160deg]"
                      />
                    </div>
                  </div>
                  <div className="mt-8 flex flex-1 flex-col items-center gap-8">
                    <img src={Connect3Img} alt="connect-3" className="w-8/12" />
                    <img
                      src={Connect4Img}
                      alt="connect-4"
                      className="w-11/12"
                    />
                  </div>
                </div>
                <div className="relative flex justify-center">
                  <img
                    src={Connect1Img}
                    alt="connect-1"
                    className="max-h-[950px] w-[23.295vw] max-w-[529px] rounded-3xl object-cover"
                  />
                  <img
                    src={ConnectLogoImg}
                    alt="logo"
                    className="absolute bottom-[-3.5rem] size-32"
                  />
                  <div className="absolute -bottom-8 -left-8 2xl:-bottom-20">
                    <p className="absolute -left-[16rem] bottom-1 w-[252px] text-right text-primary 2xl:-left-72">
                      {t("connectWithUs.item2")}
                    </p>
                    <img
                      src={ConnectArrowImg}
                      alt="arrow"
                      className="size-24 2xl:size-28"
                    />
                  </div>
                </div>
                <div className="flex flex-1 gap-4">
                  <div className="mt-8 flex flex-1 flex-col items-center gap-8">
                    <div className="relative">
                      <img
                        src={Connect5Img}
                        alt="connect-5"
                        className="w-11/12"
                      />
                      <div className="absolute -right-14 -top-4">
                        <p className="absolute -left-28 -top-10 w-80 text-primary">
                          {t("connectWithUs.item3")}
                        </p>
                        <img
                          src={ConnectArrowImg}
                          alt="arrow"
                          className="size-24 rotate-[260deg] scale-x-[-1] 2xl:size-32"
                        />
                      </div>
                    </div>
                    <img
                      src={Connect6Img}
                      alt="connect-6"
                      className="w-10/12"
                    />
                  </div>
                  <div className="flex h-full flex-1 flex-col items-center justify-center pt-24">
                    <div>
                      <img
                        src={Connect7Img}
                        alt="connect-7"
                        className="w-fit"
                      />
                      <div className="relative">
                        <div className="absolute -bottom-8 -left-[1vw] 2xl:-bottom-8 2xl:-left-14">
                          <p className="absolute -bottom-2 right-20 w-48 text-primary 2xl:right-36">
                            {t("connectWithUs.item4")}
                          </p>
                          <img
                            src={ConnectArrowImg}
                            alt="arrow"
                            className="size-24 2xl:size-32"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a
                href="https://www.instagram.com/indodentalcenter"
                target="_blank"
              >
                <button className="btn btn-primary btn-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="24"
                      height="24"
                      rx="6"
                      fill="white"
                    />
                    <g clipPath="url(#clip0_103_328)">
                      <path
                        d="M12.502 5.94062C14.6395 5.94062 14.8926 5.95 15.7332 5.9875C16.5145 6.02187 16.9363 6.15313 17.2176 6.2625C17.5895 6.40625 17.8582 6.58125 18.1363 6.85938C18.4176 7.14062 18.5895 7.40625 18.7332 7.77813C18.8426 8.05938 18.9738 8.48438 19.0082 9.2625C19.0457 10.1062 19.0551 10.3594 19.0551 12.4938C19.0551 14.6313 19.0457 14.8844 19.0082 15.725C18.9738 16.5063 18.8426 16.9281 18.7332 17.2094C18.5895 17.5813 18.4145 17.85 18.1363 18.1281C17.8551 18.4094 17.5895 18.5813 17.2176 18.725C16.9363 18.8344 16.5113 18.9656 15.7332 19C14.8895 19.0375 14.6363 19.0469 12.502 19.0469C10.3645 19.0469 10.1113 19.0375 9.2707 19C8.48945 18.9656 8.06758 18.8344 7.78633 18.725C7.41445 18.5813 7.1457 18.4063 6.86758 18.1281C6.58633 17.8469 6.41445 17.5813 6.2707 17.2094C6.16133 16.9281 6.03008 16.5031 5.9957 15.725C5.9582 14.8813 5.94883 14.6281 5.94883 12.4938C5.94883 10.3563 5.9582 10.1031 5.9957 9.2625C6.03008 8.48125 6.16133 8.05938 6.2707 7.77813C6.41445 7.40625 6.58945 7.1375 6.86758 6.85938C7.14883 6.57812 7.41445 6.40625 7.78633 6.2625C8.06758 6.15313 8.49258 6.02187 9.2707 5.9875C10.1113 5.95 10.3645 5.94062 12.502 5.94062ZM12.502 4.5C10.3301 4.5 10.0582 4.50937 9.20508 4.54688C8.35508 4.58438 7.7707 4.72187 7.26445 4.91875C6.73633 5.125 6.28945 5.39688 5.8457 5.84375C5.39883 6.2875 5.12695 6.73438 4.9207 7.25938C4.72383 7.76875 4.58633 8.35 4.54883 9.2C4.51133 10.0563 4.50195 10.3281 4.50195 12.5C4.50195 14.6719 4.51133 14.9438 4.54883 15.7969C4.58633 16.6469 4.72383 17.2313 4.9207 17.7375C5.12695 18.2656 5.39883 18.7125 5.8457 19.1562C6.28945 19.6 6.73633 19.875 7.26133 20.0781C7.7707 20.275 8.35195 20.4125 9.20195 20.45C10.0551 20.4875 10.327 20.4969 12.4988 20.4969C14.6707 20.4969 14.9426 20.4875 15.7957 20.45C16.6457 20.4125 17.2301 20.275 17.7363 20.0781C18.2613 19.875 18.7082 19.6 19.152 19.1562C19.5957 18.7125 19.8707 18.2656 20.0738 17.7406C20.2707 17.2313 20.4082 16.65 20.4457 15.8C20.4832 14.9469 20.4926 14.675 20.4926 12.5031C20.4926 10.3313 20.4832 10.0594 20.4457 9.20625C20.4082 8.35625 20.2707 7.77188 20.0738 7.26562C19.877 6.73438 19.6051 6.2875 19.1582 5.84375C18.7145 5.4 18.2676 5.125 17.7426 4.92188C17.2332 4.725 16.652 4.5875 15.802 4.55C14.9457 4.50938 14.6738 4.5 12.502 4.5Z"
                        fill="#23B9D9"
                      />
                      <path
                        d="M12.502 8.39062C10.2332 8.39062 8.39258 10.2313 8.39258 12.5C8.39258 14.7688 10.2332 16.6094 12.502 16.6094C14.7707 16.6094 16.6113 14.7688 16.6113 12.5C16.6113 10.2313 14.7707 8.39062 12.502 8.39062ZM12.502 15.1656C11.0301 15.1656 9.83633 13.9719 9.83633 12.5C9.83633 11.0281 11.0301 9.83437 12.502 9.83437C13.9738 9.83437 15.1676 11.0281 15.1676 12.5C15.1676 13.9719 13.9738 15.1656 12.502 15.1656Z"
                        fill="#23B9D9"
                      />
                      <path
                        d="M17.7332 8.22818C17.7332 8.75943 17.302 9.18755 16.7738 9.18755C16.2426 9.18755 15.8145 8.7563 15.8145 8.22818C15.8145 7.69692 16.2457 7.2688 16.7738 7.2688C17.302 7.2688 17.7332 7.70005 17.7332 8.22818Z"
                        fill="#23B9D9"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_103_328">
                        <rect
                          width="16"
                          height="16"
                          fill="white"
                          transform="translate(4.50195 4.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  {t("connectWithUs.button")}
                </button>
              </a>
            </div>
          </div>
        </>
      )}
      {screenSize < 1024 && (
        <div className="flex w-full flex-col items-center gap-8 px-4 pb-8 pt-16">
          <h1 className="text-center font-normal text-primary">
            Connect with Us
          </h1>
          <div className="relative mb-6 flex justify-center">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper"
              rewind={true}
              initialSlide={3}
            >
              {social.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full rounded-3xl object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <img
              src={ConnectLogoImg}
              alt="logo"
              className="absolute bottom-[-3.5rem] z-50 size-32"
            />
          </div>
          <a href="https://www.instagram.com/indodentalcenter" target="_blank">
            <button className="btn btn-primary btn-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="24"
                  height="24"
                  rx="6"
                  fill="white"
                />
                <g clipPath="url(#clip0_103_328)">
                  <path
                    d="M12.502 5.94062C14.6395 5.94062 14.8926 5.95 15.7332 5.9875C16.5145 6.02187 16.9363 6.15313 17.2176 6.2625C17.5895 6.40625 17.8582 6.58125 18.1363 6.85938C18.4176 7.14062 18.5895 7.40625 18.7332 7.77813C18.8426 8.05938 18.9738 8.48438 19.0082 9.2625C19.0457 10.1062 19.0551 10.3594 19.0551 12.4938C19.0551 14.6313 19.0457 14.8844 19.0082 15.725C18.9738 16.5063 18.8426 16.9281 18.7332 17.2094C18.5895 17.5813 18.4145 17.85 18.1363 18.1281C17.8551 18.4094 17.5895 18.5813 17.2176 18.725C16.9363 18.8344 16.5113 18.9656 15.7332 19C14.8895 19.0375 14.6363 19.0469 12.502 19.0469C10.3645 19.0469 10.1113 19.0375 9.2707 19C8.48945 18.9656 8.06758 18.8344 7.78633 18.725C7.41445 18.5813 7.1457 18.4063 6.86758 18.1281C6.58633 17.8469 6.41445 17.5813 6.2707 17.2094C6.16133 16.9281 6.03008 16.5031 5.9957 15.725C5.9582 14.8813 5.94883 14.6281 5.94883 12.4938C5.94883 10.3563 5.9582 10.1031 5.9957 9.2625C6.03008 8.48125 6.16133 8.05938 6.2707 7.77813C6.41445 7.40625 6.58945 7.1375 6.86758 6.85938C7.14883 6.57812 7.41445 6.40625 7.78633 6.2625C8.06758 6.15313 8.49258 6.02187 9.2707 5.9875C10.1113 5.95 10.3645 5.94062 12.502 5.94062ZM12.502 4.5C10.3301 4.5 10.0582 4.50937 9.20508 4.54688C8.35508 4.58438 7.7707 4.72187 7.26445 4.91875C6.73633 5.125 6.28945 5.39688 5.8457 5.84375C5.39883 6.2875 5.12695 6.73438 4.9207 7.25938C4.72383 7.76875 4.58633 8.35 4.54883 9.2C4.51133 10.0563 4.50195 10.3281 4.50195 12.5C4.50195 14.6719 4.51133 14.9438 4.54883 15.7969C4.58633 16.6469 4.72383 17.2313 4.9207 17.7375C5.12695 18.2656 5.39883 18.7125 5.8457 19.1562C6.28945 19.6 6.73633 19.875 7.26133 20.0781C7.7707 20.275 8.35195 20.4125 9.20195 20.45C10.0551 20.4875 10.327 20.4969 12.4988 20.4969C14.6707 20.4969 14.9426 20.4875 15.7957 20.45C16.6457 20.4125 17.2301 20.275 17.7363 20.0781C18.2613 19.875 18.7082 19.6 19.152 19.1562C19.5957 18.7125 19.8707 18.2656 20.0738 17.7406C20.2707 17.2313 20.4082 16.65 20.4457 15.8C20.4832 14.9469 20.4926 14.675 20.4926 12.5031C20.4926 10.3313 20.4832 10.0594 20.4457 9.20625C20.4082 8.35625 20.2707 7.77188 20.0738 7.26562C19.877 6.73438 19.6051 6.2875 19.1582 5.84375C18.7145 5.4 18.2676 5.125 17.7426 4.92188C17.2332 4.725 16.652 4.5875 15.802 4.55C14.9457 4.50938 14.6738 4.5 12.502 4.5Z"
                    fill="#23B9D9"
                  />
                  <path
                    d="M12.502 8.39062C10.2332 8.39062 8.39258 10.2313 8.39258 12.5C8.39258 14.7688 10.2332 16.6094 12.502 16.6094C14.7707 16.6094 16.6113 14.7688 16.6113 12.5C16.6113 10.2313 14.7707 8.39062 12.502 8.39062ZM12.502 15.1656C11.0301 15.1656 9.83633 13.9719 9.83633 12.5C9.83633 11.0281 11.0301 9.83437 12.502 9.83437C13.9738 9.83437 15.1676 11.0281 15.1676 12.5C15.1676 13.9719 13.9738 15.1656 12.502 15.1656Z"
                    fill="#23B9D9"
                  />
                  <path
                    d="M17.7332 8.22818C17.7332 8.75943 17.302 9.18755 16.7738 9.18755C16.2426 9.18755 15.8145 8.7563 15.8145 8.22818C15.8145 7.69692 16.2457 7.2688 16.7738 7.2688C17.302 7.2688 17.7332 7.70005 17.7332 8.22818Z"
                    fill="#23B9D9"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_103_328">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                      transform="translate(4.50195 4.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
              Follow Us
            </button>
          </a>
        </div>
      )}
    </>
  );
};

export default Social;
