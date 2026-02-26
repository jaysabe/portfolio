import { render, screen } from "@testing-library/react";
import { Home } from "../home";

jest.mock("aos", () => ({
  init: jest.fn(),
}));

describe("Home integration", () => {
  it("renders core sections for updated portfolio positioning", () => {
    render(<Home />);

    expect(screen.getByRole("heading", { name: /devops \+ full-stack engineering/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /about me/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /work highlights/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /projects, skills & education/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /contact/i })).toBeInTheDocument();
  });
});
