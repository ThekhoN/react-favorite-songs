import React from "react";
// import { shallow } from "enzyme";
import configureMockStore from "redux-mock-store";
import { favSongsDummyData } from "../../../../services/data";
import {
  initialState,
  asyncFetchFavSongs
} from "../../../../redux/modules/favorite-songs/index";
import FavSongsList, { FavSongsListComponent } from "./index";

describe("FavSongsListComponent", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <FavSongsListComponent
        asyncFetchFavSongs={asyncFetchFavSongs}
        songs={favSongsDummyData}
      />
    );
  });
  it("renders the component", () => {
    expect(wrapper.length).toEqual(1);
  });
});
