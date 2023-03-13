import React, { useState } from "react";
import logo from "../images/logo.svg";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({});
  }
  return (
    <div className="root">
      <Header />
      <Main
        onEditProfile={setIsEditProfilePopupOpen}
        onAddPlace={setIsAddPlacePopupOpen}
        onEditAvatar={setIsEditAvatarPopupOpen}
        onCardClick={setSelectedCard}
      />
      <Footer />
      <PopupWithForm
        title={`Редактировать профиль`}
        name={`edit`}
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        buttonText={`Сохранить`}
      >
        <>
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
            />
            <span className="form__input-error work-input-error"></span>
          </fieldset>
        </>
      </PopupWithForm>
      <PopupWithForm
        title={`Новое место`}
        name={`new-card`}
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        buttonText={`Сохранить`}
      >
        <>
          <fieldset className="form__fields">
            <input
              className="form__input form__input_type_placename"
              type="text"
              id="title-input"
              name="name"
              placeholder="Название"
              required
              minLength="2"
              maxLength="30"
            />
            <span className="form__input-error title-input-error"></span>
            <input
              className="form__input form__input_type_placelink"
              type="url"
              id="image-input"
              name="link"
              placeholder="Ссылка на картинку"
              required
            />
            <span className="form__input-error image-input-error"></span>
          </fieldset>
        </>
      </PopupWithForm>
      <PopupWithForm
        title={`Обновить аватар`}
        name={`edit-avatar`}
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        buttonText={`Сохранить`}
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
            />
            <span className="form__input-error avatar-input-error"></span>
          </fieldset>
        </>
      </PopupWithForm>

      <PopupWithForm
        title={`Вы уверены?`}
        name={`confirmation`}
        buttonText={`Да`}
      />

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
