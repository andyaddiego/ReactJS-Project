import React, { useContext } from 'react'
import { Shop } from '../../Context/ShopProvider'

const TableRow = ({product}) => {

    const {removeProduct} = useContext(Shop);

  return (
    <tr>
        <td>{product.id}</td>
        <td><img src={product.image} alt="table-row"/></td>
        <td>{product.name}</td>
        <td>{product.quantity}</td>
        <td>${product.price * product.quantity}</td>
        <td><button onClick={() => removeProduct(product.id)}>Remove</button></td>
  </tr>
  )
}

export default TableRow