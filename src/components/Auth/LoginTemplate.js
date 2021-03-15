import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl'
import Textbox from './../Textbox'
import { EmailIcon, PasswordIcon, ArrowRound, SignUpIcon, SpinIcon } from "../../IconSet"

export default function LoginTemplate({ pageHeader,
  facebookButtonText, emailLoginHeader,
  submitText, linksTo,
  showForgotPassword,
  linkText,
  authAction
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isLoading = useSelector(state => state.auth.isLoading)

  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(authAction({ email, password }));
  };

  return (
    <div className="h-full pt-8 flex flex-col items-center justify-center bg-sp-white">
      <div className="flex flex-col bg-white shadow-lg px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
        <div className="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800">
          <FormattedMessage id={pageHeader} />
        </div>
        <button
          className="relative mt-6 border rounded-md py-2 
				text-sm bg-blue-800 hover:bg-blue-900 text-white focus:outline-none focus:shadow-outline">

          <span className="absolute left-0 top-0 flex items-center justify-center h-full w-10 text-blue-500"><i className="fab fa-facebook-f"></i></span>
          <span><FormattedMessage id={facebookButtonText} /></span>
        </button>
        <div className="relative mt-10 h-px bg-gray-300">
          <div className="absolute left-0 top-0 flex justify-center w-full -mt-2">
            <span className="bg-white px-4 text-xs text-gray-500 uppercase">

              <FormattedMessage id={emailLoginHeader} />
            </span>
          </div>
        </div>
        <div className="mt-10">
          <form onSubmit={onSubmit}>
            <div className="flex flex-col mb-6">
              <label htmlFor="email" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">
                <FormattedMessage id="email" />
              </label>
              <div className="relative">
                <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                  <EmailIcon />
                </div>
                <Textbox name="email"
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(value) => {
                    setEmail(value);
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col mb-6">
              <label htmlFor="password" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">
                <FormattedMessage id="password" />
              </label>
              <div className="relative">
                <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                  <span>
                    <PasswordIcon />
                  </span>
                </div>
                <Textbox name="password"
                  type="password"
                  placeholder="Enter your Password"
                  autoComplete="on"
                  value={password}
                  onChange={(value) => {
                    setPassword(value);
                  }}
                />
              </div>
            </div>

            {showForgotPassword && <div className="flex items-center mb-6 -mt-4">
              <div className="flex ml-auto">
                <Link to="/forgot-password" className="inline-flex text-xs sm:text-sm text-blue-500 hover:text-blue-700">
                  <FormattedMessage id="forgotPassword" /></Link>
              </div>
            </div>
            }

            <div className="flex w-full">
              <button type="submit"
                disabled={isLoading}
                className="flex disabled:opacity-50 disabled:cursor-wait items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-sp-btn-primary hover:bg-sp-btn-primary-dark rounded py-2 w-full transition duration-150 ease-in">
                {isLoading ? <SpinIcon className="mr-2 animate-spin" /> : null}
                <span className="mr-2 uppercase">
                  <FormattedMessage id={submitText} />
                </span>
                <ArrowRound />
              </button>
            </div>
          </form>
        </div>
        <div className="flex justify-center items-center mt-6">
          <Link to={linksTo} className="inline-flex items-center font-bold text-blue-500 hover:text-blue-700 text-xs text-center">
            <span>
              <SignUpIcon />
            </span>
            <span className="ml-2">
              <FormattedMessage id={linkText} />
            </span>
          </Link>
        </div>
      </div>
    </div>

  );
}