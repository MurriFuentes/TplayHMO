import { Link } from "react-router-dom"
export default function Card(){
    return(
            <div className="cardContainer">
                <div className="cardHeader">
                    Internet 20 megas   
                </div>
                <div className="cardBody">
                    <p className="cardPrice">
                        $500
                    </p>
                    <div className="Megas">
                        100 40
                    </div>
                    <div className="cardInfo">
                        Informacion Extra
                    </div>
                    <Link to="./Login" className="btnContratar">Contratar</Link>
                </div>
            </div>
    )
}