import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Read() {
  const [APIData, setAPIData] = useState([]);
  const { t, i18n } = useTranslation();
  const API_URL = `https://62950af263b5d108c199071e.mockapi.io/Usuarios`;
  //const API_URL = `http://10.0.0.6:9000/Usuarios`;

  // const config = {
  //   headers: {
  //     header1: value1,
  //     header2: value2,
  //   },
  // };

  useEffect(() => {
    axios.get(API_URL).then((response) => {
      setAPIData(response.data);
      //console.log(setAPIData);
    });
  }, []);

  const setData = (data) => {
    //console.log(data);
    let { id, firstName, lastName } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("First Name", firstName);
    localStorage.setItem("Last Name", lastName);
  };

  const getData = () => {
    axios.get(API_URL).then((getData) => {
      setAPIData(getData.data);
    });
  };

  const onDelete = (id) => {
    axios.delete(API_URL + `/${id}`).then(() => {
      getData();
    });
  };

  const botaoExcluir = {
    color: "#fff",
    backgroundColor: "#e74c3c",
  };

  return (
    <>
      {APIData.length <= 0 ? (
        <p>{t("text.vazio")}</p>
      ) : (
        <table>
          <tr>
            <td>
              <strong>{t("input.cadastro.nome")}</strong>
            </td>
            <td>
              <strong>{t("input.cadastro.sobrenome")}</strong>
            </td>
            <td>
              <strong>{t("table.operacoes")}</strong>
            </td>
          </tr>

          {APIData.map((data) => {
            return (
              <tr>
                <td>{data.firstName}</td>
                <td>{data.lastName}</td>
                <td>
                  <Link to="/update">
                    <button onClick={() => setData(data)}>{t("button.atualizar")}</button>
                  </Link>
                </td>
                <td>
                  <button style={botaoExcluir} onClick={() => onDelete(data.id)}>
                    {t("button.excluir")}
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
      )}
    </>
  );
}
