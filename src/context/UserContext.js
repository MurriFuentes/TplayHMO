import React, { useState } from "react";

const Context = React.createContext({})

export function UserContextProvider( { children }) {
    const [jtw, setJWT] = useState(null)

    return <Context.Provider value={{ jtw, setJWT }}>
        {children}
    </Context.Provider>
}

export default Context;