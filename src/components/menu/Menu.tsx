import { Link } from "react-router-dom";
import "./menu.css"

function Menu() {
    return (
        <div className="menu">

            <Link className="l" id="link" to={"/lotofacil"} > Lotofácil</Link>
            <Link className="m" id="link" to={"/megasena"} > Megasena</Link>
            <Link className="q"  id="link" to={"/quina"} > Quina</Link>
            
        </div>
    )
}

export default Menu;