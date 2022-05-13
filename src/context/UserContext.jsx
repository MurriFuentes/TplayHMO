import React, { useState } from "react";

const Context = React.createContext({})
/**
 * Es un Context que se utiliza para traer la informacion del usuario desde cualquier parte de la aplicacion.
 */
export function UserContextProvider( { children }) {
    const [jwt, setJWT] = useState(
        () => window.sessionStorage.getItem('jwt'),
    )
    
    return <Context.Provider value={{ jwt, setJWT }}>
        {children}
    </Context.Provider>
}

export default Context;