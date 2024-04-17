// Restaurant Review Page
import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { useDispatch } from "react-redux";
import { addReview } from "./actions"; // Assuming you have an action to add a review

const RestaurantReviewPage = ({ route }) => {
  const { restaurantName } = route.params;
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);
  const dispatch = useDispatch();

  const handleReviewSubmit = () => {
    dispatch(addReview(restaurantName, { text: reviewText, rating }));
    // Possibly navigate back to the restaurant list page after submitting the review
  };

  return (
    <View>
      <Text>Restaurant: {restaurantName}</Text>
      <Text>Write your review:</Text>
      <TextInput value={reviewText} onChangeText={setReviewText} />
      <Text>Rating (1-5):</Text>
      <TextInput
        value={rating.toString()}
        onChangeText={(text) => setRating(parseInt(text))}
        keyboardType="numeric"
      />
      <Button title="Submit Review" onPress={handleReviewSubmit} />
    </View>
  );
};

export default RestaurantReviewPage;
