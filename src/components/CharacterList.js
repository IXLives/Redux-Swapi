import React from "react";

import Character from "./Character";

import {connect} from 'react-redux'

const CharacterList = props => {
  return (
    <ul>
      {props.characters.map((character) => {
        return <Character key={character.name} character={character} />;
      })}
    </ul>
  );
};

const mapStateToProps = state => {
  return {
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fetching,
  }
}

export default connect(mapStateToProps)(CharacterList);
