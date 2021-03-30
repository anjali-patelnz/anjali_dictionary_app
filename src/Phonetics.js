import React from "react";

import "./Phonetics.css";

export default function Phonetics(props) {
  if (props.data) {
    return (
      <li className="Phonetics">
        <p>
          <span className="phonetics-text">{props.data.text}</span>
          <span className="phonetics-audio">
            <a href={props.data.audio} target="_blank" rel="noreferrer">
              <i className="fas fa-volume-up"></i>
            </a>
          </span>
        </p>
      </li>
    );
  } else {
    return null;
  }
}
