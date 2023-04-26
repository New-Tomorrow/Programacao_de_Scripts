import "./listNumeros.css";

function MegaNumeros({ numeros }: any){

    return(
        <div className="circuloM">
            <ul>
                {numeros ? numeros.map((numero: any) => {
                    return <li>{numero}</li>
                }) : ""}
            </ul>
            
        </div>
    );
} 

export default MegaNumeros;