import { data } from '../../data/data';
import { useEffect } from 'react';
import { useState } from 'react';
import ItemList from '../../Components/ItemList/ItemList';
import './ItemListContainer.css'


const ItemListContainer = (props) => {
  const [productList, setProductList] = useState([]);

  const getProducts = new Promise((resolve, reject)=> {
    setTimeout(()=>{
      resolve(data)
    }, 2000)
  })
  
  useEffect(()=> {
    getProducts.then(answer => {
      setProductList(answer)
    }).then(()=>{
      console.log(productList)
    })
  }, []);
  return (
    <div className='cards_container'>
      <ItemList productList = {productList}/>
    </div>

   /* {<div className="message_greeting_container">
      <h2 className='message'>{props.name}</h2>
    </div>}*/
  )
}

export default ItemListContainer

//VA A SER EL PADRE DE TODOS , el item list(flex) el hijo que son las cards y luego el item que es la card. 
//useEffect para usar el console.log de data
//setTimeout simula una peticion a un servidor