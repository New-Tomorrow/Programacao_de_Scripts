import styled from "styled-components";

function NomeLoteria({ logo, nome, nomecor }: any) {

    return (

        <div >
            <Logotext>
                <Logo src={logo} />

                <Text><h1 style={nomecor} >{nome} </h1></Text>

            </Logotext>
        </div>


    );


} export default NomeLoteria;

const Logo = styled.img`
width: 60px;
height: 60px;
`

const Logotext = styled.div`
margin: 50px;
display: flex;
`

const Text = styled.div`
margin-left: 20px;
font-size: 1.5rem;
line-height: 0;
`