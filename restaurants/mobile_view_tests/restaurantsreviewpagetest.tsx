// __tests__/RestaurantReviewPage.test.tsx

import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { Provider } from "react-redux";
import RestaurantReviewPage from "../RestaurantReviewPage";
import { store } from "../store";

describe("Restaurant Review Page", () => {
  test("renders correctly", () => {
    const { getByText, getByPlaceholderText } = render(
      <Provider store={store}>
        <RestaurantReviewPage
          route={{ params: { restaurantName: "Test Restaurant" } }}
        />
      </Provider>
    );

    expect(getByText("Restaurant: Test Restaurant")).toBeDefined();
    expect(getByText("Write your review:")).toBeDefined();
    expect(getByPlaceholderText("Review")).toBeDefined();
    expect(getByText("Rating (1-5):")).toBeDefined();
    expect(getByPlaceholderText("Rating")).toBeDefined();
    expect(getByText("Submit Review")).toBeDefined();
  });

  test("handles user input correctly", () => {
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <RestaurantReviewPage
          route={{ params: { restaurantName: "Test Restaurant" } }}
        />
      </Provider>
    );

    const reviewInput = getByPlaceholderText("Review");
    const ratingInput = getByPlaceholderText("Rating");

    fireEvent.changeText(reviewInput, "Great food and service!");
    fireEvent.changeText(ratingInput, "5");

    expect(reviewInput.props.value).toBe("Great food and service!");
    expect(ratingInput.props.value).toBe("5");
  });
});
