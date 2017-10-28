import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyleList = styled.ul`
  width: 100%;
  background-color: green;
`;

const FavSongsList = ({ songs }) => (
  <StyleList>
    {songs.map(song => <li key={song.createdAt}>{song.name}</li>)}
  </StyleList>
);

FavSongsList.propTypes = {
  songs: PropTypes.array.isRequired
};

export default FavSongsList;
