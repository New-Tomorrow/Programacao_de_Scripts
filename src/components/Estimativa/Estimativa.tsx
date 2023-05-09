import styled from 'styled-components';

function Estimativa({ estimativa, valor, estimativacor, datacor }: any) {

    return (
        <>
            <Estimativar>
                <div style={datacor} >
                    <h3>Estimativa de prêmio no próximo concurso. Sorteio em {estimativa}:</h3>
                </div>
            </Estimativar>
            <Valor>
                <div className="valor" style={estimativacor}>
                    <h2>
                        {valor}
                    </h2>
                </div>
            </Valor>
        </>

    );
} export default Estimativa;

const Estimativar = styled.div`
margin-left: 14vh;
max-width: 350px;
font-size: 1.1rem;
margin-top: -20px;
`

const Valor = styled.div`
font-weight: bold;
margin-left: 14vh;
font-size: 1.5rem;
`