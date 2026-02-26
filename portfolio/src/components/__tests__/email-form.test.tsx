import { render, screen } from "@testing-library/react";
import { EmailForm } from "../email-form";

describe("EmailForm", () => {
  it("renders working email and phone links", () => {
    render(<EmailForm />);

    expect(screen.getByRole("link", { name: /email jayabe@pdx.edu/i })).toHaveAttribute(
      "href",
      "mailto:jayabe@pdx.edu"
    );

    expect(screen.getByRole("link", { name: /call \(360\) 831-2912/i })).toHaveAttribute(
      "href",
      "tel:+13608312912"
    );
  });
});
