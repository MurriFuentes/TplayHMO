const ENDPOINT ="https://sapient-tracer-347401.uw.r.appspot.com";

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