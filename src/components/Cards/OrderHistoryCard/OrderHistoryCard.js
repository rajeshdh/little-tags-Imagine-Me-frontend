import { Link } from 'react-router-dom'
import ProductPrice from '../../ProductPrice/ProductPrice'
import ProductFeatures from '../../ProductFeatures/ProductFeatures'
import { FormattedDate, FormattedMessage } from 'react-intl'

export default function OrderHistoryCard({ product }) {
    const { id, title, brand, image, features, quantitySelected, selectedFeature, offer, originalPrice, currentPrice, currency, orderDate } = product

    return <div test-id="order-history-card" className="flex transition-transform duration-500 transform flex-col p-3 shadow border border-gray-200 mb-4 sm:flex-row lg:flex-col xl:flex-row group-hover:scale-101">
        <div className="flex items-center flex-col justify-center w-full p-3 sm:max-w-min-l lg:max-w-full xl:max-w-min-l">
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
            <div className="lg:hidden">
                <span className="text-gray-700 capitalize"><FormattedMessage id="orderDate" defaultMessage="order date" /></span>:
                <span className="ml-2">
                    <FormattedDate
                        value={orderDate}
                        day="numeric"
                        month="long"
                        year="numeric" />
                </span>
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