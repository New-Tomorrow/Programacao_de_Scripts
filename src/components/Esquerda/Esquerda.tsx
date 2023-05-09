import styled from 'styled-components';
import Estimativa from '../Estimativa/Estimativa';
import NomeLoteria from '../NomeLoteria/NomeLoteria';


function Esquerda({logo, nome, estimativa, valor, nomecor, estimativacor, datacor}:any) {
    return (
        <Esquerdar>
        <div >
            <NomeLoteria logo={logo} nome={nome} 
            nomecor={nomecor} 
            />
            <Estimativa estimativa={estimativa} valor={valor} 
            estimativacor={estimativacor} datacor={datacor}
            />
        </div>
        </Esquerdar>


    );
} export default Esquerda;

const Esquerdar = styled.div`
display: inline-block;
`
