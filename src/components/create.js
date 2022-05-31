import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const history = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const postData = () => {
    axios
      .post(`https://62950af263b5d108c199071e.mockapi.io/Usuarios`, {
        firstName,
        lastName,
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
        <input type="text" placeholder="Nome" onChange={(e) => setFirstName(e.target.value)} />
        <br />
        <input type="text" placeholder="Sobrenome" onChange={(e) => setLastName(e.target.value)} />
        {/* <Link to="/read"> */}
        <button value="Enviar" type="submit" onClick={postData}>
          Cadastrar
        </button>
        {/* </Link> */}
      </div>
    </div>
  );
}
