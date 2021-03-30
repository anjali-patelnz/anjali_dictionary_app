import React from "react";
import Synonyms from "./Synonyms";

import "./Definitions.css";

export default function Definitions(props) {
  if (props.data) {
    return (
      <div className="Definitions">
        <div className="container">
          <h4>{props.data.partOfSpeech}</h4>

          {props.data.definitions.map(function (definition, index) {
            return (
              <div key={index}>
                <div className="definitions-breakdown">
                  <p>
                    {definition.definition}
                    <br />
                    <em>{definition.example}</em>
                  </p>
                  <Synonyms data={definition.synonyms} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
