import React, { useState } from "react";

const Context = React.createContext({})

export function UserContextProvider( { children }) {
    const [jtw, setJWT] = useState(
        () => window.sessionStorage.getItem('jwt'),
    )
    
    return <Context.Provider value={{ jtw, setJWT }}>
        {children}
    </Context.Provider>
}

export default Context;