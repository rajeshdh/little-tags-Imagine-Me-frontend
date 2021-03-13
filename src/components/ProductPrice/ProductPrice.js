import { FormattedNumber } from 'react-intl'

export default function ProductPrice({ currentPrice, originalPrice, offer, currency }) {
    return <div className="flex font-medium items-center mb-2">
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
}