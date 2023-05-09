import Principal from "../../components/Principal/Principal";
import { useContexto } from "../../hooks";
import logoMega from '../../assets/trevo-megasena.png'
import {mega} from   '../../styles/theme'

export default function Megasena() {

  const { megasena } = useContexto();

  function verifica() {

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

      <Principal 
      logo={logoMega} 
      nome={'MEGA-SENA'} 
      estimativa={megasena.dataProximoConcurso} 
      valor={megasena.valorEstimadoProximoConcurso.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}

      numeros={megasena.dezenas} 
      ganhador={verifica()} 
      dados={`Concurso: ${megasena.numeroDoConcurso} - `} 
      data={` ${megasena.dataPorExtenso}`} 

      nomecor={{color:mega.loteria}}
      estimativacor={{color:mega.estimativa}}
      datacor={{color:mega.data}}
      bolacor={{color:mega.bolafonte, backgroundColor:mega.bola}}
      acumulou={{color:mega.acumulou}}


      />

    </div>

  );
}




