import styled from "styled-components";
import { useContexto } from "../../hooks";
import Rotas from "../../routes";

function Carregando(){
  const {megasena} = useContexto();
  return (
      <>
      {megasena.numeroDoConcurso?
      <div><Rotas/> </div>: <Carregandor> <div className="carregando">Carregando...</div></Carregandor>}</>
    
  );
}export default Carregando;

const Carregandor = styled.div`
display: flex;
position: absolute;
top: 50%;
margin-top: -30px;
left: 50%;
margin-left: -100px;
font-size: 2rem;
`