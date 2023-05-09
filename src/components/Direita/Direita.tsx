import styled from 'styled-components';
import Acumulou from '../Acumulou/acumulou';
import Data from '../Data/Data';
import Resultado from '../Resultado/Resultado';


function Direita({ numeros, ganhador, dados, data, bolacor, acumulou, datacor }: any) {
    return (
        <Direitar>
            <div >
                <Resultado numeros={numeros} bolacor={bolacor} />
                <Acumulou ganhador={ganhador} acumulou={acumulou} />
                <Data dados={dados} data={data} datacor={datacor} />
            </div>
        </Direitar>


    );
} export default Direita;

const Direitar = styled.div`
display: inline-block;
margin-left: 80px;
`