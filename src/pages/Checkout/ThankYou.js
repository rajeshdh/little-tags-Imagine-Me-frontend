import React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

function ThankYou() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            <FormattedMessage id="thankyou" defaultMessage="Thank You." />
          </h1>
          <p className="mb-8 leading-relaxed text-lg">
            <FormattedMessage
              id="orderPlaced"
              defaultMessage="Your order was placed successfully."
            />
          </p>
          <p className="mb-8 leading-relaxed">
            <FormattedMessage
              id="emailSent"
              defaultMessage="An email receipt including the details about your order has been sent to the email address provided. Please keep it for your records."
            />
          </p>
          <div className="flex justify-start">
            <Link
              to="/"
              className="w-full ml-1 mt-2 text-sp-btn-primary font-bold  
           py-2 px-6 rounded border-2 border-sp-btn-primary hover:bg-sp-btn-primary hover:text-white"
              type="button"
            >
              <FormattedMessage
                id="continueShopping"
                defaultMessage="Continue Shopping"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ThankYou;
