import React from "react";
import {connect} from 'react-redux'

const Character = props => {
  return <li>{props.character.name}</li>;
};

const mapStateToProps = state => {
  return {
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fetching,
  }
}

export default connect(mapStateToProps)(Character);
