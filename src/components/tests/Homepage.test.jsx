import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Homepage from "../Homepage";
import { Context } from "../DataProvider";

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
  it("should render all homepage sections", () => {
    render(
      <Context.Provider value={data}>
        <MemoryRouter>
          <Homepage />
        </MemoryRouter>
      </Context.Provider>,
    );

    expect(screen.getByText(/the ultimate game store/i)).toBeInTheDocument();
    expect(screen.getByText(/Experience the epic tale/i)).toBeInTheDocument();
    expect(screen.getByText(/top sellers/i)).toBeInTheDocument();
  });
});
