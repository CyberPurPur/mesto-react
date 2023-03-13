import React, { useEffect } from "react";
import api from "../utils/api";
import Card from "./Card";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [card, setCard] = React.useState([]);

  useEffect(() => {
    api
      .getUserId()
      .then((userData) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
      })
      .catch((err) => {
        console.log(`Ошибка в загрузке данных. ${err}`);
      });

    api
      .getInitialCards()
      .then((initialCards) => {
        setCard(initialCards);
      })

      .catch((err) => {
        console.log(`Ошибка в загрузке данных. ${err}`);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <img className="profile__avatar" src={userAvatar} alt="Аватар" />
        <button
          className="button button_open-popup profile__avatar-edit"
          type="button"
          onClick={() => {
            onEditAvatar(true);
          }}
        ></button>
        <div className="profile__container">
          <div className="profile__title">
            <h1 className="profile__name" name="userName">
              {userName}
            </h1>
            <button
              className="button button_open-popup profile__edit-button"
              type="button"
              onClick={() => {
                onEditProfile(true);
              }}
            ></button>
          </div>
          <p className="profile__description" name="workName">
            {userDescription}
          </p>
        </div>
        <button
          className="button button_open-popup profile__add-button"
          type="button"
          onClick={() => {
            onAddPlace(true);
          }}
        ></button>
      </section>
      <section className="elements">
        {card.map((card) => (
          <Card
            key={card._id}
            name={card.name}
            link={card.link}
            likes={card.likes}
            onCardClick={onCardClick}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
