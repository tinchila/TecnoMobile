import React from 'react'
import Item from '../Item/Item';
import Row from 'react-bootstrap/Row';

const ItemList = ({data}) => {
  return (
    <div className='container'>
      <div className='row' id='itemlist'>
      <Row xs={1} md={2} lg={3} className="g-4">
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
       </Row>
      </div>
    </div>
  )
}


export default ItemList
