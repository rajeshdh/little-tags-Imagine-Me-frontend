import React, { useState } from "react";
import { useDispatch } from "react-redux";
import authActions from "../../redux/auth/actions";
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

export default function Register() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const dispatch = useDispatch();
	const onSubmit = (e) => {
		e.preventDefault();
		dispatch(authActions.register({ email, password }));
	};

	return (
		<div className="w-full h-screen flex flex-col justify-center align-center bg-sp-white">
			<div className="flex mx-auto max-w-6xl h-1/2 shadow-2xl justify-center align-center rounded-lg overflow-hidden">
				<div className="flex flex-col w-1/2 p-5 align-center justify-center bg-white">
					<h1 className="text-3xl ml-5 font-bold mb-5 underline">
					<FormattedMessage id="registerNow" />
					</h1>
					<p className="ml-5 text-lg">
					<FormattedMessage id="registerToStart" />	
					</p>
				</div>
				<form
					onSubmit={onSubmit}
					className="flex flex-col justify-center align-center p-10 m-0 bg-gray-200 flex-1"
				>
					<input
						name="email"
						className="mb-5 border-2 border-gray-300 focus:border-gray-600 outline-none p-3 rounded-xl shadow-sm"
						type="text"
						placeholder="Email address"
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
					></input>
					<input
						name="password"
						type="password"
						placeholder="Enter your Password"
						autoComplete="on"
						className="mb-5  border-2 border-gray-300 focus:border-gray-600 outline-none p-3 rounded-xl shadow-sm"
						value={password}
						onChange={(e) => {
							setPassword(e.target.value);
						}}
					></input>
					<button
						type="submit"
						className="py-4 px-2 active:bg-gray-800 bg-sp-btn-primary hover:bg-sp-btn-primary-dark text-white w-5/12  self-center mt-2 hover:shadow-2xl "
					>
						 <FormattedMessage id="register" />
					</button>
					<Link to="/login"
						type="button"
						className="py-4 px-2 active:bg-gray-800 bg-white border-black border rounded-md text-black w-5/12 self-center mt-2 hover:shadow-2xl "
					>
					 <FormattedMessage id="signInInstead" />
					</Link>
				</form>
			</div>
		</div>
	);
}