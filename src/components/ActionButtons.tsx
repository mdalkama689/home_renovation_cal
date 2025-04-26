import React from 'react';
import { RotateCcw } from 'lucide-react';
import { RenovationCategory } from '../types/Calculator';

interface ActionButtonsProps {
  categories: RenovationCategory[];
  onReset: () => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ categories, onReset }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 w-full">
      <button
        onClick={onReset}
        className="flex items-center justify-center py-3 px-4 rounded-lg bg-gray-700 text-white font-medium text-sm hover:bg-gray-600 transition duration-200 shadow-md"
      >
        <RotateCcw size={16} className="mr-2" />
        Reset All Values
      </button>
    </div>
  );
};

export default ActionButtons;