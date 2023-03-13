function PopupWithForm({title, name, isOpen, onClose, children, buttonText}) {
  return (
    <section
      className={`popup popup_type_${name} ${
        isOpen ? "popup_opened" : ""
      }`}
    >
      <div className="popup__container">
        <button
          className="popup__close-button"
          type="reset"
          onClick={onClose}
        ></button>
        <h2 className="popup__title">{title}</h2>
        <form className="form profile-data" name={`${name}`} noValidate>
          {children}
          <button className="form__submit-button" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;
