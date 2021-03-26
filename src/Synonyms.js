import React from "react";

export default function Synonyms(props) {
  if (props.data) {
    return (
      <ul>
        {props.data.map(function (synonyms, index) {
          return <li key={index}>{synonyms}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
