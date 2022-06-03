import { useTranslation } from "react-i18next";

export default function Home() {
  const { t, i18n } = useTranslation();

  return <div>{t("app.home")}</div>;
}
