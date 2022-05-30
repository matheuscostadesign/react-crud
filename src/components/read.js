import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Read() {
  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    axios.get(`https://62950af263b5d108c199071e.mockapi.io/Usuarios`).then((response) => {
      setAPIData(response.data);
    });
  }, []);

  return (
    <table>
      <tr>
        <td>
          <strong>Nome</strong>
        </td>
        <td>
          <strong>Sobrenome</strong>
        </td>
      </tr>

      {APIData.map((data) => {
        return (
          <tr>
            <td>{data.firstName}</td>
            <td>{data.lastName}</td>
          </tr>
        );
      })}
    </table>
  );
}
