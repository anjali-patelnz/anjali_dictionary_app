import React from "react";

import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.data) {
    return (
      <ul className="Synonyms text-muted">
        {props.data.map(function (synonyms, index) {
          return <li key={index}>{synonyms}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
