import { render, screen } from "@testing-library/react";
import { NotFoundPage } from "./NotFoundPage";

describe("NotFoundPage", () => {
  test("should render page not found title", () => {
    render(<NotFoundPage />);

    expect(
      screen.getByRole("heading", { name: /page not found/i })
    ).toBeInTheDocument();
  });
});