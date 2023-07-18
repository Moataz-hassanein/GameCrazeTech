import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Thanks = () => {
  return (
    <div className="flex gap-8 flex-col justify-center items-center bg-sky-950 h-screen">
      <p className="text-white font-bold text-3xl">
        Thank you for contacting us{" "}
        <span role="img" aria-label="smiley emoji">
          &#x1F600;
        </span>
      </p>
      <Link to="/gameList">
        <Button className="text-white font-bold bg-slate-400 hover:bg-slate-600 p-4">
         Home
        </Button>
      </Link>
    </div>
  );
};

export default Thanks;
