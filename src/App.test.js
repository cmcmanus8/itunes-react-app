import React from "react";
import { configure, shallow } from "enzyme";
import { expect } from "chai";
import Home from "./containers/Home/Home";
import SearchBar from './components/SearchBar/SearchBar';

import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("App testing", function() {

  it("renders SearchBar", function() {
    const wrapper = shallow(<Home />);
    const searchBar = wrapper.find(SearchBar);
    // eslint-disable-next-line jest/valid-expect
    expect(searchBar).to.have.length(1);
  });
})