import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { asyncFetchFavSongs } from "../../../../redux/modules/favorite-songs";

const StyleList = styled.ul`
  width: 100%;
  background-color: green;
`;

export class FavSongsListComponent extends Component {
  componentDidMount() {
    this.props.asyncFetchFavSongs();
  }
  render() {
    return (
      <StyleList>
        {this.props.songs.map(song => (
          <li key={song.createdAt}>{song.name}</li>
        ))}
      </StyleList>
    );
  }
}

const mapStateToProps = state => ({
  songs: state.favoriteSongs.data
});

FavSongsListComponent.propTypes = {
  songs: PropTypes.array.isRequired,
  asyncFetchFavSongs: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { asyncFetchFavSongs })(
  FavSongsListComponent
);
