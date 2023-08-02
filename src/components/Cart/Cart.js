import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Cart = () => {

    const { cart } = useContext(CartContext)
    return (

        <>
            <h1>Cart</h1>
            <hr />
            {
                cart.length === 0 ? <h2>Your Cart is empty</h2>
                    : <div>
                        {cart.map(unItem => <div key={unItem.id}>
                            <h2>{unItem.product}</h2>
                            <h3>{unItem.model}</h3>
                            <img src={unItem.image} alt={unItem.product}/>
                            <p>Stock: {unItem.cant}</p>
                            <p>Price: ${unItem.price}</p>
                            {/* <Button variant="secondary" onClick={()=>removeItem(unItem.id)}>Delete Item</Button> */}
                            <hr /><br />
                        </div>)}
                    </div>
            }

            <Link to='/checkout'>
            <Button variant="secondary">Proceed to checkout</Button>
            </Link>

        </>
    )
}

export default Cart