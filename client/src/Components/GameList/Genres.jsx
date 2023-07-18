import { Button } from "@material-tailwind/react";
import Select from "react-select";
import { useContext, useState } from "react";
import { DataContext } from "../../store/context";

const Genres = () => {
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [selectedOption, setSelectedOption] = useState(null);
  const { originalGames, setGames } = useContext(DataContext);

  //! GenreClick handler
  const handleGenreClick = (genre) => {
    setSelectedGenre(genre);
    if (genre == "All") {
      setGames(originalGames);
    } else {
      const filteredGames = originalGames.filter((game) =>
        game.genre.includes(genre)
      );
      setGames(filteredGames);
    }
  };

  //? Mobile Version
  //! GenreSelect handler
  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    if (selectedOption.label == "All") {
      setGames(originalGames);
    } else {
      const filteredGames = originalGames.filter((game) =>
        game.genre.includes(selectedOption.label)
      );
      setGames(filteredGames);
    }
  };
  //? React Select options & styles
  //! Mobile genres
  const genres = [
    { value: "All", label: "All" },
    { value: "Action", label: "Action" },
    { value: "Adventure", label: "Adventure" },
    { value: "Sports", label: "Sports" },
    { value: "Strategy", label: "Strategy" },
    { value: "Racing", label: "Racing" },
  ];
  //! dropdown styles
  const colorStyles = {
    control: (styles) => ({
      ...styles,
      borderColor: "rgb(148 163 184)",
      backgroundColor: "rgb(148 163 184)",
    }),
    placeholder: (styles) => ({
      ...styles,
      color: "white",
    }),
  };
  return (
    <>
      <div className=" hidden gap-4 justify-center sm:flex">
        <Button
          className="text-white font-bold bg-slate-400 hover:bg-slate-600 p-3"
          onClick={() => {
            handleGenreClick("All");
          }}
        >
          All
        </Button>
        <Button
          className="text-white font-bold bg-slate-400 hover:bg-slate-600 p-3"
          onClick={() => {
            handleGenreClick("Action");
          }}
        >
          Action
        </Button>
        <Button
          className="text-white font-bold bg-slate-400 hover:bg-slate-600 p-3"
          onClick={() => {
            handleGenreClick("Adventure");
          }}
        >
          Adventure
        </Button>
        <Button
          className="text-white font-bold bg-slate-400 hover:bg-slate-600 p-3"
          onClick={() => {
            handleGenreClick("Sports");
          }}
        >
          Sports
        </Button>
        <Button
          className="text-white font-bold bg-slate-400 hover:bg-slate-600 p-3"
          onClick={() => {
            handleGenreClick("Strategy");
          }}
        >
          Strategy
        </Button>
        <Button
          className="text-white font-bold bg-slate-400 hover:bg-slate-600 p-3"
          onClick={() => {
            handleGenreClick("Racing");
          }}
        >
          Racing
        </Button>
      </div>

      <div className="relative block sm:hidden text-center ">
        <Select
          styles={colorStyles}
          value={selectedOption}
          onChange={handleChange}
          options={genres}
          placeholder="Select Game Category"
        />
      </div>
    </>
  );
};

export default Genres;
