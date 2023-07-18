import React from "react";
import HardwareCard from "./HardwareCard";
import { useContext } from "react";
import { DataContext } from "../../store/context";
import Layout from "../../routes/Layout";
import Loading from "../Pages/Loading";
import Error from "../Pages/Error";




const Ram = () => {
  const { productsData, loading, error } = useContext(DataContext);

  const rams = productsData.filter(
    (element) => element.category === "RAM"
  );
  return (
    <Layout>
      {loading ? <Loading /> : null}
      {error ? <Error /> : null}

      {productsData && (
        <div className="p-5 grid place-items-center gap-8 lg:grid-cols-5 md:grid-cols-2 lg:grid-rows-2 md:grid-rows-2 bg-sky-950 ">
          {rams.map((ram) => (
            <HardwareCard value={ram} />
          ))}
        </div>
      )}

    </Layout>
  );
};

export default Ram;
