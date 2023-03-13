import React from "react";

function Card({ card, name, link, likes, onCardClick }) {
  function handleClick() {
    card.onCardClick(card);
  }
  return (
    <article className="element">
      <img
        className="element__image"
        src={link}
        alt={name}
        onClick={handleClick}
      />
      <button className="button element__trash-button" type="button"></button>
      <div className="element__description">
        <h2 className="element__name">{name}</h2>
        <div className="element__like">
          <button
            className="button element__like-button"
            type="button"
          ></button>
          <span className="element__like-number">{likes.length}</span>
        </div>
      </div>
    </article>
  );
}
export default Card;
