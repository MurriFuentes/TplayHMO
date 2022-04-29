import axios from "axios";
const DEV_ENDPOINT = "https://sapient-tracer-347401.uw.r.appspot.com";

/**
 * Es el metodo que se utilizara para borrar un posible prospecto de la BD.
 * @type {number}
 */
export const DeleteContact = (contact_id) => {

  let jwt = sessionStorage.getItem("jwt");

  try {
    axios.post(`${DEV_ENDPOINT}/eliminarProspecto`, {
      id: contact_id,
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json",
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

  try {
    const resp = await axios.get(`${DEV_ENDPOINT}/listarProspectos`, {
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
    axios.post(`${DEV_ENDPOINT}/guardarProspecto`, {
        nombre,
        paquete,
        telefono,
    });
    
    alert('Contratacion realizada exitosamente!',[
      {text: 'OK', onPress:()=>console.log('alert closed')}
  ]);
  } catch (error) {
    console.log(error);
    alert('Contratacion fallida intente nuevamente',[
      {text: 'OK', onPress:()=>console.log('alert closed')}
  ]);
    throw error;
    
  }
};


