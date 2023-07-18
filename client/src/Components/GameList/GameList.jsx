import { motion } from "framer-motion";
import SearchBar from "./SearchBar";
import GameCard from "./GameCard";
import Genres from "./Genres";
import { useState, useEffect, useContext } from "react";
import { DataContext } from "../../store/context";
import { Link } from "react-router-dom";
import Layout from "../../routes/Layout";
import Loading from "../Pages/Loading";
import Error from "../Pages/Error";
const GameList = () => {
  const { games, loading, error } = useContext(DataContext);

  const slogans = [
    "By Gamers, for Gamers",
    "Push it to the limits!",
    "Unleash the gamer in you!",
    "Get ready to level up!",
    "The only limit is your high score",
    "Eat, sleep, game, repeat",
    "It's time to conquer the virtual world",
    "The Ultimate Gaming Experience",
    "Enter the World of Gaming",
    "Unleash Your Inner Gamer",
  ];
  const [sloganIndex, setSloganIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSloganIndex((prevIndex) => (prevIndex + 1) % slogans.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      {loading ? <Loading /> : null}
      {error ? <Error /> : null}

      {games && (
        <div className="flex flex-col gap-5 bg-sky-950 min-h-[70vh]">
          <motion.div
            className="text-center font-bold pt-10 text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl break-words"
            key={sloganIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          >
            {slogans[sloganIndex]}
          </motion.div>
          <SearchBar />
          <div className="mb-10 mx-auto">
            <Genres />

            <div className="grid grid-cols-2 gap-5 mt-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
              {games.map((game) => (
                <Link
                  key={game.id}
                  to={`/gameList/gamePage/${game.id}`}
                  state={{ game }}
                >
                  <GameCard game={game} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default GameList;
