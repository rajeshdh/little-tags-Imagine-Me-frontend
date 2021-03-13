import { useEffect } from 'react'
import { FormattedMessage } from 'react-intl'
import { useDispatch, useSelector } from 'react-redux'

import { fetchProducts } from '../../redux/product/actions'

import ProductCard from '../../components/Cards/ProductCard';
import MainSpinner from '../../components/LoadingSpinners/MainSpinner'
import WifiOff from '../../IconSet/WifiOff'
import EmptyIcon from '../../IconSet/EmptyIcon'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'


export default function Product(props) {

    const { wishList, products, cart, isLoading, error } = useSelector(state => ({
        wishList: state.user.wishList,
        cart: state.user.cart,
        products: state.product.products,
        error: state.product.error,
        isLoading: state.product.isLoading
    }))

    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(fetchProducts(`${process.env.REACT_APP_BASE_URL}/wishlist`, wishList)) //TODO - CHANGE URL WHEN BACKEND IMPLEMENTS
    }, [wishList])



    let result = null
    if (isLoading) {
        result = <MainSpinner />
    } else if (error) {
        result = <ErrorMessage>
            <WifiOff className="w-10 h-10 md:w-16 md:h-16 fill-current text-gray-500 mr-2" />
            <FormattedMessage id="networkError" defaultMessage="Error connecting server" />
        </ErrorMessage>
    } else if (products.length === 0) {
        result = <ErrorMessage>
            <EmptyIcon className="w-10 h-10 md:w-16 md:h-16 fill-current text-gray-500 mr-2" />
            <FormattedMessage id="noProduct" defaultMessage="No Results Found" />
        </ErrorMessage>
    } else {
        result = <div className="py-3 mt-5 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {products.map((product, index) => <ProductCard
                key={`product_id_${index}`}
                details={product}
                isWishList={wishList.includes(product.id)}
                isAddedToCart={cart.includes(product.id)}
            />)}
        </div>
    }

    return <>
        <div className="mx-3 pb-12 sm:pb-0 sm:mx-10 md:mx-24">
            <div className="text-2xl capitalize mt-6"> {'>'}
                <span className="ml-2">
                    <FormattedMessage id="wishlist" defaultMessage="wishlist" />
                </span>
            </div>
            {result}
        </div>
    </>
}