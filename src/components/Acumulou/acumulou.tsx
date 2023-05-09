import styled from 'styled-components';

function Acumulou({ ganhador, acumulou }: any) {
    return (
        <Ganhador>
            <div style={acumulou}>
                <h2 >
                    {ganhador}
                </h2>
            </div>
        </Ganhador>
    )
}

export default Acumulou;

const Ganhador = styled.div`
text-align: center;
text-transform: uppercase;
display: inline-block;
margin-left: 40px;
font-size: 1.8rem;
margin-top: -14px;
`