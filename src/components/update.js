import React, { useState } from "react";
import axios from "axios";

export default function Update() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const postData = () => {
    axios.post(`https://62950af263b5d108c199071e.mockapi.io/Usuarios`, {
      firstName,
      lastName,
    });
  };

  return (
    <div>
      <div>
        <input type="text" placeholder="Nome" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <br />
        <input type="text" placeholder="Sobrenome" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        <button value="Enviar" type="submit" onClick={postData}>
          Atualizar
        </button>
      </div>
    </div>
  );
}
