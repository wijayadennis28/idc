import React, { useState, useEffect, useRef } from "react";
import Logo from "../../assets/image/logo/logo.png";

const Header = () => {
  const [language, setLanguage] = useState("EN");
  const [showTextLanguage, setShowTextLanguage] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  const detailsRef = useRef(null);
  const detailsMobileRef = useRef(null);
  const touchStartY = useRef(0); // Store the initial touch Y-coordinate
  const touchEndY = useRef(0); // Store the final touch Y-coordinate

  const path = window.location.pathname.split("/")[1];

  useEffect(() => {
    setShowTextLanguage(handleLanguageText());
  }, [language]);

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

  const languageList = [
    {
      id: "ID",
      name: "Bahasa",
    },
    {
      id: "EN",
      name: "English",
    },
  ];

  const menuList = [
    {
      id: "",
      name: "Home",
      URL: "/",
    },
    {
      id: ["our-services", "services"],
      name: "Our Services",
      URL: "/our-services",
    },
    {
      id: ["our-doctors", "doctors"],
      name: "Doctors",
      URL: "/our-doctors",
    },
    {
      id: ["about-us"],
      name: "About us",
      URL: "/about-us",
    },
    {
      id: ["articles", "article"],
      name: "Articles",
      URL: "/articles",
    },
  ];

  const handleLanguageText = () => {
    return languageList.map((item) => {
      if (item.id === language) {
        return languageText(item.id);
      }
    });
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

  const handleClick = (path, event) => {
    if (
      window.location.pathname.replace(/\/+$/, "") === path.replace(/\/+$/, "")
    ) {
      event.preventDefault();
    }
  };

  return (
    <>
      <div className="navbar bg-base-100 px-8 py-6">
        <div className="flex-1">
          <a
            className="cursor-pointer"
            href="/"
            onClick={(e) => handleClick("/", e)}
          >
            <img
              src={Logo}
              alt="Indo Dental Center Logo"
              className="w-28 lg:w-36"
            />
          </a>
        </div>
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-base 2xl:text-lg">
            {menuList.map((item, index) => (
              <li key={index}>
                <a
                  className={`idc-menu ${item.id.includes(path) ? "path" : ""}`}
                  href={item.URL}
                  onClick={(e) => handleClick(item.URL, e)}
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li className="pl-3">
              <details ref={detailsRef}>
                <summary
                  className="idc-menu-country w-[139px] bg-secondary text-white hover:bg-[#1FAECD] 2xl:w-[150px]"
                  style={{ borderRadius: "360px" }}
                >
                  {showTextLanguage}
                </summary>
                <ul className="z-[9999] rounded-t-none bg-base-100 p-2">
                  {languageList.map((item) => (
                    <li key={item.id}>
                      <a
                        onClick={() => {
                          setLanguage(item.id);
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
        className={`fixed inset-x-0 bottom-0 top-[200px] z-40 bg-black transition-all duration-700 ease-in-out ${
          showMenu ? "flex bg-opacity-50" : "hidden bg-opacity-0"
        }`}
        onClick={() => setShowMenu(false)} // Close menu on overlay click
      />
      <div
        className={`absolute z-[999] w-full bg-white transition-all duration-700 ease-in-out ${
          showMenu ? "max-h-[500px] overflow-hidden" : "max-h-0 overflow-hidden"
        }`}
        id="mobile-menu"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="flex flex-col items-center gap-8 py-4">
          {menuList.map((item) => (
            <a
              key={item.id}
              className={`idc-menu cursor-pointer text-xl ${path === item.id ? "path" : ""}`}
              onClick={() => setShowMenu(false)}
              href={item.URL}
            >
              {item.name}
            </a>
          ))}
          <div className="relative">
            <details className="group" ref={detailsMobileRef}>
              <summary className="flex cursor-pointer items-center rounded-full bg-secondary px-4 py-3 text-base text-white focus-visible:outline-none">
                <span className="mr-2">{showTextLanguage}</span>
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
                {languageList.map((item) => (
                  <li key={item.id} className="cursor-pointer px-6 py-3">
                    <a
                      onClick={() => {
                        setLanguage(item.id);
                        detailsMobileRef.current.removeAttribute("open");
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
    </>
  );
};

export default Header;
