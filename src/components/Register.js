import React from 'react';
import {useForm} from "../hooks/useForm";

function Register() {
  const {values, handleChange, setValues} = useForm({})

  return (
    <div className="content auth">
      <h1 className="auth__title">Регистрация</h1>
      <form className="auth__form">
        <input
          className="auth__input"
          type="email"
          placeholder="Email"
          value={values.email || ""}
          onChange={handleChange}
          minLength="2"
          maxLength="40"
          required
        />
        <input
          className="auth__input"
          type="password"
          placeholder="Пароль"
          value={values.password || ""}
          onChange={handleChange}
          minLength="6"
          maxLength="200"
          required
        />
      </form>
      <button className="auth__submit">Зарегистрироваться</button>
      <p className="auth__sign-in">Уже зарегистрированы? Войти</p>
    </div>
  )
}

export default Register;
