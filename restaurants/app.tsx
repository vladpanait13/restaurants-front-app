// App.tsx
import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { Provider, useDispatch, useSelector } from "react-redux";
import { setRestaurants } from "./actions";
import { store } from "./store";

const RestaurantList = () => {
  const restaurants = useSelector((state: any) => state.restaurants);

  return (
    <View>
      <Text>Restaurant Names:</Text>
      {restaurants.map((restaurant: string, index: number) => (
        <Text key={index}>{restaurant}</Text>
      ))}
    </View>
  );
};

/*
const App = () => {
  const [restaurants, setRestaurants] = useState<string[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/restaurants")
      .then((response) => response.json())
      .then((data) => setRestaurants(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <Provider store={store}>
      <View>
        <Text>Restaurant Names:</Text>
        {restaurants.map((restaurant, index) => (
          <Text key={index}>{restaurant}</Text>
        ))}
      </View>
    </Provider>
  );
}; */

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://localhost:5000/api/restaurants")
      .then((response) => response.json())
      .then((data) => dispatch(setRestaurants(data)))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <Provider store={store}>
      <RestaurantList />
    </Provider>
  );
};

export default App;
