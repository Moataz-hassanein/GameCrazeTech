export const pcsInitialState = {
  pcsData: []
  };
  
  export const pcsReducer = (state, action) => {
    switch (action.type) {
      case "FETCH_PC_SUCCESS":
        return {
          pcsData: action.payload,
        };
  
      case "FETCH_PC_FAIL":
        return {
          ...state,
        };
      default:
        return state;
    }
  };