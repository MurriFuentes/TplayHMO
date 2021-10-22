import axios from "axios"
import { useContext } from "react";
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
        "paquete": "Internet 100 megas",
        "telefono": "6678565641"
    }
]

export const getList = () =>{
    // comment line 40 when api is setup
    let jwt = sessionStorage.getItem("jwt")
    if (!jwt) return [];

    //return mockResponseListar;

    return fetch(`${DEV_ENDPOINT}/authenticate`, {
        method: "GET",
        headers: {
            'Authorization': `Bearer ${jwt}`,
            "Content-Type": "application/json" 
        },  
    }).then(res =>{
        if (!res.ok) throw new Error("Response is NOT ok");
        return res.json()
    }).then(res =>{       
        return res.data
    })
    /*
    axios.get(`${DEV_ENDPOINT}/Listar`,{
        headers: {
            'Authorization': `Bearer ${jwt}`,
            "Content-Type": "application/json" 
        }
    }
    ).then((resp)=>{
        return resp.data
    }).catch((error)=>{
        console.log(error)
    })
    */
}

export const guardarCliente = (nombre,paquete,telefono)=>{
    console.log({
        nombre,
        paquete,
        telefono
    })

    return fetch(`${DEV_ENDPOINT}/guardar`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(nombre,paquete,telefono)     
    }).then(res =>{
        if (!res.ok) throw new Error("Response is NOT ok");
        return res.json()
    }).then(res =>{    
        return res.data
    })
    /*
    axios.post(`${DEV_ENDPOINT}/guardar`,{
        nombre,
        paquete,
        telefono
    }).then((response)=>{
        return response.status
    }).catch((error)=>{
        console.log(error)
    })
    */
}