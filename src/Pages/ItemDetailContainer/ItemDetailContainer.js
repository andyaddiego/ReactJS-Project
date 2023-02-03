import { useEffect, useState } from "react";
import { data } from "../../data/data";
import ItemDetail from "../../Components/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState();
  const { id } = useParams();

  const getData = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
  useEffect(() => {
    getData.then((response) => {
      console.log(response);
      setProduct(
        response.find((item) => {
          return item.id === Number(id);
        })
      );
    });
  }, [id]);

  return (
    <div>
      {product ? 
      product && <ItemDetail product={product} /> 
      : <h2>Loading</h2>}
    </div>
  );
};

export default ItemDetailContainer;

//para que muestre un mensaje de carga arriba de linea 28 podemos agregar:
// vamos a usar ternary no if.. en jsx { Objects.keys(product).lenght === 0 ? h2Loadingh2 : <...}