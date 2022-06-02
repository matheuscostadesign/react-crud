import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Create() {
  const history = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const { t, i18n } = useTranslation();
  const API_URL = `https://62950af263b5d108c199071e.mockapi.io/Usuarios`;
  //const API_URL = `http://10.0.0.6:9000/Usuarios`;

  const postData = () => {
    axios
      .post(API_URL, {
        firstName,
        lastName,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(function (response) {
        history("/read");
        //console.log(response);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const [id, setID] = useState(null);

  return (
    <div>
      <div>
        <input type="text" placeholder={t("input.cadastro.nome")} required onChange={(e) => setFirstName(e.target.value)} />
        <br />
        <input type="text" placeholder={t("input.cadastro.sobrenome")} onChange={(e) => setLastName(e.target.value)} required />
        <button value="Enviar" type="submit" onClick={postData}>
          {t("menu.cadastro")}
        </button>
      </div>
    </div>
  );
}
