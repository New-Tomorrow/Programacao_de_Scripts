import { useContexto } from "../../hooks";
import DataSorteio from "../dataSorteio/DataSorteio";
import Ganhador from "../ganhador/Ganhador";
import MegaLogo from "../logo/MegaLogo";
import MegaNumero from "../listNumeros/MegaNumeros";
import ProximoConsurso from "../proximoConcurso/ProximoConcurso";
import Valor from "../valor/Valor";
import "../../app.css";

export default function Megasena() {

  const { megasena } = useContexto();

  function verificaMega() {

    if (megasena.quantidadeGanhadores === 1) {
      return `${megasena.quantidadeGanhadores} GANHADOR`
    } if (megasena.quantidadeGanhadores === 0) {
      return 'ACUMULOU!'
    } else {
      return `${megasena.quantidadeGanhadores} GANHADORES`
    }
  }

  return (
    <div>
      <div className="tabela">
        <div className="coluna_1">
          <MegaLogo />
          <DataSorteio data={megasena.dataProximoConcurso} />
          <div style={{color:'#209869'}} ><Valor valor={megasena.valorEstimadoProximoConcurso.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} /></div>

        </div>

        <div className="coluna_2">
          <MegaNumero numeros={megasena.dezenas}/>
          <Ganhador ganhador={verificaMega()} />
          <ProximoConsurso dados={`Concurso: ${megasena.numeroDoConcurso} -`} data={` ${megasena.dataPorExtenso}`} />

        </div>

      </div>

    </div>

  );
}



