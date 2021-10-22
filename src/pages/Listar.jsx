import { useEffect, useState } from "react"
import { getList } from "../services/contactListService"
export default function Page_Listar() {
    const [dataList, setDataList] = useState([]);
    let dataLoaded = false;

    const getListData = async () => {
        const data = await getList();
        setDataList(data ? data : []);
        dataLoaded = true;
    }

    useEffect(() => {
        if (!dataLoaded) {
            getListData();
        }
    }, [dataList])

    return (
        <>
            {dataList.length > 0 &&
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
            }

        </>
    )
}