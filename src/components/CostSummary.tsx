import React, { useMemo } from 'react';
import { RenovationCategory } from '../types/Calculator';
import { ArrowDown } from 'lucide-react';

interface CostSummaryProps {
  categories: RenovationCategory[];
}

const CostSummary: React.FC<CostSummaryProps> = ({ categories }) => {
  const totalCost = useMemo(() => {
    return categories.reduce((sum, category) => 
      sum + category.items.reduce((itemSum, item) => itemSum + item.cost, 0), 0
    );
  }, [categories]);

  const categoryTotals = useMemo(() => {
    return categories.map(category => ({
      name: category.name,
      total: category.items.reduce((sum, item) => sum + item.cost, 0)
    })).sort((a, b) => b.total - a.total); // Sort by highest cost
  }, [categories]);

  const getPercentage = (amount: number) => {
    return totalCost > 0 ? (amount / totalCost) * 100 : 0;
  };

  return (
    <div className="bg-gray-900 rounded-xl p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-6">Cost Summary</h2>
      
      <div className="flex flex-col justify-center items-center mb-8">
        <span className="text-gray-400 text-sm">Estimated Total</span>
        <span className="text-4xl font-bold text-white my-2">
          ₹{totalCost.toLocaleString('en-IN')}
        </span>
        <div className="flex items-center text-sm text-blue-400">
          <ArrowDown size={16} className="mr-1" />
          <span>Cost Breakdown</span>
        </div>
      </div>
      
      <div className="space-y-4">
        {categoryTotals.map((category, index) => (
          <div key={index} className="mb-3">
            <div className="flex justify-between mb-1">
              <span className="text-gray-300">{category.name}</span>
              <span className="text-white font-medium">
                ₹{category.total.toLocaleString('en-IN')}
              </span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2.5">
              <div 
                className="bg-blue-600 h-2.5 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${getPercentage(category.total)}%` }}
              ></div>
            </div>
            <div className="text-xs text-right text-gray-400 mt-1">
              {getPercentage(category.total).toFixed(1)}% of total
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CostSummary;