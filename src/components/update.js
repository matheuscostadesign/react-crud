import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Update() {
  const history = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [id, setID] = useState(null);

  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setFirstName(localStorage.getItem("First Name"));
    setLastName(localStorage.getItem("Last Name"));
  }, []);

  const updateAPIData = () => {
    axios
      .put(`https://62950af263b5d108c199071e.mockapi.io/Usuarios/${id}`, {
        firstName,
        lastName,
      })
      .then(function (response) {
        history("/read");
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div>
      <div>
        <input type="text" placeholder="Nome" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <br />
        <input type="text" placeholder="Sobrenome" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        {/* <Link to="/read"> */}
        <button value="Enviar" type="submit" onClick={updateAPIData}>
          Atualizar
        </button>
        {/* </Link> */}
      </div>
    </div>
  );
}
