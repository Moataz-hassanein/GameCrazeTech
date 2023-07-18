import React, { useContext } from "react";
import { DataContext } from "../../store/context.jsx";

import Card from "./Card.jsx";
import Layout from "../../routes/Layout.jsx";

const HardwareList = () => {
  const { productsData } = useContext(DataContext);

  return <Layout>
    {productsData && <Card posts={productsData} />
    }</Layout>;
};

export default HardwareList;
