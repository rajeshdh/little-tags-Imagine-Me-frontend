import React from 'react';

function Textbox({ type, name, onChange, placeholder, value, ...rest }) {
  return (
    <input
      name={name}
      className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
      }}
      {...rest}
    />
  );
}

export default Textbox;
