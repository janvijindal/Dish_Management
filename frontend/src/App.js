

import React from 'react';
import DishList from './components/DishList';
import CreateDishForm from './components/CreateDishForm';

const App = () => {
  const handleDishCreated = (newDish) => {
    console.log('New dish created:', newDish);
  
  };

  return (
    <div className="App">
      <CreateDishForm onDishCreated={handleDishCreated} />
      <DishList />
    </div>
  );
};

export default App;
