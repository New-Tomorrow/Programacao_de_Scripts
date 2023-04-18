import "./proximoConcurso.css";

function ProximoConsurso({ dados, data } : any) {
    return (
        <div className='dados'>
            <h4>
                {dados}{data}
            </h4>
        </div>
    );

}
export default ProximoConsurso;