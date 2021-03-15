import React, { lazy } from "react";
import { Switch } from "react-router-dom";
import Home from "../pages/Home/Index";
import Route from "./Route";

const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));
const Checkout = lazy(() => import("../pages/Checkout"));
const Payment = lazy(() => import("../pages/Checkout/PaymentSelection"));
const ProductPage = lazy(() => import("../pages/ProductList/Index"));
const SearchPage = lazy(() => import("../pages/Search"));
const Product = lazy(() => import("../pages/Product"));
const Cart = lazy(() => import("../pages/Cart"));
const Profile = lazy(() => import("../pages/Profile"));
const WishList = lazy(() => import("../pages/Wishlist"));
const OrderHistory = lazy(() => import("../pages/OrderHistory"));
const ThankYou = lazy(() => import("../pages/Checkout/ThankYou"));

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" isLoginRoute component={Login} />
      <Route exact path="/register" isLoginRoute component={Register} />
      <Route exact path="/checkout" isPrivate component={Checkout} />
      <Route exact path="/payment" isPrivate component={Payment} />
      <Route exact path="/thankyou" isPrivate component={ThankYou} />
      <Route exact path="/cart" isPrivate component={Cart} />
      <Route exact path="/wishlist" isPrivate component={WishList} />
      <Route exact path="/order-history" isPrivate component={OrderHistory} />
      <Route exact path="/profile" isPrivate component={Profile} />

      <Route exact path="/search" component={SearchPage} />
      <Route exact path="/product/:productid" component={Product} />
      <Route exact path="/:type/:keyWord" component={ProductPage} />
    </Switch>
  );
};

export default Routes;
