import logo from './logo.svg';
import './App.css';
import {
    Switch,
    Route, BrowserRouter,
} from "react-router-dom";
import React from "react";

import Navbar from './components/Navbar/Navbar';
import Products from "./components/Products/Products";
import Delivery from "./components/Delivery/Delivery";
import Signup from "./components/Auth/Signup";
import Login from "./components/Auth/Login"
import {defaultUser, UserProvider, UserContext} from "./context/context";

class App extends React.Component {


    render() {
        return (
            <UserProvider>
                <div className="App">
                    <BrowserRouter>

                        <Navbar/>
                        <Switch>
                            <Route exact path="/">
                                Default route
                            </Route>
                            <Route exact path="/product">
                                <Products/>
                            </Route>
                            <Route exact path="/delivery">
                                <Delivery/>
                            </Route>
                            <Route exact path="/signup">
                                <Signup/>
                            </Route>
                            <Route exact path="/login">
                                <Login />
                            </Route>
                        </Switch>
                    </BrowserRouter>
                </div>
            </UserProvider>
        );
    }
}

export default App;