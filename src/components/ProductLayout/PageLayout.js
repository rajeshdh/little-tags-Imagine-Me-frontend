import { FormattedNumber } from 'react-intl'

export const ProductPageLayout = ({ children }) => {
  return (
    <section className="text-sp-text-default body-font overflow-hidden ">
      <div className="container px-5 pt-4 pb-24 mx-auto ">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          {children}
        </div>
      </div>
    </section>
  )
}

export const ProductDescription = ({ description }) => {
  return <p className="leading-relaxed">{description}</p>
}

export const ProductHeader = ({ brandName, title }) => {
  return (
    <>
      <h2 className="text-sm title-font text-sp-text-default tracking-widest">{brandName}</h2>
      <h1 className="text-sp-text-default font-extrabold text-3xl title-font mb-1">{title}</h1>

    </>
  )
}

export const ProductSection = ({ sectionClasses, children }) => {
  let classes = 'lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 ' + sectionClasses || ''
  return (
    <div className={classes}>
      {children}
    </div>
  )
}


export const Price = ({ price, currency }) => {
  return <span className="title-font font-extrabold text-2xl text-sp-text-default">
    <FormattedNumber
      value={price}
      style="currency"
      currency={currency}
    />
  </span>
}

export const LikeButton = () => {
  return (
    <button title="Add To Favorites" className=" w-12 h-12 p-0 inline-flex items-center justify-center ml-4 hover:text-sp-btn-primary bg-transparent border border-solid border-sp-btn-selected">
      <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 transform delay-100 hover:scale-150" viewBox="0 0 24 24">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
      </svg>
    </button>)
}



export const AddToCartButton = () => {
  return (<button className="flex text-white bg-sp-btn-primary border-0 py-3 px-14 sm:px-24 font-bold hover:bg-sp-btn-primary-dark rounded">Add To Cart</button>)
}