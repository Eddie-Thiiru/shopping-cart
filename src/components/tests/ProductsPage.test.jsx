import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import ProductsPage from "../ProductsPage";
import { useProductsData } from "../DataProvider";

vi.mock("../DataProvider");

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
  it("renders ProductsPage and a product in the page", () => {
    const mockFactory = vi.mocked(useProductsData);
    mockFactory.mockImplementation(() => data);

    render(<ProductsPage />);

    expect(screen.getByText(/grand theft auto 5/i)).toBeInTheDocument();
    expect(screen.getByText(/59.99/i)).toBeInTheDocument();
  });
});
