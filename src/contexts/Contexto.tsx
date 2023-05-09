import { createContext, useEffect, useState } from "react";
import { LoteriaProps, Props } from "../types";
import Loteria from "../services/Loteria";

const Contexto = createContext({} as LoteriaProps);

function ContextoProvider({ children }: any) {
  const [megasena, setMegasena] = useState({} as Props);
  const [timemania, setTimemania] = useState({} as Props);
  const [quina, setQuina] = useState({} as Props);

  useEffect(() => {
    (async () => {
      const resp = await Loteria.get();
      setMegasena(resp.megasena);
      setTimemania(resp.timemania);
      setQuina(resp.quina);
    })()
  }, []);

  return (
    <Contexto.Provider value={{megasena, timemania, quina}}>
      {children}
    </Contexto.Provider>
  );
}

export { Contexto, ContextoProvider };