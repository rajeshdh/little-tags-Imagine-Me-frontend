import { useState } from 'react'
import { FormattedNumber } from "react-intl";
import { useSelector, useDispatch } from 'react-redux'

import RangeSlider from '../../components/RangeSlider/RangeSlider'
import { CHANGE_FILTER_CRITERIA } from "../../redux/product/actionTypes";
import BackDrop from "../BackDrop/BackDrop";
import { CheckboxGroup } from "../CheckboxGroup/CheckBoxGroup";
import StarRating from '../StarRating/StarRating'

export default function FilterDrawer({ show, onClick, requestProducts }) {
    const { price, brands } = useSelector(state => state.product.filter)
    const filterCriteria = useSelector(state => state.product.filterCriteria)

    const dispatch = useDispatch()

    const priceSliderChange = (value) => {
        const criteria = { ...filterCriteria, price: value }
        dispatch({ type: CHANGE_FILTER_CRITERIA, payload: criteria })
    }

    const checkboxChangeHandler = (value, name) => {
        const criteria = { ...filterCriteria, [name]: value }
        dispatch({ type: CHANGE_FILTER_CRITERIA, payload: criteria })
    }
    const generateRatingFilter = (CheckBox) => {
        const ratingCheckbox = []
        for (let i = 5; i > 0; i--) {
            ratingCheckbox.push(<CheckBox key={`filter_star_rating_id_${i}`} value={`${i}`} ><StarRating rating={i} /> </CheckBox>)
        }
        return ratingCheckbox
    }


    return <BackDrop show={show} onClick={onClick}>
        <div className={`absolute bg-white inset-y-0 right-0 max-w-xs w-full transition-transform duration-400 transform ${show ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="relative h-full pb-5 overflow-y-auto">
                <div className="float-right mr-2 text-4xl cursor-pointer" onClick={onClick} >&times;</div>
                <div className="mt-10 px-4">
                    <div className="font-semibold tracking-wide uppercase mb-2">
                        price
                    </div>
                    <div className="my-2">
                        <FormattedNumber style="currency" value={filterCriteria.price[0] ?? price[0]} currency="INR" />  - <FormattedNumber style="currency" value={filterCriteria.price[1] ?? price[1]} currency="INR" />
                    </div>
                    <div className="mx-3">
                        <RangeSlider
                            onAfterChange={priceSliderChange}
                            defaultValue={[filterCriteria.price[0] ?? price[0], filterCriteria.price[1] ?? price[1]]}
                            min={price[0]}
                            max={price[1]}
                            marks={{ [price[0]]: <FormattedNumber style="currency" value={price[0]} currency="INR" />, [price[1]]: <FormattedNumber style="currency" value={price[1]} currency="INR" /> }}
                        />
                    </div>
                    <div className="mt-9 mb-3 border-b border-gray-300">
                    </div>

                    <div className="font-semibold tracking-wide uppercase mb-2">
                        brands
                    </div>
                    <div className="px-3">
                        <CheckboxGroup name="brands" onChange={checkboxChangeHandler} value={filterCriteria.brands} >
                            {(CheckBox) => brands.map((brand, index) => {
                                return <CheckBox key={`checkbox_brand_id_${index}`} value={brand} >{brand}</CheckBox>
                            })}
                        </CheckboxGroup>
                    </div>
                    <div className="mt-3 mb-3 border-b border-gray-300">
                    </div>
                    <div className="font-semibold tracking-wide uppercase mb-2">
                        rating
                    </div>
                    <div className="px-3">
                        <CheckboxGroup name="rating" value={filterCriteria.rating} onChange={checkboxChangeHandler}>
                            {(CheckBox) => generateRatingFilter(CheckBox)}
                        </CheckboxGroup>
                    </div>
                </div>

            </div>
            <div className="absolute bg-white p-2 inset-x-0 bottom-0">
                <button className="bg-sp-btn-primary text-white px-5 py-2 rounded float-right" name="filter_submit" onClick={requestProducts}>Apply</button>
            </div>
        </div>
    </BackDrop>
}