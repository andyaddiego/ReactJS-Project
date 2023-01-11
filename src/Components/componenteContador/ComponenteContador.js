import { useState } from "react";
import ComponenteMuestraConteo from "../componenteConteo/ComponenteMuestraConteo";

const ComponenteContador = () => {
    const [contador, setContador] = useState(0);

    const add = () => {
        setContador(contador+1)
    }
    const less = () => {
        setContador(contador-1)
    }
  return (
    <div>
      <ComponenteMuestraConteo contador={contador}/>
    <div>
        <button onClick={add}>Agregar</button>
        <button onClick={less}>Quitar</button>
        </div>
    </div>
  )
}

export default ComponenteContador

/* Entre poner funcion flecha o llamar directo a la funcion me baso en que si mi funcion requiriera recibir un parametro o un argumento 
por default. Recibe el evento onClick={() =>less} cuando ademas de recibir el evento recibiera un numero x a sumar usaria
la funcion flecha dentro del evento para no tener un loop, con llamarla basta*/ 