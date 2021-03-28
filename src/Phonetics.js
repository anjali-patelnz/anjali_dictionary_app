import React from "react";

import "./Phonetics.css";

export default function Phonetics(props) {
  if (props.data) {
    return (
      <div className="Phonetics">
        <h4>{props.data.text}</h4>
        <a href={props.data.audio} target="_blank" rel="noreferrer">
          Sound
        </a>
      </div>
    );
  } else {
    return null;
  }
}
