import axios from "axios";

export const fetchGames = async (setGames, setOriginalGames) => {
  // const res = await axios.get("http://localhost:8000/games");
  const res = await axios.get("http://localhost:8000/games_gct");
  setGames(res.data.data);
  console.log(res);
  setOriginalGames(res.data.data);
};
