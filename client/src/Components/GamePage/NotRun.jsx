import { Link } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { Button } from "@material-tailwind/react";

const NotRun = () => {
  return (
    <>
      <ImCross className="inline text-red-800 text-sm sm:text-2xl mr-2 mb-2" />
      <span className="text-base sm:text-2xl  text-red-800">No, You Can't Run It</span>
      <Link to="/hardwareList" className="hover:no-underline">
      <Button
        className="bg-sky-950 py- rounded h-10 sm:h-10 flex items-center justify-center m-auto w-fit text-sm sm:text-1xl  "
        ripple={true}
      >
        Upgrade Your PC !
      </Button>
      </Link>
    </>
  );
};

export default NotRun;
