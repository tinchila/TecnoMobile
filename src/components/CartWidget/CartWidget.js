import React, { Component } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import Count from '../../components/CartWidget/Count/Count';

class Like extends Component {
    render() {
        return (
            <div class="position-absolute top-50 start-90 translate-middle d-flex justify-content-around m-2 p-2 fs-5">
            <div class="mw-100"><FaShoppingCart /></div>
            <Count/>
        </div>
        ) 
    }
}

export default Like