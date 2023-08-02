import React from 'react'
import Item from '../Item/Item';

const ItemList = ({data}) => {
  return (
    <div className='container'>
      <div className='row' id='itemlist'>
      {
      data.map((i) => (
          <Item 
          item={i} 
          product={i.product}
          model={i.model}
          key={i.id} 
          id={i.id} 
          image={i.image} 
          price={i.price}/>)
        )
      }
      </div>
    </div>
  )
}


export default ItemList
