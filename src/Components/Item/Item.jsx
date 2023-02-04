import '../Item/Item.css'
import {Link } from 'react-router-dom'

const Item = ({product}) => {
  return (
    <div>
      <Link to={`/detail/${product.id}`}>
      <img className='product_img'alt={product.name} src={product.image}/>
      <div className='product_info'>
        <h2>{product.brand}</h2>
        <h2>{product.name}</h2>
        <h2>${product.price}</h2>
        {/*<p>{product.description}</p>*/}
      </div>
    </Link>
    </div>
  )
}

export default Item