import { cleanup, render } from "@testing-library/react";
import React from "react";
import CalloutBox from "./CalloutBox";

const CalloutBoxDefaultProps = {
  children: "test"
};

describe("<CalloutBox />", () => {
  beforeEach(cleanup);
  it("Should render", () => {
    const { container } = render(<CalloutBox {...CalloutBoxDefaultProps} />);
    expect(container).toMatchSnapshot();
  });
});
