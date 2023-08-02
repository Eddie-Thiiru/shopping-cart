import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Homepage from "../Homepage";
import { Context } from "../DataProvider";

// test sections are rendered
// test images are renderd
// test descriptions are rendered

const data = {
  redDeadRedemption2: { data: { imageURL: "" } },
  gta5: { data: { imageURL: "" } },
  witcher3: { data: { imageURL: "" } },
  civ6: { data: { imageURL: "" } },
  hollowKnight: { data: { imageURL: "" } },
  forza5: { data: { imageURL: "" } },
  portal2: { data: { imageURL: "" } },
};

describe("Homepage", () => {
  it("should render all sections", () => {
    render(
      <Context.Provider value={data}>
        <Homepage />
      </Context.Provider>,
    );

    screen.debug();

    expect(screen.getByText(/video game store/i)).toBeInTheDocument();
    expect(screen.getByText(/action-adventure games/i)).toBeInTheDocument();
    expect(screen.getByText(/action games/i)).toBeInTheDocument();
    expect(screen.getByText(/rpg games/i)).toBeInTheDocument();
    expect(screen.getByText(/strategy games/i)).toBeInTheDocument();
    expect(screen.getByText(/platform games/i)).toBeInTheDocument();
    expect(screen.getByText(/racing games/i)).toBeInTheDocument();
    expect(screen.getByText(/puzzle games/i)).toBeInTheDocument();
  });
});
