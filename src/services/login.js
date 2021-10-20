const ENDPOINT ="http://localhost:8080";

export default function login ({username,password}) {
    return Promise.resolve("sdafwerq")
    
    return fetch(`${ENDPOINT}/Authorization`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({username,password})     
    }).then(rest =>{
        if (!rest.ok) throw new Error("Response is NOT ok");
        return rest.json()
    }).then(res =>{
        const {token} = res
        console.log(token)        
        return token
    })
}