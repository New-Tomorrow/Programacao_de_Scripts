import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

function Menu() {
    const cor = useLocation();
    return (
        <div>
            <Menur>
            <Linkr theme={cor.pathname === "/timemania"? d : t }    to={"/timemania"}> Timemania</Linkr>
            <Linkr theme={cor.pathname === "/megasena"? d : m }  to={"/megasena"} > Megasena</Linkr>
            <Linkr theme={cor.pathname === "/quina"? d : q }  to={"/quina"} > Quina</Linkr>
            </Menur>
        </div>
    )
}

export default Menu;

const Linkr = styled(Link)`
text-decoration: none;
font-size: 1.7rem;
margin-left: 20px;
font-weight: 600;
color: ${d =>d.theme.cor};
`

const Menur = styled.div`
margin-left: 58px;
`

const t = {
    cor: "#00ff48"
}
const m = {
    cor: "#209869"
}
const q = {
    cor: "#260085"
}
const d = {
    cor: "#aaa"
}

