import { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { FormattedMessage } from 'react-intl'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import ProductCartCard from '../../components/Cards/ProductCartCard'
import MainSpinner from '../../components/LoadingSpinners/MainSpinner'
import PriceSummary from '../../components/PriceSummary/PriceSummary'
import { ADD_TO_ORDER } from '../../redux/user/actionTypes'


import WifiOff from '../../IconSet/WifiOff'
import EmptyIcon from '../../IconSet/EmptyIcon'

export default function Cart() {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    const ref = useRef(null)

    const dispatch = useDispatch()

    const cartItems = useSelector(state => state.user.cart)
    useEffect(() => {
        fetchCartItems()
    }, [])
    const fetchCartItems = async () => {
        setIsLoading(true)
        try {
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/cart`, {
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

    const featureSelectHandler = (id, feature, index) => {
        const updatedProducts = products.map(product => {
            if (product.id === id) {
                const selectedFeature = { ...product.selectedFeature }
                selectedFeature[feature] = index
                product.selectedFeature = selectedFeature
            }
            return product
        })
        setProducts(updatedProducts)
    }

    const decreaseQuantity = (id) => {
        const updatedProducts = products.map(product => {
            if (product.id === id) {
                const quantity = product.quantitySelected
                product.quantitySelected = quantity - 1 > 0 ? quantity - 1 : quantity
            }
            return product
        })
        setProducts(updatedProducts)
    }
    const increaseQuantity = (id) => {
        const updatedProducts = products.map(product => {
            if (product.id === id) {
                const quantity = product.quantitySelected
                product.quantitySelected = quantity + 1 > product.stock ? product.stock : quantity + 1
            }
            return product
        })
        setProducts(updatedProducts)
    }

    const onQuantityChanged = (id, quantity) => {
        const updatedProducts = products.map(product => {
            if (product.id === id) {
                product.quantitySelected = quantity > product.stock ? product.stock : quantity
            }
            return product
        })
        setProducts(updatedProducts)
    }

    const placeOrder = () => {
        dispatch({ type: ADD_TO_ORDER, payload: products })
        // TODO Selected order is saved in 'order', redirect to checkout page here
    }

    let totalPrice = 0
    const priceDetails = products.map(product => {
        const quantity = product.quantitySelected
        const price = product.currentPrice * quantity
        totalPrice += price
        return {
            title: product.title,
            quantity,
            price,
            currency: product.currency
        }
    })

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
        html = <div className="flex flex-col mt-3 mx-3 sm:mx-10 md:mx-24 sm:flex-row">
            <div className="flex flex-col mb-36 sm:mb-32 xl:mb-0 xl:flex-row w-full">
                <div className="flex-grow">
                    {products.map((product, id) => <ProductCartCard
                        key={`product_cart_card_id_${id}`}
                        product={product}
                        featureChangeHandler={featureSelectHandler}
                        increaseQuantity={increaseQuantity}
                        decreaseQuantity={decreaseQuantity}
                        onQuantityChanged={onQuantityChanged}
                    />)}
                </div>
                <div ref={ref} className="w-full xl:pl-2 xl:min-w-lg xl:w-3/12">
                    <PriceSummary
                        parentRef={ref}
                        priceDetails={priceDetails}
                        totalPrice={totalPrice}
                        placeOrder={placeOrder}
                    />
                </div>
            </div>
        </div>
    }

    return html
}