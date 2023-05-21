import React from 'react';

function Login() {
  return (
    <div className="content auth">
        <h1 className="auth__title">Вход</h1>
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
        <button className="auth__submit">Войти</button>
    </div>
  )
}

export default Login;
