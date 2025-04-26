import React from 'react';

interface CostInputProps {
  id: string;
  label: string;
  value: number;
  onChange: (value: number) => void;
}

const CostInput: React.FC<CostInputProps> = ({ id, label, value, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value === '' ? 0 : parseInt(e.target.value, 10);
    onChange(newValue);
  };

  return (
    <div className="mb-4">
      <label 
        htmlFor={id} 
        className="block mb-2 text-sm font-medium text-gray-300"
      >
        {label}
      </label>
      <div className="relative">
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          ₹
        </span>
        <input
          type="number"
          id={id}
          value={value === 0 ? '' : value}
          onChange={handleChange}
          className="bg-gray-800 border border-gray-700 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-8 transition-all duration-200 hover:border-gray-600 focus:ring-2"
          placeholder="0"
        />
      </div>
    </div>
  );
};

export default CostInput;