import './line-chart.css'
import { Line } from 'react-chartjs-2';
import {  
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
 } from 'chart.js';

 export const options = {
    responsive: true,
    tension: 0.4,
    maintainAspectRatio: false,
    scales: {
        x: {
            grid: {
                drawOnChartArea: true
            }
        },

        y: {
            grid: {
                drawOnChartArea: false,
                
            },
            ticks: {
                display: false
             }
        }
    }
 }

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

export const data = {
    labels,
    datasets: [
      {
        label: 'Views',
        data: [0, 210, 280, 310, 200, 150, 300, 490, 544, 604, 828 ,977],
        borderColor: 'rgb(67, 0, 129)',
        backgroundColor: 'rgb(202, 0, 242)',
        borderWidth: 4,
      },
    ],
  };

export default function LineChart() {
    return (
        <div className='line-chart'>
            <Line options={options} data={data}  />
        </div>
    )
}