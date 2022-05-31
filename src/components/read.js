import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Read() {
  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    axios.get(`https://62950af263b5d108c199071e.mockapi.io/Usuarios`).then((response) => {
      setAPIData(response.data);
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
    axios.get(`https://62950af263b5d108c199071e.mockapi.io/Usuarios`).then((getData) => {
      setAPIData(getData.data);
    });
  };

  const onDelete = (id) => {
    axios.delete(`https://62950af263b5d108c199071e.mockapi.io/Usuarios/${id}`).then(() => {
      getData();
    });
  };

  return (
    <>
      {APIData.length <= 0 ? (
        <p>Nenhum cadastro...</p>
      ) : (
        <table>
          <tr>
            <td>
              <strong>Nome</strong>
            </td>
            <td>
              <strong>Sobrenome</strong>
            </td>
            <td>
              <strong>Operações</strong>
            </td>
          </tr>

          {APIData.map((data) => {
            return (
              <tr>
                <td>{data.firstName}</td>
                <td>{data.lastName}</td>
                <td>
                  <Link to="/update">
                    <button onClick={() => setData(data)}>Atualizar</button>
                  </Link>
                </td>
                <td>
                  <button onClick={() => onDelete(data.id)}>Excluir</button>
                </td>
              </tr>
            );
          })}
        </table>
      )}
    </>
  );
}
