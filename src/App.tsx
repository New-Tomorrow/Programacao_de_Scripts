import { ContextoProvider } from "./contexts";
import Rotas from "./routes";
import { useContexto } from "./hooks";

function Principal(){
  const {megasena} = useContexto();
  return (
      <>
      {megasena.numeroDoConcurso?
      <div><Rotas/> </div>: <div className="carregando">Carregando...</div>}</>
     
  );
}

function App() {
  return <ContextoProvider><Principal/></ContextoProvider>
}

export default App;
