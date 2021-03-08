import React, { lazy } from "react";
import { Switch } from "react-router-dom";
import Home from "../pages/Home/Index";
import Route from "./Route";

// import Product from "../pages/Product";
// import ProductPage from "../pages/Products"

const Login = lazy(() => import("../pages/Login"))
const Register = lazy(() => import("../pages/Register"))
const Checkout = lazy(() => import("../pages/Checkout"))
const ProductPage = lazy(() => import("../pages/ProductList/Index"))
const Product = lazy(() => import("../pages/Product"))


const Routes = () => {
	return (
			<Switch>
				<Route exact path="/"  component={Home}></Route>
				<Route exact path="/login" isLoginRoute component={Login} />
				<Route exact path="/register" isLoginRoute component={Register} />
				<Route exact path="/checkout" isPrivate component={Checkout} />
				<Route exact path="/product/:productid"  component={Product}/>
				<Route exact path="/:type/:keyWord" component={ProductPage} />
				
			</Switch>
	);
};

export default Routes;