import Carousel from "./Carousel";
import Options from "./Options";
import { useLocation } from "react-router-dom";
import Table from "./Table";
import Layout from "../../routes/Layout";

const GamePage = () => {
  const location = useLocation();
  const game = location.state.game;

  return (
    <Layout>
      <div className=" bg-sky-950 ">

        <h1 className="text-center sm:text-4xl pt-3 text-white">{game.title} </h1>
        <Carousel game={game} />
        <div className="flex flex-col justify-center lg:gap-6 lg:flex-row sm:justify-evenly">
          <Table game={game} />
          <Options game={game} />
        </div>
      </div>
    </Layout>
  );
};

export default GamePage;
