import React, { useState } from 'react';

function SearchBar({className}) {
  const [isOpen, setisOpen] = useState(false);

  function handleClick() {
    setisOpen(!isOpen);
  }

  return (
    <div className={className} >
      <div className={`p-6 md:hidden`}>
        <div className="bg-white flex items-center rounded-full shadow-xl animate-bottom-top">
          <input className="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none" id="search" type="text" placeholder="Search" />

          <div className="p-1">
            <button className="bg-sp-btn-primary hover:bg-sp-btn-primary-dark text-white rounded-full p-2 focus:outline-none w-10 h-10 flex items-center justify-center">
              <svg width="41" height="39" viewBox="0 0 41 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M37.3702 34.0723L27.4171 24.1191C29.3451 21.7377 30.5059 18.7116 30.5059 15.4158C30.5059 7.77708 24.2905 1.56165 16.6518 1.56165C9.01315 1.56165 2.79785 7.77702 2.79785 15.4158C2.79785 23.0545 9.01322 29.27 16.6519 29.27C19.9477 29.27 22.9737 28.1091 25.3551 26.1812L35.3081 36.1343C35.5925 36.4187 35.9658 36.5616 36.3392 36.5616C36.7125 36.5616 37.0859 36.4187 37.3702 36.1343C37.9404 35.5641 37.9404 34.6425 37.3702 34.0723ZM16.6519 26.3533C10.6203 26.3533 5.71451 21.4475 5.71451 15.4158C5.71451 9.38408 10.6203 4.47827 16.6519 4.47827C22.6835 4.47827 27.5893 9.38408 27.5893 15.4158C27.5893 21.4475 22.6834 26.3533 16.6519 26.3533Z" fill="#F9F9F9" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="hidden md:inline-block">
        <div className={`p-6 ${isOpen ? "inline-block" : "hidden"} `}>
          <div className="bg-white flex items-center rounded-full shadow-xl animate-bottom-top">
            <input className="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none" id="search" type="text" placeholder="Search" />

            <div className="p-1">
              <button className="bg-sp-btn-primary hover:bg-sp-btn-primary-dark text-white rounded-full p-2 focus:outline-none w-10 h-10 flex items-center justify-center">
                <svg width="41" height="39" viewBox="0 0 41 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M37.3702 34.0723L27.4171 24.1191C29.3451 21.7377 30.5059 18.7116 30.5059 15.4158C30.5059 7.77708 24.2905 1.56165 16.6518 1.56165C9.01315 1.56165 2.79785 7.77702 2.79785 15.4158C2.79785 23.0545 9.01322 29.27 16.6519 29.27C19.9477 29.27 22.9737 28.1091 25.3551 26.1812L35.3081 36.1343C35.5925 36.4187 35.9658 36.5616 36.3392 36.5616C36.7125 36.5616 37.0859 36.4187 37.3702 36.1343C37.9404 35.5641 37.9404 34.6425 37.3702 34.0723ZM16.6519 26.3533C10.6203 26.3533 5.71451 21.4475 5.71451 15.4158C5.71451 9.38408 10.6203 4.47827 16.6519 4.47827C22.6835 4.47827 27.5893 9.38408 27.5893 15.4158C27.5893 21.4475 22.6834 26.3533 16.6519 26.3533Z" fill="#F9F9F9" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {!isOpen && (<button
          className=" bg-sp-btn-primary hover:bg-sp-btn-primary-dark text-white font-bold p-4 rounded items-center justify-center"
          onClick={handleClick}
        >
          <svg className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" width="41" height="39" viewBox="0 0 41 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M37.3702 34.0723L27.4171 24.1191C29.3451 21.7377 30.5059 18.7116 30.5059 15.4158C30.5059 7.77708 24.2905 1.56165 16.6518 1.56165C9.01315 1.56165 2.79785 7.77702 2.79785 15.4158C2.79785 23.0545 9.01322 29.27 16.6519 29.27C19.9477 29.27 22.9737 28.1091 25.3551 26.1812L35.3081 36.1343C35.5925 36.4187 35.9658 36.5616 36.3392 36.5616C36.7125 36.5616 37.0859 36.4187 37.3702 36.1343C37.9404 35.5641 37.9404 34.6425 37.3702 34.0723ZM16.6519 26.3533C10.6203 26.3533 5.71451 21.4475 5.71451 15.4158C5.71451 9.38408 10.6203 4.47827 16.6519 4.47827C22.6835 4.47827 27.5893 9.38408 27.5893 15.4158C27.5893 21.4475 22.6834 26.3533 16.6519 26.3533Z" fill="#F9F9F9" />
          </svg>

        </button>
        )}
        {isOpen && (<button type="button" className="font-bold py-2 px-4 rounded items-center justify-center" onClick={handleClick}>
          <svg className="fill-current w-4 h-4 mr-2" width="22" height="22" viewBox="0 0 22 22">
            <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
          </svg>
        </button>
        )}
      </div>
    </div>
  )
}
export default SearchBar;