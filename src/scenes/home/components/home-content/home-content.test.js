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
import { favSongssDummyData as dummyData } from "../../../../services/data";
import {
  initialState,
  asyncFetchFavSongs
} from "../../../../redux/modules/favorite-songs";
import HomeContent, { HomeContentComponent } from "./index";
import FavSongsList from "../fav-songs-list";

/*******************************/
//  test non-connected component
/*******************************/
// function setup() {
//   const props = {
//     asyncFetchFavSongs: jest.fn(),
//     songs: [],
//     fetching: false
//   };
//   const enzymeWrapper = mount(<HomeContentComponent {...props} />);
//   return {
//     props,
//     enzymeWrapper
//   };
// }
// describe("HomeContentComponent", () => {
//   it("renders HomeContentComponent", () => {
//     const { enzymeWrapper } = setup();
//     expect(enzymeWrapper.find("div").hasClass("home-content")).toBe(true);
//   });
// });

/*******************************/
//  test connected component
/*******************************/
const mockStore = configureMockStore();

describe("HomeContent Wrapper", () => {
  let store, container;
  beforeEach(() => {
    store = mockStore({ favoriteSongs: initialState });
    container = shallow(<HomeContent store={store} />);
  });
  it("renders the wrapper correctly", () => {
    expect(container.length).toEqual(1);
  });
});

describe("HomeContent renders correctly when error", () => {
  let store, container;
  beforeEach(() => {
    store = mockStore({
      favoriteSongs: {
        ...initialState,
        error: "Error"
      }
    });
    container = render(<HomeContent store={store} />);
  });
  it("renders only <Error />", () => {
    expect(container.find("div.error").length).toBe(1);
  });
  it("does not render other components", () => {
    expect(container.find("ul.fav-songs-list").length).toEqual(0);
    expect(container.find("div.loader").length).toEqual(0);
  });
});

describe("HomeContent renders correctly when fetching is false/default", () => {
  let store, container;
  beforeEach(() => {
    store = mockStore({
      favoriteSongs: initialState
    });
    container = render(<HomeContent store={store} />);
  });
  it("renders <FavSongsList />", () => {
    expect(container.find("ul.fav-songs-list").length).toEqual(1);
  });
  it("does not render other components", () => {
    expect(container.find("div.loader").length).toEqual(0);
    expect(container.find("div.error").length).toEqual(0);
  });
});

describe("HomeContent renders correctly when fetching is true", () => {
  let store, container;
  beforeEach(() => {
    store = mockStore({
      favoriteSongs: {
        ...initialState,
        fetching: true
      }
    });
    container = render(<HomeContent store={store} />);
  });
  it("renders <Loader />", () => {
    expect(container.find("div.loader").length).toEqual(1);
  });
  it("does not render other components", () => {
    expect(container.find("ul.fav-songs-ist").length).toEqual(0);
    expect(container.find("div.error").length).toEqual(0);
  });
});
