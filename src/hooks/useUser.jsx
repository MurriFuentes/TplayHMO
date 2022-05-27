import { useCallback, useContext, useState } from "react";
import Context from "../context/UserContext";
import loginservice from "../services/API/UserLogin";
 
export default function UseUser (){
    const {jwt, setJWT} = useContext(Context)
    const [state, setState] = useState({loading: false, error: false})
    
    /**
     * Esta funcion se utiliza para hacer una consulta de un usuario y su contraseña dentro de la BD.
     * @function
     * @param {string} username
     * @param {string} password
      */
    const login = useCallback((username, password) => {
        setState({loading: true, error: false})
        loginservice(username,password)
            .then(jwt => {
                window.sessionStorage.setItem('jwt', jwt)
                setState({loading: false, error: false})        
                setJWT(jwt);
                alert("Login realizado con exito!", [
                    { text: "OK", onPress: () => console.log("alert closed") },
                  ]); 
            })
            .catch(err =>{
                window.sessionStorage.removeItem('jwt')
                setState({loading: false, error: true})
                alert("Usuario o contraseña incorrecto!", [
                    { text: "OK", onPress: () => console.log("alert closed") },
                  ]);
                console.error(err)
            })
    }, [setJWT])

    /**
     * Esta funcion se utiliza para cerrar sesion en el la pagina.
     * @function
     */
    const logout = useCallback(() => {
        window.sessionStorage.removeItem('jwt')
        setJWT(null)
    }, [setJWT])
    
    return {
        isLogged: Boolean(jwt),
        isLogginLoading: state.loading,
        hasLogginError: state.error,
        login,
        logout
    }
}