import React from "react";
import HardwareCard from "./HardwareCard";
import { useContext } from "react";
import { DataContext } from "../../store/context";
import Layout from "../../routes/Layout";
import Loading from "../Pages/Loading";
import Error from "../Pages/Error";


const Motherboard = () => {
  const { productsData, loading, error } = useContext(DataContext);
    
      
  const motherboards = productsData.filter(
    (element) => element.category === "Motherboards");
  return (
    <Layout>
     {loading ? <Loading /> : null}
      {error ? <Error /> : null}
   {productsData && (
        <div className="p-5 grid place-items-center gap-8 lg:grid-cols-5 md:grid-cols-2 lg:grid-rows-2 md:grid-rows-2 bg-sky-950 ">
          {motherboards.map((motherboard) => (
            <HardwareCard value={motherboard} />
          ))}
        </div>
      )}

   </Layout>
  );
};

export default Motherboard;
