import React from 'react'

import { Helmet } from 'react-helmet'

import HeaderBenchmarks from '../components/header-benchmarks'
import FooterGray from '../components/footer-gray'
import './h-p-c-c.css'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

import zoomPlugin from 'chartjs-plugin-zoom';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  zoomPlugin
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'HPCC',
    },
    zoom: {
      zoom: {
        pan: {
          enabled: true,
        },
        wheel: {
          enabled: true,
        },
        pinch: {
          enabled: true
        },
        mode: 'xy',
      }
    },
  },
};

const labels = ['config#1', 'config#2', 'config#3', 'config#4', 'config#5'];

export const HPLdata = {
  labels,
  datasets: [
    {
      label: 'G-HPL (Terra Flops per second)',
      data: [2.2338, 1.9867, 3.4567, 4.3461, 2.9871],
      backgroundColor: 'rgba(173, 216, 230)',
    },
  ],
};

export const PTRANSdata = {
  labels,
  datasets: [
    {
      label: 'G-PTRANS (Terra Bytes per second)',
      data: [0.0017, 0.0015, 0.0013, 0.0019, 0.0016],
      backgroundColor: 'rgba(173, 216, 230)',
    },
  ],
};

const HPCC = (props) => {
  return (
    <div className="h-p-c-c-container">
      <Helmet>
        <title>HPCC - Soft UI Pro</title>
        <meta property="og:title" content="HPCC - Soft UI Pro" />
      </Helmet>
      <HeaderBenchmarks rootClassName="header-benchmarks-root-class-name2"></HeaderBenchmarks>
      <div className="benchmarks-blog-posts">
        <Bar options={options} data={HPLdata} />
      </div>
      <div className="benchmarks-blog-posts">
        <Bar options={options} data={PTRANSdata} />
      </div>
      <FooterGray></FooterGray>
    </div>
  )
}

export default HPCC
