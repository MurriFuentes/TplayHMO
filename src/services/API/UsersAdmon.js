import axios from "axios";
/**
 * Es el EndPoint para llamar a la API
 * @type {string}
 */
const DEV_ENDPOINT ="https://springtotal.wl.r.appspot.com";

/**
 * Este metodo se utiliza para traer una lista de usuarios desde la BD.
 * @method
 * @async
 */
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
  
  /**
   * Esta funcion se utiliza para eliminar un contacto de la lista de contactos en la BD por medio del ID.
   * @function
   * @param {integer} contact_id ID del usuario a eliminar.
   */
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