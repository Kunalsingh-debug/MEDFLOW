import React from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", name: "English", label: "English" },
  { code: "hi", name: "Hindi", label: "हिन्दी" },
  { code: "bn", name: "Bengali", label: "বাংলা" },
  { code: "gu", name: "Gujarati", label: "ગુજરાતી" },
  { code: "kn", name: "Kannada", label: "ಕನ್ನಡ" },
  { code: "ml", name: "Malayalam", label: "മലയാളം" },
  { code: "mr", name: "Marathi", label: "मराठी" },
  { code: "or", name: "Odia", label: "ଓଡ଼ିଆ" },
  { code: "pa", name: "Punjabi", label: "ਪੰਜਾਬੀ" },
  { code: "ta", name: "Tamil", label: "தமிழ்" },
  { code: "te", name: "Telugu", label: "తెలుగు" },
  { code: "as", name: "Assamese", label: "অসমীয়া" },
  { code: "ur", name: "Urdu", label: "اردو" },
  { code: "ne", name: "Nepali", label: "नेपाली" },
  { code: "kok", name: "Konkani", label: "कोंकणी" },
  { code: "ks", name: "Kashmiri", label: "कॉशुर" },
  { code: "sd", name: "Sindhi", label: "सिन्धी" },
  { code: "sa", name: "Sanskrit", label: "संस्कृतम्" },
  { code: "sat", name: "Santali", label: "ᱥᱟᱱᱛᱟᱲᱤ" },
  { code: "mni", name: "Manipuri", label: "মৈতৈলোন্" },
  { code: "brx", name: "Bodo", label: "बड़ो" },
  { code: "mai", name: "Maithili", label: "मैथिली" },
  { code: "doi", name: "Dogri", label: "डोगरी" },
];

export default function LanguageSwitcher({ setForm }) {
  const { i18n } = useTranslation();

  const handleChange = (e) => {
    const code = e.target.value;

    const selectedLanguage = languages.find(
      (language) => language.code === code
    );

    if (!selectedLanguage) return;

    // Change UI language
    i18n.changeLanguage(code);

    // Change language used by Groq + Sarvam
    if (setForm) {
      setForm((prev) => ({
        ...prev,
        language: selectedLanguage.name,
      }));
    }
  };

  return (
    <select
      className="language-btn"
      value={i18n.language}
      onChange={handleChange}
    >
      {languages.map((language) => (
        <option key={language.code} value={language.code}>
          {language.label}
        </option>
      ))}
    </select>
  );
}