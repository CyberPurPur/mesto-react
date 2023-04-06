import React, { useEffect, useRef } from "react";
import PopupWithForm from "./PopupWithForm";

export default function EditAvatar({ isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = useRef(null);
  useEffect(() => {
    avatarRef.current.value = "";
  }, [isOpen]);

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }
  function handleChangeAvatar() {
    return avatarRef.current.value;
  }

  return (
    <PopupWithForm
      title={`Обновить аватар`}
      name={`edit-avatar`}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <>
        <fieldset className="form__fields">
          <input
            className="form__input form__input_type_avatarlink"
            type="url"
            id="avatar-input"
            name="avatar"
            placeholder="Ссылка на аватар"
            required
            ref={avatarRef}
            onChange={handleChangeAvatar}
          />
          <span className="form__input-error avatar-input-error"></span>
        </fieldset>
      </>
    </PopupWithForm>
  );
}
