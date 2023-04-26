import "./logo.css";
import logoquina from '../../assets/trevo-quina.png'

function QuinaLogo(){

    return(

            <div className="logotext">

                <img className="logo" src={logoquina} />

                        <h1 className="text" style={{color:'#260085'}}>QUINA</h1>


            </div>


    );


}export default QuinaLogo;