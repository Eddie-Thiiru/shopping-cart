import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { CartContext } from "../../App";
import Overview from "../GameOverview";

const addToCart = () => {};

describe("Game Overview", () => {
  let gameData;

  it("renders Overview while using useLocation data", async () => {
    // Get initial fetch data that will be passed on by parent to the Overview
    const response = await fetch(
      "https://games-endpoint.example/api/games/1111",
    );
    const data = await response.json();

    gameData = data.game;

    const { container } = render(
      <MemoryRouter initialEntries={[{ state: gameData }]}>
        <CartContext.Provider value={addToCart}>
          <Overview />
        </CartContext.Provider>
      </MemoryRouter>,
    );

    expect(container).toMatchSnapshot();
  });
});
