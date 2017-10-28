import React, { Component } from "react";
import { connect } from "react-redux";
import FavSongsList from "../fav-songs-list";
import { asyncFetchFavSongs } from "../../../../redux/modules/favorite-songs";
import PropTypes from "prop-types";

const Loading = () => (
  <div>
    <h2>Loading. . .</h2>
  </div>
);

class HomeContentComponent extends Component {
  componentDidMount() {
    this.props.asyncFetchFavSongs();
  }
  render() {
    const { fetching, songs } = this.props;
    return (
      <main>{fetching ? <Loading /> : <FavSongsList songs={songs} />}</main>
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
