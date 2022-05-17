import React from "react";
import Card from "../components/Cards/Cards";
export default function Page_TvInternet() {
  return (
    <><div className="bg-dark">
      <h1 className="h1 text-center pt-4 pb-4 bg-dark text-success">Escoge el paquete que mas te guste </h1>
      <div className="SectionCards container pt-4 pb-4">
        <div className="row">
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
      </div>
    </div>
    </>
  );
}
