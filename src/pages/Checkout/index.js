import React, { useState } from "react";
import AddressForm from "./AddressForm";
import { FormattedMessage } from "react-intl";

function Address() {
  return (
    <div className="md:w-1/2 flex pr-2  mt-2 hover:border-2 border-blue-500 ">
      <div className="flex-grow select-none p-1 cursor-pointer rounded-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
        <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
          Shooting Stars
        </h2>
        <p className="leading-relaxed text-base">
          Blue bottle crucifix vinyl post-ironic four dollar toast vegan
          taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi
          pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.
        </p>
        <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More</a>
      </div>
    </div>
  );
}



function Checkout() {
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

  return (
    <div className="bg-white">
      <main className="my-8">
        <div className="container mx-auto px-6 lg:w-3/5">
          <h3 className="text-gray-700 text-2xl font-medium">Checkout</h3>
          <div className="flex flex-col lg:flex-row mt-8">
            <div className="w-full lg:w-full">
              <form className="w-full">
                <div>
                  <h4 className="text-sm text-gray-500 font-medium">
                    Select A Delivery Address
                  </h4>
                  <div className=" flex flex-wrap mt-6 md:space-y-0 space-y-6">
                    <Address />
                    <Address />
                    <Address />
                  </div>
                  <div className="flex justify-end mt-6">
                    <button
                      className="flex ml-1 text-white font-bold  
           border-0 py-2 px-6 rounded bg-sp-btn-selected hover:bg-sp-btn-selected-dark"
                      type="button"
                      style={{ transition: "all .15s ease" }}
                      onClick={() => setShowAddressForm(true)}
                    >
                      Add New Address
                    </button>
                  </div>
                {showAddressForm &&  <div className="mt-6">
                    <AddressForm
                      formData={formData}
                      onChange={updateFormData}
                    />
                  </div>
                }
                </div>
                <div className="flex items-center justify-between my-8">
                  <button className="flex text-white bg-sp-btn-primary border-0 py-3 px-14 sm:px-24 font-bold hover:bg-sp-btn-primary-dark rounded">
                    <FormattedMessage
                      id="addToCart"
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
