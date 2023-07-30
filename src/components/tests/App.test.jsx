import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter, MemoryRouter, Routes, Route } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import App from "../../App";
import MainSection from "../MainSection";
import Homepage from "../Homepage";

describe("App Component", () => {
  it("should render header", () => {
    render(<App />, { wrapper: BrowserRouter });

    expect(screen.getByText(/ultimategames/i)).toBeInTheDocument();
    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText(/products/i)).toBeInTheDocument();
    expect(screen.getByText(/shop/i)).toBeInTheDocument();
  });

  it("should render main section with the default content", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route element={<MainSection />}>
            <Route path="/" element={<Homepage />}></Route>
          </Route>
        </Routes>
      </MemoryRouter>,
    );

    expect(screen.getByText(/action games/i)).toBeInTheDocument();
  });

  it("should render footer", () => {
    render(<App />, { wrapper: BrowserRouter });

    expect(screen.getByText(/test/i)).toBeInTheDocument();
  });

  // it("renders home content after navigation click", async () => {
  //   const user = userEvent.setup();

  //   render(<App />, { wrapper: BrowserRouter });

  //   const link = screen.getByRole("link", { name: "Home" });

  //   await user.click(link);

  //   screen.debug();

  // });
});
