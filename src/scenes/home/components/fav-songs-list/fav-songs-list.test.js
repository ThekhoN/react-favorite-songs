import React from "react";
import { shallow } from "enzyme";
import configureMockStore from "redux-mock-store";
import { favSongsDummyData as songs } from "../../../../services/data";
import renderer from "react-test-renderer";
import FavSongsList from "./index";

describe("FavSongsList", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<FavSongsList {...songs} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
