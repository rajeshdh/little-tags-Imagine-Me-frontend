import { Link } from "react-router-dom";
import { FormattedNumber } from 'react-intl'
import { HeartFilled, HeartOutline } from '../../IconSet/Heart'
import ProductFeatures from "../ProductFeatures/ProductFeatures";

export default function ProductCard({ details }) {
    const { id, title, brand, currency, originalPrice, currentPrice, offer, features, items, image } = details


    return <div className="relative h-96 border border-gray-200 shadow-md transform delay-200 transition-all">
        <Link className="group" to={`/product/${id}`}>
            <div className="relative h-full">
                <div className="relative h-2/3 bg-center bg-contain bg-no-repeat flex items-end justify-center" style={{ backgroundImage: `url(${image})` }}>
                    {/* <img style={{maxHeight: '95%'}} src={process.env.REACT_APP_BASE_URL + image} alt={title} /> */}
                </div>
                <div className="absolute w-full bottom-0" style={{ minHeight: '8rem' }}>
                    <div className="relative p-3 bg-white h-full">
                        <div className="uppercase text-gray-500 text-sm">{brand}</div>
                        <div title={title} className="text-base font-medium h-6 overflow-hidden truncate">
                            {title}
                        </div>
                        <div className="flex font-medium items-center mb-2">
                            <div className=" text-lg font-semibold">
                                <FormattedNumber
                                    value={currentPrice}
                                    style="currency"
                                    currency={currency}
                                />
                            </div>
                            <div className="ml-2 line-through text-sm text-gray-600">
                                <FormattedNumber
                                    value={originalPrice}
                                    style="currency"
                                    currency={currency}
                                />
                            </div>
                            <div className="ml-2 text-green-600 text-sm">
                                {offer}% OFF
                            </div>
                        </div>
                        <div className="mb-5 sm:max-h-0 overflow-hidden transform transition-all duration-200 ease-in-out group-hover:max-h-full">
                            <ProductFeatures features={features} clickable={false} />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
        <div className="absolute left-3 bottom-2 text-sm">{items} in stock</div>
        <HeartFilled className="absolute right-2 top-2 cursor:pointer transform delay-100 hover:scale-110" />
        <button className="absolute bottom-2 right-2 bg-sp-btn-primary text-white px-2 py-1 rounded transform delay-100 hover:sp-btn-primary-dark z-20">Add To Cart</button>
    </div>
}