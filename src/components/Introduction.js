import React from "react";

import { useTranslation } from "react-i18next";

const Introduction = () => {
  const { t, i18n } = useTranslation();

  return <div>{t("menu.home")}</div>;
};

export default Introduction;
