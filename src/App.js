import "./App.css";
import "./i18n";
import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import React, { Component, Suspense, lazy } from "react";
import LanguageSelector from "./components/languageSelector";
import { useTranslation } from "react-i18next";

const Create = lazy(() => import("./components/create"));
const Read = lazy(() => import("./components/read"));
const Update = lazy(() => import("./components/update"));
const Home = lazy(() => import("./components/home"));

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
              <Link to="/">{t("menu.home")}</Link>
            </li>
            <li>
              <Link to="/create">{t("menu.cadastro")}</Link>
            </li>
            <li>
              <Link to="/read">{t("menu.listar")}</Link>
            </li>
          </ul>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/create" element={<Create />} />
            <Route exact path="/read" element={<Read />} />
            <Route exact path="/update" element={<Update />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
