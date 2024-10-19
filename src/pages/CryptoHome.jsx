import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Trending from "../Components/Trending";
import Markets from "../Components/Markets";
import Section from "../Components/Section";
import CoinTrending from "../Components/CoinTrending";
import Coin from "../Components/Coin";
import useAxios from "../hooks/useAxios";

const CryptoHome = () => {
  const trendingData = useAxios("/search/trending");
  const marketData = useAxios("/coins/markets?vs_currency=usd");
  // console.log(trendingData);

  return (
    <div className="wrapper-container">
      
      {/* <Trending />
      <Markets /> */}

      <Section name={"Trending"} Component={CoinTrending} data={trendingData} />
      <Section name={"Markets"} Component={Coin} data={marketData} />
    </div>
  );
};

export default CryptoHome;
