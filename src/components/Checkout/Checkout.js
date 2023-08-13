import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React, { useContext, useState } from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';
import { CartContext } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';


const Checkout = () => {
    const [orderId, setOrderId] = useState();
    const [buyer, setBuyer] = useState({
        Name: "",
        Email: "",
        RepeatEmail: "",
        Phone: "",
        Address: "",
    });
    const { Name, Email, RepeatEmail, Phone, Address } = buyer;
    const [formError, setFormError] = useState(false);
    const { cart, setCart } = useContext(CartContext);
    const [showAlert, setShowAlert] = useState(false);
    const navigate = useNavigate();
    const handleInputChange = (e) => {
        setBuyer({
        ...buyer,
        [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (Email !== RepeatEmail) {
        setFormError(true);
        } else {
        setFormError(false);
        const total = cart.reduce(
          (acum, unItem) => acum + unItem.price * unItem.cant, 0);
        const day = new Date();
        const data = { buyer, cart, total, day };
        generateOrder(data);
      }
    };
    const generateOrder = async (data) => {
      const querydb = getFirestore();
      const queryCollection = collection(querydb, "Orders");
      const order = await addDoc(queryCollection, data);
      setOrderId(order.id);
      clearCart();
      setShowAlert(true);
    };
    const clearCart = () => {
      setCart([]);
    };
    const handleCloseAlert = () => {
      setShowAlert(false);
      navigate('/');
    };
    return (
      <>
        <h1>Purchase Form</h1>
        <hr />
        {!orderId && (
          <form onSubmit={handleSubmit}>
            {formError && (
              <p style={{ color: "red" }}>Emails do not match. Please try again.</p>
            )}
            <input
              type="text"
              name="Name"
              placeholder="Name"
              value={Name}
              onChange={handleInputChange}
              required
            />
            <br />
            <br />
            <input
              type="email"
              name="Email"
              placeholder="Email"
              value={Email}
              onChange={handleInputChange}
              required
            />
            <br />
            <br />
            <input
              type="email"
              name="RepeatEmail"
              placeholder="Repeat Email"
              value={RepeatEmail}
              onChange={handleInputChange}
              required
            />
            <br />
            <br />
            <input
              type="number"
              name="Phone"
              placeholder="Phone"
              value={Phone}
              onChange={handleInputChange}
              required
            />
            <br />
            <br />
            <input
              type="text"
              name="Address"
              placeholder="Address"
              value={Address}
              onChange={handleInputChange}
              required
            />
            <br />
            <br />
            <input type="submit" value="Confirm" className="btn btn-outline-secondary"/>
          </form>
        )}
         {orderId && (
          <>
          <SweetAlert
            show={showAlert}
            title={`Hi, ${Name}. Thank you for your recent purchase`}
            confirmBtnText="OK"
            className="btn btn-outline-secondary"
            customClass={{ confirmButton: 'custom-ok-button' }}
            onConfirm={handleCloseAlert}
          >
            <p>We'll let you know when it ships and is headed your way.</p>
            <p>The ID number of your purchase is:</p>
            <p>{orderId}</p>
          </SweetAlert>
        </>
      )}
    </>
  );
};
  
  export default Checkout;