import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

export default function Cart() {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)


    const cartItems = useSelector(state => state.user.cart)
    useEffect(() => {
        fetchCartItems()
    }, [])
    const fetchCartItems = async () => {
        try {
            const response = fetch(`${process.env.REACT_APP_BASE_URL}/cart`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(cartItems)
            })
            const result = await response.json()
            console.log(result);
            setProducts(result)
        } catch (e) {
            setIsError(true)
        }
        setIsLoading(false)
    }
    return <div className="flex flex-col mt-3 mx-3 h-5/6 sm:mx-10 md:mx-24 sm:flex-row">
        Bonjour
    </div>
}