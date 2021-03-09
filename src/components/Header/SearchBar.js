import React, { useState } from 'react';
import SearchInput from './SearchInput';
import Downshift from 'downshift'

import { useHistory } from "react-router-dom";

const items = [
  { value: 'shoe' },
  { value: 't-shirt' },
  { value: 'shirt' },
  { value: 'hat' },
  { value: 'bag' },
  { value: 'laptop' },
  { value: 'jeans' },
]


function SearchButton({ handleClick }) {
  return (
    <button
      className=" bg-sp-btn-primary hover:bg-sp-btn-primary-dark text-white font-bold p-4 rounded items-center justify-center"
      onClick={handleClick}
    >
      <svg className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" width="41" height="39" viewBox="0 0 41 39" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M37.3702 34.0723L27.4171 24.1191C29.3451 21.7377 30.5059 18.7116 30.5059 15.4158C30.5059 7.77708 24.2905 1.56165 16.6518 1.56165C9.01315 1.56165 2.79785 7.77702 2.79785 15.4158C2.79785 23.0545 9.01322 29.27 16.6519 29.27C19.9477 29.27 22.9737 28.1091 25.3551 26.1812L35.3081 36.1343C35.5925 36.4187 35.9658 36.5616 36.3392 36.5616C36.7125 36.5616 37.0859 36.4187 37.3702 36.1343C37.9404 35.5641 37.9404 34.6425 37.3702 34.0723ZM16.6519 26.3533C10.6203 26.3533 5.71451 21.4475 5.71451 15.4158C5.71451 9.38408 10.6203 4.47827 16.6519 4.47827C22.6835 4.47827 27.5893 9.38408 27.5893 15.4158C27.5893 21.4475 22.6834 26.3533 16.6519 26.3533Z" fill="#F9F9F9" />
      </svg>

    </button>
  )
}

function CloseButton({ handleClick }) {
  return (
    <button type="button" className="absolute right-8 top-3 font-bold py-2 px-4 rounded items-center justify-center focus:outline-none" onClick={handleClick}>
      <svg className="fill-current w-4 h-4 mr-2" width="22" height="22" viewBox="0 0 22 22">
        <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
      </svg>
    </button>)
}

function AutoComplete({children, isSearchOpen}){
  const history = useHistory();
  return <Downshift
  onChange={selection =>{
    let path = `/search?q=${selection.value}`; 
    history.push(path)
  }}
  itemToString={item => (item ? item.value : '')}
>
  {({
    getInputProps,
    getItemProps,
    getLabelProps,
    getMenuProps,
    isOpen,
    inputValue,
    highlightedIndex,
    selectedItem,
    getRootProps,
  }) => (
    <div {...getRootProps({}, { suppressRefError: true })}>
      <div className={`rounded-full border border-bg-gray-50 ${isSearchOpen ? "block" : "hidden"} `}>
        <SearchInput {...getInputProps()} />
        <aside className={`absolute z-50 ${isSearchOpen ? "" : "hidden"} flex flex-col items-start inset-x-5 sm:inset-x-7 md:inset-x-0 bg-white rounded-md shadow-xl animate-bottom-top`}
          role="menu" aria-labelledby="menu-heading" >
          <ul {...getMenuProps()} className="flex flex-col w-full">
            {isOpen
              ? items
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                        highlightedIndex === index ? '#2CB5BE' : 'white',
                        color:
                        highlightedIndex === index ? 'white' : 'black',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                    className="px-2 py-3 space-x-2 hover:bg-sp-btn-selected hover:text-white"
                  >
                    {item.value}
                  </li>
                ))
              : null}
          </ul>
        </aside>
      </div>
    {children}
    
      </div>
      )}
</Downshift>

}

function SearchBar({ className }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  function handleClick() {
    setIsSearchOpen(!isSearchOpen);
  }

  return (
    <div className={`${className} w-100`} >
      <div className={`md:hidden w-100`}>
      <AutoComplete isSearchOpen={true} />
      </div>
      <div className="hidden md:inline-block">
     <AutoComplete isSearchOpen={isSearchOpen}>
     { !isSearchOpen && <SearchButton handleClick={handleClick} />
      }
      { isSearchOpen && <CloseButton handleClick={handleClick} />}
     </AutoComplete>
       </div>
    </div>
  )
}
export default SearchBar;