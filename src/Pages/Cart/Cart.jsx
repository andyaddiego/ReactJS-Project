import React, { useContext, useState } from "react";
import { Shop } from "../../Context/ShopProvider";
import generateOrderObject from "../../Services/generateOrderObject";
import TableRow from "./TableRow";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../Firebase/config";
import { doc, updateDoc } from "firebase/firestore";

const Cart = () => {
  const { products, clearCart, total } = useContext(Shop);

  const [loader, setLoader] = useState(false);

  const confirmPurchase = async () => {
    try {
      setLoader(true);

      const order = generateOrderObject({
        //aca tengo que hacer el form y setear la visualizacion del mismo, modal(?)
        cart: products,
        total: total(),
      });
      console.log(order);

      // Vamos a almacenar la orden en firebase y con el ID autogenerado por firebase, mostramos un alert de confirmación.
      const docRef = await addDoc(collection(db, "orders"), order);
      clearCart();
      //Posteriormente actualizar el stock recorriendo.
      for (const productCart of products) {

        const productRef = doc(db, "products", productCart.id);

        await updateDoc(productRef, {
          stock: productCart.stock - productCart.quantity
        });
      }

      alert("Your order has been confirmed with ID: " + docRef.id);

    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };

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
            //tengo que hacer que no se renderize la tabla ni el botón, y linkear a home.
          )}
        </tbody>
      </table>

      {products.length > 0 ? (
        <button onClick={() => clearCart()}>Remove All</button>
      ) : (
        ""
      )}
      {loader ? (
        <h2>Loading your purchase</h2>
      ) : (
        <button onClick={confirmPurchase}>Confirm Purchase</button>
      )}
      <form action=""></form>
    </>
  );
};

export default Cart;