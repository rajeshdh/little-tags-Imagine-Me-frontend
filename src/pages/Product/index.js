import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import ProductCarousel from "../../components/ProductCarousel"
import Ratings from "../../components/ProductFeatures/Ratings"
import Quantity from "../../components/ProductFeatures/Quantity"
import ProductFeatures from '../../components/ProductFeatures/ProductFeatures'
import {
  ProductHeader, Price,
  ProductDescription, LikeButton
} from "../../components/ProductLayout/PageLayout"
import { CartIcon } from '../../IconSet/CartIcon'
import { FormattedMessage } from 'react-intl'
import { ADD_TO_CART } from '../../redux/user/actionTypes'


function ProductPage({ productData, featureSelectHandler, increaseQuantity, decreaseQuantity, onQuantityChanged }) {

  const { cartItems, wishlist } = useSelector(state => ({ cartItems: state.user.cart, wishlist: state.user.wishList }))
  const dispatch = useDispatch()

  const isAddedToCart = cartItems.includes(productData.id)
  const isWishList = wishlist.includes(productData.id)


  return (
    <div className="mx-3 pb-16 pt-8 sm:py-8 sm:mx-10 md:mx-24">
      <div className="flex max-w-screen-xl m-auto flex-col lg:flex-row">
        <div className="flex items-center lg:w-1/2 md:p-5 md:justify-center lg:justify-end lg:pr-16">
          <ProductCarousel slidesData={productData.gallery} />
        </div>
        <div className="lg:w-1/2">
          <ProductHeader brandName={productData.brand} title={productData.title} />
          <div className="flex mb-4">
            <span className="flex items-center">
              <Ratings ratings={productData.rating} />
              <span className="text-gray-600 ml-3 capitalize"><FormattedMessage id="reviews" defaultMessage="reviews" />{productData.noOfReview ? `(${productData.noOfReview})` : ''}</span>
            </span>

          </div>
          <Price price={productData.currentPrice} currency={productData.currency} />
          <ProductDescription description={productData.description} />
          <div className="my-3">
            {
              productData.features ? <ProductFeatures
                features={productData.features}
                featuresSelected={productData.selectedFeature}
                clickable={(type, index) => featureSelectHandler(productData.id, type, index)}
              /> : null
            }
          </div>
          <Quantity selected={productData.quantitySelected}
            increaseQuantity={() => increaseQuantity(productData.id)}
            decreaseQuantity={() => decreaseQuantity(productData.id)}
            onChange={(quantity) => onQuantityChanged(productData.id, quantity)}
          />
          <div className="flex">
            {/* <button className="py-2 px-5 text-white bg-sp-btn-primary font-semibold capitalize rounded mr-2 w-72 hover:bg-btn-primary-dark">
              <FormattedMessage id="buyNow" defaultMessage="buy now" />
            </button> */}
            <button
              className={`bg-sp-btn-primary text-white px-5 rounded transform delay-100 hover:bg-sp-btn-primary-dark z-20 focus:outline-none ${isAddedToCart ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={isAddedToCart}
              onClick={() => dispatch({ type: ADD_TO_CART, payload: productData.id })}
            >
              {/* <CartIcon fill="white" /> */}
              <FormattedMessage id="addToCart" defaultMessage="Add To Cart" />
            </button>

            <LikeButton isWishList={isWishList} id={productData.id} />
          </div>
        </div>
      </div>
    </div>
  )
}


export default function Product(props) {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    let url = process.env.REACT_APP_BASE_URL
    url += `/product/${props.match.params.productid}`
    const fetchData = async () => {
      const response = await fetch(url)
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
      setProductData(products)
    }

    fetchData()
  }, []);
  const featureSelectHandler = (id, feature, index) => {
    const updatedProducts = productData.map(product => {
      if (product.id === id) {
        const selectedFeature = { ...product.selectedFeature }
        selectedFeature[feature] = index
        product.selectedFeature = selectedFeature
      }
      return product
    })

    setProductData(updatedProducts)
  }


  const decreaseQuantity = (id) => {
    const updatedProducts = productData.map(product => {
      if (product.id === id) {
        const quantity = product.quantitySelected
        product.quantitySelected = quantity - 1 > 0 ? quantity - 1 : quantity
      }
      return product
    })
    setProductData(updatedProducts)
  }
  const increaseQuantity = (id) => {
    const updatedProducts = productData.map(product => {
      if (product.id === id) {
        const quantity = product.quantitySelected
        product.quantitySelected = quantity + 1 > product.stock ? product.stock : quantity + 1
      }
      return product
    })
    setProductData(updatedProducts)
  }

  const onQuantityChanged = (id, quantity) => {
    const updatedProducts = productData.map(product => {
      if (product.id === id) {
        product.quantitySelected = quantity > product.stock ? product.stock : quantity
      }
      return product
    })
    setProductData(updatedProducts)
  }


  return (productData && productData.length && <ProductPage
    productData={productData[0]}
    featureSelectHandler={featureSelectHandler}
    decreaseQuantity={decreaseQuantity}
    increaseQuantity={increaseQuantity}
    onQuantityChanged={onQuantityChanged}
  />)
}

