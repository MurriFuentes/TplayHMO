import * as icons from "react-icons/bs";
import ControlledCarousel from "../components/Slider/Slider";
import Page_Contratar from '../../src/pages/Contratar'
import { Link } from 'react-router-dom';
export default function Page_Home() {
    return (
        <>
            <div className="container-fluid bg-dark">
                <div className="row">
                    <div className="col-12">
                        <div className="">
                            <ControlledCarousel />
                        </div>
                    </div>
                </div>
                <div className="card-group">
                    <div className="col-md-6 col-12 col-lg-8 bg-desvanecido text-white p-5">
                        <div className="">
                            <h1 className="h2 text-white">¿Por que contratar Total play?</h1>
                            <p className="parrafosPrincipal fw-bold fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam quae vero vitae unde quaerat similique amet autem dolore aperiam reprehenderit culpa magnam vel, aliquid blanditiis error odit, possimus perferendis.
                                Dolore, et. Magni ducimus omnis dolorum, voluptates expedita perferendis doloremque dicta illo facilis. Facere perferendis iste velit totam adipisci quae illum et? Quae fugit autem voluptate dolorem quia hic eius.</p>
                            <br />
                        </div>
                        <Link to="/Cotizador">
                        <div className="botonIrCotizador ">
                            
                             COTIZADOR
                            
                            {/* <icons.BsFillPuzzleFill /> */}
                        </div>
                        </Link>

                    </div>
                    <div className="col-md-6 col-12 col-lg-4 bg-black p-5">
                        {/* <div className="">
                            <h1 className="h2 text-white">Contrata</h1>
                            <p className="parrafosPrincipal fw-bold text-white fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam quae vero vitae unde quaerat similique amet autem dolore aperiam reprehenderit culpa magnam vel, aliquid blanditiis error odit, possimus perferendis.
                                Dolore, et. Magni ducimus omnis dolorum, voluptates expedita perferendis doloremque dicta illo facilis. Facere perferendis iste velit totam adipisci quae illum et? Quae fugit autem voluptate dolorem quia hic eius.</p>
                        </div> */}
                        <div>
                            <h2 className="h2 text-white text-center"><icons.BsFillTelephoneFill />Contacto<icons.BsFillTelephoneFill /></h2>
                        </div>
                        <Page_Contratar />
                    </div>
                </div>
            </div>

        </>
    );
}