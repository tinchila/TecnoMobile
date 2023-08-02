import React, { useState, useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { doc, getFirestore, updateDoc } from 'firebase/firestore';
import { CartContext } from '../../context/CartContext';


const ItemDetail = ({item}) => {
   const [stock, setStock] = useState(item.stock)
   const { addItem } = useContext(CartContext)
   const handleOnAdd = (count) => {
       addItem({ id: item.id, price: item.price, product: item.product, image: item.image, model: item.model, description: item.description}, count)
   };
   const handleStock = () => {
       const querydb = getFirestore()
       const itemDoc = doc(querydb, "dataProducts", item.id)
       const stockNuevo = stock + 0
       updateDoc(itemDoc, { stock: stockNuevo })
       setStock(stockNuevo)
   
  return (
    <div className='row'>
     <div className='col-md-4 offset-md-4'>
        <img src={item.image} className='rounded mx-auto d-block img_med' alt={item.product}/>
        <h2>{item.product}</h2>
        <p>{item.model}</p>
        <p>{item.description}</p>
        <br />
        <p> $ {item.price}</p>
        <br />
        <p> stock: {item.stock}</p>
     </div>
     <div>
        <ItemCount stockItems={stock} initial={1} onAdd={handleOnAdd} />
     </div>
     </div>
  )
}
}

export default ItemDetail


