import * as icons from 'react-icons/bs';
import {Button} from "reactstrap"
export default function Card(props){
    return(
        <>
            <div className="cardContainer">
                <div className="cardHeader">
                    {props.titulo}
                    <br></br>
                    {props.subtitulo}   
                </div>
                <div className="cardBody">
                    <p className="cardPrice">
                        {props.precio}
                    </p>
                    <div>
                        <icons.BsArrowDown/>
                        <icons.BsArrowUp/>
                    </div>
                    <div className="Megas">
                        {props.velbajada} {props.velsubida}
                    </div>
                    <div className="cardInfo">
                    {props.descripcion}
                    <br></br>
                    {props.descripcion2}
                    </div>
                    <Button href="./Contratar" className="btnContratar">Contratar</Button>
                </div>
            </div>
        </>
    )
}