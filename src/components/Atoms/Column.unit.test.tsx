import { cleanup, render } from "@testing-library/react";
import React from "react";
import Column from "./Column";

const ColumnDefaultProps = {
  children: "test"
};

describe("<Column />", () => {
  beforeEach(cleanup);
  it("Should render", () => {
    const { container } = render(<Column {...ColumnDefaultProps} />);
    expect(container).toMatchSnapshot();
  });
});
