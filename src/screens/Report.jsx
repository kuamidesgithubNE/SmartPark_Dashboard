import React from "react";
import Topbar from "../components/Header";
import Sidebar from "../components/Sidebar";
import { FaSearch, FaDownload, FaSyncAlt } from "react-icons/fa";
import Chart from "react-apexcharts"; // Assuming you're using a chart library like ApexCharts

const Reports = () => {
  const chartData = {
    series: [
      {
        name: "Revenue",
        data: [
          10000, 15000, 12000, 18000, 13000, 20000, 12334, 11020, 12330, 16556,
        ],
      },
    ],
    options: {
      chart: {
        type: "line",
        height: 350,
      },
      title: {
        text: "Revenue Over Time",
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "July",
          "August",
          "September",
        ],
      },
      colors: ["#3498db"],
    },
  };

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-main">
        <Topbar />
        <div className="dashboard-content">
        <div className="report-filters">
          <label>Date Range: </label>
          <input type="date" />
          <input type="date" />
          <label>Report Type: </label>
          <select>
            <option value="revenue">Revenue</option>
            <option value="occupancy">Occupancy</option>
          </select>
          <button className="filter-button">
            <FaSearch /> Filter
          </button>
          <button className="reset-button">
            <FaSyncAlt /> Reset
          </button>
        </div>
        <div className="report-content">
          <h3>Revenue Report</h3>
          <p>Total Revenue: $10,000</p>
          <Chart
            options={chartData.options}
            series={chartData.series}
            type="line"
            height={350}
          />
          <div className="export-buttons">
            <button className="export-button">
              <FaDownload /> Export as PDF
            </button>
            <button className="export-button">
              <FaDownload /> Export as CSV
            </button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
