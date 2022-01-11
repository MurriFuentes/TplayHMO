import React from "react";
import Card from "../components/Cards/Cards";
export default function Page_TvInternet() {
    return(
        <>
            <div className="SectionCards">
                <Card 
                    titulo="Inicial" 
                    subtitulo="TV + Internet 20 megas" 
                    precio="$459" 
                    velbajada="20" 
                    velsubida="3"
                    descripcion="Descuento de por vida"
                    descripcion2="-$20 a partir del 6º mes"
                />
                <Card 
                    titulo="Inicial" 
                    subtitulo="TV + Internet 40 megas" 
                    precio="$559" 
                    velbajada="20" 
                    velsubida="3"
                    descripcion="Descuento de por vida"
                    descripcion2="-$20 a partir del 6º mes"
                />
                <Card 
                    titulo="Inicial" 
                    subtitulo="TV + Internet 100 megas" 
                    precio="$859" 
                    velbajada="20" 
                    velsubida="3"
                    descripcion="Descuento de por vida"
                    descripcion2="-$20 a partir del 6º mes"
                />
                
            </div>
            <div className="SectionCards">
                <Card 
                    titulo="Inicial" 
                    subtitulo="TV + Internet 200 megas" 
                    precio="$1059" 
                    velbajada="20" 
                    velsubida="3"
                    descripcion="Descuento de por vida"
                    descripcion2="-$20 a partir del 6º mes"
                />
                <Card 
                    titulo="Inicial" 
                    subtitulo="TV + Internet 500 megas" 
                    precio="$1259" 
                    velbajada="20" 
                    velsubida="3"
                    descripcion="Descuento de por vida"
                    descripcion2="-$20 a partir del 6º mes"
                />
                <Card 
                    titulo="Inicial" 
                    subtitulo="TV + Internet 1000 megas" 
                    precio="$1459" 
                    velbajada="20" 
                    velsubida="3"
                    descripcion="Descuento de por vida"
                    descripcion2="-$20 a partir del 6º mes"
                />
            </div>
        </>
    );
}