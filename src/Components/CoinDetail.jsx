import React from "react";
import useAxios from "../hooks/useAxios";
import { useParams } from "react-router-dom";
import Skeleton from "./Skeleton";

const CoinDetail = () => {
  const { id } = useParams();
  const { response } = useAxios(
    `coins/${id}?localization=false&tickers=false&market_data=false&community_data=false&sparkline=false`
  );
  console.log(response);

  if (!response) {
    return (
      <div>
        <Skeleton className="h-8 w-32" />
        <Skeleton className="h-72 w-full mt-10" />
      </div>
    );
  }

  return (
    <div className="my-6">
      <div className="flex gap-2 items-center ">
        <img src={response.image.small} alt={response.name} />
        <h1 className="text-2xl mb-2 capitalize font-bold">{response.name}</h1>
      </div>
      <p
        className="mt-6 text-gray-500 [&>a]:text-blue-600 [&>a]:underline"
        dangerouslySetInnerHTML={{ __html: response.description.en }}
      ></p>
    </div>
  );
};

export default CoinDetail;
