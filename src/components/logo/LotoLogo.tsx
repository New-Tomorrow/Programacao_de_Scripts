import "./logo.css";
import logoloto from '../../assets/trevo-lotofacil.png'

function LotoLogo(){

    return(

            <div className="logotext">

                <img className="logo" src={logoloto} />

                <h1 className="text" style={{color: '#930089'}}>LOTOFÁCIL</h1>


            </div>


    );


}export default LotoLogo;