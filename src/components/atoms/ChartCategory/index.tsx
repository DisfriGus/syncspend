import dynamic from "next/dynamic";
import React from "react";

// Dynamically import the Doughnut component from react-chartjs-2
const Doughnut = dynamic(
  () => import("react-chartjs-2").then((mod) => mod.Doughnut),
  { ssr: false }
);

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register necessary Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const SpendCategoryDonutChart = () => {
  const data = {
    labels: [
      "Makan & Minum",
      "Belanja",
      "Tagihan",
      "Pendidikan",
      "Transportasi",
      "Kesehatan",
      "Hiburan",
    ],
    datasets: [
      {
        label: "Spend Categories",
        data: [3000000, 500000, 1500000, 1000000, 800000, 1200000, 900000], // Example spending amounts
        backgroundColor: [
          "#444", // Makan & Minum (dark gray)
          "#FFB400", // Belanja (yellow)
          "#FF8A00", // Tagihan (orange)
          "#FF5B5B", // Pendidikan (red)
          "#FF73FA", // Transportasi (pink)
          "#BA73FA", // Kesehatan (purple)
          "#738EFA", // Hiburan (blue)
        ],
        hoverOffset: 4,
        borderWidth: 0,
        cutout: "70%", // Creates the hole in the middle for donut effect
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
        ticks: {
          callback: function (tickValue: string | number) {
            if (typeof tickValue === "number") {
              return `Rp. ${tickValue.toLocaleString()}`; // Format to Rupiah
            }
            return tickValue; // In case tickValue is a string
          },
        },
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="relative w-full h-[400px]">
      <Doughnut data={data} options={options} />
      {/* Custom center content */}
    </div>
  );
};

export default SpendCategoryDonutChart;
