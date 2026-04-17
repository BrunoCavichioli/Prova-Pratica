import { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function Cadastro() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function cadastrar() {
    if (!email || !senha) return alert("Preencha tudo");

    createUserWithEmailAndPassword(auth, email, senha)
      .then(() => alert("Usuário criado"))
      .catch((err) => {
        console.log(err);
        alert(err.message);
      });
  }

  return (
    <>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Senha" onChange={(e) => setSenha(e.target.value)} />
      <button onClick={cadastrar}>Cadastrar</button>
    </>
  );
}

export default Cadastro;