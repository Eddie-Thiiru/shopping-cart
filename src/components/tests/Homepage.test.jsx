import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Homepage from "../Homepage";

// test sections are rendered
// test images are renderd
// test descriptions are rendered

describe("Homepage", () => {
  it("renders homepage component", () => {
    const { container } = render(<Homepage />);

    expect(container).toMatchSnapshot();
  });

  it("should render all sections' headings", () => {
    render(<Homepage />);

    screen.debug();

    expect(screen.getByText(/video game store/i)).toBeInTheDocument();
    expect(screen.getByText(/action games/i)).toBeInTheDocument();
    expect(screen.getByText(/adventure games/i)).toBeInTheDocument();
    expect(screen.getByText(/rpg games/i)).toBeInTheDocument();
    expect(screen.getByText(/strategy games/i)).toBeInTheDocument();
    expect(screen.getByText(/platform games/i)).toBeInTheDocument();
    expect(screen.getByText(/racing games/i)).toBeInTheDocument();
    expect(screen.getByText(/sports games/i)).toBeInTheDocument();
  });
});

// vi.mock("../Homepage", () => {
//   return {
//     default: {
//       getFetchData: vi.fn(async () => {
//         try {
//           const response = await fetch("https://product-api.com/api/fakeurl");
//           const data = await response.json();

//           if (!data.error) {
//             return data;
//           } else {
//             throw new Error(data.error);
//           }
//         } catch (error) {
//           return null;
//         }
//       }),
//     },
//   };
// });
