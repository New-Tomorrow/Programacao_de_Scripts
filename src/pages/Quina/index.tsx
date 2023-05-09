import Principal from "../../components/Principal/Principal";
import { useContexto } from "../../hooks";
import logoquina from '../../assets/trevo-quina.png'
import {quin} from   '../../styles/theme'

export default function Quina() {

  const { quina } = useContexto();

  function verifica() {

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

      <Principal 
      logo={logoquina} 
      nome={'QUINA'} 
      estimativa={quina.dataProximoConcurso} 
      valor={quina.valorEstimadoProximoConcurso.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}

      numeros={quina.dezenas} 
      ganhador={verifica()} 
      dados={`Concurso: ${quina.numeroDoConcurso} - `} 
      data={` ${quina.dataPorExtenso}`} 

      nomecor={{color:quin.loteria}}
      estimativacor={{color:quin.estimativa}}
      datacor={{color:quin.data}}
      bolacor={{color:quin.bolafonte, backgroundColor:quin.bola}}
      acumulou={{color:quin.acumulou}}


      />

    </div>

  );
}




