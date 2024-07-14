// populateData.js

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Dish = require('./models/Dish');

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
 
});

const connection = mongoose.connection;

connection.once('open', async () => {
  try {
    // Define your JSON data
    const jsonData = [
      {
          "dishName": "Jeera Rice",
          "dishId": "1",
          "imageUrl": "https://nosh-assignment.s3.ap-south-1.amazonaws.com/jeera-rice.jpg",
          "isPublished": true
        },
        {
          "dishName": "Paneer Tikka",
          "dishId": "2",
          "imageUrl": "https://nosh-assignment.s3.ap-south-1.amazonaws.com/paneer-tikka.jpg",
          "isPublished": true
        },
        {
          "dishName": "Rabdi",
          "dishId": "3",
          "imageUrl": "https://nosh-assignment.s3.ap-south-1.amazonaws.com/rabdi.jpg",
          "isPublished": true
        },
        {
          "dishName": "Chicken Biryani",
          "dishId": "4",
          "imageUrl": "https://nosh-assignment.s3.ap-south-1.amazonaws.com/chicken-biryani.jpg",
          "isPublished": true
        },
        {
          "dishName": "Alfredo Pasta",
          "dishId": "5",
          "imageUrl": "https://nosh-assignment.s3.ap-south-1.amazonaws.com/alfredo-pasta.jpg",
          "isPublished": true
        }
    
  ]

    // Insert JSON data into database
    await Dish.insertMany(jsonData);
    console.log('Data inserted successfully');
    mongoose.disconnect();
  } catch (error) {
    console.error('Error inserting data:', error);
    mongoose.disconnect();
  }
});
