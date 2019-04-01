import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("<App />", () => {
  it("renders an `.box-container`", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(".box-container")).toHaveLength(1);
  });
  it("renders 2 .boxes", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(".box")).toHaveLength(2);
  });
  it("renders 1 .red box", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(".red")).toHaveLength(1);
  });
  it("renders 1 .blue box", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(".blue")).toHaveLength(1);
  });
});
