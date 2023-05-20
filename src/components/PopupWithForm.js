function PopupWithForm({name, title, buttonValue, children, isOpen, onClose, onSubmit}) {
  return (
    <div className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`} >
      <div className="popup__container">
        <button
          className="popup__close popup__close_add link"
          type="button"
          aria-label="Закрыть"
          onClick={onClose}
        />
        <h2 className="popup__title">{title}</h2>
        <form name={`${name}_form`} className="popup__form form" onSubmit={onSubmit}>
          <fieldset className="form__set">
            {children}
            <input type="submit" value={buttonValue} className="popup__button"/>
          </fieldset>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm;
