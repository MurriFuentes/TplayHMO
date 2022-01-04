import React from "react";
import Card from "../components/Cards/Cards";
import ControlledCarousel from "../components/Slider/Slider";
export default function Page_Internet() {

    return(
        <>
            <div className="Section colorverde">
                <h1>Seccion de paquetes de Internet</h1>
            </div>

            <div className="SectionCards">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <div className="SectionCards">
                <Card />
                <Card />
                <Card />
            </div>
        </>
    );
}