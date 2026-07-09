import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import { UserTab } from "./UserTab";

const mockUsers = [
  {
    id: "1",
    name: "Saif",
    role: "Senior Software Engineer",
    createdAt: "2026-07-04T07:43:07.376Z",
    updatedAt: "2026-07-04T07:43:07.376Z",
  },
];

function renderWithStore() {
  const store = configureStore({
    reducer: {
      user: userReducer,
    },
  });

  render(
    <Provider store={store}>
      <UserTab />
    </Provider>
  );

  return store;
}

describe("UserTab", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test("should show loading initially and then render users", async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        data: {
          users: {
            success: true,
            message: "Users fetched successfully",
            data: mockUsers,
          },
        },
      }),
    });

    renderWithStore();

    expect(screen.getByTestId("users-loading")).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText("Saif")).toBeInTheDocument();
    });

    expect(screen.getByText("Senior Software Engineer")).toBeInTheDocument();
  });

  test("should show error when API fails", async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
    });

    renderWithStore();

    await waitFor(() => {
      expect(screen.getByTestId("users-error")).toBeInTheDocument();
    });

    expect(screen.getByText(/failed to fetch users/i)).toBeInTheDocument();
  });
});