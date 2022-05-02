import Cotizador from "../components/Cotizador/Cotizador";
export default function Page_Cotizador() {
    return (
        <>
            <div className="container mt-5">
                <div className="Cot_Message_Container p-4 text-center">
                    <h2>
                        Modela el paquete de tu preferencia
                    </h2>
                    <p>
                        Escoge un paquete con 100 megas o más y recibe un descuento de 170
                        pesos en la instalacion
                    </p>
                </div>
            </div>
            <div className="container-fluid">
                <Cotizador />
            </div>
        </>
    );
}