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

  export const Registrar_Cliente = (Userinfo) => {
    console.log("USERINFO")
    console.log(Userinfo);
    var data = {Userinfo}
    
    console.log(data);
    try {
      axios.post(`${DEV_ENDPOINT}/guardarCliente`, {
        data
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  
