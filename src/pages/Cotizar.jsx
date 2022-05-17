import Cotizador from "../components/Cotizador/Cotizador";


export default function Page_Cotizador() {
    return (
        <>
            <div className="bg-black">
                <div className="container-fluid mb-3">
                    <div className="bg-black text-center pb-3">
                        <h1 className="h1 text-success pt-5">COTIZADOR</h1>
                        <h2 className="h2 text-success">MODELA TU PAQUETE IDEAL</h2>
                    </div>
                    <div className="card-group">
                        <div className="col-md-6 col-12 col-lg-6 bg-dark text-white p-4">
                            <h3 className="h3 text-warning">
                                Modela el paquete de tu preferencia y observa el presupuesto
                            </h3>
                        </div>
                        <div className="col-md-6 col-12 col-lg-6 bg-dark  p-4">
                            <h3 className="h3 text-primary">
                                Escoge un paquete con 100 megas o más y recibe un descuento de 170
                                pesos en la instalacion
                            </h3>

                        </div>
                    </div>
                </div>
                <Cotizador />
            </div>
        </>
    );
}