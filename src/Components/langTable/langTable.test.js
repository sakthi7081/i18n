import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { findTestAttr } from "./../../Utility/Utility";
import LangTable from "./langTable";
import i18n from "../../i18n";
import { langauges } from "../../Const";

langauges.map((lan, i) =>
  i === 2
    ? ""
    : i18n.addResourceBundle(
        lan,
        "translation",
        i === 1 ? { Value: "value" } : { Data: "Data" },
        true,
        true
      )
);

const setUp = () => {
  const component = shallow(<LangTable />);
  return component.dive().dive();
};

const restProps = {
  tableRow: { row: "row" },
  tableColumn: { column: { name: "a" } },
  style: {},
};

describe("Table Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("Should render the component with no error", () => {
    const wrapper = findTestAttr(component, "Table-Component");
    expect(wrapper.length).toBe(1);
  });

  it("Should render the HeaderRow", () => {
    const wrapper = findTestAttr(component, "Header");
    wrapper.props().rowComponent(restProps);
    expect(wrapper.length).toBe(1);
  });

  it("Should render the Headercell", () => {
    const wrapper = findTestAttr(component, "Header");
    wrapper.props().cellComponent(restProps);
    expect(wrapper.length).toBe(1);
  });

  it("Should render the fixedcolumn", () => {
    const wrapper = findTestAttr(component, "Fixed-Column");
    wrapper.props().cellComponent(restProps);
    expect(wrapper.length).toBe(1);
  });

  it("Should render the fixedcolumn Header", () => {
    const props = {
      tableRow: { rowId: "row" },
      tableColumn: { column: { name: "a" } },
      style: {},
    };
    const wrapper = findTestAttr(component, "Fixed-Column");
    wrapper.props().cellComponent(props);
    expect(wrapper.length).toBe(1);
  });

  it("Should match the snapShot", () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
