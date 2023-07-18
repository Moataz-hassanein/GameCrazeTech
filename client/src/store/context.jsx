import { createContext, useEffect, useState, useReducer } from "react";
import { fetchGames } from "../apiCalls/gamesApiCalls";
import {
  productsInitialState,
  productsReducer,
} from "./reducers/productsReducer";
import { pcsInitialState, pcsReducer } from "./reducers/pcsReducer";
import getAllPcs from "../apiCalls/pcsApiCalls";
import getAllProducts from "../apiCalls/productsApiCalls";
export const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [originalGames, setOriginalGames] = useState([]);
  const [games, setGames] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  //! Products State
  const [productsState, productsDispatch] = useReducer(
    productsReducer,
    productsInitialState
  );
  //! Pc State
  const [pcsState, pcsDispatch] = useReducer(pcsReducer, pcsInitialState);

  //! Fetch Games
  useEffect(() => {
    getAllProducts(productsDispatch);
    getAllPcs(pcsDispatch);
    fetchGames(setGames, setOriginalGames);
  }, []);

  const { productsData } = productsState;
  const { pcsData } = pcsState;

  return (
    <DataContext.Provider
      value={{
        pcsData,
        productsData,
        originalGames,
        games,
        setGames,
        error,
        loading,
        setError,
        setLoading,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
