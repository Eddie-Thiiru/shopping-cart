import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";

describe("Header Component", () => {
  it("should render 'Home', 'Products' and 'Shop' links", () => {
    render(<Header />, { wrapper: BrowserRouter });

    const link1 = screen.getByRole("link", { name: "Home" });
    const link2 = screen.getByRole("link", { name: "Products" });
    const link3 = screen.getByRole("link", { name: "Shop" });

    expect(link1).toBeInTheDocument();
    expect(link2).toBeInTheDocument();
    expect(link3).toBeInTheDocument();
  });
});
