import React from "react";
import { FormattedMessage } from "react-intl";

function ThankYou() {
  return (
    <section class="text-gray-600 body-font">
      <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
       
        <div class="text-center lg:w-2/3 w-full">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          <FormattedMessage id="thankyou" defaultMessage="Thank You." />
          </h1>
          <p class="mb-8 leading-relaxed text-lg">
          <FormattedMessage id="orderPlaced" defaultMessage="Your order was placed successfully."/>
          </p>
          <p class="mb-8 leading-relaxed">
          <FormattedMessage id="emailSent" defaultMessage="An email receipt including the details about your order has been sent to the email address provided. Please keep it for your records." />
          </p>
        </div>
      </div>
    </section>
  );
}

export default ThankYou;