import React, { useState, useRef, useEffect } from "react";
import { FormattedMessage } from "react-intl";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import PriceSummary from "../../components/PriceSummary/PriceSummary";
import MainSpinner from "../../components/LoadingSpinners/MainSpinner";
import WifiOff from "../../IconSet/WifiOff";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

function Address({ addressInfo }) {
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
  const [products, setProducts] = useState([]);
  const ref = useRef(null);
  const [paymentMethod, setPaymentMethod] = useState("razorpay");
  const { addresses, selectedAddress } = useSelector((state) => ({
    addresses: state.user.addresses,
    selectedAddress: state.user.selectedAddress,
  }));
  const deliveryAddress = addresses.find((item) => item.id === selectedAddress);

  const [isLoading, setIsLoading] = useState(true);

  const [isError, setIsError] = useState(false);

  const cartItems = useSelector((state) => state.user.cart);
  useEffect(() => {
    fetchCartItems();
  }, []);
  const fetchCartItems = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/cart`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cartItems),
      });
      const result = await response.json();
      const products = result.map((product) => {
        const features = product.features;
        const selectedFeature = {};
        features.forEach((feature) => {
          selectedFeature[feature.type] = 0;
        });
        product.quantitySelected = 1;
        product.selectedFeature = selectedFeature;
        return product;
      });
      setProducts(products);
    } catch (e) {
      setIsError(true);
    }
    setIsLoading(false);
  };
  const history = useHistory();

  const placeOrder = () => {
    let path = `thankyou`;
    history.push(path);
  };

  let totalPrice = 0;
  const priceDetails = products.map((product) => {
    const quantity = product.quantitySelected;
    const price = product.currentPrice * quantity;
    totalPrice += price;
    return {
      title: product.title,
      quantity,
      price,
      currency: product.currency,
    };
  });

  let html = "";
  if (isLoading) {
    html = <MainSpinner />;
  } else if (isError) {
    html = (
      <ErrorMessage>
        <WifiOff className="w-10 h-10 md:w-16 md:h-16 fill-current text-gray-500 mr-2" />
        <FormattedMessage
          id="networkError"
          defaultMessage="Error connecting server"
        />
      </ErrorMessage>
    );
  } else {
    html = (
      <div className="flex flex-col mt-3 mx-3 sm:mx-10 md:mx-24 sm:flex-row">
        <div className="flex flex-col mb-36 sm:mb-32 xl:mb-0 xl:flex-row w-full">
          <main className="my-8 flex-grow">
            <div className="container mx-auto px-6 lg:w-3/5">
              <h3 className="text-gray-700 text-2xl font-medium">
                <FormattedMessage
                  id="paymentMethod"
                  defaultMessage="Payment Method"
                />
              </h3>
              <div className="flex flex-col lg:flex-row mt-8">
                <div className="w-full lg:w-full">
                  <form className="w-full">
                    <div>
                      <h4 className="text-sm text-gray-500 font-medium">
                        <FormattedMessage
                          id="deliveryAddress"
                          defaultMessage="Delivering To"
                        />
                      </h4>
                      <div className=" flex flex-wrap mt-6 md:space-y-0 space-y-6">
                        <Address addressInfo={deliveryAddress} />
                      </div>
                    </div>
                    <h4 className="text-sm text-gray-500 font-medium">
                      <FormattedMessage
                        id="setDeliveryAddress"
                        defaultMessage="Select A Payment Method"
                      />
                    </h4>
                    <div className="mt-6">
                      <div
                        onClick={() => setPaymentMethod("razorpay")}
                        className="mt-2 flex items-center justify-between w-full bg-white rounded-md border-2 border-blue-500 p-4 focus:outline-none"
                      >
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="paymentMethod"
                            className="form-radio h-5 w-5 text-blue-600"
                            value="razorpay"
                            onChange={() => setPaymentMethod("razorpay")}
                            checked={paymentMethod === "razorpay"}
                          />
                          <span className="ml-2 text-sm text-gray-700">
                            Razor Pay
                          </span>
                        </label>
                      </div>
                      <div
                        onClick={() => setPaymentMethod("paypal")}
                        className="mt-2 flex items-center justify-between w-full bg-white rounded-md border-2 border-blue-500 p-4 focus:outline-none"
                      >
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="paymentMethod"
                            className="form-radio h-5 w-5 text-blue-600"
                            value="paypal"
                            onChange={() => setPaymentMethod("paypal")}
                            checked={paymentMethod === "paypal"}
                          />
                          <span className="ml-2 text-sm text-gray-700">
                            Paypal
                          </span>
                        </label>
                      </div>
                      <div
                        onClick={() => setPaymentMethod("upi")}
                        className="mt-2 flex items-center justify-between w-full bg-white rounded-md border-2 border-blue-500 p-4 focus:outline-none"
                      >
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="paymentMethod"
                            className="form-radio h-5 w-5 text-blue-600"
                            value="upi"
                            onChange={() => setPaymentMethod("upi")}
                            checked={paymentMethod === "upi"}
                          />
                          <span className="ml-2 text-sm text-gray-700">
                            UPI
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="flex items-center justify-between my-8">
                      <Link
                        to="thankyou"
                        type="button"
                        className="w-full text-center text-white bg-sp-btn-primary border-0 py-3 px-14 sm:px-24 font-bold hover:bg-sp-btn-primary-dark rounded"
                      >
                        <FormattedMessage
                          id="proceedToPayment"
                          defaultMessage="Continue Payment"
                        />
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </main>
          <div ref={ref} className="w-full xl:pl-2 xl:min-w-lg xl:w-3/12">
            <PriceSummary
              parentRef={ref}
              priceDetails={priceDetails}
              totalPrice={totalPrice}
              placeOrder={placeOrder}
              hideButton={true}
            />
          </div>
        </div>
      </div>
    );
  }
  return html;
}

export default PaymentSelection;
