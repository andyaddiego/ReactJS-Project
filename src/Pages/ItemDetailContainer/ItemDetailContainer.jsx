import { useEffect, useState } from "react";
//import { data } from "../../data/data";
import { useParams } from "react-router-dom";
import ItemDetail from "../../Components/ItemDetail";
import { db } from "../../Firebase/config";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({});
  const { id } = useParams();

  /*const getData = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });*/

  useEffect(() => {
    const getProduct = async () => {
      const docRef = doc(db, "products", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        const productDetail = {
          id: docSnap.id,
          ...docSnap.data(),
        };
        setDetail(productDetail);
      } else {
        console.log("No such document!");
      }
    };
    getProduct();
  }, [id]);

  return (
    <div>
      {
        /*detail ? detail && <ItemDetail detail={detail} /> : <h2>Loading</h2>*/

        Object.keys(detail).length === 0 ? (
          <h2>Loading ...</h2>
        ) : (
          <ItemDetail detail={detail} />
        )
      }
    </div>
  );
};

export default ItemDetailContainer;

//para que muestre un mensaje de carga arriba de linea 28 podemos agregar:
// vamos a usar ternary no if.. en jsx { Objects.keys(product).lenght === 0 ? h2Loadingh2 : <...}
