import React from "react";
import { FormattedMessage } from "react-intl";

function Textbox({ type, name, onChange, placeholder, value, ...rest }) {
  return (
    <input
      name={name}
      className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => {
        onChange(e);
      }}
      {...rest}
    ></input>
  );
}

function AddressForm({
  fullName,
  mobileNumber,
  address,
  state,
  city,
  pin,
  isDefault,
  onChange
}) {
  return (
    <>
      <div className="flex flex-col mb-6">
        <label
          htmlFor="fullName"
          className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
        >
          <FormattedMessage id="fullName" defaultMessage="Full name (First and Last name)" />
        </label>
        <div className="relative">
          <Textbox
            name="fullName"
            type="text"
            value={fullName}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
      </div>
      <div className="flex flex-col mb-6">
        <label
          htmlFor="mobileNumber"
          className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
        >
          <FormattedMessage id="mobileNumber" defaultMessage="Mobile Number" />
        </label>
        <div className="relative">
          <Textbox
            name="mobileNumber"
            type="number"
            placeholder="10-digit mobile number without prefixes"
            value={mobileNumber}
            onChange={(e) => onChange(e)}
            required
          />
          <span className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">May be used to assist delivery</span>
        </div>
      </div>
      <div className="flex flex-col mb-6">
        <label
          htmlFor="address"
          className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
        >
          <FormattedMessage id="address" defaultMessage="Address"/>
        </label>
        <div className="relative">
          <textarea
            name="address"
            className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
            value={address}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
      </div>
      <div className="flex flex-col mb-6">
        <label
          htmlFor="city"
          className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
        >
          <FormattedMessage id="city" defaultMessage="Town/City" />
        </label>
        <div className="relative">
          <Textbox
            name="city"
            type="text"
            value={city}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
      </div>
      <div className="flex flex-col mb-6">
        <label
          htmlFor="state"
          className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
        >
          <FormattedMessage id="state" defaultMessage="State" />
        </label>
        <div className="relative">
          <Textbox
            name="state"
            type="text"
            value={state}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
      </div>

      <div className="flex flex-col mb-6">
        <label
          htmlFor="pin"
          className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
        >
          <FormattedMessage id="pin" defaultMessage="PIN code"/>
        </label>
        <div className="relative">
          <Textbox
            name="pin"
            type="number"
            placeholder="6 digits [0-9] PIN code"
            value={pin}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
      </div>
      <div className="flex justify-start items-start mb-6">
   
        <div className="relative">
          <input
            name="isDefault"
            type="checkbox"
            value={isDefault}
            onChange={(e) => onChange(e)}
            checked={!!isDefault}
          />
        </div>
        <label
          htmlFor="isDefault"
          className="mb-1 ml-2 text-xs sm:text-sm tracking-wide text-gray-600"
        >
          <FormattedMessage id="isDefault" defaultMessage="Use as my default address." />
        </label>
      </div>
    </>
  );
}

export default AddressForm;
