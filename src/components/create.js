import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Create() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const postData = () => {
    axios.post(`https://62950af263b5d108c199071e.mockapi.io/Usuarios`, {
      firstName,
      lastName,
    });
  };

  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setFirstName(localStorage.getItem("First Name"));
    setLastName(localStorage.getItem("Last Name"));
  }, []);

  const [id, setID] = useState(null);

  return (
    <div>
      <div>
        <input type="text" placeholder="Nome" onChange={(e) => setFirstName(e.target.value)} />
        <br />
        <input type="text" placeholder="Sobrenome" onChange={(e) => setLastName(e.target.value)} />
        <button value="Enviar" type="submit" onClick={postData}>
          Cadastrar
        </button>
      </div>
    </div>
  );
}
