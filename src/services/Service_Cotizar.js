import axios from "axios"
const DEV_ENDPOINT ="http://localhost:8080";

export const guardarCotizacion = (paquete,numeroTelefono,correoElectronico)=>{
    try {
        axios.post(`${DEV_ENDPOINT}/guardarCotizacion`,{
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                paquete,
                numeroTelefono,
                correoElectronico,
            })  
        });
    } catch (error) {
        console.log(error)
        throw error;
    }
}