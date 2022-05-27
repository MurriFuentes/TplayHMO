import axios from "axios";
/**
 * Es el EndPoint para llamar a la API
 * @type {string}
 */
const DEV_ENDPOINT ="https://springtotal.wl.r.appspot.com";

/**
 * Este metodo se utiliza para traer una lista de usuarios de la BD.
 * @param {string} usuario
 */
export const getClients = async (usuario) => {
  let jwt = sessionStorage.getItem("jwt");
  if (!jwt) return [];
  try {
    const resp = await axios.post(`${DEV_ENDPOINT}/listarClientesPorUsuarioNumero`, usuario,{
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json",
      }
      
    });
    window["clients"] = {data:resp.data};
    return resp.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export default getClients;