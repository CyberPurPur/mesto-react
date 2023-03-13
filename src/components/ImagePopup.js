import React from "react";

function ImagePopup({ name, link, onClose }) {
  return (
    <section
      className={`popup popup_type_picture ${link ? "popup_opened" : ""}`}
    >
      <figure className="popup__figure">
        <button
          className="popup__close-button"
          type="reset"
          onClick={onClose}
        ></button>
        <img className="popup__image" src={link} alt={name} />
        <figcaption className="popup__image-caption">{name}</figcaption>
      </figure>
    </section>
  );
}

export default ImagePopup;
