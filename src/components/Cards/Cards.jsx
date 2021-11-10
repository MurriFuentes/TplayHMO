import * as icons from 'react-icons/bs';
import {Button} from "reactstrap"
export default function Card(){
    return(
        <>
            <div className="cardContainer">
                <div className="cardHeader">
                    Internet 20 megas   
                </div>
                <div className="cardBody">
                    <p className="cardPrice">
                        $500
                    </p>
                    <div>
                        <icons.BsArrowDown/>
                        <icons.BsArrowUp/>
                    </div>
                    <div className="Megas">
                        100 40
                    </div>
                    <div className="cardInfo">
                        Informacion Extra
                    </div>
                    <Button href="./Contratar" className="btnContratar">Contratar</Button>
                </div>
            </div>
        </>
    )
}