import { render, screen } from "@testing-library/react";
import React from "react";
import Root from "./root.component";

describe("Root component", () => {
  it("should be in the document", () => {
    const { getByText } = render(<Root name="Testapp" />);
    expect(getByText(/this runs in a Microfrontend/i)).toBeInTheDocument();
  });
});
