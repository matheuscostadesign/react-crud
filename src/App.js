import "./App.css";
import "./i18n";
import logo from "./logo.svg";
import Create from "./components/create";
import Read from "./components/read";
import Update from "./components/update";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { Component, Suspense } from "react";
import LanguageSelector from "./components/languageSelector";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  return (
    <Router>
      <div className="main">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{t("app.nome")}</h1>
        <Suspense fallback={null}>
          <LanguageSelector />
          <br />
          <ul className="links">
            <li>
              <a href="/">{t("menu.home")}</a>
            </li>
            <li>
              <a href="/create">{t("menu.cadastro")}</a>
            </li>
            <li>
              <a href="/read">{t("menu.listar")}</a>
            </li>
          </ul>
        </Suspense>
        <Routes>
          <Route exact path="/create" element={<Create />} />
          <Route exact path="/read" element={<Read />} />
          <Route exact path="/update" element={<Update />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
