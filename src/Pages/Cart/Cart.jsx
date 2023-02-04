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
            <td>PRODUCT</td>
            <td>NAME</td>
            <td>QUANTITY</td>
            <td>PRICE</td>
            <td>REMOVE</td>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((product) => {
              return <TableRow key={product.id} product={product} />;
            })
          ) : (
            <p>Your cart is empty</p>
          )}
        </tbody>
      </table>
      {products.length > 0 ? <button onClick={() => clearCart()}>Vaciar carrito</button> : ""}
    </>
  );
};

export default Cart;
