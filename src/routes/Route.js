import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import useQuery from "../hooks/useQuery";
import MainSpinner from "../components/LoadingSpinners/MainSpinner";

function RouteWrapper({
	component: Component,
	isPrivate,
	isLoginRoute,
	...rest
}) {


	const location = useLocation()
	const query = useQuery(location)
	const redirectURL = query.get('redirect') ?? "/"
	const { isAuthenticated, isLoading } = useSelector((state) => ({ isAuthenticated: state.auth.isAuthenticated, isLoading: state.auth.isLoading }));
	

	if(isPrivate && isLoading){
		return <MainSpinner />
	}

	/**
	 * Redirect user to SignIn page if he tries to access a private route
	 * without authentication.
	 */

	if (isPrivate && !isAuthenticated) {
		return <Redirect to={`/login?redirect=${location.pathname}`} />;
	}

	/**
	 * Redirect user to Main page if he tries to access a non private route
	 * (SignIn or SignUp) after being authenticated.
	 */

	if (isLoginRoute && isAuthenticated) {
		return <Redirect to={redirectURL} />;
	}

	/**
	 * If not included on both previous cases, redirect user to the desired route.
	 */
	return <Route {...rest} component={Component} />;
}

RouteWrapper.propTypes = {
	isPrivate: PropTypes.bool,
	component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
		.isRequired,
};

RouteWrapper.defaultProps = {
	isPrivate: false,
};

export default RouteWrapper;