const initialState = {
    cart: ['1', '2'],
    wishList: [],
    addresses: [],
    orderHistory: [],
    order: []
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        default: return state;
    }
}

export default userReducer;