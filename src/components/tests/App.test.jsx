import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../../App";

describe("App Component", () => {
  it("should render app", () => {
    const { container } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    screen.debug();

    expect(container).toMatchSnapshot();
  });

  // it("renders home content after navigation click", async () => {
  //   const user = userEvent.setup();

  //   render(
  //     <MemoryRouter initialEntries={[{ pathname: "/" }]}>
  //       <App />
  //     </MemoryRouter>,
  //   );

  //   const link = screen.getByRole("link", { name: "Home" });

  //   await user.click(link);

  //   screen.debug();
  // });
});
