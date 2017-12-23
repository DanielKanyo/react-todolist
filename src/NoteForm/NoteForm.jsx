import React, { Component } from "react";
import "./NoteForm.css";
import FontAwesome from "react-fontawesome";

class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="formWrapper">
        <input className="noteInput"
          placeholder="Write a note here..."
          type="text" />
        <button className="noteButton"><FontAwesome name="plus" /></button>
      </div>
    )
  }
}

export default NoteForm;