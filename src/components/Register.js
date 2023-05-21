import React from 'react';

function Register() {
  return (
    <div className="content auth">
      <h1 className="auth__title">Регистрация</h1>
      <form className="auth__form">
        <input
          className="auth__input"
          type="email"
          placeholder="Email"
        />
        <input
          className="auth__input"
          type="password"
          placeholder="Пароль"
        />
      </form>
      <button className="auth__submit">Зарегистрироваться</button>
      <p className="auth__sign-in">Уже зарегистрированы? Войти</p>
    </div>
  )
}

export default Register;
