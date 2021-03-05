import { useEffect, useState } from 'react'
import ProductCard from "../../components/Cards/ProductCard";

export default function Product(props) {
    const [products, setProducts] = useState([])


    useEffect(() => {
        let url = process.env.REACT_APP_BASE_URL
        if (/^\/category\//.test(props.history.location.pathname)) {
            url += `/category/${props.match.params.category}`
        }

        const fetchData = async () => {
            const response = await fetch(url)
            const result = await response.json()
            setProducts(result)
        }

        fetchData()
    }, [])

    return <div className="mx-3 py-3 grid gap-4 grid-cols-1 sm:mx-10 sm:grid-cols-2 md:mx-24 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {products.map((product, index) => <ProductCard
            key={`product_id_${index}`}
            details={product}
        />)}
    </div>
}