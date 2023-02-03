import React, { useContext } from "react"
import { Shop } from "../../Context/ShopProvider";
import TableRow from "./TableRow"

const Cart = () => {

  const {products} = useContext(Shop);

  return (
    <table>
      <thead>
        <tr>
          <td>ID</td>
          <td>PRODUCTO</td>
          <td>NOMBRE</td>
          <td>CANTIDAD</td>
          <td>PRECIO</td>
          <td>REMOVE</td>
        </tr>
      </thead>
      <tbody>
        {products.map(product => {
          return <TableRow key={product.id} product={product}/>
        })}
      </tbody>
    </table>

  )
}

export default Cart