import styled from 'styled-components';
import Direita from '../Direita/Direita';
import Esquerda from '../Esquerda/Esquerda';


export default function Principal({ logo, nome, estimativa, valor, numeros, ganhador, dados, data, nomecor, estimativacor, datacor,
  bolacor, acumulou }: any) {

  return (
    <Principalr>
      <div>

        <Esquerda logo={logo} nome={nome} estimativa={estimativa} valor={valor} nomecor={nomecor}
          estimativacor={estimativacor} datacor={datacor}
        />

        <Direita numeros={numeros} ganhador={ganhador} dados={dados} data={data}
          bolacor={bolacor} acumulou={acumulou} datacor={datacor}
        />

      </div>
    </Principalr>
  );
}

const Principalr = styled.div`
height: 30vh;
display: flex;
border-bottom: solid 2px;
border-color: #ddd;
`


