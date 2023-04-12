import React, { useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

export default function AddPlacePopup({ isOpen, onClose, onAddCard }) {
  const [placeName, setPlaceName] = useState("");
  const [placeLink, setPlaceLink] = useState("");
/*
  useEffect(() => {
    if (isOpen) {
      setPlaceName(placeName);
      setPlaceLink(placeLink);
    }
  }, [isOpen]);
*/
  function handleSubmit(evt) {
    evt.preventDefault();
    setPlaceName("");
    setPlaceLink("");
    onAddCard({
      name: placeName,
      link: placeLink,
    });
  }

  function handlePlaceNameChange(evt) {
    setPlaceName(evt.target.value);
  }
  function handlePlaceLinkChange(evt) {
    setPlaceLink(evt.target.value);
  }

  return (
    <PopupWithForm
      title={`Новое место`}
      name={`new-card`}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <fieldset className="form__fields">
        <input
          className="form__input form__input_type_placename"
          type="text"
          id="title-input"
          name="placeName"
          placeholder="Название"
          required
          minLength="2"
          maxLength="30"
          value={placeName}
          onChange={handlePlaceNameChange}
        />
        <span className="form__input-error title-input-error"></span>
        <input
          className="form__input form__input_type_placelink"
          type="url"
          id="image-input"
          name="placeLink"
          placeholder="Ссылка на картинку"
          required
          value={placeLink}
          onChange={handlePlaceLinkChange}
        />
        <span className="form__input-error image-input-error"></span>
      </fieldset>
    </PopupWithForm>
  );
}
