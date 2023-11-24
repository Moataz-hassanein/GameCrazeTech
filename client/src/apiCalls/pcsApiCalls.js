import axios from "axios";
const getAllPcs = async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:8000/pcs_gct");

    dispatch({ type: "FETCH_PC_SUCCESS", payload: response.data.data });
  } catch (error) {
    dispatch({ type: "FETCH_PC_FAIL" });
  }
};
export default getAllPcs;
