import React from "react";
import { useState } from "react";
import Button from 'react-bootstrap/Button';

const ItemCount = ({stockItems}) => {
    const [counter, setCounter] = useState(1);
    const [stock, setStock] = useState(stockItems);
    const incrementarStock = () => {
        if (counter < stock) {
            setCounter(counter + 1);
        } 
    }
    const decrementarStock = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        }
        
    }
    return(
        <div className="itemCount" id="itemcount">
            <div className="row mb-3">
                <div className="col-md-2">
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" className="btn btn-outline-secondary" onClick={decrementarStock} >-</button>
                        <button type="button" className="btn btn-outline-secondary">{counter} </button>
                        <button type="button" className="btn btn-outline-secondary" onClick={incrementarStock} >+</button>
                     </div>
                </div>
            </div>
         <div className="row position-relative p-1">
         <div className="col-md-1">
            <Button variant="secondary" size="lg">Add to cart</Button>    
                </div>
            </div>
        </div>  
    )
}

export default ItemCount;