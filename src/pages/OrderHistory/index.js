import { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { FormattedMessage } from 'react-intl'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import MainSpinner from '../../components/LoadingSpinners/MainSpinner'


import WifiOff from '../../IconSet/WifiOff'
import EmptyIcon from '../../IconSet/EmptyIcon'
import OrderHistoryContainer from '../../components/Cards/OrderHistoryCard/OrderHistoryContainer'

export default function Cart() {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)


    const cartItems = useSelector(state => state.user.cart)
    useEffect(() => {
        fetchCartItems()
    }, [])
    const fetchCartItems = async () => {
        setIsLoading(true)
        try {
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/order-history`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(cartItems)
            })
            const result = await response.json()
            const products = result.map(product => {
                const features = product.features
                const selectedFeature = {}
                features.forEach(feature => {
                    selectedFeature[feature.type] = 0
                })
                product.quantitySelected = 1
                product.selectedFeature = selectedFeature
                return product
            })
            setProducts(products)
        } catch (e) {
            setIsError(true)
        }
        setIsLoading(false)
    }

    let html = ""
    if (isLoading) {
        html = <MainSpinner />
    } else if (isError) {
        html = <ErrorMessage>
            <WifiOff className="w-10 h-10 md:w-16 md:h-16 fill-current text-gray-500 mr-2" />
            <FormattedMessage id="networkError" defaultMessage="Error connecting server" />
        </ErrorMessage>
    } else if (products.length === 0) {
        html = <ErrorMessage>
            <EmptyIcon className="w-10 h-10 md:w-16 md:h-16 fill-current text-gray-500 mr-2" />
            <FormattedMessage id="noItemInCart" defaultMessage="No Items" />
        </ErrorMessage>
    } else {
        html = <div className="flex flex-col mt-3 sm:mx-10 md:mx-24 sm:flex-row">
            <div className="w-full px-3 sm:px-0 mb-10 lg:mb-0">
                <div className="text-2xl capitalize mb-4"> {'>'}
                    <span className="ml-2">
                        <FormattedMessage id="orderHistory" defaultMessage="order history" />
                    </span>
                </div>

                {products.map((product, id) => <OrderHistoryContainer
                    key={`product_history_container_id_${id}`}
                    product={product}
                    id={id}
                />)}
            </div>
        </div>
    }

    return html
}