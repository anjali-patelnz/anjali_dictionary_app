import React from "react";
import Definitions from "./Definitions";
import Phonetics from "./Phonetics";

export default function SearchResults(props) {
  if (props.data) {
    return (
      <div className="SearchResults">
        <h2>{props.data.word}</h2>

        {props.data.phonetics.map(function (phonetic, index) {
          return (
            <div key={index}>
              <Phonetics data={phonetic} />
            </div>
          );
        })}

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
    return null;
  }
}
