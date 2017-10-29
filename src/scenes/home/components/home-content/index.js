import React, { Component } from "react";
import { connect } from "react-redux";
import FavSongsList from "../fav-songs-list";
import { asyncFetchFavSongs } from "../../../../redux/modules/favorite-songs";
import PropTypes from "prop-types";
import styled from "styled-components";

const Loader = () => (
  <div className="loader">
    <h2>Loading. . .</h2>
  </div>
);

const Error = ({ error }) => (
  <div className="error">
    <h2>Error: {error}</h2>
  </div>
);

const MainHomeContent = styled.div`
  width: 100%;
  background-color: yellow;
`;

export class HomeContentComponent extends Component {
  handleRender() {
    const { error, fetching, songs } = this.props;
    if (error) {
      return <Error error={error} />;
    } else {
      if (fetching) {
        return <Loader />;
      } else {
        return <FavSongsList songs={songs} />;
      }
    }
  }
  componentDidMount() {
    this.props.asyncFetchFavSongs();
  }
  render() {
    return (
      <MainHomeContent className="home-content">
        {this.handleRender()}
      </MainHomeContent>
    );
  }
}

const mapStateToProps = state => ({
  songs: state.favoriteSongs.data,
  error: state.favoriteSongs.error,
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
