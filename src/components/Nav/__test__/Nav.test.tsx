import { render, screen } from "@testing-library/react";
import Nav from "../Nav";
import { BrowserRouter } from "react-router-dom";
import { ReactElement } from "react";

const renderWithRouter = (ui: ReactElement, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);

  return render(ui, { wrapper: BrowserRouter });
};

describe("Nav", () => {
  it("Nav renders correctly.", () => {
    renderWithRouter(<Nav />);

    const nav = screen.getByTestId("nav-test-id");

    expect(nav).toBeInTheDocument();

    const userListLink = screen.getByText("UserList");

    expect(userListLink).toHaveAttribute("href", "/user-list");

    const userFormLink = screen.getByText("AddUser");

    expect(userFormLink).toHaveAttribute("href", "/user-form");
  });
});
