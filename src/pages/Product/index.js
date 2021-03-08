import React, { useState, useEffect } from 'react'
import ProductCarousel from "../../components/ProductCarousel"
import Ratings from "../../components/ProductFeatures/Ratings"
import Colors from "../../components/ProductFeatures/Colors"
import Quantity from "../../components/ProductFeatures/Quantity"
import Size from "../../components/ProductFeatures/Size"
import {
  ProductPageLayout, ProductSection, ProductHeader, Price,
  ProductDescription, AddToCartButton, LikeButton
} from "../../components/ProductLayout/PageLayout"


// const productData = {
//   "id": "product_id_1",
//   "title": "ROYCE-2 Running Shoes For Men",
//   "image": "/images/products/royce-1.jpeg",
//   "description": "Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.",
//   "brand": "Campus",
//   "offer": "10",
//   "category": "shoe",
//   "currency": "INR",
//   "items": 5,
//   "ratings": 4,
//   "noOfReviews": 7,
//   "gallery": [
//     {
//       id: 1,
//       title: 'repellendus id ullam',
//       label: 'Dolorem officiis temporibus.'
//     }, {
//       id: 2,
//       title: 'excepturi consequatur est',
//       label: 'Officia non provident dolor esse et neque.'
//     }, {
//       id: 3,
//       title: 'eius doloribus blanditiis',
//       label: 'Ut recusandae vel vitae molestiae id soluta.'
//     },
//     {
//       id: 4,
//       title: 'nihil voluptates delectus',
//       label: 'Qui vel consequatur recusandae illo repellendus.'
//     }, {
//       id: 5,
//       title: 'nemo dolorem necessitatibus',
//       label: 'Placeat odit velit itaque voluptatem.'
//     }, {
//       id: 6,
//       title: 'dolorem quibusdam quasi',
//       label: 'Adipisci officiis repudiandae.'
//     },
//   ],
//   "originalPrice": 1049,
//   "currentPrice": 944,
//   "colors": [
//     "rgb(57, 71, 110)",
//     "rgb(206, 74, 144)",
//     "rgb(74, 206, 107)"
//   ],
//   "sizes": [
//     "8",
//     "9",
//     "10"
//   ]
// }

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

  function decreseQuantity() {
    setSelectedQuantity(prevState => Number(prevState) - 1);
  }
  return (
    <ProductPageLayout>
      <ProductSection sectionClasses="h-3/5 sm:h-3/5  md:h-3/5 lg:h-auto object-cover object-center rounded">
        <ProductCarousel slidesData={productData.gallery} />
      </ProductSection>

      <ProductSection sectionClasses="sm:m-auto" >
        <ProductHeader brandName={productData.brand} title={productData.title} />
        <div className="flex mb-4">
          <span className="flex items-center">
            <Ratings ratings={productData.ratings} />

            <span className="text-gray-600 ml-3">{productData.noOfReviews} Reviews</span>
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
        <Quantity selected={selectedQuantity} increaseQuantity={increaseQuantity} decreseQuantity={decreseQuantity} onChange={SetQuantity} />
        <div className="flex">
          <AddToCartButton />

          <LikeButton />
        </div>
      </ProductSection>

    </ProductPageLayout>
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

