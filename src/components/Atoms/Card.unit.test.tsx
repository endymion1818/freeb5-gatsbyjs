import { cleanup, render } from "@testing-library/react";
import React from "react";
import Card from "./Card";

const CardDefaultProps = {
  children: "test"
};

describe("<Card />", () => {
  beforeEach(cleanup);
  it("Should render", () => {
    const { container } = render(<Card {...CardDefaultProps} />);
    expect(container).toMatchSnapshot();
  });
});
