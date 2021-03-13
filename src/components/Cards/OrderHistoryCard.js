import { Link } from 'react-router-dom'
import ProductPrice from '../ProductPrice/ProductPrice'
import ProductFeatures from '../ProductFeatures/ProductFeatures'
import { FormattedMessage } from 'react-intl'

export default function OrderHistoryCard({ product }) {
    const { id, title, brand, image, features, quantitySelected, selectedFeature, offer, originalPrice, currentPrice, currency } = product

    return <div test-id="order-history-card" className="flex flex-col sm:flex-row p-3 shadow border border-gray-200 mb-4 max-w-7xl m-auto">
        <div className="flex items-center flex-col justify-center w-full sm:flex-col sm:max-w-min-l p-3">
            <Link to={`/product/${id}`}>
                <img src={image} className="h-40" />
            </Link>
        </div>
        <div className="px-3 flex-grow relative">
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
            <div>
                <span className="text-gray-700"><FormattedMessage id="quantity" defaultMessage="quantity" /></span>:
                <span className="ml-2">{quantitySelected}</span>
            </div>
            <div className="mt-3">
                <ProductFeatures
                    features={features}
                    featuresSelected={selectedFeature}
                />
            </div>
        </div>
    </div>
}