import { FormattedNumber } from "react-intl";

export default function ProductPriceDetails({ title, number, price, currency }) {
    return <div className="flex justify-between text-gray-500 my-2">
        <div className="flex w-9/12">
            <div className="flex-grow truncate mr-1">{title}</div>
            <div className="w-8"> x {number}</div>
        </div>
        <div className="w-3/12 text-right text-black"><FormattedNumber value={price} currency={currency} style="currency" /></div>
    </div>
}