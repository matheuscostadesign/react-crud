import React from "react";

import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div onChange={changeLanguage}>
      <input type="radio" value="ptBR" name="language" defaultChecked /> PT-BR
      <input type="radio" value="english" name="language" />
      Inglês
    </div>
  );
};

export default LanguageSelector;
