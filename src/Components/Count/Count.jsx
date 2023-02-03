import { useState } from "react";
import ShowCount from "../ShowCount/ShowCount";

const Count = ({onAdd, stock, initial}) => {
    const [count, setContador] = useState(initial);

    const add = () => {
        if (count < stock) setContador(count+1)
    }
    const less = () => {
      if (count > initial) setContador(count-1)
    }
  return (
    <div>
      <ShowCount contador={count}/>
      <div>
        <button onClick={less}>-</button>
        <button onClick={add}>+</button>
        <button onClick={() => onAdd(count)}>Purchase</button>
      </div>
    </div>
  )
}

export default Count

// OnAdd es la funcion para agregar el carrito, no está en el componente, viene de las propeidades, al pasarle al contador el initial que lo tengo en itemdetail arranca de 1.
/* Entre poner funcion flecha o llamar directo a la funcion me baso en que si mi funcion requiriera recibir un parametro o un argumento 
por default. Recibe el evento onClick={() =>less} cuando ademas de recibir el evento recibiera un numero x a sumar usaria
la funcion flecha dentro del evento para no tener un loop, con llamarla basta*/ 