// __tests__/LoginRegisterPage.test.tsx

import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { Provider } from "react-redux";
import LoginRegisterPage from "../LoginRegisterPage";
import { store } from "../store";

describe("Login/Register Page", () => {
  test("renders correctly", () => {
    const { getByText, getByPlaceholderText } = render(
      <Provider store={store}>
        <LoginRegisterPage />
      </Provider>
    );

    expect(getByText("Email:")).toBeDefined();
    expect(getByPlaceholderText("Email")).toBeDefined();
    expect(getByText("Password:")).toBeDefined();
    expect(getByPlaceholderText("Password")).toBeDefined();
    expect(getByText("Login")).toBeDefined();
    expect(getByText("Register")).toBeDefined();
  });

  test("handles user input correctly", () => {
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <LoginRegisterPage />
      </Provider>
    );

    const emailInput = getByPlaceholderText("Email");
    const passwordInput = getByPlaceholderText("Password");

    fireEvent.changeText(emailInput, "test@example.com");
    fireEvent.changeText(passwordInput, "password123");

    expect(emailInput.props.value).toBe("test@example.com");
    expect(passwordInput.props.value).toBe("password123");
  });
});
