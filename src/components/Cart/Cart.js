import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import '../Cart/Cart.css';


const Cart = () => {
    const { cart, setCart } = useContext(CartContext);
    const handleDeleteItem = (itemId) => {
        const updatedCart = cart.filter((item) => item.id !== itemId);
        setCart(updatedCart);
};
const totalAmount = cart.reduce((total, item) => total + item.price * item.cant, 0);

    return (
        <>
            <h1>Cart Detail</h1>
            <hr />
            {cart.length === 0 ? (
                <h2>Your Cart is empty</h2>
            ) : (
                <div>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>N°</th>
                                <th>Image</th>
                                <th>Product</th>
                                <th>Model</th>
                                <th>Amount</th>
                                <th>Unit Price</th>
                                <th>Subtotal</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((unItem, index) => (
                                <tr key={unItem.id} className="product-card">
                                    <td>{index + 1}</td>
                                    <td>
                                        <img src={unItem.image} alt={unItem.product} className="cartImage"/>
                                    </td>
                                    <td>{unItem.product}</td>
                                    <td>{unItem.model}</td>
                                    <td>{unItem.cant}</td>
                                    <td>$ {unItem.price}</td>
                                    <td>$ {unItem.price*unItem.cant}</td>
                                    <td><Button variant="secondary" onClick={() => handleDeleteItem(unItem.id)}>Delete</Button></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th><h3>Total $ {totalAmount}</h3></th>
                            </tr>
                        </thead>
                    </Table>
                    <Link to="/">
                        <Button variant="secondary">Back to Home</Button>
                    </Link>
                    <hr />
                    <br />
                    <Link to="/checkout">
                        <Button variant="secondary">Proceed to checkout</Button>
                    </Link>
                    <hr />
                </div>
            )}
        </>
    );
};

export default Cart