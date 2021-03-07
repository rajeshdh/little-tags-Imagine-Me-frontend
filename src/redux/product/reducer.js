import { ADD_PRODUCT, FETCH_PRODUCT_FAIL, CHANGE_FILTER_CRITERIA, CHANGE_IS_LOADING, CHANGE_FILTER } from "./actionTypes"


const initialState = {
    products: [],
    error: false,
    isLoading: false,
    filter: {
        price: [100, 1000],
        brands: ['adidas', 'nike', 'puma']
    },
    filterCriteria: {
        price: [],
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
                isLoading: false,
                error: false
            }
        case FETCH_PRODUCT_FAIL: {
            return {
                ...state,
                products: [],
                error: true,
                isLoading: false
            }
        }
        case CHANGE_FILTER_CRITERIA: {
            return {
                ...state,
                filterCriteria: action.payload
            }
        }
        case CHANGE_FILTER: {
            return {
                ...state,
                filter: action.payload
            }
        }
        case CHANGE_IS_LOADING: {
            return {
                ...state,
                isLoading: action.payload
            }
        }
        default: return state
    }
}

export default productReducer