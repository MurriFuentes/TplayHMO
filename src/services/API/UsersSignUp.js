import axios from "axios";
const DEV_ENDPOINT = "http://localhost:8080";

export const Registrar_Usuario = (
    nombre,
    apellidoPaterno,
    apellidoMaterno,
    fechaNacimiento,
    numeroEmpleado
) => {
    try {
        console.log(numeroEmpleado);
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

// export default function Registrar_Usuario (
//     nombre,
//     apellido_paterno,
//     apellido_materno,
//     fecha_nacimiento,
//     numero_empleado
// ) {
//     return fetch(`${ENDPOINT}/guardarUsuario`, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//             nombre,
//             apellido_paterno,
//             apellido_materno,
//             fecha_nacimiento,
//             numero_empleado
//         })     
//     }).then(res =>{
//         if (!res.ok) throw new Error("Response is NOT ok");
//         return res.json()
//     }).then(res =>{
//         const {token} = res
//         console.log(token)        
//         return token
//     })
// }