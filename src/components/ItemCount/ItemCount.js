import React from "react";
import { useState } from "react";
import Button from 'react-bootstrap/Button';

const ItemCount = ({ stockItems, initial, onAdd }) => {
    const [count, setCount] = useState(initial);
    const incrementarStock = () => {
        if (count < stockItems) {
            setCount(count + 1);
        } 
    }
    const decrementarStock = () => {
        if(count > initial){
          setCount(count - 1);
        }
      }
    return(
        <div className="itemCount" id="itemcount">
            <div className="row mb-3">
                <div className="col-md-2">
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" className="btn btn-outline-secondary" onClick={decrementarStock} >-</button>
                        <button type="button" className="btn btn-outline-secondary">{count} </button>
                        <button type="button" className="btn btn-outline-secondary" onClick={incrementarStock} >+</button>
                     </div>
                </div>
            </div>
            <div className="row mb-3 position-relative p-1">
                <div className="mb-3">
                <Button variant="secondary" size="lg" onClick={() => onAdd(count)}>Add to Cart</Button>    
                </div>
            </div>
        </div>  
    )
}

export default ItemCount;