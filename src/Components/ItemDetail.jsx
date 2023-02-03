import { useState, useContext } from "react";
import { Link } from "react-router-dom"
import { Shop } from "../Context/ShopProvider";
import Count from "./Count/Count";
import "./ItemDetail.css";

const ItemDetail = ({ product }) => {

  const [quantity, setQuantity] = useState(0)

  const {addProduct} = useContext(Shop)

  const onAdd = (cantidad) => {
    console.log(`Productos agregados: ${cantidad}`)
    setQuantity(cantidad)
    addProduct({...product, quantity: cantidad})
  }

  return (
    <div className="product_container">
      <img className="product_img" alt={product.name} src={product.image} />
      <div className="product_info">
        <h1>{product.brand}</h1>
        <h2>{product.name}</h2>
        <h2>{product.type}</h2>
        <h2>${product.price}</h2>
        <p>{product.description}</p>
      </div>
      <div>
        {
          quantity === 0 ?
          <Count stock={10} initial={1} onAdd={onAdd}/>
          :
          <button>
            <Link to="/cart">Go Cart</Link>
          </button>
        }
      </div>
    </div>
  );
};

export default ItemDetail;
//No se si es correcto ponerle el signo de pesos adelante, capaz luego jode la logica y si es correcto encajar ahi el contador
//el stock tambien lo puedo poner como product.stock.
