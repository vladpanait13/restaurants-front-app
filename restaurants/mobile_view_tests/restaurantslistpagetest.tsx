// __tests__/RestaurantListPage.test.tsx

import React from "react";
import { render } from "@testing-library/react-native";
import { Provider } from "react-redux";
import RestaurantListPage from "../RestaurantListPage";
import { store } from "../store";

describe("Restaurant List Page", () => {
  test("renders correctly", () => {
    const { getByText } = render(
      <Provider store={store}>
        <RestaurantListPage />
      </Provider>
    );

    expect(getByText("Restaurant Names:")).toBeDefined();
  });
});
