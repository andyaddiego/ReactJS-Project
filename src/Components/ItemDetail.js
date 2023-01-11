import './Item/Item.css'

const ItemDetail = ({product}) => {
  return (
    <div>
        <img className='img_product'alt={product.name} src={product.image}/>
        <h2>{product.brand}</h2>
        <h2>{product.name}</h2>
        <h2>{product.type}</h2>
        <h2>{product.price}</h2>
        <p>{product.description}</p>

    </div>
  )
}

export default ItemDetail