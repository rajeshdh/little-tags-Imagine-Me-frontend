import { useEffect, useState } from 'react'
import { FormattedMessage } from 'react-intl'
import { useDispatch, useSelector } from 'react-redux'

import { fetchProducts } from '../../redux/product/actions'

import FilterDrawer from '../../components/FilterDrawer/FilterDrawer'
import ProductCard from '../../components/Cards/ProductCard';
import FilterIcon from '../../IconSet/FilterIcons';
import WifiOff from '../../IconSet/WifiOff'


export default function Product(props) {
    const [filterDrawerShow, setFilterDrawerShow] = useState(false)

    const { products, error } = useSelector(state => ({ products: state.product.products, error: state.product.error }))

    const dispatch = useDispatch()

    const keyWord = props.match.params.keyWord

    useEffect(() => {
        let url = process.env.REACT_APP_BASE_URL
        if (/^\/category\//.test(props.history.location.pathname)) {
            url += `/category/${keyWord}`
        }
        dispatch(fetchProducts(url))
    }, [])

    const toggleFilterDrawer = () => {
        setFilterDrawerShow(prevState => !prevState)
    }

    let result = null
    if (error) {
        result = <div className="flex mt-10 justify-center text-lg items-center w-full"><WifiOff className="mr-2" /> <FormattedMessage id="networkError" defaultMessage="Error connecting server" /></div>
    } else if (products.length === 0) {
        result = <div className="flex mt-10 justify-center items-center"><WifiOff /> <FormattedMessage id="noProduct" defaultMessage="No Result found" /></div>
    } else {
        result = 
        <div className="py-3 mt-5 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {products.map((product, index) => <ProductCard
                key={`product_id_${index}`}
                details={product}
            />)}
        </div>
    }

    return <div className="mx-3 mt-10 sm:mx-10 md:mx-24">
        <div className="flex text-lg font-semibold items-center justify-between">
            <div>
                <FormattedMessage id="searchResult" defaultMessage="Showing Results For" /> <span className="text-sp-heading-blue">{keyWord}</span>
            </div>
            <div onClick={toggleFilterDrawer}>
                <FilterIcon className="stroke-current cursor-pointer hover:text-sp-btn-primary" />
            </div>
        </div>
        {result}
        <FilterDrawer
            show={filterDrawerShow}
            onClick={toggleFilterDrawer}
        />
    </div>
}