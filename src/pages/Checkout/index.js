import React, { useState } from "react";
import AddressForm from "./AddressForm";
import { FormattedMessage } from "react-intl";
import { useHistory } from "react-router-dom";

let addresses = [
  {
    id: 1,
    fullName: "Matsya  Chanda",
    mobileNumber: "00792322080",
    address: "Sector-26, Gandhinagar",
    state: "Gujarat",
    city: "Ahmedabad",
    pin: "382044",
    isDefault: false,
  },
  {
    id: 3,
    fullName: "Samantaka  Sachar",
    mobileNumber: "02222059092",
    address: "38 nd Floor Kalbadevidevi Road, Tak Wadi Bhd / , Kalbadevi",
    state: "Maharashtra",
    city: "Mumbai",
    pin: "400002",
    isDefault: true,
  },
  {
    id: 2,
    fullName: "Amritha  Sathe",
    mobileNumber: "02222011939",
    address: "375 , Kalbadevi Road, Kalbadevi",
    state: " Maharashtra",
    city: "Mumbai",
    pin: "400002",
    isDefault: false,
  },
 
];

function Address({ selected, addressInfo, setSelectedAddress }) {
  const { id, fullName, address, mobileNumber, state, city, pin } = addressInfo;

  return (
    <div
      className={`md:w-1/2 flex mt-2 pb-2  relative ${
        selected ? "border-2 border-blue500" : ""
      } `}
    >
      <div className="flex-grow select-none">

        <h2 className="text-gray-900 text-lg title-font font-medium mb-2 ml-1">
          {fullName}
        </h2>
        <p className="leading-relaxed text-base ml-1">{address}</p>
        <p className="leading-relaxed text-base ml-1">{city}</p>
        <p className="leading-relaxed text-base ml-1">
          {state} - {pin}
        </p>
        <p className="leading-relaxed text-base ml-1">{mobileNumber}</p>
        <button
          className="flex ml-1 mt-2 text-sp-btn-primary font-bold  
           py-2 px-6 rounded border-2 border-sp-btn-primary hover:bg-sp-btn-primary hover:text-white"
          type="button"
          onClick={() => setSelectedAddress(id)}
        >
          Deliver To This Address
        </button>
      </div>
    </div>
  );
}

function Checkout() {
  const history = useHistory();

  const proceedToPayment = () =>{ 
    if(!selectedAddress){
      return alert("Please select a delivery address.")
    }
    let path = `payment`; 
    history.push(path);
  }

  const [showAddressForm, setShowAddressForm] = React.useState(false);
  const [selectedAddress, setSelectedAddress] = React.useState("");

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

  const saveAddress = (e) => {
    e.preventDefault()
    console.log(formData);
    let id = Math.random();
    addresses.push({...formData, id})
    setSelectedAddress(id);
    setShowAddressForm(false);
  }

  return (
    <div className="bg-white">
      <main className="my-8">
        <div className="container mx-auto px-6 lg:w-3/5">
          <h3 className="text-gray-700 text-2xl font-medium">Checkout</h3>
          <div className="flex flex-col lg:flex-row mt-8">
            <div className="w-full lg:w-full">
              <form className="w-full" onSubmit={saveAddress}>
                <div>
                  <h4 className="text-sm text-gray-500 font-medium">
                    Select A Delivery Address
                  </h4>
                  <div className=" flex flex-wrap mt-6">
                    {addresses.map((address) => {
                      return (
                        <Address
                          selected={selectedAddress === address.id}
                          setSelectedAddress={setSelectedAddress}
                          key={address.id}
                          addressInfo={address}
                        />
                      );
                    })}
                  </div>
                  <div className="flex justify-end mt-6">
                    <button
                      className="flex text-white bg-sp-btn-selected border-0 py-3 px-14 sm:px-24 font-bold hover:bg-sp-btn-selected-dark rounded"
                      type="button"
                      onClick={() => setShowAddressForm(true)}
                    >
                      Add New Address
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
                      className="flex text-white bg-sp-btn-selected border-0 py-3 px-14 sm:px-24 font-bold hover:bg-sp-btn-selected-dark rounded"
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
                    className="flex text-white bg-sp-btn-primary border-0 py-3 px-14 sm:px-24 font-bold hover:bg-sp-btn-primary-dark rounded"
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
  );
}

export default Checkout;
