import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
  const { getQuantity } = useContext(CartContext)
  return (
    <>
      <Link to="/cart">
      <FaShoppingCart color="white" class="fs-3"/>
        <button style={{ backgroundColor: '#212529', border: 'none' }}>{getQuantity()}</button>
      </Link>
    </>
  );
};

export default CartWidget;