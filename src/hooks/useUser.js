import { useCallback, useContext, useState } from "react";
import Context from "../context/UserContext";
import loginservice from "../services/login"

export default function useUser (){
    let {jwt, setJWT} =   (Context)
    const [state, setState] = useState({loading: false,
    error: false})

    const login = useCallback((username, password) => {
        setState({loading: true, error: false})
        loginservice(username,password)
            .then(jwtResponse => {
                setState({loading: false, error: false})
                jwt=jwtResponse;
                
            })
            .catch(err =>{
                setState({loading: false, error: true})
                console.error(err)
            })
    }, [setJWT])

    const logout = useCallback(() => {
        setJWT(null)
    }, [setJWT])


    return {
        isLogged: Boolean(jwt),
        jwt,
        isLogginLoading: state.loading,
        hasLogginError: state.error,
        login,
        logout
    }
}