import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  stacked: false,
  scales: {
    y: {
      type: 'linear',
      display: false,
      position: 'left',
    },
    x: {
      beginAtZero: true
    },
    
  },
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart',
      align: 'start',
      layout: {
        padding: {
          left: 10
        }
      }
    },
  },
};


export function ChartStaticstic(props) {

  const data = {
    labels: props?.day,
    datasets: props?.datasets,
  };

  return <Line options={options} data={data} style={{padding: 10}} />;
}
