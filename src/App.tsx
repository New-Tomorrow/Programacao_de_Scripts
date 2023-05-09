import Carregando from "./components/Carregando/carregando";
import { ContextoProvider } from "./contexts";
import './app.css'



function App() {
  return <ContextoProvider><Carregando/></ContextoProvider>
}

export default App;


