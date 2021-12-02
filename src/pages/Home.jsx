import React from "react";
import Card from "../components/Cards/Cards";
import ControlledCarousel from "../components/Slider/Slider";
export default function Page_Home() {
    return(
        <>
            <div className="Carrousel_Container">
                <ControlledCarousel/>
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