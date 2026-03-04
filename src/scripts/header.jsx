import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

import Logo from "../../assets/image/logo/logo.png";

import PopUpMap from "./components/PopUpMap";
import { use } from "i18next";

const Header = () => {
  const { t, i18n } = useTranslation();

  const [language, setLanguage] = useState("EN");
  const [showMenu, setShowMenu] = useState(false);
  const [showButtonAnimation, setShowButtonAnimation] = useState(false);
  const [showPing, setShowPing] = useState(true);

  const detailsRef = useRef(null);
  const detailsMobileRef = useRef(null);

  const touchStartY = useRef(0); // Store the initial touch Y-coordinate
  const touchEndY = useRef(0); // Store the final touch Y-coordinate

  const path = `${wpApiSettings.homeUrl}`;

  useEffect(() => {
    setLanguage(i18n.language.toUpperCase());
  }, [i18n.language]);

  useEffect(() => {
    // Add an event listener to detect outside clicks
    const handleClickOutside = (event) => {
      if (detailsRef.current && !detailsRef.current.contains(event.target)) {
        detailsRef.current.removeAttribute("open"); // Close the <details> if clicked outside
      }

      if (
        detailsMobileRef.current &&
        !detailsMobileRef.current.contains(event.target)
      ) {
        detailsMobileRef.current.removeAttribute("open"); // Close the <details> if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [detailsRef]);

  // Toggle overflow on body when menu opens or closes
  useEffect(() => {
    if (showMenu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    detailsMobileRef.current.removeAttribute("open");

    // Cleanup to remove the className when component unmounts
    return () => document.body.classList.remove("overflow-hidden");
  }, [showMenu]);

  useEffect(() => {
    const handleResize = () => {
      setShowMenu(false);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setShowButtonAnimation(true);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowPing(false), 10000);
    return () => clearTimeout(timer);
  }, []);

  const languageList = [
    {
      id: "ID",
      key: "id",
      name: "Indonesia",
    },
    {
      id: "EN",
      key: "en",
      name: "English",
    },
  ];

  const menuList = [
    {
      id: "",
      name: t("pages.home"),
      URL: "/",
    },
    {
      id: ["our-services", "services"],
      name: t("pages.ourServices"),
      URL: "/our-services",
    },
    {
      id: ["our-doctors", "doctors"],
      name: t("pages.doctors"),
      URL: "/our-doctors",
    },
    {
      id: ["about-us"],
      name: t("pages.aboutUs"),
      URL: "/about-us",
    },
    {
      id: ["articles", "article"],
      name: t("pages.articles"),
      URL: "/articles",
    },
  ];

  const onChangeLanguage = (lang) => {
    if (lang.id === language) return;

    let urlOrigin = window.location.origin;
    let pathName = window.location.pathname;

    if (lang.id === "ID") {
      urlOrigin = urlOrigin + "/id";
    } else {
      pathName = pathName.replace(/^\/id/, "");
    }

    // to new url urlOrigin + pathName
    window.location.href = urlOrigin + pathName;
  };

  const languageText = (id) => {
    const selectedLanguage = languageList.find((item) => item.id === id);
    return `${selectedLanguage.name} (${selectedLanguage.id})`;
  };

  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
    touchEndY.current = e.touches[0].clientY; // Initialize to the same value to prevent unintended detection
  };

  const handleTouchMove = (e) => {
    touchEndY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = () => {
    const swipeDistance = touchStartY.current - touchEndY.current;
    // Set a minimum swipe distance (threshold) to consider it a swipe
    if (swipeDistance > 50) {
      // Swipe up detected, close the menu
      setShowMenu(false);
    }
  };

  const handleClick = (targetPath, event) => {
    // Compare current URL with the target path and prevent navigation if they match
    const currentPath = window.location.pathname.replace(/\/+$/, ""); // Remove trailing slashes
    const cleanTargetPath = new URL(
      targetPath,
      window.location.origin,
    ).pathname.replace(/\/+$/, ""); // Ensure consistency

    if (currentPath === cleanTargetPath) {
      event.preventDefault(); // Prevent navigation
    }
  };

  const openModal = () => {
    window.open("https://wa.me/+628128080011", "_blank");
  };

  return (
    <>
      <div className="navbar bg-base-100 px-8 py-6 shadow-sm">
        <div className="flex-1">
          <a
            className="cursor-pointer"
            href="/"
            onClick={(e) => handleClick("/", e)}
          >
            <img
              src={Logo}
              alt={t("logo.imageAlt")}
              className="w-28 lg:w-36"
            />
          </a>
        </div>
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-base 2xl:text-lg">
            {menuList.map((item, index) => {
              // Remove trailing slash from wpApiSettings.homeUrl if it exists
              const basePath = wpApiSettings.homeUrl.replace(/\/+$/, "");

              // Adjust URLs dynamically
              const adjustedURL =
                item.URL === "/" // If it's the homepage
                  ? basePath // Use basePath directly
                  : `${basePath}${item.URL}`.replace(
                      `${basePath}${basePath}`,
                      basePath,
                    );

              return (
                <li key={index}>
                  <a
                    className={`idc-menu ${Array.isArray(item.id) && item.id.includes(path) ? "path" : ""}`}
                    href={adjustedURL}
                    onClick={(e) => handleClick(adjustedURL, e)}
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
            <button
              id="menu-btnMakeAppointment"
              className={`btn btn-primary btn-sm ${showButtonAnimation ? "" : "no-animation"}`}
              style={{ height: "2.5rem" }}
              onClick={openModal}
            >
              {t("makeAppointment")}
            </button>
            <div className="w-auto border-r border-base-content px-2" />
            <li>
              <details ref={detailsRef}>
                <summary className="idc-menu-country w-[70px] hover:bg-white active:bg-white">
                  {language}
                </summary>
                <ul className="right-0 z-[9999] w-max rounded-t-none bg-base-100 p-2 shadow">
                  {languageList.map((item) => (
                    <li key={item.id} class="flex items-center">
                      <a
                        className={`idc-menu-country-item ${item.id === language ? "idc-menu-country-item-active bg-secondary text-white hover:bg-secondary hover:text-white" : ""}`}
                        onClick={() => {
                          onChangeLanguage(item);
                          detailsRef.current.removeAttribute("open"); // Close after selection
                        }}
                      >
                        {languageText(item.id)}
                      </a>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="flex lg:hidden">
          <button
            className="btn btn-ghost"
            onClick={() => setShowMenu((prev) => !prev)}
          >
            {showMenu ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.93934 0.93934C1.52513 0.353553 2.47487 0.353553 3.06066 0.93934L14 11.8787L24.9393 0.939341C25.5251 0.353555 26.4749 0.353555 27.0607 0.939341C27.6464 1.52513 27.6464 2.47488 27.0607 3.06066L16.1213 14L27.0607 24.9393C27.6464 25.5251 27.6464 26.4749 27.0607 27.0607C26.4749 27.6464 25.5251 27.6464 24.9393 27.0607L14 16.1213L3.06066 27.0607C2.47487 27.6464 1.52513 27.6464 0.93934 27.0607C0.353554 26.4749 0.353554 25.5251 0.93934 24.9393L11.8787 14L0.93934 3.06066C0.353553 2.47487 0.353553 1.52513 0.93934 0.93934Z"
                  fill="#23B9D9"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="24"
                viewBox="0 0 36 24"
                fill="none"
                className="size-8"
              >
                <path
                  d="M1.5 1.5H34.5M1.5 12H34.5M1.5 22.5H34.5"
                  stroke="#23B9D9"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      <div
        className={`fixed inset-x-0 bottom-0 top-[200px] z-40 bg-black transition-all duration-700 ease-in-out lg:hidden ${
          showMenu ? "flex bg-opacity-50" : "hidden bg-opacity-0"
        }`}
        onClick={() => setShowMenu(false)} // Close menu on overlay click
      />
      <div
        className={`absolute z-[999] w-full bg-white transition-all duration-700 ease-in-out lg:hidden ${
          showMenu ? "max-h-[500px] overflow-hidden" : "max-h-0 overflow-hidden"
        }`}
        id="mobile-menu"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="flex flex-col items-center gap-8 py-4">
          {menuList.map((item) => {
            // Remove trailing slash from wpApiSettings.homeUrl if it exists
            const basePath = wpApiSettings.homeUrl.replace(/\/+$/, "");

            // Adjust URLs dynamically
            const adjustedURL =
              item.URL === "/" // If it's the homepage
                ? basePath // Use basePath directly
                : `${basePath}${item.URL}`.replace(
                    `${basePath}${basePath}`,
                    basePath,
                  );

            // Determine if this menu item is active
            const currentPath = window.location.pathname.replace(/\/+$/, "");
            const cleanTargetPath = new URL(adjustedURL, window.location.origin).pathname.replace(/\/+$/, "");
            const isActive = currentPath === cleanTargetPath;

            return (
              <a
                key={item.id}
                className={`idc-menu cursor-pointer text-xl ${isActive ? "path" : ""}`}
                onClick={() => setShowMenu(false)}
                href={adjustedURL}
              >
                {item.name}
              </a>
            );
          })}
          <button className="btn btn-primary" onClick={openModal}>
            {t("makeAppointment")}
          </button>

          <div className="relative">
            <details className="group" ref={detailsMobileRef}>
              <summary className="flex w-[150px] cursor-pointer items-center justify-center rounded-full px-4 py-2 text-base focus-visible:outline-none">
                <span className="mr-2">{language}</span>
                <svg
                  className="h-4 w-4 transform transition-transform duration-300 group-open:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <ul className="fixed z-[99999] mt-2 w-fit rounded-2xl border bg-white shadow-lg">
                {languageList.map((item, index) => (
                  <li
                    key={index}
                    className="flex cursor-pointer justify-center px-6 py-3"
                  >
                    <a
                      onClick={() => {
                        onChangeLanguage(item);
                        detailsMobileRef.current.removeAttribute("open");
                        setShowMenu(false);
                      }}
                    >
                      {languageText(item.id)}
                    </a>
                  </li>
                ))}
              </ul>
            </details>
          </div>
        </div>
      </div>
      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={openModal}
          aria-label="WhatsApp - Make an Appointment"
          className="group relative flex h-14 w-14 items-center justify-center rounded-full shadow-2xl transition-transform duration-200 hover:scale-110 active:scale-95 md:h-16 md:w-16"
          style={{ backgroundColor: "#25D366" }}
        >
          {showPing && (
            <span
              className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-25"
              style={{ backgroundColor: "#25D366" }}
            />
          )}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="relative h-7 w-7 md:h-8 md:w-8"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </button>
      </div>

      <PopUpMap />
    </>
  );
};

export default Header;
