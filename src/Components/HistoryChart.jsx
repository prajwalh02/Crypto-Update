import React from "react";
import useAxios from "../hooks/useAxios";
import { useParams } from "react-router-dom";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import moment from "moment";
import Skeleton from "./Skeleton";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const HistoryChart = () => {
  const { id } = useParams();
  const { response } = useAxios(
    `coins/${id}/market_chart?vs_currency=usd&days=7`
  );

  if (!response) {
    return (
      <div>
        <Skeleton className="h-72 w-full mb-10" />
      </div>
    );
  }

  // Prepare the chart data
  const coinChartData = response.prices.map((value) => ({
    x: value[0],
    y: value[1].toFixed(2),
  }));

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Coin Price History (Last 7 Days)",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Date",
        },
      },
      y: {
        title: {
          display: true,
          text: "Price (USD)",
        },
      },
    },
  };

  const data = {
    labels: coinChartData.map((data) => moment(data.x).format("MMMM DD")),
    datasets: [
      {
        fill: true,
        label: id,
        data: coinChartData.map((data) => data.y),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <div>
      <Line options={options} data={data} />
    </div>
  );
};

export default HistoryChart;
