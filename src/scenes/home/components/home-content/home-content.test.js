// simple component render test: PASS
/*
import React from "react";
import { shallow } from "enzyme";
import configureMockStore from "redux-mock-store";
import { favSongssDummyData as dummyDate } from "../../../../services/data";
import {
  initialState,
  asyncFetchFavSongs
} from "../../../../redux/modules/favorite-songs";
import HomeContent from "./index";

describe("HomeContent", () => {
  const mockStore = configureMockStore();
  let store, container;
  beforeEach(() => {
    store = mockStore({ favoriteSongs: initialState });
    container = shallow(<HomeContent store={store} />);
  });
  it("renders HomeContent correctly", () => {
    expect(container.length).toEqual(1);
  });
});
*/

import React from "react";
import { shallow, mount } from "enzyme";
import configureMockStore from "redux-mock-store";
import { favSongssDummyData as dummyDate } from "../../../../services/data";
import {
  initialState,
  asyncFetchFavSongs
} from "../../../../redux/modules/favorite-songs";
import HomeContent, { HomeContentComponent } from "./index";

/* non-connected component */
function setup() {
  const props = {
    asyncFetchFavSongs: jest.fn(),
    songs: [],
    fetching: false
  };
  const enzymeWrapper = mount(<HomeContentComponent {...props} />);
  return {
    props,
    enzymeWrapper
  };
}
describe("HomeContentComponent", () => {
  it("renders HomeContentComponent", () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find("div").hasClass("home-content")).toBe(true);
  });
});

/* connected component */
describe("HomeContent", () => {
  const mockStore = configureMockStore();
  let store, container;
  beforeEach(() => {
    store = mockStore({ favoriteSongs: initialState });
    container = shallow(<HomeContent store={store} />);
  });
  it("renders HomeContent correctly", () => {
    expect(container.length).toEqual(1);
  });
});
