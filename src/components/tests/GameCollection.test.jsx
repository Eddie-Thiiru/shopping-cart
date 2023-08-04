import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Collection from "../GamesCollection";
import { Context } from "../DataProvider";

const data = {
  product: {
    data: {
      imageURL: "https://example.com/api/product/1111",
      name: "Grand Theft Auto 5",
      uniqueId: 1111,
      price: 29.99,
    },
  },
};

describe("", () => {
  it("renders a game card with data from a provider ", () => {
    const { container } = render(
      <MemoryRouter initialEntries={[{ path: "/collection" }]}>
        <Context.Provider value={data}>
          <Collection />
        </Context.Provider>
      </MemoryRouter>,
    );

    expect(container).toMatchSnapshot();
  });
});
