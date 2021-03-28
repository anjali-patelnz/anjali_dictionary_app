import React from "react";

export default function Phonetics(props) {
  if (props.data) {
    return (
      <div>
        <h4>{props.data.text}</h4>
        <a href={props.data.audio} target="_blank">
          Sound
        </a>
      </div>
    );
  } else {
    return null;
  }
}
