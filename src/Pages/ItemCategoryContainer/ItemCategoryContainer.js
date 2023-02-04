/*import { useEffect, useState } from "react";
import { data } from "../../data/data";
import { useParams } from "react-router-dom";
import ItemList from "../../Components/ItemList/ItemList";

const ItemCategoryContainer = () => {

  const [category, setCategory] = useState();
  const { id } = useParams();

  const getData = new Promise((resolve, reject) => {
  
      resolve(data);

  });
  useEffect(() => {
    getData.then((response) => {
      setCategory(
        response.filter((item) => {
          return item.category === Number(id);
        })
      );
    });
  }, [id]);
  return <div>{category && <ItemList productList={category} />}</div>;
};

export default ItemCategoryContainer;*/
