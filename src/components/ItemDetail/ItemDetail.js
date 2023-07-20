import React from 'react'
import ItemCount from '../ItemCount/ItemCount';
const ItemDetail = ({item}) => {
  return (
    <div className='row'>
     <div className='col-md-4 offset-md-4'>
        <img src={item.image} className='img-fluid'alt={item.product}/>
        <h2>{item.product}</h2>
        <p>{item.model}</p>
        <p>{item.description}</p>
        <p> $ {item.price}</p>
        <p> stock: {item.stock}</p>
     </div>
     <div>
        <ItemCount stockItems={10}/>
     </div>
     </div>
  )
}

export default ItemDetail


