import React, { useState } from 'react';
import CategoryCard from './CategoryCard';
import CostSummary from './CostSummary';
import CostChart from './CostChart';
import ActionButtons from './ActionButtons';
import { renovationData } from '../data/renovationData';
import { RenovationCategory } from '../types/Calculator';
import { getCategoryIcon } from '../data/renovationData';

const Calculator: React.FC = () => {
  const [categories, setCategories] = useState<RenovationCategory[]>(renovationData);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleItemChange = (categoryId: string, itemId: string, value: number) => {
    setCategories(prevCategories => 
      prevCategories.map(category => {
        if (category.id === categoryId) {
          return {
            ...category,
            items: category.items.map(item => {
              if (item.id === itemId) {
                return { ...item, cost: value };
              }
              return item;
            })
          };
        }
        return category;
      })
    );
  };

  const handleReset = () => {
    setCategories(prevCategories => 
      prevCategories.map(category => ({
        ...category,
        items: category.items.map(item => ({
          ...item,
          cost: item.defaultCost
        }))
      }))
    );
    setSelectedCategory(null);
  };

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId === selectedCategory ? null : categoryId);
  };

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
        {categories.map((category) => {
          const Icon = getCategoryIcon(category.icon);
          const isSelected = category.id === selectedCategory;
          const categoryTotal = category.items.reduce((sum, item) => sum + item.cost, 0);
          
          return (
            <button
              key={category.id}
              onClick={() => handleCategorySelect(category.id)}
              className={`p-4 rounded-xl transition-all duration-300 flex flex-col items-center justify-center gap-2 ${
                isSelected 
                  ? 'bg-blue-600 text-white shadow-lg scale-105' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <Icon size={24} />
              <span className="text-sm font-medium">{category.name}</span>
              <span className="text-xs">
                ₹{categoryTotal.toLocaleString('en-IN')}
              </span>
            </button>
          );
        })}
      </div>

      {selectedCategory && (
        <div className="mb-8">
          <CategoryCard
            category={categories.find(c => c.id === selectedCategory)!}
            onItemChange={handleItemChange}
          />
        </div>
      )}
      
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CostSummary categories={categories} />
        <CostChart categories={categories} />
      </div>
      
      <div className="mt-8">
        <ActionButtons categories={categories} onReset={handleReset} />
      </div>
    </div>
  );
};

export default Calculator;