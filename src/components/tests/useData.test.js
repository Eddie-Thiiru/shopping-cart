import { describe, it, expect, vi } from "vitest";
import useData from "../data";

vi.mock("../data", () => {
  return {
    default: vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(data),
      }),
    ),
  };
});

const data = {
  product: {
    data: {
      imageURL: "https://fetchexampleapi.com/product/image",
      name: "Grand Theft Auto 5",
      uniqueId: 1111,
    },
  },
};

describe("Custom fetch hook", () => {
  it("returns product data", async () => {
    const productData = await useData();

    expect(productData).toMatch(data);
  });
});
