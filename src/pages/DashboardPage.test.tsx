import { render, screen } from "@testing-library/react";
import { DashboardPage } from "./DashboardPage";

jest.mock("../features/user/UserTab", () => ({
  UserTab: () => <div data-testid="mock-user-tab">Mock User Tab</div>,
}));

describe("DashboardPage", () => {
  test("should render dashboard page title", () => {
    render(<DashboardPage />);

    expect(
      screen.getByRole("heading", { name: /dashboard page/i })
    ).toBeInTheDocument();
  });

  test("should render dashboard description", () => {
    render(<DashboardPage />);

    expect(
      screen.getByText(/this is your industrial react dashboard/i)
    ).toBeInTheDocument();
  });

  test("should render user tab", () => {
    render(<DashboardPage />);

    expect(screen.getByTestId("mock-user-tab")).toBeInTheDocument();
  });
});