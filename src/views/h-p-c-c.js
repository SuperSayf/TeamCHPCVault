import React from 'react'

import { Helmet } from 'react-helmet'

import HeaderBenchmarks from '../components/header-benchmarks'
import FooterGray from '../components/footer-gray'
import './h-p-c-c.css'

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar, Radar } from 'react-chartjs-2';

import zoomPlugin from 'chartjs-plugin-zoom';

import { connect } from '@planetscale/database'

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  zoomPlugin
);


import { getConfig } from './benchmarks'
import PrimaryBlueButton from '../components/primary-blue-button'

const conn = await connect(getConfig())

const results = await conn.execute('SELECT * FROM hpcc')

const data = results.rows

const options = {
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

const radarOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'HPCC overview of all configs',
    },
  },
};

// Add string "config#" in front of each number in the array
const labels = data.map((item) => {
  return "config#" + item.config;
});

function randomRGBColour() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return r + "," + g + "," + b;
}

// Define an array
const prevColors = [];

const Radardata = {
  labels: ['G-HPL (Terra Flops per second)', 'G-PTRANS (Terra Bytes per second)', 'G-RANDOMAccess (Giga Updates per second)', 'G-FFT (Terra Flops per second)', 'EP-STREAM Sys (Terra Bytes per second)', 'EP-STREAM Triad (Giga Bytes per second)', 'EP-DGEMM (Giga Flops per second)', 'RandomRing Bandwidth (Giga Bytes per second)', 'RandomRingLatency (micro-seconds)'],
  // Loop through the data and create a new dataset for each row
  datasets: data.map((row) => {
    const color = randomRGBColour()
    // Make sure a new color is generated for each dataset
    prevColors.push(color)

    if (prevColors.length > 1) {
      // Loop through the array of colors
      for (let i = 0; i < prevColors.length; i++) {
        // Loop through the array of colors again
        for (let j = 0; j < prevColors.length; j++) {
          // If the color is the same as the previous color, generate a new color
          if (prevColors[i] === prevColors[j] && i !== j) {
            const color = randomRGBColour()
            prevColors.push(color)
          }
        }
      }
    }

    return {
      label: "config#" + row.config,
      data: [row.G_HPL, row.G_PTRANS, row.G_RandomAccess, row.G_FFT, row.EP_STREAM_sys, row.EP_STREAM_Triad, row.EP_DGEMM, row.RandomRing_Bandwidth, row.RandomRing_Latency],
      backgroundColor: 'rgba(' + color + ', 0.2)',
      borderColor: 'rgba(' + color + ', 1)',
      borderWidth: 1,
    }
  })
};

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
        <title>HPCC</title>
        <meta property="og:title" content="HPCC" />
      </Helmet>
      <HeaderBenchmarks rootClassName="header-benchmarks-root-class-name2"></HeaderBenchmarks>
      <br></br>
      <div className="benchmarks-blog-posts">
        <Radar options={radarOptions} data={Radardata} />

        {/* List box to select a config to download*/}
        <select id="config" name="config" onChange={props.handleChange}>

          <option value="0">Select a config</option>
          <option value="1">config1</option>
          <option value="2">config2</option>
          <option value="3">config3</option>
          <option value="4">config4</option>

        </select>
        {/* Add some padding */}
        <br></br>
        <PrimaryBlueButton button="Download" onClick={props.handleClick}></PrimaryBlueButton>

      </div>
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
