import React, { useContext, useState } from "react";
import { Shop } from "../../Context/ShopProvider";
import generateOrderObject from "../../Services/generateOrderObject";
import TableRow from "./TableRow";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../Firebase/config";
import { doc, updateDoc } from "firebase/firestore";
import FormComp from "../../Components/Form/Form";
import { Link } from 'react-router-dom';

const Cart = () => {
  const { products, clearCart, total } = useContext(Shop);

  const [formVis, setFormVis] = useState(false);

  const [loader, setLoader] = useState(false);

  const confirmPurchase = async (formData) => {

    const {name, email, phone} = formData;

    try {
      setLoader(true);

      const order = generateOrderObject({
        name,
        email,
        phone,
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
          stock: productCart.stock - productCart.quantity,
        });
      }

      alert("Your order has been confirmed with ID: " + docRef.id);
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
      setFormVis(false);
    }
  };

  return (
    <>
      {
        products.length !== 0 ?
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
            {products.map((product) => {
              return <TableRow key={product.id} product={product} />
            })}
          </tbody>
        </table>

        {
        loader ? 
        <h2>Loading your purchase</h2>
        : 
        <button onClick={() => setFormVis(true)}>Confirm Purchase</button>
        }
        </>
        :
        <>
          <p>Your cart is empty</p>
          <button>
            <Link to = "/">Home</Link>
          </button>
        </>
      }
      {formVis ? 
        <FormComp 
          confirmPurchase = {confirmPurchase}
        /> 
        : null
      }
    </>
  )
}

export default Cart;
