import React from 'react';

const Step1 = ({ formData, setFormData, nextStep }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Step 1</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <button
        onClick={nextStep}
        className="px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        Next
      </button>
    </div>
  );
};

export default Step1;
