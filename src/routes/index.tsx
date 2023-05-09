import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "../components/Menu/Menu";
import Quina from "../pages/Quina";
import Megasena from "../pages/Megasena";
import Timemania from "../pages/Timemania";

function Rotas() {
   
    return (
        <BrowserRouter>
        <Menu />
            <Routes>
                <Route path="/" element={<Timemania/>} />
                <Route path="/timemania" element={<Timemania/>} />
                <Route path="/megasena" element={<Megasena />} />
                <Route path="/quina" element={<Quina />} />
                
            </Routes>
        </BrowserRouter>
    )

} export default Rotas;