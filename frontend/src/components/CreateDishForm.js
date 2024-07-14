// client/src/components/CreateDishForm.js

import React, { useState } from 'react';
import axios from 'axios';

const CreateDishForm = ({ onDishCreated }) => {
  const [dishName, setDishName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [isPublished, setIsPublished] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/dishes', {
        dishName,
        imageUrl,
        isPublished,
      });
      onDishCreated(response.data); // Notify parent component
      setDishName('');
      setImageUrl('');
      setIsPublished(false);
    } catch (error) {
      console.error('Error creating dish:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
         <h1 className='text-3xl text-black font-bold mb-5'>Create a Dish</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-4">
          <label className="block mb-2">
            Dish Name:
            <input
              type="text"
              value={dishName}
              onChange={(e) => setDishName(e.target.value)}
              className="form-input mt-1 block w-full text-sm  rounded-md border-gray-300 shadow-sm outline-none"
              required
            />
          </label>
          <label className="block mb-2">
            Image URL:
            <input
              type="text"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="form-input mt-1 block w-full text-sm  rounded-md border-gray-300 shadow-sm outline-none "
            />
          </label>
          <label className="block mb-4">
            Published:
            <input
              type="checkbox"
              checked={isPublished}
              onChange={(e) => setIsPublished(e.target.checked)}
              className="form-checkbox mt-1 block"
            />
          </label>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none "
          >
            Create Dish
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateDishForm;
