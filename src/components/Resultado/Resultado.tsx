import styled from "styled-components";

function Resultado({ numeros, bolacor }: any){

    return(
        <div>
            <ul >
                {numeros ? numeros.map((numero: any) => {
                    return <Circulo style={bolacor}> {numero}</Circulo>
                }) : ""}
            </ul>
            
        </div>
    );
} 

export default Resultado;


const Circulo = styled.li`

display: inline-block;
margin-right: 30px;

/* Forma do circulo */
border-radius: 100%;
height: 60px;
width: 60px;


/* configuracao de texto  */
font-size: 1.5rem;
text-align: center;
line-height: 2.5;
margin-top: 30px;
background-color: blue;

`
