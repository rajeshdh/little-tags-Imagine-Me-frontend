import React, { useState, useEffect } from 'react'
import ProductCarousel from "../../components/ProductCarousel"
import Ratings from "../../components/ProductFeatures/Ratings"
import Colors from "../../components/ProductFeatures/Colors"
import Quantity from "../../components/ProductFeatures/Quantity"
import Size from "../../components/ProductFeatures/Size"
import {
  ProductHeader, Price,
  ProductDescription, AddToCartButton, LikeButton
} from "../../components/ProductLayout/PageLayout"
import { FormattedMessage } from 'react-intl'


function ProductPage({ productData }) {
  const [selectedColor, setSelectedColor] = useState(productData.colors[0]);
  const [selectedSize, setSelectedSize] = useState(productData.sizes[0])
  const [selectedQuantity, setSelectedQuantity] = useState(1);


  function SetQuantity(value) {
    value = value || 0;
    setSelectedQuantity(value);
  }

  function increaseQuantity() {
    setSelectedQuantity(prevState => Number(prevState) + 1);
  }

  function decreaseQuantity() {
    setSelectedQuantity(prevState => Number(prevState) - 1);
  }

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
          <Colors
            colors={productData.colors}
            selected={selectedColor}
            onChange={setSelectedColor} />
          <Size
            selected={selectedSize}
            sizes={productData.sizes}
            onChange={setSelectedSize} />
          <Quantity selected={selectedQuantity} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} onChange={SetQuantity} />
          <div className="flex">
            <AddToCartButton />

            <LikeButton />
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
      setProductData(result)
    }

    fetchData()
  }, []);

  return (productData && productData.length && <ProductPage productData={productData[0]} />)
}

