import { useState } from "react";
import { useLocation } from "react-router-dom";
import Layout from "../../routes/Layout";
import { AiFillStar } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";

const ProductPage = () => {
  const location = useLocation();
  const value = location.state.value;
  const keys = Object.keys(value.specs);
  const values = Object.values(value.specs);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const showSlideImage = (selectedImageIndex) => {
    setCurrentImageIndex(selectedImageIndex);
  };

  return (
    <Layout>
      <section className="h-fit py-2 sm:mt-5">
        <div className="container mx-auto px-4">
          <div className="lg:col-gap-12 xl:col-gap-16 grid grid-cols-1 gap-12  lg:grid-cols-4 lg:gap-10">
            <div className="lg:col-span-2 lg:row-end-1">
              <div className="lg:flex lg:items-start">
                <div className="lg:order-2 lg:ml-5 ">
                  <div className="w-80 overflow-hidden rounded-lg  ">
                    <img
                      className="w-4/5 m-auto"
                      src={value.image[currentImageIndex]}
                      alt={value.image[currentImageIndex]}
                    />
                  </div>
                </div>

                <div className="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
                  <div className="flex items-start lg:flex-col">
                    {value.image.map((image, index) => {
                      return (
                        <button
                          onClick={() => showSlideImage(index)}
                          key={index}
                          type="button"
                          className=" flex-0 aspect-square mb-3 h-10 sm:h-16 overflow-hidden rounded-lg border-2 border-transparent focus:border-gray-900 hover:border-gray-500 text-center"
                        >
                          <img
                            className="h-full max-w-full w-full object-cover"
                            src={image}
                            
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 lg:row-span-2 lg:row-end-2">
              <h1 className="sm: text-2xl font-bold text-slate-900 sm:text-3xl">
                {value.name}
              </h1>

              <div className="my-2 flex items-center">
                <div className="flex items-center">
                  <AiFillStar className="block h-4 w-4 align-middle text-yellow-500" />
                  <AiFillStar className="block h-4 w-4 align-middle text-yellow-500" />
                  <AiFillStar className="block h-4 w-4 align-middle text-yellow-500" />
                  <AiFillStar className="block h-4 w-4 align-middle text-yellow-500" />
                  <AiFillStar className="block h-4 w-4 align-middle text-yellow-500" />
                </div>
                <p className="ml-2 text-sm font-medium text-slate-900">
                  15 Reviews
                </p>
              </div>
              <div className="flex">
                <ul>
                  {keys.map((key) => {
                    return (
                      <li key={key} className="font-bold sm:w-[250px]">
                        {key.split("_").join(" ")}:
                      </li>
                    );
                  })}
                </ul>
                <ul>
                  {values.map((value) => {
                    return (
                      <li key={value} className="pl-3 sm:w-[650px]">
                        {value}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <span className="text-3xl font-bold text-slate-900">
                € {value.price-20}
              </span>

              <div className=" mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
                <button
                  type="button"
                  className="mx-auto inline-flex items-center justify-center rounded-md border-2 border-transparent bg-slate-400 hover:bg-slate-500 bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow focus:outline-none"
                >
                  <BsHandbag className="shrink-0 mr-3 h-5 w-5" />
                  Add to cart
                </button>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="border-b border-gray-300">
                <h1 className="my-2 text-3xl font-bold text-slate-900">Product information</h1>
              </div>

              <div className="py-2  flow-root ">
                <p className=" text-lg sm:text-md text-slate-900">
                  {value.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductPage;
