import axios from "axios";

const getAllProducts = async (dispatch) => {
  try {
    // const response = await axios.get("http://localhost:8000/products");
    const response = await axios.get(
      "https://game-tech-server.onrender.com/products_gct"
    );

    dispatch({ type: "FETCH_PRODUCTS_SUCCESS", payload: response.data.data });
  } catch (error) {
    dispatch({ type: "FETCH_PRODUCTS_FAIL" });
  }
};

export default getAllProducts;
