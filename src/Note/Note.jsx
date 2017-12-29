import React, { Component } from "react";
import "./Note.css";
import propTypes from "prop-types";

class Note extends Component {

  constructor(props) {
    super(props);
    this.noteContent = props.noteContent;
    this.noteId = props.noteId;
    this.handleRemoveNote = this.handleRemoveNote.bind(this);
  }

  handleRemoveNote(id) {
    this.props.removeNote(id);
  }

  render(props) {
    return(
      <div className="note">
        <p className="noteContent">{this.noteContent}</p>
        <div className="deleteContainer">
          <button onClick={() => this.handleRemoveNote(this.noteId)}>&times;</button>
        </div>
      </div>
    )
  }
}

Note.propTypes = {
  noteContent: propTypes.string
}

export default Note;