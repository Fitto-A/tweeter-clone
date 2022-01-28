import React, { useState, useContext } from "react";
import { getDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

const GlobalContext = React.createContext();

const AppProvider = ({ children }) => {
  const [usuarioLogueado, setUsuarioLogueado] = useState({});
  const [emailLogueado, setEmailLogueado] = useState("");
  const [datosUser, setDatosUser] = useState({}); //Usuario Logueado

  const user = auth.currentUser;
  onAuthStateChanged(auth, (currentUser) => {
    setUsuarioLogueado(currentUser);
  });

  const getDatosUsuario = async () => {
    if (user !== null) {
      const email = user.email;
      setEmailLogueado(email);

      const docRef = doc(db, "usuarios", email);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        // console.log("Document data:", docSnap.data());
        const detallesUser = {
          biografia: docSnap.data().biografia,
          nombre: docSnap.data().nombre,
          sitioWeb: docSnap.data().sitioWeb,
          ubicacion: docSnap.data().ubicacion,
          ruta: docSnap.data().ruta,
          siguiendo: docSnap.data().siguiendo,
          seguidores: docSnap.data().seguidores,
        };
        setDatosUser(detallesUser);
      } else {
        console.log("No such document!");
      }
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        getDatosUsuario,
        usuarioLogueado,
        emailLogueado,
        datosUser,
        setDatosUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export { GlobalContext, AppProvider };
