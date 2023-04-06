import React, { useState, useEffect, useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

export default function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = useContext(CurrentUserContext);
  const [workName, setWorkName] = useState("");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    setUserName(currentUser.name);
    setWorkName(currentUser.about);
  }, [currentUser, isOpen]);

  function handleChangeWork(evt) {
    setWorkName(evt.target.value);
  }

  function handleChangeName(evt) {
    setUserName(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateUser({
      name: userName,
      about: workName,
    });
  }

  return (
    <PopupWithForm
      title={`Редактировать профиль`}
      name={`edit`}
      onSubmit={handleSubmit}
      onClose={onClose}
      isOpen={isOpen}
    >
      <fieldset className="form__fields">
        <input
          className="form__input form__input_type_name"
          type="text"
          id="name-input"
          name="userName"
          placeholder="Имя"
          minLength="2"
          maxLength="20"
          required
          value={userName || ""}
          onChange={handleChangeName}
        />
        <span className="form__input-error name-input-error"></span>
        <input
          className="form__input form__input_type_work"
          type="text"
          id="work-input"
          name="workName"
          placeholder="Занятия"
          minLength="2"
          maxLength="200"
          required
          value={workName || ""}
          onChange={handleChangeWork}
        />
        <span className="form__input-error work-input-error"></span>
      </fieldset>
    </PopupWithForm>
  );
}
