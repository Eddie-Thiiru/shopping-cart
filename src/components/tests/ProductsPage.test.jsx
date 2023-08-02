import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ProductsPage from "../ProductsPage";
import { Context } from "../DataProvider";

const data = {
  product: {
    data: {
      imageURL: "https://example.com/api/product/1111",
      name: "Grand Theft Auto 5",
      uniqueId: 1111,
    },
  },
};

describe("ProductsPage", () => {
  // it("renders default value", () => {

  // })

  it("renders value from provider", () => {
    render(
      <Context.Provider value={data}>
        <ProductsPage />
      </Context.Provider>,
    );

    screen.debug();

    expect(screen.getByText(/grand theft auto/i)).toBeInTheDocument();
  });
});
