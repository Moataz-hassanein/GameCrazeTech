import axios from "axios";

export const fetchGames = async (setGames, setOriginalGames) => {
  // const res = await axios.get("http://localhost:8000/games");
  const res = await axios.get("https://gamecrazetech.onrender.com/games_gct");
  setGames(res.data.data);

  setOriginalGames(res.data.data);
};
