import React from "react";
import Definitions from "./Definitions";
import Phonetics from "./Phonetics";

import "./SearchResults.css";

export default function SearchResults(props) {
  if (props.data) {
    return (
      <div className="SearchResults">
        <section className="results-header">
          <div className="container">
            <h2>{props.data.word}</h2>

            {props.data.phonetics.map(function (phonetic, index) {
              return (
                <ul key={index}>
                  <Phonetics data={phonetic} />
                </ul>
              );
            })}
          </div>
        </section>
        <section>
          {props.data.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Definitions data={meaning} />
              </div>
            );
          })}
        </section>
      </div>
    );
  } else {
    return null;
  }
}
