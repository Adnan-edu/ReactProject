import React, { Component } from "react";

const Weather = props => {
  return (
    <div className="container">
      <ul className="list-group">
        {props.city && props.country && (
          <li className="list-group-item">
            {" "}
            Location: {props.city}, {props.country}
          </li>
        )}

        {props.temperature && (
          <li className="list-group-item">
            {" "}
            Temperature: {props.temperature}{" "}
          </li>
        )}

        {props.humidity && (
          <li className="list-group-item">
            {" "}
            Humidity:
            {props.humidity}
          </li>
        )}

        {props.description && (
          <li className="list-group-item">
            {" "}
            Conditions:
            {props.description}
          </li>
        )}

        {props.error && (
          <li className="list-group-item list-group-item-danger">
            {props.error}
          </li>
        )}
      </ul>
    </div>
  );
};

export default Weather;
