import React, { Component } from "react";
import { connect } from "react-redux";
import FavSongsList from "../fav-songs-list";
import { asyncFetchFavSongs } from "../../../../redux/modules/favorite-songs";
import PropTypes from "prop-types";
import styled from "styled-components";

const Loading = () => (
  <div>
    <h2>Loading. . .</h2>
  </div>
);

const MainHomeContent = styled.div`
  width: 100%;
  background-color: yellow;
`;

export class HomeContentComponent extends Component {
  componentDidMount() {
    this.props.asyncFetchFavSongs();
  }
  render() {
    const { fetching, songs } = this.props;
    return (
      <MainHomeContent className="home-content">
        {fetching ? <Loading /> : <FavSongsList songs={songs} />}
      </MainHomeContent>
    );
  }
}

const mapStateToProps = state => ({
  songs: state.favoriteSongs.data,
  fetching: state.favoriteSongs.fetching
});

HomeContentComponent.propTypes = {
  songs: PropTypes.array.isRequired,
  fetching: PropTypes.bool.isRequired,
  asyncFetchFavSongs: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { asyncFetchFavSongs })(
  HomeContentComponent
);
