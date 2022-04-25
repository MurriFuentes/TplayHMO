import axios from "axios";
const DEV_ENDPOINT = "https://sapient-tracer-347401.uw.r.appspot.com";

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
    return resp.data;
    
  } catch (error) {
    
    console.log(error);
    throw error;
  }
};