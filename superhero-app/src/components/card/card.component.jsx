import React from "react";
import "./card.styles.css";
export const Card = props => (
  <div className="card-container">
    <img alt="hero" src={props.hero.image.url} />
    <h2>{props.hero.name}</h2>
    <p>Full Name: {props.hero.biography.fullname}</p>
  </div>
);
