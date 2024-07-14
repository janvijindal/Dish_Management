// client/src/components/DishList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DishList = () => {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const response = await axios.get('https://dish-management-backend.onrender.com/api/dishes');
        setDishes(response.data);
      } catch (error) {
        console.error('Error fetching dishes:', error);
      }
    };
    fetchDishes();
  }, []);

  const handleToggle = async (id) => {
    try {
      await axios.put(`https://dish-management-backend.onrender.com/api/dishes/toggle/${id}`);
      setDishes(prevDishes =>
        prevDishes.map(dish =>
          dish._id === id ? { ...dish, isPublished: !dish.isPublished } : dish
        )
      );
    } catch (error) {
      console.error('Error toggling dish:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Dish List</h1>
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {dishes.map(dish => (
          <li key={dish._id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={dish.imageUrl} alt={dish.dishName} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{dish.dishName}</h3>
              <p className="text-gray-600">{dish.isPublished ? 'Published' : 'Unpublished'}</p>
              <button
                onClick={() => handleToggle(dish._id)}
                className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Toggle Published
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DishList;
