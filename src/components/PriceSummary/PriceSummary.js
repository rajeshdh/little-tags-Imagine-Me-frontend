import { useEffect, useState } from 'react'

import { FormattedMessage, FormattedNumber } from "react-intl";
import ProductPriceDetails from "./ProductPriceDetails";

export default function PriceSummary({ priceDetails, parentRef, totalPrice, placeOrder }) {
    const [width, setWidth] = useState(0)
    const [hidden, setHidden] = useState(true)

    useEffect(() => {
        if (parentRef.current !== null) {
            setWidth(parentRef.current.offsetWidth)
            if (window.innerWidth >= 1278) {
                setHidden(false)
            }
            window.addEventListener("resize", changeWidth)
        }
        return () => {
            window.removeEventListener("resize", changeWidth)
        }
    }, [parentRef])

    const changeWidth = () => {
        if (window.innerWidth >= 1278) {
            setHidden(false)
        }
        setWidth(parentRef.current.offsetWidth)
    }
    const togglePriceDetails = () => {
        setHidden(prevState => !prevState)
    }
    return <div className="bg-white p-3 fixed bottom-12 sm:bottom-0 xl:bottom-auto xl:top-1/2 xl:transform xl:-translate-y-1/2 shadow border border-gray-200" style={{ width: `${width}px` }}>
        <div className={`${hidden ? 'h-0 overflow-hidden' : 'transition-transform duration-500 ease-in-out'} transform xl:block`}>
            <h1 className="text-xl font-semibold mb-3 uppercase text-center">
                <FormattedMessage id="priceSummary" defaultMessage="Price Summary" />
            </h1>
            <h3 className="text-lg mb-2 uppercase">
                <FormattedMessage id="items" defaultMessage="items" />
            </h3>
            <div className="overflow-y-auto max-h-36">
                {priceDetails.map((priceDetail, index) => <ProductPriceDetails
                    key={`price_details_id_${index}`}
                    currency={priceDetail.currency}
                    price={priceDetail.price}
                    number={priceDetail.quantity}
                    title={priceDetail.title}
                />)}
            </div>
        </div>
        <div>
            <div className='flex text-xl items-center px-2 xl:px-0 capitalize font-semibold md:justify-between my-1 sm:my-5'>
                <div onClick={togglePriceDetails} className="capitalize cursor-pointer underline font-light text-sm text-green-800 xl:hidden">
                    <FormattedMessage id="priceDetails" defaultMessage="price details" />
                </div>
                <div className="flex-grow flex justify-end xl:justify-between">
                    <h2 className="hidden uppercase xl:block"><FormattedMessage id="total" defaultMessage="total" /></h2>
                    <h2><FormattedNumber style="currency" value={totalPrice} currency="INR" /></h2>
                </div>
            </div>

            <button onClick={placeOrder} className="block w-full rounded uppercase font-semibold py-3 bg-sp-btn-primary text-white focus:outline-none hover:bg-sp-btn-primary-dark"><FormattedMessage id="placeOrder" defaultMessage="place order" /></button>
        </div>
    </div>
}