import OrderHistoryCard from "./OrderHistoryCard";
import { FormattedDate } from 'react-intl'

export default function OrderHistoryContainer({ product, id }) {
    const { orderDate } = product
    return <div className="flex group">
        <div className="w-full max-w-md relative hidden lg:block">
            <div className="flex justify-center h-full">
                <div className="w-1 h-full bg-sp-btn-primary"></div>
            </div>
            <div className="w-4 h-4 group-hover:scale-125 top-1/2 left-1/2 transform transition-all ease-in-out duration-500 -translate-x-1/2 -translate-y-3 rounded-full bg-sp-btn-primary absolute"></div>
            <div className={`${id % 2 === 0 ? 'ml-3 group-hover:ml-8' : '-translate-x-full -ml-3  group-hover:-ml-8'} transition-all ease-in-out duration-500 group-hover:scale-125 top-1/2 left-1/2 transform -translate-y-5 px-2 py-1 rounded bg-sp-heading-blue text-white absolute`}>
            <FormattedDate
                value={orderDate}
                day="numeric"
                month="long"
                year="numeric"/>
            </div>
        </div>
        <div className="flex-grow">
            <OrderHistoryCard product={product} />
        </div>
    </div>
}