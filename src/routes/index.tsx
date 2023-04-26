import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "../components/menu/Menu";
import Loto from "../pages/Loto";
import Mega from "../pages/Mega";
import Quina from "../pages/Quina";

function Rotas() {
   
    return (
        <BrowserRouter>
        <Menu />
            <Routes>
                <Route path="/" element={<Loto />} />
                <Route path="/lotofacil" element={<Loto />} />
                <Route path="/megasena" element={<Mega />} />
                <Route path="/quina" element={<Quina />} />
                
            </Routes>
        </BrowserRouter>
    )

} export default Rotas;