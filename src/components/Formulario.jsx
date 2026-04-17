import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

function Formulario() {
  const [nome, setNome] = useState("");
  const [curso, setCurso] = useState("");

  async function salvar() {
    if (!nome || !curso) return alert("Preencha tudo");

    await addDoc(collection(db, "usuarios"), { nome, curso });

    setNome("");
    setCurso("");
  }

  return (
    <>
      <input value={nome} placeholder="Nome" onChange={(e) => setNome(e.target.value)} />
      <input value={curso} placeholder="Curso" onChange={(e) => setCurso(e.target.value)} />
      <button onClick={salvar}>Salvar</button>
    </>
  );
}

export default Formulario;