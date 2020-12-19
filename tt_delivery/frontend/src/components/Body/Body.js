import React, {Component} from 'react';
import './body.css';
import {NavItems} from "../Navbar/NavItems";
import {ProductData} from '../data/ProductData'

class Body extends React.Component {

    render() {
        return (
            <body className="Body">
               <p>React body</p>

               <Products heading='Test products' data={ProductData}/>


            </body>
        )
    }
}

export default Body;