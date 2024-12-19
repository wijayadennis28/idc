import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Pill = ({ active, text, onClick }) => {
  const { t, i18n } = useTranslation();
  const [renderedText, setRenderedText] = useState("");

  const renderText = () => {
    return text === "All doctors" ? t("allDoctors") : text;
  };

  useEffect(() => {
    setRenderedText(renderText());
  }, [i18n.language, text]);

  return (
    <button
      className={`btn border ${active ? "bg-secondary" : "bg-white"}`}
      onClick={onClick}
    >
      <h4 className={active ? "text-white" : "text-primary"}>{renderedText}</h4>
    </button>
  );
};

export default Pill;
