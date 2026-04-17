import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";

function Lista() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "usuarios"), (snapshot) => {
      const lista = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setDados(lista);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      {dados.map((item) => (
        <div key={item.id} className="item">
          {item.nome} - {item.curso}
        </div>
      ))}
    </div>
  );
}

export default Lista;