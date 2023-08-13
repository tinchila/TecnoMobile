import React, { useState, useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


const ItemDetail = ({item}) => {
   const [stock, setStock] = useState(item.stock)
   const { addItem } = useContext(CartContext)
   const handleOnAdd = (count) => {
      setStock(count)
      addItem({ id: item.id, price: item.price, product: item.product, image: item.image, model: item.model, description: item.description}, count)
   };
       
  return (
   <>
    <div className='row'>
     <div className='col-md-4 offset-md-4'>
        <img src={item.image} className='rounded mx-auto d-block img_med' alt={item.product}/>
        <h1>{item.product}</h1>
        <h2>{item.model}</h2>
        <p>{item.description}</p>
        <br />
        <h3 className='text-secondary-emphasis'> $ {item.price}</h3>
        <br />
        <h4> Stock: {item.stock}</h4>
     </div>
     <div>
        <ItemCount stockItems={stock} initial={1} onAdd={handleOnAdd} />
     </div>
     <hr />
      <br />
      </div>
      <Link to="/">
         <Button variant="secondary">Back to Home</Button>
      </Link>
     </>
  )
}


export default ItemDetail


