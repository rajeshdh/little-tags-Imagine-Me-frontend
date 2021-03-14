import { Link } from 'react-router-dom'
import ProductPrice from '../ProductPrice/ProductPrice'
import { HeartOutline } from '../../IconSet/Heart'
import DeleteIcon from '../../IconSet/DeleteIcon'
import ProductFeatures from '../ProductFeatures/ProductFeatures'
import Quantity from '../ProductFeatures/Quantity/index'
import { FormattedMessage } from 'react-intl'

export default function ProductCartCard({ product, increaseQuantity, decreaseQuantity, featureChangeHandler, onQuantityChanged, removeCartItem, moveToWishlist }) {
    const { id, title, brand, stock, image, features, quantitySelected, selectedFeature, offer, originalPrice, currentPrice, currency } = product

    return <div test-id="product-cart-card" className="flex flex-col sm:flex-row p-3 shadow border border-gray-200 mb-4 max-w-7xl">
        <div className="flex items-center flex-col justify-center w-full sm:flex-col sm:max-w-min-l p-3">
            <Link to={`/product/${id}`}>
                <img src={image} className="h-40" />
            </Link>
            <Quantity small
                selected={quantitySelected}
                max={stock}
                increaseQuantity={() => increaseQuantity(id)}
                decreaseQuantity={() => decreaseQuantity(id)}
                onChange={(quantity) => onQuantityChanged(id, quantity)}
            />
        </div>
        <div className="px-3 pb-10 flex-grow relative">
            <h6 className="uppercase mb-1 text-sm text-gray-500">{brand}</h6>
            <Link className="mb-2" to={`/product/${id}`}>
                <h4 className="text-2xl text-sp-text-default">{title}</h4>
            </Link>
            <ProductPrice
                currency={currency}
                originalPrice={originalPrice}
                currentPrice={currentPrice}
                offer={offer}
            />
            <div className="mt-3">
                <ProductFeatures
                    features={features}
                    featuresSelected={selectedFeature}
                    small
                    clickable={(type, index) => featureChangeHandler(id, type, index)}
                />
            </div>
            <div className="absolute flex w-full bottom-0">
                <button test-id="product-cart-card-wishlist" onClick={() => moveToWishlist(id)} className="flex items-center uppercase group hover:text-sp-heading-blue pr-3 border-r border-gray-500">
                    <HeartOutline className="fill-current mr-2 w-5 h-5 text-sp-text-default group-hover:text-sp-heading-blue" />
                    <FormattedMessage id="moveToWishlist" defaultMessage="Move to wishlist" />
                </button>
                <button test-id="product-cart-card-remove" onClick={() => removeCartItem(id)} className="flex items-center uppercase group hover:text-red-500 pl-3 border-gray-500">
                    <DeleteIcon className="fill-current mr-2 w-5 h-5 text-sp-text-default group-hover:text-red-500" />
                    <FormattedMessage id="remove" defaultMessage="remove" />
                </button>
            </div>
        </div>
    </div>
}