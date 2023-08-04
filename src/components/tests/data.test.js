import { describe, it, expect } from "vitest";
import { rest } from "msw";
import { server } from "../mocks/server";

describe("Custom fetch hook", () => {
  it("returns product data on successful fetch", async () => {
    const response = await fetch(
      "https://games-endpoint.example/api/games/1111",
    );

    const data = await response.json();

    expect(response.status).toEqual(200);
    expect(data.game.data.name).toMatch("Grand Theft Auto 5");
  });

  it("returns error on unsuccessful fetch", async () => {
    server.use(
      rest.get(
        "https://games-endpoint.example/api/games/1111",
        (req, res, ctx) => {
          return res(ctx.status(400), ctx.json({ message: "server error" }));
        },
      ),
    );

    const response = await fetch(
      "https://games-endpoint.example/api/games/1111",
    );

    const data = await response.json();

    expect(data.message).toBe("server error");
  });
});
