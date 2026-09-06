import React from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

export default function Navbar({ setForm, onBack, showBack = false }) {
  const { t } = useTranslation();

  return (
    <nav className="navbar">
      <div className="navbar-left">
        {showBack && (
          <button className="back-btn" onClick={onBack}>
            â† {t("back")}
          </button>
        )}

        <div className="logo">
          MedFlow
        </div>
      </div>

      <div className="navbar-right">
        <span className="secure-badge">
          ðŸ”’ {t("secure")}
        </span>

        <LanguageSwitcher setForm={setForm} />
      </div>
    </nav>
  );
}