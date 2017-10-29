import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyleList = styled.ul`
  width: 100%;
  color: purple;
  list-style: none;
`;

const FavSongsList = ({ songs }) => (
  <StyleList className="fav-songs-list">
    {songs.map(song => <li key={song.createdAt}>{song.name}</li>)}
  </StyleList>
);

FavSongsList.propTypes = {
  songs: PropTypes.array.isRequired
};

export default FavSongsList;
