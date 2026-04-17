import { useState, useEffect } from "react";
import "./App.css";

import Login from "./components/Login";
import Cadastro from "./components/Cadastro";
import Formulario from "./components/Formulario";
import Lista from "./components/Lista";
import StatusBar from "./components/StatusBar";
import Footer from "./components/Footer";

import { auth } from "./firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";

function App() {
  const [user, setUser] = useState(null);

  // 🔥 Mantém o usuário logado automaticamente
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (usuario) => {
      setUser(usuario);
    });

    return () => unsubscribe();
  }, []);

  // 🔒 TELA DE LOGIN
  if (!user) {
    return (
      <div className="container">
        <div className="box">
          <h1>Sistema Firebase</h1>

          <div className="section">
            <h2>Login</h2>
            <Login setUser={setUser} />
          </div>

          <div className="section">
            <h2>Cadastro</h2>
            <Cadastro />
          </div>

          <Footer />
        </div>
      </div>
    );
  }

  // 🔓 SISTEMA LOGADO
  return (
    <div className="container">
      <div className="box">
        <StatusBar user={user?.email} />

        <h1>Painel</h1>

        <button
          className="logout"
          onClick={() => signOut(auth)}
        >
          Sair
        </button>

        <Formulario />
        <Lista />

        <Footer />
      </div>
    </div>
  );
}

export default App;