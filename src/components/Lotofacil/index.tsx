import { useContexto } from "../../hooks";
import DataSorteio from "../dataSorteio/DataSorteio";
import Ganhador from "../ganhador/Ganhador";
import LotoNumeros from "../listNumeros/LotoNumeros";
import LotoLogo from "../logo/LotoLogo";
import ProximoConsurso from "../proximoConcurso/ProximoConcurso";
import ValorLoto from "../valor/ValorLoto";




import "../../app.css";

export default function Lotofacil() {

  const { lotofacil } = useContexto();

  function verificaLoto() {

    if (lotofacil.quantidadeGanhadores === 1) {
      return `${lotofacil.quantidadeGanhadores} GANHADOR`
    } if (lotofacil.quantidadeGanhadores === 0) {
      return 'ACUMULOU!'
    } else {
      return `${lotofacil.quantidadeGanhadores} GANHADORES`
    }
  }


  return (
    <div>
      <div className="tabela_2">
        <div className="coluna_1">
          <LotoLogo></LotoLogo>
          <DataSorteio data={lotofacil.dataProximoConcurso} />
          <ValorLoto valor={`R$ ${lotofacil.valorEstimadoProximoConcurso.toLocaleString()}`} />
         
        </div>

        <div className="coluna_2">
          <LotoNumeros numeros={lotofacil.dezenas} />
          <Ganhador ganhador={verificaLoto()} />
          <ProximoConsurso dados={`Concurso: ${lotofacil.numeroDoConcurso} -`} data={` ${lotofacil.dataPorExtenso}`} />

        </div>

      </div>

    </div>

  );
}



