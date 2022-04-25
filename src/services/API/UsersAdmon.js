import axios from "axios";
const DEV_ENDPOINT ="https://sapient-tracer-347401.uw.r.appspot.com";

export const getUsers = async () => {
    console.log(window['username'])
    let jwt = sessionStorage.getItem("jwt");
    if (!jwt) return [];
  
    try {
      const resp = await axios.get(`${DEV_ENDPOINT}/listarUsuarios`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
          "Content-Type": "application/json",
        },
      });
      window["users"] = {data:resp.data};
      return resp.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  
  export const DeleteUser = (contact_id) => {

    let jwt = sessionStorage.getItem("jwt");
  
    try {
      axios.delete(`${DEV_ENDPOINT}/eliminarUsuario`, {
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