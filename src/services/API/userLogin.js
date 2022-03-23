const ENDPOINT ="http://localhost:8080";

export default function login ({username,password}) {
    
    //return Promise.resolve("sdafwerq")
    
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
        console.log(token)        
        return token
    })
}