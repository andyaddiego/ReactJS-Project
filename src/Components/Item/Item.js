import '../Item/Item.css'
import {Link, NavLink } from 'react-router-dom'

const Item = ({product}) => {
  return (
    <div>
      <Link to={`/detail/${product.id}`}>
      <img className='img_product'alt={product.name} src={product.image}/>
      <div>
        <h2>{product.brand}</h2>
        <h2>{product.name}</h2>
        <h2>{product.type}</h2>
        {/*<p>{product.description}</p>*/}
      </div>
    </Link>
    </div>
  )
}

export default Item