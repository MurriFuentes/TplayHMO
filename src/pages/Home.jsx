import React from "react";
import Card from "../components/Cards/Cards";
export default function Page_Home() {
    return(
        <>
            <div className="Section Home">
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