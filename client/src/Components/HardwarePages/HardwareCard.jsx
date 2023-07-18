import { AiFillStar } from "react-icons/ai";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";

const HardwareCard = ({ value }) => {
  return (
    <Link key={value._id} to={`/productPage/${value._id}`} state={{ value }} className="hover:no-underline">
      <div className="relative pt-4 h-96  flex w-60 sm:w-72 max-w-xs  flex-col overflow-hidden rounded-lg border border-gray-100 bg-white hover:scale-105 ease-linear duration-300"
      style={{ boxShadow: "0px 0px 9px 3px rgba(255,255,255,0.44)" }}>
        <div className=" flex h-fit overflow-hidden rounded-xl m-auto">
     
           <LazyLoadImage
              className="w-3/4 m-auto"
              src={value.image[1]}
              alt="post image"
              effect="blur"
            ></LazyLoadImage>

          <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
            20€ OFF
          </span>
        </div>
        <div className="mt-4 px-3 pb-3">
          <h5 className="text-md tracking-tight text-slate-900">

            {value.name.length > 30 ? `${value.name.slice(0, 30)}...` : value.name}
          </h5>

          <div className="mt-2 mb-3 flex items-center justify-between">
            <p>
              <span className="text-lg font-bold text-slate-900">
                {value.price - 20}€
              </span>
              <span className="text-xs text-slate-900 line-through pl-1">
                {value.price}€

              </span>
            </p>
            <div className="flex items-center">
              <AiFillStar className="block h-4 w-4 align-middle text-yellow-500" />
              <AiFillStar className="block h-4 w-4 align-middle text-yellow-500" />
              <AiFillStar className="block h-4 w-4 align-middle text-yellow-500" />
              <AiFillStar className="block h-4 w-4 align-middle text-yellow-500" />
              <AiFillStar className="block h-4 w-4 align-middle text-yellow-500" />
              <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                5.0
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HardwareCard;
