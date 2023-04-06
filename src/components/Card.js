import { useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Card({
  card,
  owner,
  name,
  link,
  likes,
  onCardClick,
  onCardLike,
  onCardDelete,
}) {
  const userData = useContext(CurrentUserContext);
  const isOwn = owner === userData._id;
  const isLiked = likes.some((user) => user._id === userData._id);

  const cardLikeButtonClassName = `element__like-button ${
    isLiked ? "element__like-button_active" : ""
  }`;
  const cardDeleteButtonClassName = `${
    isOwn ? "element__trash-button" : "element__trash-button_inactive"
  }`;

  function handleClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  return (
    <article className="element">
      <img
        className="element__image"
        src={link}
        alt={name}
        onClick={handleClick}
      />

      <button
        className={cardDeleteButtonClassName}
        onClick={handleDeleteClick}
      ></button>
      <div className="element__description">
        <h2 className="element__name">{name}</h2>
        <div className="element__like">
          <button
            className={cardLikeButtonClassName}
            onClick={handleLikeClick}
          ></button>
          <span className="element__like-number">{likes.length}</span>
        </div>
      </div>
    </article>
  );
}
export default Card;
