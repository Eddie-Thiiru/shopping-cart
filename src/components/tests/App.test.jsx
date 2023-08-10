import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";
import App from "../../App";

describe("App Component", () => {
  it("should render app", () => {
    const { container } = render(
      <MemoryRouter>
        <App />
        <ScrollRestoration />
      </MemoryRouter>,
    );
    screen.debug();

    expect(container).toMatchSnapshot();
  });
});
