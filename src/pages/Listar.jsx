import {getList} from "../services/contactListService"
export default function Page_Listar(){
    return(
        <>
            <div className="Section">
            <ul className="lista-items">
                        {getList().map((item) => (
                            <li key={item.id} >
                                <p>{item.nombre}</p>
                                <p>{item.paquete}</p>
                                <p>{item.telefono}</p>
                            </li>
                        ))}
                    </ul>
            </div>
        </>
    )
}