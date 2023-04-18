import "./listNumeros.css";


function LotoNumeros({ numeros }: any){

    return(
        <div className="list">
            <ul>
                {numeros ? numeros.map((numero: any) => {
                    return <li>{numero}</li>
                }) : ""}
            </ul>
            
        </div>
    );
} 

export default LotoNumeros;