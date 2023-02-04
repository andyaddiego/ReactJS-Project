//import { data } from "../../data/data";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../Firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";
import ItemList from "../../Components/ItemList/ItemList";
import "./ItemListContainer.css";

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);

  const {categoryId} = useParams()

  /*const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });*/

  useEffect(() => {

    const getProducts = async () => {
      let querySnapshot;
      if (categoryId) {
        const q = query(collection(db, "products"),where("category", "==", categoryId));
        querySnapshot = await getDocs(q);
      }else {
        querySnapshot = await getDocs(collection(db, "products"));
      }

      const productsFirebase = [];
      querySnapshot.forEach((doc) => {
        const product = {
          id: doc.id,
          ...doc.data(),
        };
        productsFirebase.push(product);
      });
      setProducts(productsFirebase);
    };

    getProducts();
  }, [categoryId]);

  return (
    <div className="cards_container">
      <ItemList productList={products} />
    </div>
  );
};

export default ItemListContainer;

//VA A SER EL PADRE DE TODOS , el item list(flex) el hijo que son las cards y luego el item que es la card.
//setTimeout simula una peticion a un servidor