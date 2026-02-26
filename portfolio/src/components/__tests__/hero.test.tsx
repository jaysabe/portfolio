import { render, screen } from "@testing-library/react";
import { Hero } from "../hero";

describe("Hero", () => {
  it("renders corrected social links", () => {
    render(<Hero />);

    expect(
      screen.getByRole("link", {
        name: /linkedin/i,
      })
    ).toHaveAttribute("href", "https://www.linkedin.com/in/jacobabegglen");

    expect(
      screen.getByRole("link", {
        name: /github/i,
      })
    ).toHaveAttribute("href", "https://github.com/jaysabe");
  });

  it("includes a contact CTA that anchors to email section", () => {
    render(<Hero />);

    expect(screen.getByRole("link", { name: /let's get in touch/i })).toHaveAttribute(
      "href",
      "#email"
    );
  });
});
