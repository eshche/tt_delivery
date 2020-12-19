import React from 'react';
import logo from '../img/logo.png'
import {UserConsumer} from '../../context/context'


const Navbar = () => {

    function leftCustItems() {
        return (
            <a className="navbar-item" href="/product">
                Products
            </a>
        )
    }

    function leftCourierItems() {
        return (
            [
                <a className="navbar-item" href="/delivery">
                    Delivery
                </a>,
                <a className="navbar-item" href="#">
                    Orders
                </a>,
                <a className="navbar-item" href="#">
                    Requests
                </a>

            ]
        )
    }

    return (
        <UserConsumer>
            {user => (
                <nav className="navbar" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="/">
                            <img src={logo} width="112" height="28" alt="delivery"/>
                        </a>

                    </div>
                    <div className="navbar-menu">
                        <div className="navbar-start">
                            {{
                                "customer": leftCustItems(),
                                "courier": leftCourierItems(),
                            }
                                [user.userRole]
                            }
                        </div>
                        <div>{user.name}</div>
                        <div>{user.userRole.toString()}</div>
                        <div>{user.isAuth.toString()}</div>
                    </div>
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <a className="button is-primary" href="/signup">
                                    <strong>Sign up</strong>
                                </a>
                                <a className="button is-light" href="/login">
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
            )
            }
        </UserConsumer>
    )

}

export default Navbar;