import React, { Component } from "react";
import "./NoteForm.css";
import FontAwesome from "react-fontawesome";

class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newNoteContent: ''
    };
    this.handleUserInput = this.handleUserInput.bind(this);
    this.writeNote = this.writeNote.bind(this);
  }

  //when the user input changes, set the newNewContent
  //to the value of what's in the input box.
  handleUserInput(e) {
    this.setState({
      newNoteContent: e.target.value, //value of the text input
    });
  }

  writeNote() {
    //call a method that sets the noteContent for a note to 
    //the value of the input
    this.props.addNote(this.state.newNoteContent);

    //set newNoteContent back to an empty string
    this.setState({
      newNoteContent: ''
    });

  }

  render() {
    return (
      <div className="formWrapper">
        <input className="noteInput"
          placeholder="Write a note here..."
          value={this.state.newNoteContent}
          onChange={this.handleUserInput}
          type="text" />
        <button className="noteButton" onClick={this.writeNote}>
          <FontAwesome name="plus" />
        </button>
      </div>
    )
  }
}

export default NoteForm;