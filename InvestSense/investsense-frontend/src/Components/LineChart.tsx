import React from 'react';
import {Chart,CategoryScale} from 'chart.js/auto';
Chart.register(CategoryScale);
import { Line } from "react-chartjs-2";
import { CompanyHistoricalDividend, Dividend } from '../company';

interface Props {
  dividends: CompanyHistoricalDividend;
}

const formattedDate = (date: string): string => {
    const options = { year: '2-digit', month: 'short' } as any;
    return new Date(date).toLocaleDateString('en-US', options);
  };
const LineChart = ({ dividends }: Props) => {
 dividends.historical= dividends.historical.sort((a:Dividend,b:Dividend)=>(new Date(a.date).getTime()-new Date(b.date).getTime()))
  return (
    <Line
      data={{
        labels: dividends.historical.map((element: Dividend) => formattedDate(element.date)),
        datasets: [
          {
            data: dividends.historical.map((element: Dividend) => element.dividend),
            label: 'Dividends', 
            borderColor: 'blue', 
            fill: false,
          },
        ],
      }}
    />
  );
};

export default LineChart;
