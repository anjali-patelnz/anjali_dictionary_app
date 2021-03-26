import React from "react";

export default function Definitions(props) {
  if (props.data) {
    return (
      <div>
        <h4>{props.data.partOfSpeech}</h4>
        {props.data.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <p>{definition.definition}</p>
              <p>
                <em>{definition.example}</em>
              </p>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
