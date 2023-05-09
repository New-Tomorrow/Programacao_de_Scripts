import styled from "styled-components";

function Data({ dados, data, datacor }: any) {
    return (
        <Dados>
            <div style={datacor}>
                <h4>
                    {dados}{data}
                </h4>
            </div>
        </Dados>
    );

}
export default Data;

const Dados = styled.div`
margin-left: 4vh;
font-size: 1.1rem;
margin-top: -20px;
`
