import React from 'react';
import {useForm} from "../hooks/useForm";
import * as auth from '../utils/auth';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const {values, handleChange, setValues} = useForm({})
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('234')
    const { email, password } = values;
    auth.register(email, password).then((res) => {
        navigate('/sign-in', {replace: true});
      }
    );
  }

  return (
    <div className="content auth">
      <h1 className="auth__title">Регистрация</h1>
      <form className="auth__form" onSubmit={handleSubmit}>
        <input
          className="auth__input"
          name="email"
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
          name="password"
          type="password"
          placeholder="Пароль"
          value={values.password || ""}
          onChange={handleChange}
          minLength="6"
          maxLength="200"
          required
        />
        <button className="auth__submit" type="submit">Зарегистрироваться</button>
      </form>

      <p className="auth__sign-in">Уже зарегистрированы? Войти</p>
    </div>
  )
}

export default Register;
