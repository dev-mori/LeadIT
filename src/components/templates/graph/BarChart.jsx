import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

const BarChart = () => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    setChartData({
      labels: [
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "Saturday",
        "Sunday",
      ],
      datasets: [
        {
          label: "Your trajectory",
          data: [32, 45, 12, 76, 69, 40, 100],
          backgroundColor: ["rgba(75, 192, 192, 0.6)"],
          borderWidth: 4,
        },
      ],
    });
  };
  useEffect(() => {
    chart();
  }, []);
  return (
    <div className="App">
      <div style={{ height: "250px", width: "300px" }}>
        <Line
          data={chartData}
          options={{
            responsive: true,
          }}
        />
      </div>
    </div>
  );
};

export default BarChart;
