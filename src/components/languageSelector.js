import React from "react";

import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div onChange={changeLanguage}>
      <input type="radio" value="pt_br" name="language" defaultChecked />
      <label style={{ marginLeft: 8 }}>Português (Brasil)</label>

      <input type="radio" value="english" name="language" style={{ marginLeft: 16 }} />
      <label style={{ marginLeft: 8 }}>Inglês</label>
    </div>
  );
};

export default LanguageSelector;
