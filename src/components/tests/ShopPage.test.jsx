import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ShopPage from "../ShopPage";
import { CartContext } from "../../App";

describe("Shop page", () => {
  it("renders empty cart", () => {
    const cartData = [];

    render(
      <MemoryRouter initialEntries={[{ pathname: "/cart" }]}>
        <CartContext.Provider value={{ cartData }}>
          <ShopPage />
        </CartContext.Provider>
      </MemoryRouter>,
    );

    expect(screen.getByText(/nothing here/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Buy Games" }),
    ).toBeInTheDocument();
  });

  it("should render cart with a product", () => {
    const cartData = [
      {
        imageURL: "https://games-endpoint.example/image",
        name: "Grand Theft Auto 5",
        price: 29.99,
      },
    ];

    render(
      <CartContext.Provider value={{ cartData }}>
        <ShopPage />
      </CartContext.Provider>,
    );

    expect(screen.getByText(/grand Theft Auto 5/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Continue to Payment" }),
    ).toBeInTheDocument();
  });
});
