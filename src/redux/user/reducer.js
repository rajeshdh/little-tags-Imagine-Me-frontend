import { ADD_TO_CART, ADD_TO_ORDER, ADD_TO_WISHLIST, MOVE_TO_WISHLIST, REMOVE_FROM_CART } from "./actionTypes";

const initialState = {
    cart: ['product_id_1', 'product_id_4', 'product_id_2', 'product_id_5'],
    wishList: ['product_id_3'],
    addresses: [],
    orderHistory: [],
    order: []
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const cart = [...state.cart]
            cart.push(action.payload)
            return {
                ...state,
                cart
            }
        case ADD_TO_WISHLIST:
            const wishList = [...state.wishList]
            wishList.push(action.payload)
            return {
                ...state,
                wishList
            }
        case ADD_TO_ORDER:
            return {
                ...state,
                order: action.payload
            }
        case REMOVE_FROM_CART:
            const cartItems = [...state.cart]
            const deleteIndex = cartItems.indexOf(action.payload)
            cartItems.splice(deleteIndex, 1)
            return {
                ...state,
                cart: cartItems
            }
        case MOVE_TO_WISHLIST:
            const wishLists = [...state.wishList]
            if (!wishLists.includes(action.payload)) {
                wishLists.push(action.payload)
            }
            return {
                ...state,
                wishList: wishLists
            }

        default: return state;
    }
}

export default userReducer;