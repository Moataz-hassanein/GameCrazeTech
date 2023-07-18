export const productsInitialState = { productsData: [] };

export const productsReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS_SUCCESS":
      return {
        productsData: action.payload,
      };

    case "FETCH_PRODUCTS_FAIL":
      return {
        ...state,
      };
    default:
      return state;
  }
};