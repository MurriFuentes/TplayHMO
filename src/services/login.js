const ENDPOINT ="http://localhost:8000";

export default function login ({username,password}) {
    return fetch(`${ENDPOINT}/authentification`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({username,password})     
    }).then(rest =>{
        if (!rest.ok) throw new Error("Response is NOT ok");
        return rest.json()
    }).then(res =>{
        const {jwt} = res
        return jwt
    })
}