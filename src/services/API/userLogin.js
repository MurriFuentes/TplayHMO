const ENDPOINT ="https://springtotal.wl.r.appspot.com";
/**
 * Este metodo verifica si el usuario y contraseña existe en la BD.
 * @function
 * @param {string} username
 * @param {string} password
 * @returns {string} Regresa un token de JWT.
 */
export default function login ({username,password}) {
    window['username'] = username;
    
    return fetch(`${ENDPOINT}/authenticate`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({username,password})     
    }).then(res =>{
        if (!res.ok) throw new Error("Response is NOT ok");
        return res.json()
    }).then(res =>{
        const {token} = res        
        return token
    })
}