import axios from "axios";
const DEV_ENDPOINT = "https://springtotal.wl.r.appspot.com";

/**
 * Este metodo recibe un objeto que contiene la informacion necesaria para registrar un usuario nuevo en la BD.
 * @method
 * @param {string} nombre Nombre del usuario a registrar.
 * @param {string} apellidoPaterno Apellido paterno del usuario a registrar.
 * @param {string} apellidoMaterno Apellido materno del usuario a registrar.
 * @param {string} fechaNacimiento Fecha de nacimiento del usuario a registrar.
 * @param {integer} numeroEmpleado Numero del empleado que se le asignara.
 */
export const Registrar_Usuario = ({ 
    nombre,
    apellidoPaterno,
    apellidoMaterno,
    fechaNacimiento,
    numeroEmpleado
  }) => {
    try {
      axios.post(`${DEV_ENDPOINT}/guardarUsuario`, {
        nombre,
        apellidoPaterno,
        apellidoMaterno,
        fechaNacimiento,
        numeroEmpleado
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

/**
  * Este metodo recibe un objeto con la informacion descrita, que se utiliza para dar de alta a un cliente en la BD.
  * @method
  * @param {string} nombre Nombre del usuario a registrar.
  * @param {string} apellidoPaterno Apellido paterno del usuario a registrar.
  * @param {string} apellidoMaterno Apellido materno del usuario a registrar.
  * @param {string} fechaNacimiento Fecha de nacimiento del usuario a registrar.
  * @param {string} paqueteContratado Nombre del paquete que se contratara.
  * @param {string} primerPago Fecha del primer pago.
  * @param {string} segundoPago Fecha del segundo pago.
  * @param {string} usuario Nombre del usuario que registro al cliente.
  */
export const Registrar_Cliente = ({nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento, paqueteContratado, primerPago, segundoPago, usuario}) => {
  let jwt = sessionStorage.getItem("jwt");
  if (!jwt) return [];

  try {
    axios.post(`${DEV_ENDPOINT}/guardarCliente`,{
      nombre,
      apellidoPaterno,
      apellidoMaterno,
      paqueteContratado,
      fechaNacimiento,
      primerPago,
      segundoPago,
      usuario,
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
 * Esta funcion recibe un ID de un cliente registrado para eliminarlo de la BD.
 * @function
 * @param {number} client_id ID del cliente a eliminar
 */
export const Eliminar_Cliente = (client_id) => {
  let jwt = sessionStorage.getItem("jwt");
  if (!jwt) return [];
  console.log(client_id)
  try {
    axios.post(`${DEV_ENDPOINT}/eliminarCliente`,{
      id: client_id,
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

export const Actualizar_ClientePrimer = (client_id, primerPagoo, segundoPagoo) => {
  let jwt = sessionStorage.getItem("jwt");
  if (!jwt) return [];
  console.log(client_id)
  try {
    axios.post(`${DEV_ENDPOINT}/editarClientes`,{
      id: client_id,
      primerPago: !primerPagoo,
      segundoPago: segundoPagoo,
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

export const Actualizar_ClienteSegundo = (client_id, segundoPagoo, primerPagoo) => {
  let jwt = sessionStorage.getItem("jwt");
  if (!jwt) return [];
  console.log(client_id)
  try {
    axios.post(`${DEV_ENDPOINT}/editarClientes`,{
      id: client_id,
      primerPago: primerPagoo,
      segundoPago: !segundoPagoo,
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

  
