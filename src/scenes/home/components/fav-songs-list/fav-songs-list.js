import React from "react";
import { favSongsDummyData as songs } from "../../../../services/data";
import renderer from "react-test-renderer";
import FavSongsList from "./index";

describe("FavSongsList", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<FavSongsList songs={songs} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
