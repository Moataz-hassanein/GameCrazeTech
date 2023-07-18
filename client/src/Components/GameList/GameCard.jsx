import "../../Style/card.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const GameCard = ({ game }) => {
  return (
    <div className="card relative w-40 h-40 lg:w-64 lg:h-64">
      <LazyLoadImage
        className="lg:w-64 lg:h-64 w-40 h-40 items-center object-cover rounded-xl"
        src={game.images[0]}
        // width={256}
        // height={256}
        alt="Image Alt"
        effect="blur"
      />

      <div className=" absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100">
        <div className="w-full h-full bg-gray-900 opacity-75 rounded-xl hover:rounded-xl"></div>
        <p className="absolute text-white z-10 text-xl text-center">
          {game.title}
        </p>
      </div>
    </div>
  );
};

export default GameCard;
