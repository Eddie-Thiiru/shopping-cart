import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import ProductsPage from "../ProductsPage";
import { useProductsData } from "../DataProvider";

vi.mock("../DataProvider");

const data = {
  product: {
    data: {
      imageURL: "https://exampleapi.com/product",
      name: "Grand Theft Auto 5",
      uniqueId: 1111,
    },
  },
};

describe("ProductsPage", () => {
  it("renders ProductsPage and a product in the page", () => {
    const mockFactory = vi.mocked(useProductsData);
    mockFactory.mockImplementation(() => data);

    render(<ProductsPage />);
    screen.debug();

    expect(screen.getByText(/grand theft auto 5/i)).toBeInTheDocument();
    expect(screen.getByText(/59.99/i)).toBeInTheDocument();
  });
});
