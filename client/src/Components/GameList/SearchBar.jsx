import { useContext, useState } from "react";
import { DataContext } from "../../store/context";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const { games, setGames, originalGames } = useContext(DataContext);
  //! SearchBar handler
  const handleSearch = (e) => {
    setQuery(e.target.value);
    const searchedGames = games.filter((game) =>
      game.title.toLowerCase().trim().includes(query.toLowerCase().trim())
    );
    setGames(searchedGames);
  };
  //! Clear Search
  const handleClearSearch = () => {
    setQuery("");
    setGames(originalGames);
  };
  //! key down handler
  const handleKeyDown = (event) => {
    if (event.keyCode === 8) {
      handleClearSearch();
    }
  };
  return (
    <form className="flex justify-between text-md lg:text-lg p-2 border-2 rounded-2xl mx-auto w-7/12 md:w-8/12 sm:w-7/12">
      <input
        className="bg-transparent w-full outline-none text-white"
        type="text"
        value={query}
        onChange={handleSearch}
        onKeyDown={handleKeyDown}
        placeholder="Search your game here..."
      />
    </form>
  );
};

export default SearchBar;
