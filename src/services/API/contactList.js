import axios from "axios";
const DEV_ENDPOINT = "https://springtotal.wl.r.appspot.com";

/**
 * Esta funcion se utiliza para borrar un posible prospecto de la BD mediante su ID.
 * @function
 * @param {number} contact_id - ID del prospecto a borrar
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

/**
 * Esta funcion permite editar un contacto de la lista segun su ID.
 * @function
 * @param {number} contact_id - ID del usuario que se editara en la BD
 */
export const EditContact = (contact_id) => {
  let jwt = sessionStorage.getItem("jwt");
  try {
    axios.post(`${DEV_ENDPOINT}/editarProspecto`, {
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

/**
 * Es el metodo que trae la lista de contactos actuales de la BD.
 * @method
 * @async
 * @returns {Array.<{id: number, nombre: string, paquete: string, telefono: string}>} Lista de contactos en la BD
 */
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
    console.log(resp.data);
    return resp.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

/**
 * Este medotodo se llama al momento que un cliente solicita una contratacion.
 * @method
 * @param {string} nombre Nombre del cliente a guardar.
 * @param {string} paquete Nombre del paquete a contratar.
 * @param {string} telefono Numero de telefono del Cliente.
 */
export const guardarCliente = (nombre, paquete, telefono) => {
  if(paquete==null){
    paquete="Solo contacto";
  }
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