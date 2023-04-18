import Lotofacil from "../components/Lotofacil";
import Megasena from "../components/Megasena";
import { useContexto } from "../hooks";

function Principal(){
    const {megasena} = useContexto();
    return (
        <>
        {megasena.numeroDoConcurso?
        <div><Megasena/><Lotofacil/> </div>: <div className="carregando">Carregando...</div>}</>
       
    );
}
export default Principal;