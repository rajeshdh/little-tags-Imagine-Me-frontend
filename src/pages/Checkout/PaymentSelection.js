import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import {useSelector } from 'react-redux'
import {Link} from 'react-router-dom'

function Address({addressInfo}) {
  const { fullName, address, mobileNumber, state, city, pin } = addressInfo;
  return (
    <div className="w-full flex pb-6">
      <div className="flex-grow">
      <h2 className="text-gray-900 text-lg title-font font-medium mb-2 ml-1">
          {fullName}
        </h2>
        <p className="leading-relaxed text-base ml-1">{address}</p>
        <p className="leading-relaxed text-base ml-1">{city}</p>
        <p className="leading-relaxed text-base ml-1">
          {state} - {pin}
        </p>
        <p className="leading-relaxed text-base ml-1">{mobileNumber}</p>
      </div>
    </div>
  );
}

function PaymentSelection() {
  const [paymentMethod, setPaymentMethod] = useState("razorpay");
  const { addresses, selectedAddress } = useSelector(state => ({
    addresses: state.user.addresses,
    selectedAddress: state.user.selectedAddress,
    error: state.product.error,
    isLoading: state.product.isLoading
}));
const deliveryAddress = addresses.find((item) => item.id === selectedAddress);

  return (
    <div className="bg-white">
      <main className="my-8">
        <div className="container mx-auto px-6 lg:w-3/5">
          <h3 className="text-gray-700 text-2xl font-medium">
          <FormattedMessage id="paymentMethod" defaultMessage="Payment Method" />
          </h3>
          <div className="flex flex-col lg:flex-row mt-8">
            <div className="w-full lg:w-full">
              <form className="w-full">
                <div>
                  <h4 className="text-sm text-gray-500 font-medium">
                  <FormattedMessage id="deliveryAddress" defaultMessage="Delivering To" />
                  </h4>
                  <div className=" flex flex-wrap mt-6 md:space-y-0 space-y-6">
                    <Address addressInfo={deliveryAddress} />
                  </div>
                </div>
                <h4 className="text-sm text-gray-500 font-medium">
                  <FormattedMessage id="setDeliveryAddress"  defaultMessage="Select A Payment Method" />
                  </h4>
                <div className="mt-6">
                  <div  onClick={() => setPaymentMethod("razorpay")}  className="mt-2 flex items-center justify-between w-full bg-white rounded-md border-2 border-blue-500 p-4 focus:outline-none">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="paymentMethod"
                        className="form-radio h-5 w-5 text-blue-600"
                        value="razorpay"
                        onChange={() => setPaymentMethod("razorpay")}
                        checked={paymentMethod === "razorpay"}
                      />
                      <span className="ml-2 text-sm text-gray-700">Razor Pay</span>
                    </label>
                  </div>
                  <div onClick={() => setPaymentMethod("paypal")} className="mt-2 flex items-center justify-between w-full bg-white rounded-md border-2 border-blue-500 p-4 focus:outline-none">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="paymentMethod"
                        className="form-radio h-5 w-5 text-blue-600"
                        value="paypal"
                        onChange={() => setPaymentMethod("paypal")}
                        checked={paymentMethod === "paypal"}
                      />
                      <span className="ml-2 text-sm text-gray-700">Paypal</span>
                    </label>
                  </div>
                  <div onClick={() => setPaymentMethod("upi")} className="mt-2 flex items-center justify-between w-full bg-white rounded-md border-2 border-blue-500 p-4 focus:outline-none">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="paymentMethod"
                        className="form-radio h-5 w-5 text-blue-600"
                        value="upi"
                        onChange={() => setPaymentMethod("upi")}
                        checked={paymentMethod === "upi"}
                      />
                      <span className="ml-2 text-sm text-gray-700">UPI</span>
                    </label>
                  </div>
                </div>
                <div className="flex items-center justify-between my-8">
                  <Link to="thankyou" type="button" className="flex text-white bg-sp-btn-primary border-0 py-3 px-14 sm:px-24 font-bold hover:bg-sp-btn-primary-dark rounded">
                    <FormattedMessage id="proceedToPayment" defaultMessage="Continue Payment" />
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default PaymentSelection;
