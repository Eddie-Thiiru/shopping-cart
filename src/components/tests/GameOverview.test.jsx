import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Overview from "../GameOverview";

const data = {
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
  },
};

describe("Game overview", () => {
  it("renders overview while using useLocation data", () => {
    const { container } = render(
      <MemoryRouter initialEntries={[{ state: data }]}>
        <Overview />
      </MemoryRouter>,
    );

    expect(container).toMatchSnapshot();
  });
});
