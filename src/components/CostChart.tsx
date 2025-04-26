import React, { useEffect, useRef } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { RenovationCategory } from '../types/Calculator';

ChartJS.register(ArcElement, Tooltip, Legend);

interface CostChartProps {
  categories: RenovationCategory[];
}

const CostChart: React.FC<CostChartProps> = ({ categories }) => {
  const chartRef = useRef<ChartJS>(null);

  const categoryTotals = categories.map(category => ({
    name: category.name,
    total: category.items.reduce((sum, item) => sum + item.cost, 0)
  })).filter(category => category.total > 0);

  const data = {
    labels: categoryTotals.map(cat => cat.name),
    datasets: [
      {
        data: categoryTotals.map(cat => cat.total),
        backgroundColor: [
          'rgba(54, 162, 235, 0.8)',
          'rgba(153, 102, 255, 0.8)',
          'rgba(75, 192, 192, 0.8)',
          'rgba(255, 99, 132, 0.8)',
          'rgba(255, 159, 64, 0.8)',
          'rgba(255, 205, 86, 0.8)',
          'rgba(201, 203, 207, 0.8)',
          'rgba(94, 114, 228, 0.8)',
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 205, 86, 1)',
          'rgba(201, 203, 207, 1)',
          'rgba(94, 114, 228, 1)',
        ],
        borderWidth: 1,
        hoverOffset: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          color: 'white',
          padding: 20,
          font: {
            size: 12
          }
        }
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            const label = context.label || '';
            const value = context.raw || 0;
            return `${label}: ₹${value.toLocaleString('en-IN')}`;
          }
        }
      }
    },
    cutout: '70%',
    animation: {
      animateScale: true,
      animateRotate: true
    }
  };

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.update();
    }
  }, [categories]);

  return (
    <div className="bg-gray-900 rounded-xl p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-6">Cost Distribution</h2>
      <div className="h-[320px] w-full">
        <Doughnut data={data} options={options} ref={chartRef} />
      </div>
    </div>
  );
};

export default CostChart;