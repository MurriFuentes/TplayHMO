import Cotizador from "../components/Cotizador/Cotizador";
export default function Page_Cotizador() {
    return(
        <div className="Section Row">
                <div className="Cot_Message_Container">
                    <h2>
                        Modela el paquete de tu preferencia
                    </h2>
                    <p>
                        Escoge un paquete con 100 megas o más y recibe un descuento de 170
                        pesos en la instalacion
                    </p>
                </div>
                <Cotizador/>
        </div>
    );
}