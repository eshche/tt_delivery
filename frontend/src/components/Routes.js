import React, { useState, useContext, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { render } from "react-dom";

// Routes

const Routes = () => {

    const RouteComponent = isAuthenticated ? PrivateRoute : Route;

    return (
        <Switch>
            <RouteComponent path="/" render={props => <Content {...props} />} />
        </Switch>
    );
};
