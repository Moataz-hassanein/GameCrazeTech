import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
const PcCard = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="p-5 grid place-items-center gap-8 lg:grid-cols-5 md:grid-cols-2 lg:grid-rows-2 md:grid-rows-2 bg-sky-950 ">
      {posts.map((post) => (
        <Link
          to={`/readyPc/pcPage/${post._id}`}
          state={{ post }}
          key={post.name}
          className="hover:no-underline"
        >
          <div
            className="relative pt-4 h-96  flex w-60 sm:w-72  max-w-xs  flex-col overflow-hidden rounded-lg border border-gray-100 bg-white hover:scale-105 ease-linear duration-200"
            style={{ boxShadow: "0px 0px 9px 3px rgba(255,255,255,0.44)" }}
          >
            <div className=" flex h-fit overflow-hidden rounded-xl m-auto">
              <img
                className="w-3/4 m-auto"
                src={post.image[0]}
                alt="post image"
              />

              <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                20€ OFF
              </span>
            </div>
            <div className="mt-4 px-3 pb-3">
              <h5 className="text-md tracking-tight text-slate-900">
                {post.name}
              </h5>

              <div className="mt-2 mb-3 flex items-center justify-between">
                <p>
                  <span className="text-lg font-bold text-slate-900">
                    {post.price - 20}€
                  </span>
                  <span className="text-xs text-slate-900 line-through pl-1">
                    {post.price}€
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
      ))}
    </div>
  );
};

export default PcCard;
