import axios from "axios"
import Context from "../context/UserContext"
const DEV_ENDPOINT ="http://localhost:8080";
const mockResponseListar =
[
    {
        "id": 4,
        "nombre": "Albano",
        "paquete": "TV + Internet 20 megas",
        "telefono": "6623804420"
    },
    {
        "id": 5,
        "nombre": "Jorge",
        "paquete": "TV + Internet 40 megas",
        "telefono": "6629371435"
    },
    {
        "id": 6,
        "nombre": "Jorgillo",
        "paquete": "Internet 40 megas",
        "telefono": "6678565643"
    },
    {
        "id": 7,
        "nombre": "Tigrillo",
        "paquete": "Internet 100 megas"
    }
]

export const getList = () =>{
    // comment line 40 when api is setup
    let {jwt} =   (Context)
    return Promise.resolve(mockResponseListar)
    axios.get(`${DEV_ENDPOINT}/listar`,{
        headers: {
            'Authorization': `Bearer ${jwt}` 
        }
    }
    ).then((resp)=>{
        return resp.data
    }).catch((error)=>{
        console.log(error)
    })
}

export const saveContact = (nombre,paquete,telefono)=>{
    axios.get(`${DEV_ENDPOINT}/listar`,{
        nombre,
        paquete,
        telefono
    }).then((response)=>{
        return response.status
    })
}