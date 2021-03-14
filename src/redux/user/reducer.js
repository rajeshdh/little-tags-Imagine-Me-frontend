import {
  ADD_TO_CART,
  ADD_TO_ORDER,
  ADD_TO_WISHLIST,
  MOVE_TO_WISHLIST,
  REMOVE_FROM_CART,
  REMOVE_FROM_WISHLIST,
  ADD_ADDRESS,
  SET_SELECTED_ADDRESS
} from "./actionTypes";

const initialState = {
  cart: ["product_id_1", "product_id_4", "product_id_2", "product_id_5"],
  wishList: ["product_id_3", "product_id_2", "product_id_5"],
  orderHistory: [],
  order: [],
  addresses: [
    {
      id: 1,
      fullName: "Matsya  Chanda",
      mobileNumber: "00792322080",
      address: "Sector-26, Gandhinagar",
      state: "Gujarat",
      city: "Ahmedabad",
      pin: "382044",
      isDefault: false,
    },
    {
      id: 3,
      fullName: "Samantaka  Sachar",
      mobileNumber: "02222059092",
      address: "38 nd Floor Kalbadevidevi Road, Tak Wadi Bhd / , Kalbadevi",
      state: "Maharashtra",
      city: "Mumbai",
      pin: "400002",
      isDefault: true,
    },
    {
      id: 2,
      fullName: "Amritha  Sathe",
      mobileNumber: "02222011939",
      address: "375 , Kalbadevi Road, Kalbadevi",
      state: " Maharashtra",
      city: "Mumbai",
      pin: "400002",
      isDefault: false,
    },
  ],
  selectedAddress: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const cart = [...state.cart];
      cart.push(action.payload);
      return {
        ...state,
        cart,
      };
    case ADD_TO_WISHLIST:
      const wishList = [...state.wishList];
      wishList.push(action.payload);
      return {
        ...state,
        wishList,
      };
    case ADD_TO_ORDER:
      return {
        ...state,
        order: action.payload,
      };
    case REMOVE_FROM_CART:
      const cartItems = [...state.cart];
      const deleteIndex = cartItems.indexOf(action.payload);
      cartItems.splice(deleteIndex, 1);
      return {
        ...state,
        cart: cartItems,
      };
    case MOVE_TO_WISHLIST:
      const wishLists = [...state.wishList];
      if (!wishLists.includes(action.payload)) {
        wishLists.push(action.payload);
      }
      return {
        ...state,
        wishList: wishLists,
      };
    case REMOVE_FROM_WISHLIST:
      const tempWishList = [...state.wishList];
      const removeIndex = tempWishList.indexOf(action.payload);
      tempWishList.splice(removeIndex, 1);
      return {
        ...state,
        wishList: tempWishList,
      };
    case ADD_ADDRESS:
      const addresses = [...state.addresses];
      addresses.push(action.payload);
      return {
        ...state,
        addresses,
      };
    case SET_SELECTED_ADDRESS:
      return {
        ...state,
        selectedAddress: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
