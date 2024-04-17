// server.js
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

// array of restaurants names
const restaurants = [
  "The Hungry Panda",
  "Pizza Palace",
  "Burger Barn",
  "Sushi Express",
  "Taco Time",
  "Pasta Paradise",
  "BBQ Bonanza",
  "Café Delight",
  "Thai Spice",
  "Mediterranean Flavors",
];

//// Route to get 10 random restaurant names
app.get("/api/restaurants", (req, res) => {
  const randomRestaurants = restaurants
    .sort(() => Math.random() - 0.5)
    .slice(0, 10);
  res.json(randomRestaurants);
});

/*
// Route to get 10 random restaurant names
app.get('/restaurants', (req, res) => {
  const randomRestaurants = getRandomRestaurants(restaurants, 10);
  res.json(randomRestaurants);
});

// Function to get n random elements from an array
function getRandomRestaurants(arr, n) {
  const shuffled = arr.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
}
*/

// start the server
//const port = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

/////////////////////////////////
//Run the server by executing node app.js in your terminal.

//Now you can make a GET request to http://localhost:3000/restaurants
//and it will return a JSON array containing 10 random restaurant
//names from the predefined list.
