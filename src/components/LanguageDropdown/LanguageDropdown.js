import React, { useState } from 'react';
import { connect } from "react-redux";
import { changeLocale } from '../../redux/actions';

import { En, Hi, Open, Close } from '../../IconSet'

const languageOptions = [
  {
    id: 1,
    value: 'en',
    html: <En />
  },
  {
    id: 2,
    value: 'hi',
    html: <Hi />
  },
];

function LanguageDropdown({ locale, changeLocale}) {
  const selectedLanguage = languageOptions.find((item) => item.value === locale);

  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState(selectedLanguage || languageOptions[0]);
  const toggle = () => setOpen(!open);

  function handleOnClick(item) {
    changeLocale({value: item.value});
    setSelection(item);
    toggle(!open)
  }

  return (
    <div className="inline-block relative">
      <button
        className="outline-none focus:outline-none border px-3 py-1 uppercase bg-white rounded-sm flex items-center min-w-80"
        onKeyPress={() => toggle(!open)}
        onClick={() => toggle(!open)}
      >
        {selection.html}

        <span className="mr-1">{selection.value}</span>

        <p>{open ? <Close /> : <Open />}</p>

      </button>
      {open && (
        <ul className="border block bg-white rounded-sm absolute z-50">
          {languageOptions.map(item => (
           item.value !== selection.value && <li className="rounded-sm px-3 py-1  hover:bg-gray-100 flex items-center" key={item.id}>
              <button className="flex items-center uppercase" type="button" onClick={() => handleOnClick(item)}>
                {item.html} <span className="m-1">{item.value}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const mapStateToProps = state => {
  const { locale } = state
  return { locale }
}
const mapDispatchToProps = dispatch => ({
  changeLocale: (payload) => dispatch(changeLocale(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(LanguageDropdown);