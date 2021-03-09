import {
  ADD_PRODUCT,
  CHANGE_FILTER,
  CHANGE_IS_LOADING,
  FETCH_PRODUCT_FAIL,
} from './actionTypes';

export const fetchProducts = (url, data) => async (dispatch) => {
  dispatch({ type: CHANGE_IS_LOADING, payload: true });
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    dispatch({ type: ADD_PRODUCT, payload: result.data });

    if (result.filter !== null) {
      dispatch({ type: CHANGE_FILTER, payload: result.filter });
    }
  } catch {
    dispatch({ type: FETCH_PRODUCT_FAIL });
  }
};
