// import React from 'react'
// import "./styles.css"
// import { Line } from "react-chartjs-2";
// import { Chart as ChartJS } from "chart.js/auto"; //Dont get rid of this

// function LineChart({ chartData, priceType, multiAxis }) {
//   const options = {
//     plugins: {
//       legend: {
//         display: multiAxis ? true : false,
//       },
//     },
//     responsive: true,
//     interaction: {
//       mode: "index",
//       intersect: false,
//     },
//     scales: {
//       y: {
//         ticks: {
//           // include a dollar sign in the ticks
//           callback: function(value, index,ticks) {
//             // Hide every 2nd tick label
//             return "$" + value.toLocaleString(); 
//           }
//           //color: 'red',
//         }
//       }
//     }
    
//   };
//   // const config = {
//   //   type: 'line',
//   //   data: data,
//   //   options: {
//   //     responsive: true,
//   //     plugins: {
//   //       legend: {
//   //         position: 'top',
//   //       },
//   //       interaction: {
//   //             mode: "index",
//   //             intersect: false,
//   //           },
//   //       title: {
//   //         display: true,
//   //         text: 'Chart.js Line Chart'
//   //       }
//   //     }
//   //   },
//   // };

//   return <Line data={chartData} options={options} />;
// }

// export default LineChart;

import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto"; //Dont get rid of this
import { convertNumber, convertNumbers } from "../../../functions/convertNumber";

function LineChart({ chartData, priceType, multiAxis }) {
  const options = {
    plugins: {
      legend: {
        position:'top',
        display: multiAxis ? true: false,
      },
      title: {
        display: true,
        text: 'Comparison between Crypto1 and Crypto2'
      }
    },
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: {
      crypto2: {
        type: "linear",
        display: true,
        position: "right",
        ticks: {
          callback: function (value) {
            if (priceType == "total_volumes") {
              return convertNumber(value);
            } else if (priceType == "market_caps") {
              return "$" + convertNumber(value);
            } else {
              return "$" + value.toLocaleString();
            }
          },
        },
      },
      crypto1: {
        type: "linear",
        display: true,
        position: "left",
        ticks: {
          callback: function (value) {
            if (priceType == "total_volumes") {
              return convertNumber(value);
            } else if (priceType == "market_caps") {
              return "$" + convertNumber(value);
            } else {
              return "$" + value.toLocaleString();
            }
          },
        },
      },
    },
  };

  return <Line  data={chartData} options={options} />;
}

export default LineChart;