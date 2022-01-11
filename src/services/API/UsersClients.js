import axios from "axios";
const DEV_ENDPOINT ="http://localhost:8080";

export const getClients = async () => {
    console.log(window['username'])
    let jwt = sessionStorage.getItem("jwt");
    if (!jwt) return [];
  
    try {
      const resp = await axios.get(`${DEV_ENDPOINT}/listarClientes`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
          "Content-Type": "application/json",
        },
      });
      window["clients"] = {data:resp.data};
      return resp.data;
    } catch (error) {
      console.log(error);
  
      throw error;
    }
  };