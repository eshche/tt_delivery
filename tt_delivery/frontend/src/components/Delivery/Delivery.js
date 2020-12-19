import React from 'react';

import './product.css';

import {ProductData} from '../data/DeliveryData';

class Delivery extends React.Component {


    render() {
        return (
            <div class="container has-background-white p-6">
                {ProductData.map((item, index) => {
                    return (
                        <div className="levels has-background-grey-lighter m-3">
                            <div className="level-left">
                                <figure className="image">
                                    <img src={item.img} alt={item.alt} width='150px'/>
                                </figure>

                                <div className="is-justify-content-right m-3">
                                    <p>{item.name}</p>
                                    <p>{item.count}</p>
                                    <p>{item.client}</p>
                                    <p>{item.phone}</p>
                                    <a className="button is-rounded is-dark is-small">Deliver</a>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Delivery;
