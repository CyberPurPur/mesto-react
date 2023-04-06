import { useContext } from "react";
import Card from "./Card";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Main({
  cards,
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick,
  onCardDelete,
  onCardLike,
}) {
  const userData = useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <img className="profile__avatar" src={userData.avatar} alt="Аватар" />
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
              {userData.name}
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
            {userData.about}
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
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            owner={card.owner._id}
            name={card.name}
            link={card.link}
            likes={card.likes}
            onCardClick={onCardClick}
            onCardDelete={onCardDelete}
            onCardLike={onCardLike}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
