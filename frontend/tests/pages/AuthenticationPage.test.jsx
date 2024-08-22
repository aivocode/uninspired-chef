import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";

import { useNavigate } from "react-router-dom";
import { login } from "../../src/services/authentication";

import { AuthenticationPage } from "../../src/pages/Authentication/AuthenticationPage";

// Mocking React Router's useNavigate function
vi.mock("react-router-dom", () => {
  const navigateMock = vi.fn();
  const useNavigateMock = () => navigateMock; // Create a mock function for useNavigate
  return { useNavigate: useNavigateMock };
});

// Mocking the login service
vi.mock("../../src/services/authentication", () => {
  const loginMock = vi.fn();
  return { login: loginMock };
});

// Reusable function for filling out login form
const completeLoginForm = async () => {
  const user = userEvent.setup();

  const userNameInputEl = screen.getByLabelText("User Name:");
  const passwordInputEl = screen.getByLabelText("Password:");
  const submitButtonEl = screen.getByRole("submit-button");

  await user.type(userNameInputEl, "Krangel");
  await user.type(passwordInputEl, "Krangel92*");
  await user.click(submitButtonEl);
};

describe("Login Page", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  test("allows a user to login", async () => {
    render(<AuthenticationPage />);

    await completeLoginForm();

    expect(login).toHaveBeenCalledWith("Krangel", "Krangel92*");
  });

  test("navigates to /posts on successful login", async () => {
    render(<AuthenticationPage />);

    login.mockResolvedValue("secrettoken123");
    const navigateMock = useNavigate();

    await completeLoginForm();

    expect(navigateMock).toHaveBeenCalledWith("/");
  });

  test("navigates to /login on unsuccessful login", async () => {
    render(<AuthenticationPage />);

    login.mockRejectedValue(new Error("Error logging in"));
    const navigateMock = useNavigate();

    await completeLoginForm();

    expect(navigateMock).toHaveBeenCalledWith("/auth");
  });
});
