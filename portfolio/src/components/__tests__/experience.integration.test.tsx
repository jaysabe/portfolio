import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { WorkExperience } from "../experience";

describe("WorkExperience integration", () => {
  it("defaults to the first experience and switches details on company click", async () => {
    const user = userEvent.setup();

    render(<WorkExperience />);

    expect(screen.getByText(/software engineer intern/i)).toBeInTheDocument();
    expect(screen.getByText(/automated cloud infrastructure testing workflows/i)).toBeInTheDocument();

    await user.click(screen.getByText(/computer action team @ psu/i));

    expect(screen.getByText(/lead software engineer/i)).toBeInTheDocument();
    expect(screen.getByText(/resolved 100\+ cross-platform technical issues/i)).toBeInTheDocument();
  });
});
