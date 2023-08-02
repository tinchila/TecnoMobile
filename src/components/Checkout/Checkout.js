import { addDoc, collection, getFirestore } from 'firebase/firestore'
import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'


const Checkout = () => {
    const [orderId, setOrderId] = useState()
    const [buyer, setBuyer] = useState({
        Name: "",
        Email: "",
        Phone: ""
    })
    const { Name, Email, Phone, Adress } = buyer

    const { cart } = useContext(CartContext)

    const handleInputChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const total = cart.reduce((acum, unItem) => acum + (unItem.price * unItem.cant), 0)
        const day = new Date()
        const data = { buyer, cart, total, day }
        generateOrder(data)
    }

    const generateOrder = async (data) => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, "Orders")
        const order = await addDoc(queryCollection, data)
        setOrderId(order.id)
    }

    return (
        <>
            <h1>Purchase Form</h1>
            <hr />
            {!orderId && <form onSubmit={handleSubmit}>
                <input type="text"
                    name="Name"
                    placeholder='Name'
                    value={Name}
                    onChange={handleInputChange}
                    required
                />
                <br /><br />
                <input type="email"
                    name="Email"
                    placeholder='Email'
                    value={Email}
                    onChange={handleInputChange}
                    required
                />
                <br /><br />
                <input type="number"
                    name="Phone"
                    placeholder='Phone'
                    value={Phone}
                    onChange={handleInputChange}
                    required
                />
                <br /><br />
                <input type="text"
                    name="Adress"
                    placeholder='Adress'
                    value={Adress}
                    onChange={handleInputChange}
                    required
                />
                <br /><br />
                <input type="submit" value="Confirm" />
            </form>
            }
            {orderId && <>
                <h1>Hi, {Name}. Thank you for your recent purchase </h1>
                <h2>We'll let you know when it ships and is headed your way.</h2>
                <h3>The ID number is: {orderId}</h3>
            </>}
        </>
    )
}

export default Checkout