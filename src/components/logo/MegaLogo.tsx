import "./logo.css";
import logomegasena from '../../assets/trevo-megasena.png'

function MegaLogo() {

    return (

        <div className="logotext">

            <img className="logo" src={logomegasena} />

            <h1 className="text" style={{ color: '#209869' }}>MEGA-SENA</h1>


        </div>


    );


} export default MegaLogo;