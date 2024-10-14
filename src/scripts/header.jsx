import React, { useState, useEffect, useRef } from "react";
import Logo from "../../assets/image/logo/logo.png";

const Header = () => {
  const [language, setLanguage] = useState("ID");
  const [showTextLanguage, setShowTextLanguage] = useState("");
  const detailsRef = useRef(null);

  useEffect(() => {
    setShowTextLanguage(handleLanguageText());
  }, [language]);

  useEffect(() => {
    // Add an event listener to detect outside clicks
    const handleClickOutside = (event) => {
      if (detailsRef.current && !detailsRef.current.contains(event.target)) {
        detailsRef.current.removeAttribute("open"); // Close the <details> if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [detailsRef]);

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

  return (
    <div className="navbar bg-base-100 py-6 px-8">
      <div className="flex-1">
        <a>
          <img src={Logo} alt="Indo Dental Center Logo" className="w-36" />
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className="idc-menu">Home</a>
          </li>
          <li>
            <a className="idc-menu">Our Services</a>
          </li>
          <li>
            <a className="idc-menu">Doctors</a>
          </li>
          <li>
            <a className="idc-menu">About us</a>
          </li>
          <li>
            <a className="idc-menu">Articles</a>
          </li>
          <li className="pl-3">
            <details ref={detailsRef}>
              <summary
                className="bg-secondary hover:bg-[#1FAECD] text-white idc-menu-country"
                style={{ borderRadius: "360px", width: "127px" }}
              >
                {showTextLanguage}
              </summary>
              <ul className="bg-base-100 rounded-t-none p-2">
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
    </div>
  );
};

export default Header;
