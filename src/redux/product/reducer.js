import { ADD_PRODUCT, FETCH_PRODUCT_FAIL, CHANGE_FILTER_CRITERIA } from "./actionTypes"


const initialState = {
    products: [],
    error: false,
    filter: {
        price: [100, 1000],
        brands: ['adidas', 'nike', 'puma']
    },
    filterCriteria: {
        price: [100, 1000],
        brands: [],
        rating: []
    }
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                products: action.payload,
                error: false
            }
        case FETCH_PRODUCT_FAIL: {
            return {
                ...state,
                products: [],
                error: true
            }
        }
        case CHANGE_FILTER_CRITERIA: {
            return {
                ...state,
                filterCriteria: action.payload
            }
        }
        default: return state
    }
}

export default productReducer