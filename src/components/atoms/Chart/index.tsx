import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register necessary components for the Line chart
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const SpendCategoryLineChart = () => {
  const data = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ], // Example months
    datasets: [
      {
        label: "Spending Trend",
        data: [
          3000000, 2500000, 3500000, 4000000, 2800000, 4500000, 5000000,
          3500000, 2000000, 7000000, 6000000, 2000000,
        ], // Example spending data
        fill: false,
        borderColor: "#36A2EB",
        tension: 0.1, // For a smooth curve
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const, // Ensure 'top' is treated as a constant value
      },
      title: {
        display: true,
        text: "Spending Over Time",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (tickValue: string | number) {
            if (typeof tickValue === "number") {
              return `Rp. ${tickValue.toLocaleString()}`; // Format to Rupiah
            }
            return tickValue; // In case tickValue is a string
          },
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default SpendCategoryLineChart;
