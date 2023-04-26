import { useContexto } from "../../hooks";
import DataSorteio from "../dataSorteio/DataSorteio";
import Ganhador from "../ganhador/Ganhador";
import QuinaNumero from "../listNumeros/QuinaNumeros";
import ProximoConsurso from "../proximoConcurso/ProximoConcurso";
import Valor from "../valor/Valor";
import "../../app.css";
import QuinaLogo from "../logo/QuinaLogo";

export default function Quinac() {

  const { quina} = useContexto();

  function verificaMega() {

    if (quina.quantidadeGanhadores === 1) {
      return `${quina.quantidadeGanhadores} GANHADOR`
    } if (quina.quantidadeGanhadores === 0) {
      return 'ACUMULOU!'
    } else {
      return `${quina.quantidadeGanhadores} GANHADORES`
    }
  }

  return (
    <div>
      <div className="tabela">
        <div className="coluna_1">
          <QuinaLogo />
          <DataSorteio data={quina.dataProximoConcurso} />
          <div style={{color:'#260085'}}><Valor valor={quina.valorEstimadoProximoConcurso.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} /></div>

        </div>

        <div className="coluna_2">

          <QuinaNumero numeros={quina.dezenas} />
          <Ganhador ganhador={verificaMega()} />
          <ProximoConsurso dados={`Concurso: ${quina.numeroDoConcurso} -`} data={` ${quina.dataPorExtenso}`} />

        </div>

      </div>

    </div>

  );
}

