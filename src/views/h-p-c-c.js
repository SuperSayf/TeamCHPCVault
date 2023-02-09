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

import { connect } from '@planetscale/database'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  zoomPlugin
);

//Get creds from .env file
//require('dotenv').config()
const config = {
  host: 'aws.connect.psdb.cloud',
  username: process.env.REACT_APP_pscale_username,
  password: process.env.REACT_APP_pscale_password,
}
const conn = await connect(config)

const results = await conn.execute('SELECT * FROM hpcc')

const data = results.rows

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

// Add string "config#" in front of each number in the array
const labels = data.map((item) => {
  return "config#" + item.config;
});

export const HPLdata = {
  labels,
  datasets: [
    {
      label: 'G-HPL (Terra Flops per second)',
      data: data.map((row) => row.G_HPL),
      backgroundColor: 'rgba(173, 216, 230)',
    },
  ],
};

export const PTRANSdata = {
  labels,
  datasets: [
    {
      label: 'G-PTRANS (Terra Bytes per second)',
      data: data.map((row) => row.G_PTRANS),
      backgroundColor: 'rgba(173, 216, 230)',
    },
  ],
};

export const RANDOMACCESSdata = {
  labels,
  datasets: [
    {
      label: 'G-RANDOMAccess (Giga Updates per second)',
      data: data.map((row) => row.G_RandomAccess),
      backgroundColor: 'rgba(173, 216, 230)',
    },
  ],
};

export const FFTdata = {
  labels,
  datasets: [
    {
      label: 'G-FFT (Terra Flops per second)',
      data: data.map((row) => row.G_FFT),
      backgroundColor: 'rgba(173, 216, 230)',
    },
  ],
};

export const SYSdata = {
  labels,
  datasets: [
    {
      label: 'EP-STREAM Sys (Terra Bytes per second)',
      data: data.map((row) => row.EP_STREAM_sys),
      backgroundColor: 'rgba(173, 216, 230)',
    },
  ],
};

export const TRIADdata = {
  labels,
  datasets: [
    {
      label: 'EP-STREAM Triad (Giga Bytes per second)',
      data: data.map((row) => row.EP_STREAM_Triad),
      backgroundColor: 'rgba(173, 216, 230)',
    },
  ],
};

export const DGEMMdata = {
  labels,
  datasets: [
    {
      label: 'EP-DGEMM (Giga Flops per second)',
      data: data.map((row) => row.EP_DGEMM),
      backgroundColor: 'rgba(173, 216, 230)',
    },
  ],
};

export const BANDWIDTHdata = {
  labels,
  datasets: [
    {
      label: 'RandomRing Bandwidth (Giga Bytes per second)',
      data: data.map((row) => row.RandomRing_Bandwidth),
      backgroundColor: 'rgba(173, 216, 230)',
    },
  ],
};

export const LATENCYdata = {
  labels,
  datasets: [
    {
      label: 'RandomRingLatency (micro-seconds)',
      data: data.map((row) => row.RandomRing_Latency),
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
      <div className="benchmarks-blog-posts">
        <Bar options={options} data={RANDOMACCESSdata} />
      </div>
      <div className="benchmarks-blog-posts">
        <Bar options={options} data={FFTdata} />
      </div>
      <div className="benchmarks-blog-posts">
        <Bar options={options} data={SYSdata} />
      </div>
      <div className="benchmarks-blog-posts">
        <Bar options={options} data={TRIADdata} />
      </div>
      <div className="benchmarks-blog-posts">
        <Bar options={options} data={DGEMMdata} />
      </div>
      <div className="benchmarks-blog-posts">
        <Bar options={options} data={BANDWIDTHdata} />
      </div>
      <div className="benchmarks-blog-posts">
        <Bar options={options} data={LATENCYdata} />
      </div>
      <FooterGray></FooterGray>
    </div>
  )
}

export default HPCC
