import { cleanup, render } from "@testing-library/react";
import React from "react";
import CalloutBox from "./CalloutBox";

describe("<CalloutBox />", () => {
  beforeEach(cleanup);
  it("Should render", () => {
    const { container } = render(<CalloutBox />);
    expect(container).toMatchSnapshot();
  });
});
