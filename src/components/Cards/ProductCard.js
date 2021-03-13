import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux'

import { FormattedMessage, FormattedNumber } from 'react-intl'
import { HeartFilled, HeartOutline } from '../../IconSet/Heart'
import { CartIcon } from '../../IconSet/CartIcon'
import ProductFeatures from "../ProductFeatures/ProductFeatures";
import StarRating from "../StarRating/StarRating";
import { ADD_TO_CART, ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "../../redux/user/actionTypes";
import ProductPrice from "../ProductPrice/ProductPrice";

export default function ProductCard({ details, isWishList, isAddedToCart }) {
    const { id, title, brand, rating, currency, originalPrice, currentPrice, offer, features, stock, image } = details

    const dispatch = useDispatch()

    return <div className="relative h-96 border border-gray-200 shadow-md transform delay-200 transition-all">
        <Link className="group" to={`/product/${id}`}>
            <div className="relative h-full">
                <div className="relative h-2/3 bg-center bg-contain bg-no-repeat flex items-end justify-center" style={{ backgroundImage: `url(${image})` }}>
                </div>
                <div className="absolute w-full bottom-0" style={{ minHeight: '8rem' }}>
                    <div className="relative p-3 bg-white h-full">
                        <StarRating rating={rating} />
                        <div className="uppercase text-gray-500 text-sm">{brand}</div>
                        <div title={title} className="text-base font-medium h-6 overflow-hidden truncate">
                            {title}
                        </div>
                        <ProductPrice
                            currency={currency}
                            originalPrice={originalPrice}
                            currentPrice={currentPrice}
                            offer={offer}
                        />
                        <div className="mb-5 sm:max-h-0 overflow-hidden transform transition-all duration-200 ease-in-out group-hover:max-h-full">
                            <ProductFeatures features={features} />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
        <div className="absolute left-3 bottom-2 text-sm">
            <FormattedMessage id="inStock" defaultMessage="{stock} in stock" values={{ stock }} />
        </div>
        {isWishList ? <HeartFilled className="absolute right-2 top-2 cursor-pointer transform delay-100 hover:scale-110" onClick={() => dispatch({ type: REMOVE_FROM_WISHLIST, payload: id })} /> :
            <HeartOutline className="absolute fill-current text-sp-btn-primary right-3 top-4 cursor-pointer transform delay-100 hover:scale-110" onClick={() => dispatch({ type: ADD_TO_WISHLIST, payload: id })} />}
        <button
            className={`absolute bottom-2 right-2 bg-sp-btn-primary text-white p-2 rounded transform delay-100 hover:bg-sp-btn-primary-dark z-20 focus:outline-none ${isAddedToCart ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={isAddedToCart}
            onClick={() => dispatch({ type: ADD_TO_CART, payload: id })}
        >
            <CartIcon fill="white" />
        </button>
    </div>
}