import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { findTestAttr } from "./../../Utility/Utility";
import Header from "./Header";

const setUp = () => {
  const component = shallow(<Header />);
  return component;
};

describe("Header Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("Should render the component with no error", () => {
    const wrapper = findTestAttr(component, "Header-Component");
    expect(wrapper.length).toBe(1);
  });

  it("Should render the Title", () => {
    const wrapper = findTestAttr(component, "Title");
    expect(wrapper.length).toBe(1);
  });

  it("Should match the snapShot", () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
