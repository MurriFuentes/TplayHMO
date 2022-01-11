import axios from "axios";

const DEV_ENDPOINT = "http://localhost:8080";


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

  export default Registrar_Usuario;
