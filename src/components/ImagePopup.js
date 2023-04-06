import React from "react";

function ImagePopup({ card, onClose }) {
  return (
    <section
      className={`popup popup_type_picture ${card.link ? "popup_opened" : ""}`}
    >
      <figure className="popup__figure">
        <button
          className="popup__close-button"
          type="reset"
          onClick={onClose}
        ></button>
        <img className="popup__image" src={card.link} alt={card.name} />
        <figcaption className="popup__image-caption">{card.name}</figcaption>
      </figure>
    </section>
  );
}

export default ImagePopup;
