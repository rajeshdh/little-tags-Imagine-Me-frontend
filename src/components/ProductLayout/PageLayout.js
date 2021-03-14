import { FormattedMessage, FormattedNumber } from 'react-intl'
import { useDispatch } from 'react-redux'
import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from '../../redux/user/actionTypes'
import { HeartFilled, HeartOutline } from '../../IconSet/Heart'

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

export const LikeButton = ({ isWishList, className, id }) => {
  const dispatch = useDispatch()
  return (
    <button title="Add To Favorites"
      className="focus:outline-none rounded group relative w-12 h-12 p-0 inline-flex items-center justify-center ml-4 hover:text-sp-btn-primary bg-transparent border border-solid border-sp-btn-selected"
      onClick={() => dispatch({ type: isWishList ? REMOVE_FROM_WISHLIST : ADD_TO_WISHLIST, payload: id })}
    >
      {isWishList ? <HeartFilled className={`${className} absolute top-1/2 -translate-y-5 fill-current transform duration-100 group-hover:scale-110`} /> :
        <HeartOutline className={`${className} absolute top-1/2 -translate-y-1/2 fill-current text-sp-btn-primary transform duration-100 group-hover:scale-110`} />}
    </button>)
}



export const AddToCartButton = () => {
  return (<button className="flex text-white bg-sp-btn-primary border-0 py-3 px-14 sm:px-24 font-bold hover:bg-sp-btn-primary-dark rounded"> <FormattedMessage id="addToCart" defaultMessage="Add To Cart" /></button>)
}