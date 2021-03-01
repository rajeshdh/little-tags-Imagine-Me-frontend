import React from "react";
import { Switch } from "react-router-dom";
import Home from "../layouts/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Checkout from "../components/Checkout";
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