import React from "react";
import Card from "../components/Cards/Cards";
import ControlledCarousel from "../components/Slider/Slider";
export default function Page_Home() {
    return(
        <>
            <ControlledCarousel />
            
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