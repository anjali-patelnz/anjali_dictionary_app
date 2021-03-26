import React from "react";
import Definitions from "./Definitions";

export default function SearchResults(props) {
  if (props.data) {
    return (
      <div className="SearchResults">
        <h2>{props.data.word}</h2>
        {props.data.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <h4>{meaning.partOfSpeech}</h4>
              <p>{meaning.definitions[0].definition}</p>
              <p>
                <em>{meaning.definitions[0].example}</em>
              </p>
            </div>
          );
        })}
        <Definitions />
      </div>
    );
  } else {
    return <div>Hello from Search Results</div>;
  }
}
