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
      imageURL: "https://example.com/api/product/1111",
      name: "Grand Theft Auto 5",
      metaScore: 92,
      genre: [{ name: "Action" }, { name: "Adventure" }],
      platforms: [
        { platform: { name: "PC" } },
        { platform: { name: "PlayStation" } },
        { platform: { name: "XBOX" } },
      ],
      released: "march 15, 2013",
      price: 29.99,
      slug: "grand-theft-auto-v",
    },
  },
};

describe("Custom fetch hook", () => {
  it("returns product data", async () => {
    const mockFetch = vi.mocked(useData());

    const gameData = await mockFetch;

    expect(gameData).to(data);
  });
});
