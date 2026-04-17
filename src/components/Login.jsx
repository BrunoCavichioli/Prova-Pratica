import { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function logar() {
    if (!email || !senha) return alert("Preencha tudo");

    signInWithEmailAndPassword(auth, email, senha)
      .then((res) => setUser(res.user))
      .catch((err) => alert(err.message));
  }

  return (
    <>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Senha" onChange={(e) => setSenha(e.target.value)} />
      <button onClick={logar}>Entrar</button>
    </>
  );
}

export default Login;