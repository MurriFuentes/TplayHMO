import axios from "axios";
const DEV_ENDPOINT ="http://localhost:8080";

export const getUsers = async () => {
  
    let jwt = sessionStorage.getItem("jwt");
    if (!jwt) return [];
  
    try {
      const resp = await axios.get(`${DEV_ENDPOINT}/listarUsuarios`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
          "Content-Type": "application/json",
        },
      });
      window["users"] = {data:resp.data}
      return resp.data;
    } catch (error) {
      console.log(error);
  
      throw error;
    }
  };
  
  export const DeleteUser = (contact_id) => {

    let jwt = sessionStorage.getItem("jwt");
  
    try {
      axios.delete(`${DEV_ENDPOINT}/EliminarUsuarioPorId`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
          "Content-Type": "application/json",
        },
        data: {
          source: contact_id
        }
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  
  };