import React from 'react'

export default function Product() {
  return (
    <section className="text-sp-text-default body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400" />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-sp-text-default tracking-widest">Brand Name</h2>
            <h1 className="text-sp-text-default font-extrabold text-3xl title-font mb-1">Printed Tshirt</h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6 text-sp-btn-primary" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6 text-sp-btn-primary" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6 text-sp-btn-primary" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6 text-sp-btn-primary" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6 text-sp-btn-primary" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <span className="text-gray-600 ml-3">4 Reviews</span>
              </span>

            </div>
            <span className="title-font font-extrabold text-2xl text-sp-text-default">$58.00</span>
            <p className="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div>
                <span className="mr-3 font-bold text-lg">Color:</span>
                <span className="mr-3 font-medium text-lg">Selected Color</span>
                <div className="flex mt-1">
                  <button className="border-2 border-gray-300 rounded-full w-12 h-12 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-12 h-12 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-12 h-12 focus:outline-none"></button>
                </div>
              </div>

            </div>
            <div className="flex mt-6 items-center pb-5  mb-5r">
              <div>
                <span className="mr-3 font-bold text-lg">Size:</span>
                <div className="flex mt-1">
                  <button className="flex ml-1 text-white font-bold bg-sp-btn-selected border-0 py-2 px-6 focus:outline-none hover:bg-sp-btn-selected-dark rounded">Small</button>
                  <button className="flex ml-1 text-white font-bold bg-sp-btn-default border-0 py-2 px-6 focus:outline-none hover:bg-sp-btn-default-dark rounded">Medium</button>
                  <button className="flex ml-1 text-white  font-bold bg-sp-btn-default border-0 py-2 px-6 focus:outline-none hover:bg-sp-btn-default-dark rounded">Large</button>
                </div>
              </div>
            </div>
            <div className="flex mt-6 items-center pb-5  mb-5r">
              <div>
                <span className="mr-3 font-bold text-lg">Quantity:</span>
                <div className="flex mt-1">
                  <button className="text-sp-btn-primary bg-transparent border border-solid border-sp-btn-selected  hover:bg-sp-btn-selected  hover:text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1" type="button" >
                 -
                 </button>
                
                  <button className="text-sp-btn-primary bg-transparent border border-solid border-sp-btn-selected active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1" type="button" >
                    1
                    </button>
                  <button className="text-sp-btn-primary bg-transparent border border-solid border-sp-btn-selected  hover:bg-sp-btn-selected  hover:text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1" type="button" >
                    +
                    </button>
                </div>
              </div>
            </div>
            <div className="flex">

              <button className="flex text-white bg-sp-btn-primary border-0 py-3 px-24 font-bold focus:outline-none hover:bg-sp-btn-primary-dark rounded">Add To Cart</button>
              <button className="rounded-full w-12 h-12 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4 hover:bg-sp-btn-selected hover:text-white">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 " viewBox="0 0 24 24">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
