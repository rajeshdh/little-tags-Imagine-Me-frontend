import React, { lazy } from "react";
import { Switch } from "react-router-dom";
import Home from "../pages/Home/Index";
import Route from "./Route";

const Login = lazy(() => import("../pages/Login"))
const Register = lazy(() => import("../pages/Register"))
const Checkout = lazy(() => import("../pages/Checkout"))
const ProductPage = lazy(() => import("../pages/ProductList/Index"))


const Routes = () => {
	return (
			<Switch>
				<Route exact path="/"  component={Home}></Route>
				<Route exact path="/login" isLoginRoute component={Login} />
				<Route exact path="/register" isLoginRoute component={Register} />
				<Route exact path="/checkout" isPrivate component={Checkout} />

				
				<Route exact path="/:type/:keyWord" component={ProductPage} />
			</Switch>
	);
};

export default Routes;