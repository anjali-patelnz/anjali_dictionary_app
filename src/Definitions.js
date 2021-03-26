import React from "react";
import Synonyms from "./Synonyms";

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
              <Synonyms data={definition.synonyms} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
