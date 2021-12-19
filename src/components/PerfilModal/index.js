import React, { useState, useEffect } from "react";
import {
  ModalWrapper,
  ModalNav,
  CloseBtn,
  ButtonGuardar,
  FormWrapper,
  Campo,
} from "./PerfilModal.styles";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { VscClose } from "react-icons/vsc";

const PerfilModal = ({
  handlePerfilModal,
  correoUsuario,
  emailLogueado,
  datosUser,
  setDatosUser,
}) => {
  const [nombre, setNombre] = useState("");
  const [biografia, setBiografia] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [web, setWeb] = useState("");

  const handleChange = (e) => {
    setDatosUser({
      ...datosUser,
      [e.target.id]: e.target.value,
    });
  };

  useEffect(() => {}, []);

  const handleEditarPerfil = async (e) => {
    e.preventDefault();
    const nombre = e.target.nombre.value;
    const biografia = e.target.biografia.value;
    const ubicacion = e.target.ubicacion.value;
    const sitioWeb = e.target.sitioWeb.value;

    const docRef = await setDoc(doc(db, "usuarios", emailLogueado), {
      nombre: nombre,
      biografia: biografia,
      ubicacion: ubicacion,
      sitioWeb: sitioWeb,
    });
    handlePerfilModal();
  };

  return (
    <ModalWrapper onSubmit={handleEditarPerfil}>
      <ModalNav>
        <CloseBtn onClick={handlePerfilModal}>
          <VscClose />
        </CloseBtn>
        <h2>Editar Perfil</h2>
        <ButtonGuardar type="submit">Guardar</ButtonGuardar>
      </ModalNav>

      <FormWrapper>
        <Campo
          type="text"
          placeholder="Nombre"
          id="nombre"
          value={datosUser.nombre}
          onChange={handleChange}
        />
        <Campo
          type="text"
          placeholder="Biografía"
          id="biografia"
          value={datosUser.biografia}
          onChange={handleChange}
        />
        <Campo
          type="text"
          placeholder="Ubicación"
          id="ubicacion"
          value={datosUser.ubicacion}
          onChange={handleChange}
        />
        <Campo
          type="text"
          placeholder="Sitio Web"
          id="sitioWeb"
          value={datosUser.sitioWeb}
          onChange={handleChange}
        />
      </FormWrapper>
    </ModalWrapper>
  );
};

export default PerfilModal;