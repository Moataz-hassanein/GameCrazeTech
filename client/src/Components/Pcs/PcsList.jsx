import React, { useState, useContext } from "react";


import { DataContext } from "../../store/context";

import PcCard from "./PcCard";
import Layout from "../../routes/Layout";

const PcsList = () => {
  const [loading, setLoading] = useState(false);

  const { pcsData } = useContext(DataContext);

  return (
    <Layout>
      <PcCard posts={pcsData} loading={loading} />
    </Layout>
  );
};

export default PcsList;
