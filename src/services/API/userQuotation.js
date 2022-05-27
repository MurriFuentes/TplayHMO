import axios from "axios";
const DEV_ENDPOINT = "https://springtotal.wl.r.appspot.com";

/**
 * Es un metodo para que un administrador guarde una cotizacion de un posible cliente en la BD.
 * @method
 * @param {string} paquete Nombre del paquete a cotizar.
 * @param {string} numeroTelefono Numero de telefono del cliente.
 * @param {string} correoElectronico Correo electronico del cliente.
 */
export const guardarCotizacion = (paquete, numeroTelefono, correoElectronico) => {
  try {
    axios.post(`${DEV_ENDPOINT}/guardarCotizacion`, {
      paquete,
      numeroTelefono,
      correoElectronico,
    });
    
    alert("Cotizacion realizada con exito!", [
      { text: "OK", onPress: () => console.log("alert closed") },
    ]);
  } catch (error) { 
    alert("Cotizacion Fallida, porfavor intente mas tarde", [
      { text: "OK", onPress: () => console.log("alert closed") },
    ]); 
    console.log(error);
    throw error;
  }
};

export const EnviarCorreoos = async () => {
  let jwt = sessionStorage.getItem("jwt");
  if (!jwt) return [];

  try {
    const resp = await axios.get(`${DEV_ENDPOINT}/enviarRecordatorios`, {
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

/**
 * Es un metodo que se utiliza cuando un usuario solicita una cotizacion, y queda guardada en la BD.
 * @method
 * @param {string} paquete Nombre del usuario a registrar.
 * @param {string} numeroTelefono Numero de telefono del usuario a registrar.
 * @param {string} correoElectronico Correo electronico del usuario a registrar.
 * @param {string} usuario Nombre del usuario que realizo la cotizacion.
 */
export const guardarCotizacionUsuario = (paquete, numeroTelefono, correoElectronico, usuario) => {
  try {
    axios.post(`${DEV_ENDPOINT}/guardarCotizacion`, {
      paquete,
      numeroTelefono,
      correoElectronico,
      usuario
    });
    
    alert("Cotizacion realizada con exito!", [
      { text: "OK", onPress: () => console.log("alert closed") },
    ]);
  } catch (error) { 
    alert("Cotizacion Fallida, porfavor intente mas tarde", [
      { text: "OK", onPress: () => console.log("alert closed") },
    ]);
    console.log(error);
    throw error;
  }
};

/**
 * Es un metodo que se llama a la hora de traer la lista de cotizaciones en la BD para un administrador.
 * @method
 * @async
 * @returns {Array.<{idCotizacion: number, paquete: object,usuario: string, numeroTelefono: string, correoElectronico: string}>} Lista de contactos en la BD
 */
export const getListCotizaciones = async () => {
  let jwt = sessionStorage.getItem("jwt");
  if (!jwt) return [];

  try {
    const resp = await axios.get(`${DEV_ENDPOINT}/listarCotizaciones`, {
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

/**
 * Esta funcion que se llama a la hora de traer la lista de cotizaciones en la BD para un usuario.
 * @async
 * @function
 * @returns {Array.<{idCotizacion: number, paquete: object,usuario: string, numeroTelefono: string, correoElectronico: string}>} Lista de contactos en la BD
 */
export const getListCotizacionesUsuario = async (usuario) => {
  console.log("USER")
  console.log(usuario)
  let jwt = sessionStorage.getItem("jwt");
  if (!jwt) return [];

  try {
    const resp = await axios.post(`${DEV_ENDPOINT}/listarCotizacionPorUsuarioNumero`, usuario,{
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json",
      }
      
    });

    window["users"] = {data:resp.data};
    
    console.log(resp.data);
    return resp.data;
    
  } catch (error) {
    
    console.log(error);
    throw error;
  }
};

/**
 * Esta funcion se utiliza para eliminar una cotizacion de la BD mediante su ID.
 * @function
 * @param {number} Quotation_id ID de la cotizacion a eliminar.
 */
export const DeleteQuotation = (Quotation_id) => {
  let jwt = sessionStorage.getItem("jwt");
  try {
    axios.post(`${DEV_ENDPOINT}/eliminarCotizacion`, {
      idCotizacion: Quotation_id,
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
 * Esta funcion se utiliza para editar una cotizacion de la BD mediente su ID.
 * @function
 * @param {number} Quotation_id ID de la cotizacion a editar
 */
export const EditQuotation = (Quotation_id) => {
  let jwt = sessionStorage.getItem("jwt");
  try {
    axios.post(`${DEV_ENDPOINT}/editarCotizacion`, {
      idCotizacion: Quotation_id,
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