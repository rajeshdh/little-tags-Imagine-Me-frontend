import React from "react";
import { Switch } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Checkout from "../pages/Checkout";
import Route from "./Route";

const Routes = () => {
	return (
			<Switch>
				<Route exact path="/"  component={Home}></Route>
				<Route exact path="/login" isLoginRoute component={Login} />
				<Route exact path="/register" isLoginRoute component={Register} />
				<Route exact path="/checkout" isPrivate component={Checkout} />
			</Switch>
	);
};

export default Routes;