import { useState, useContext } from "react";
import { Link } from "react-router-dom"
import { Shop } from "../Context/ShopProvider";
import Count from "./Count/Count";
import "./ItemDetail.css";

const ItemDetail = ({ detail }) => {

  const [quantity, setQuantity] = useState(0)

  const {addProduct} = useContext(Shop)

  const onAdd = (cantidad) => {
    console.log(`Productos agregados: ${cantidad}`)
    setQuantity(cantidad)
    addProduct({...detail, quantity: cantidad})
  }

  return (
    <div className="product_container">
      <img className="product_img" alt={detail.name} src={detail.image} />
      <div className="product_info">
        <h1>{detail.brand}</h1>
        <h2>{detail.name}</h2>
        <h2>{detail.type}</h2>
        <h2>${detail.price}</h2>
        <p>{detail.description}</p>
      </div>
      <div>
        {
          quantity === 0 ?
          <Count stock={detail.stock} initial={1} onAdd={onAdd}/>
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
