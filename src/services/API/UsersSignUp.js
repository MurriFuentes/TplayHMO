import axios from "axios";

const DEV_ENDPOINT = "https://sapient-tracer-347401.uw.r.appspot.com";

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

  
