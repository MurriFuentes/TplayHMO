const ENDPOINT ="http://localhost:8080";

export default function Registrar_Usuario ({
    Nombre,
    ApellidoPaterno,
    pellidoMaterno,
    FechaNacimiento,
    NumeroDeEmpleado
}) {
    
    return fetch(`${ENDPOINT}/guardarUsuario`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            Nombre,
            ApellidoPaterno,
            pellidoMaterno,
            FechaNacimiento,
            NumeroDeEmpleado
        })     
    }).then(res =>{
        if (!res.ok) throw new Error("Response is NOT ok");
        return res.json()
    }).then(res =>{
        const {token} = res
        console.log(token)        
        return token
    })
}