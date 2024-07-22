import React from 'react';

const Step3 = ({ formData, prevStep }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div>
      <h2 className="mb-4 text-xl font-bold">Step 3</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div className="flex justify-between">
          <button
            type="button"
            onClick={prevStep}
            className="px-4 py-2 text-white bg-gray-500 rounded-md"
          >
            Back
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-white bg-green-500 rounded-md"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Step3;




