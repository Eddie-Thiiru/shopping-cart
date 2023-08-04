import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Collection from "../GamesCollection";
import { Context } from "../DataProvider";

describe("", () => {
  it("renders a game card with data from a provider ", async () => {
    const response = await fetch(
      "https://games-endpoint.example/api/games/1111",
    );

    const data = await response.json();

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
