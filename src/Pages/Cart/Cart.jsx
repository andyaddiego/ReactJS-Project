import React, { useContext } from "react";
import { Shop } from "../../Context/ShopProvider";
import TableRow from "./TableRow";

const Cart = () => {
  const { products, clearCart } = useContext(Shop);

  return (
    <>
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
          {products.length > 0 ? (
            products.map((product) => {
              return <TableRow key={product.id} product={product} />;
            })
          ) : (
            <p>Carrito vacío</p>
          )}
        </tbody>
      </table>
      {products.length > 0 ? <button onClick={() => clearCart()}>Vaciar carrito</button> : ""}
    </>
  );
};

export default Cart;
