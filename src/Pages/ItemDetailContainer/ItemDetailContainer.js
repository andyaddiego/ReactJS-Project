import {useEffect, useState} from "react";
import { data } from "../../data/data";
import ItemDetail from "../../Components/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

  const [product, setProduct] = useState();
  const {id} = useParams()

  const getData = new Promise((resolve, reject)=>{
    setTimeout(()=> {
      resolve(data);
    }, 2000);
  })
  useEffect(() => {
    getData.then((response) => {
      console.log(response)
      setProduct(response.find((item)=>{
        return item.id === Number(id)
      }));
    })
  }, [id]);
  return (
    <div>
      { product && <ItemDetail product={product}/>}
    </div>
  )
}

export default ItemDetailContainer

//me va a mostrar el producto que elijo, es una ejercitacion de la clase de detalle del producto (no se si aplica al proyecto final)