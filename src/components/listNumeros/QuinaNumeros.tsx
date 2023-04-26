import "./listNumeros.css";

function QuinaNumeros({ numeros }: any){

    return(
        <div className="circuloQ">
            <ul>
                {numeros ? numeros.map((numero: any) => {
                    return <li>{numero}</li>
                }) : ""}
            </ul>
            
        </div>
    );
} 

export default QuinaNumeros;