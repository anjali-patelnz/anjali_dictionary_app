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
              <Definitions data={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return <div>Hello from Search Results</div>;
  }
}
