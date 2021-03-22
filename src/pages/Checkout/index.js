import React, { useState } from "react";
import AddressForm from "./AddressForm";
import { FormattedMessage } from "react-intl";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { addAddress, setSelectedAddress } from "../../redux/user/actions";
import MainSpinner from '../../components/LoadingSpinners/MainSpinner'
import WifiOff from '../../IconSet/WifiOff'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'

function Address({ selected, addressInfo }) {
  const { id, fullName, address, mobileNumber, state, city, pin } = addressInfo;
  const dispatch = useDispatch();

  return (
    <div
      className={`md:w-1/2 flex mt-2 pb-2  relative ${
        selected ? "border-2 border-blue-500" : ""
      } `}
    >
      <div className="flex-grow select-none">
        <h2 className="text-gray-900 text-lg title-font font-bold mb-2 ml-1">
          {fullName}
        </h2>
        <p className="leading-relaxed text-base ml-1">{address}</p>
        <p className="leading-relaxed text-base ml-1">{city}</p>
        <p className="leading-relaxed text-base ml-1">
          {state} - {pin}
        </p>
        <p className="leading-relaxed text-base ml-1">{mobileNumber}</p>
        <div className="flex justify-start">
          <button
            className="flex ml-1 mt-2 text-sp-btn-primary font-bold  
           py-2 px-6 rounded border-2 border-sp-btn-primary hover:bg-sp-btn-primary hover:text-white"
            type="button"
            onClick={() => dispatch(setSelectedAddress(id))}
          >
            <FormattedMessage
              id="setDeliveryAddress"
              defaultMessage="Deliver Here"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

function Checkout() {
  const { addresses, selectedAddress, error, isLoading } = useSelector((state) => ({
    addresses: state.user.addresses,
    selectedAddress: state.user.selectedAddress,
    error: state.product.error,
    isLoading: state.product.isLoading,
  }));
  const history = useHistory();

  const proceedToPayment = () => {
    if (!selectedAddress) {
      return alert("Please select a delivery address.");
    }
    let path = `payment`;
    history.push(path);
  };

  const [showAddressForm, setShowAddressForm] = React.useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    address: "",
    state: "",
    city: "",
    pin: "",
    isDefault: false,
  });

  const updateFormData = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const dispatch = useDispatch();

  const saveAddress = (e) => {
    e.preventDefault();
    let id = Math.random();
    dispatch(addAddress({ ...formData, id }));
    dispatch(setSelectedAddress(id));
    setShowAddressForm(false);
  };

  let html = ""
  if (isLoading) {
      html = <MainSpinner />
  } else if (error) {
      html = <ErrorMessage>
          <WifiOff className="w-10 h-10 md:w-16 md:h-16 fill-current text-gray-500 mr-2" />
          <FormattedMessage id="networkError" defaultMessage="Error connecting server" />
      </ErrorMessage>
  } else {
      html =  <div className="bg-white">
      <main className="my-8">
        <div className="container mx-auto px-6 lg:w-3/5">
          <h3 className="text-gray-700 text-2xl font-medium">
            <FormattedMessage id="checkout" defaultMessage="Checkout" />
          </h3>
          <div className="flex flex-col lg:flex-row mt-8">
            <div className="w-full lg:w-full">
              <form className="w-full" onSubmit={saveAddress}>
                <div>
                  <h4 className="text-lg text-gray-500 font-medium">
                    <FormattedMessage
                      id="selectDeliveryAddress"
                      defaultMessage="Select A Delivery Address"
                    />
                  </h4>
                  <div className=" flex flex-wrap mt-6">
                    {addresses.map((address) => {
                      return (
                        <Address
                          selected={selectedAddress === address.id}
                          key={address.id}
                          addressInfo={address}
                        />
                      );
                    })}
                  </div>
                  <div className="flex justify-end mt-6">
                    <button
                      className="flex ml-1 mt-2 text-black font-bold  
           py-2 px-6 rounded border-2 border-sp-btn-selected hover:bg-sp-btn-selected-dark hover:text-white"
                      type="button"
                      onClick={() => setShowAddressForm(true)}
                    >
                      <FormattedMessage
                        id="addNewAddress"
                        defaultMessage="Add New Address"
                      />
                    </button>
                  </div>
                  {showAddressForm && (
                    <div className="mt-6">
                      <AddressForm
                        formData={formData}
                        onChange={updateFormData}
                      />
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-between my-8">
                  {showAddressForm && (
                    <button
                      typ="submit"
                      className="w-full text-white bg-sp-btn-selected border-0 py-3 mb-6 px-14 sm:px-24 font-bold hover:bg-sp-btn-selected-dark rounded"
                    >
                      <FormattedMessage
                        id="saveAddress"
                        defaultMessage="Save Address"
                      />
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={proceedToPayment}
                    className=" w-full text-white bg-sp-btn-primary border-0 py-3 mb-6 px-14 sm:px-24 font-bold hover:bg-sp-btn-primary-dark rounded"
                  >
                    <FormattedMessage
                      id="proceedToPayment"
                      defaultMessage="Proceed To Payment"
                    />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
    }

    return html
}

export default Checkout;
