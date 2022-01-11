import axios from "axios";
const DEV_ENDPOINT ="http://localhost:8080";



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
    console.log("GETCLIENTS")
    console.log(resp)
    window["clients"] = {data:resp.data};
    return resp.data;
    
  } catch (error) {
    
    console.log(error);
    throw error;
  }
}

export default getClients;