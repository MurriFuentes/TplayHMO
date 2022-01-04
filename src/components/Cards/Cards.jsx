import * as icons from 'react-icons/bs';
import {Button} from "reactstrap"
export default function Card(){
    return(
        <>
            <div className="cardContainer">
                <div className="cardHeader">
                    Inicial
                    <br></br>
                    Internet 20 megas   
                </div>
                <div className="cardBody">
                    <p className="cardPrice">
                        $459
                    </p>
                    <div>
                        <icons.BsArrowDown/>
                        <icons.BsArrowUp/>
                    </div>
                    <div className="Megas">
                        20 2
                    </div>
                    <div className="cardInfo">
                    Descuento de por vida
                    <br></br>
                    -$20 a partir del 6º mes
                    </div>
                    <Button href="./Contratar" className="btnContratar">Contratar</Button>
                </div>
            </div>
        </>
    )
}