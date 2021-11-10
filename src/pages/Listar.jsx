import { useEffect, useState } from "react"
import { getList } from "../services/contactListService"
import { useHistory } from "react-router-dom";

import useUser from "../hooks/useUser";

export default function Page_Listar() {
    const [dataList, setDataList] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);
    const { isLogged } = useUser();
    let history = useHistory();
    
    useEffect(() => {
        if (!isLogged) {
            history.push("./")
        }
    }, [history, isLogged])

    const getListData = async () => {
        const data = await getList();
        setDataList(data ? data : []);
        setDataLoaded(true);
    }

    useEffect(() => {
        if (!dataLoaded) {
            getListData();
        }
    }, [dataList, dataLoaded])

    return (
        <>
            {dataList.length > 0 && isLogged &&
                <div className="Section">
                    <ul className="lista-items">
                        {dataList.map((item) => (
                            <li key={item.id} >
                                <p>{item.nombre}</p>
                                <p>{item.paquete}</p>
                                <p>{item.telefono}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            } : <h1 className="Section"> SIN ACCESO</h1>
        
        </>
    )
}