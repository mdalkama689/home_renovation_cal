import React from 'react';
import CostInput from './CostInput';
import { RenovationCategory } from '../types/Calculator';
import { getCategoryIcon } from '../data/renovationData';

interface CategoryCardProps {
  category: RenovationCategory;
  onItemChange: (categoryId: string, itemId: string, value: number) => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, onItemChange }) => {
  const Icon = getCategoryIcon(category.icon);

  const getCategoryTotal = () => {
    return category.items.reduce((sum, item) => sum + item.cost, 0);
  };

  return (
    <div className="bg-gray-800 rounded-xl p-5 shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
      <div className="flex items-center mb-4">
        <div className="p-2 rounded-lg bg-blue-600 mr-3">
          <Icon size={24} className="text-white" />
        </div>
        <h3 className="text-xl font-bold text-white">{category.name}</h3>
      </div>
      
      <div className="space-y-3">
        {category.items.map((item) => (
          <CostInput
            key={item.id}
            id={item.id}
            label={item.name}
            value={item.cost}
            onChange={(value) => onItemChange(category.id, item.id, value)}
          />
        ))}
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-700">
        <div className="flex justify-between items-center">
          <span className="text-gray-300">Total</span>
          <span className="text-lg font-bold text-white">
            ₹{getCategoryTotal().toLocaleString('en-IN')}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;