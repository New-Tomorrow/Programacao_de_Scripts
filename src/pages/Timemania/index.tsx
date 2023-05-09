import Principal from "../../components/Principal/Principal";
import { useContexto } from "../../hooks";
import logoTime from '../../assets/trevo-timemania.png'
import {time} from   '../../styles/theme'

export default function Timemania() {

  const { timemania } = useContexto();

  function verificaMega() {

    if (timemania.quantidadeGanhadores === 1) {
      return `${timemania.quantidadeGanhadores} GANHADOR`
    } if (timemania.quantidadeGanhadores === 0) {
      return 'ACUMULOU!'
    } else {
      return `${timemania.quantidadeGanhadores} GANHADORES`
    }
  }

  return (
    <div>

      <Principal 
      logo={logoTime} 
      nome={'TIMEMANIA'} 
      estimativa={timemania.dataProximoConcurso} 
      valor={timemania.valorEstimadoProximoConcurso.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}

      numeros={timemania.dezenas} 
      ganhador={verificaMega()} 
      dados={`Concurso: ${timemania.numeroDoConcurso} - `} 
      data={` ${timemania.dataPorExtenso}`} 

      nomecor={{color:time.loteria}}
      estimativacor={{color:time.estimativa}}
      datacor={{color:time.data}}
      bolacor={{color:time.bolafonte, backgroundColor:time.bola}}
      acumulou={{color:time.acumulou}}

      />

    </div>

  );
}




