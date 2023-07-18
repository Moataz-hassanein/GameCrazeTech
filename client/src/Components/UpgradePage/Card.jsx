import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const categories = [
  "Motherboards",
  "RAM",
  "Graphics Cards",
  "SSD",
  "Processors",
];

const Card = ({ posts }) => {
  let [categoryFilters, setCategoryFilters] = useState(new Set());

  function updateFilters(checked, categoryFilter) {
    if (checked)
      setCategoryFilters((prev) => new Set(prev).add(categoryFilter));
    if (!checked)
      setCategoryFilters((prev) => {
        const next = new Set(prev);
        next.delete(categoryFilter);
        return next;
      });
  }

  const filteredComponents =
    categoryFilters.size === 0
      ? posts
      : posts.filter((p) => categoryFilters.has(p.category));

  return (
    <div className="flex flex-col sm:flex-row ">
      <div className=" sm:flex-col bg-sky-950 text-white p-4  sm:w-60">
        <h3 className="font-medium text-center text-lg mb-3 flex-">
          Filter Products
        </h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((elm, index) => {
            return (
              <div key={index}>
                <label className="pl-1 text-slate-400 flex items-center">
                  <input
                    className="form-checkbox h-5 w-5 text-blue-600 mr-2"
                    type="checkbox"
                    onChange={(e) => updateFilters(e.target.checked, elm)}
                  />
                  {elm}
                </label>
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-full pb-3 pt-4 px-10  grid place-items-center gap-8  lg:grid-cols-5 md:grid-cols-3 lg:grid-rows-2 md:grid-rows-2 bg-sky-950">

        {filteredComponents.map((prod) => {
          return (
            <Link
              to={`/hardwareList/hardwarePage/${prod._id}`}
              key={prod._id}
              state={{ prod }}
              className="hover:no-underline"
            >
              <div
                className="relative h-96 pt-4 flex w-64 max-w-xs  flex-col overflow-hidden rounded-lg border border-gray-100 bg-white hover:scale-105 ease-linear duration-200"
                style={{ boxShadow: "0px 0px 9px 3px rgba(255,255,255,0.44)" }}
              >
                <div className=" flex h-60 overflow-hidden rounded-xl ">
                  <img
                    className="w-3/4 m-auto"
                    src={prod.image[0]}
                    alt="post image"
                  />

                  <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                    20€ OFF
                  </span>
                </div>
                <div className="mt-4 px-3 pb-3">
                  <h5 className="text-sm sm:text-base tracking-tight text-slate-900">
                    {prod.name}
                  </h5>

                  <div className="mt-2 mb-3 flex items-center justify-between">
                    <p>
                      <span className="text-lg font-bold text-slate-900">
                        {prod.price - 20}€
                      </span>
                      <span className="text-xs text-slate-900 line-through pl-1">
                        {prod.price}€
                      </span>
                    </p>
                    <div className="flex items-center">
                      <AiFillStar className="block h-4 w-4 align-middle text-yellow-500" />
                      <AiFillStar className="block h-4 w-4 align-middle text-yellow-500" />
                      <AiFillStar className="block h-4 w-4 align-middle text-yellow-500" />
                      <AiFillStar className="block h-4 w-4 align-middle text-yellow-500" />
                      <AiFillStar className="block h-4 w-4 align-middle text-yellow-500" />
                      <span className="mr-2 ml-3 rounded bg-yellow-200 px-4 py-0.5 text-xs font-semibold">
                        5.0
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
