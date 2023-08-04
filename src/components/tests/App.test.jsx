import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../../App";

describe("App Component", () => {
  it("should render app", () => {
    const { container } = render(<App />, { wrapper: BrowserRouter });
    screen.debug();

    expect(container).toMatchSnapshot();
  });

  // it("renders home content after navigation click", async () => {
  //   const user = userEvent.setup();

  //   render(<App />, { wrapper: BrowserRouter });

  //   const link = screen.getByRole("link", { name: "Home" });

  //   await user.click(link);

  //   screen.debug();

  // });
});
