import { rest } from "msw";

export const data = {
  game: {
    data: {
      imageURL: "https://games-endpoint.example/image",
      name: "Grand Theft Auto 5",
      uniqueId: 1111,
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
  },
};

export const handlers = [
  rest.get("https://games-endpoint.example/api/games/1111", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(data));
  }),
];
