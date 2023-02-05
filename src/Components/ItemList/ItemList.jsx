import Item from "../Item/Item"

const ItemList = ({productList}) => {
  return (
    <>
      {productList.map((product)=> (
        <Item key={product.id} product = {product}/>
      ))
      }
    </>
  )
}

export default ItemList

// Va a iterar el product list, va a mostrar un producto por cada producto de la lista, creo el template en ITEM.
// El key siempre lo tiene que tener el padre.