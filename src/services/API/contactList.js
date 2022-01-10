import axios from "axios";
const DEV_ENDPOINT = "http://localhost:8080";

const mockResponseListar = [
  {
    id: 4,
    nombre: "Albano",
    paquete: "TV + Internet 20 megas",
    telefono: "6623804420",
  },
  {
    id: 5,
    nombre: "Jorge",
    paquete: "TV + Internet 40 megas",
    telefono: "6629371435",
  },
  {
    id: 6,
    nombre: "Jorgillo",
    paquete: "Internet 40 megas",
    telefono: "6678565643",
  },
  {
    id: 7,
    nombre: "Tigrillo",
    paquete: "Internet 100 megas",
    telefono: "6678565641",
  },
];

export const DeleteContact = (contact_id) => {

  let jwt = sessionStorage.getItem("jwt");

  try {
    axios.delete(`${DEV_ENDPOINT}/listar`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json",
      },
      data: {
        source: contact_id
      }
    });
  } catch (error) {
    console.log(error);
    throw error;
  }

};

export const getList = async () => {
  
  let jwt = sessionStorage.getItem("jwt");
  if (!jwt) return [];

  //return mockResponseListar;

  try {
    const resp = await axios.get(`${DEV_ENDPOINT}/listar`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json",
      },
    });

    return resp.data;
  } catch (error) {
    console.log(error);

    throw error;
  }
};

export const guardarCliente = (nombre, paquete, telefono) => {
  try {
    axios.post(`${DEV_ENDPOINT}/guardar`, {
        nombre,
        paquete,
        telefono,
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};


