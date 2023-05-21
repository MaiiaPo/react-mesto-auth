import React from 'react';
import {useForm} from "../hooks/useForm";
import {auth} from '../utils/auth';
import { Link, useNavigate } from 'react-router-dom';

function Register(props) {
  const {values, handleChange} = useForm({})
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = values;
    auth.register(email, password)
      .then(() => {
        props.setIsInfoTooltipOpen({open: true, success: true});
        navigate('/sign-in', {replace: true});
      })
      .catch((e) => {
      console.error(e)
      props.setIsInfoTooltipOpen({open: true, success: false});
    });
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

      <p className="auth__register-text">Уже зарегистрированы? <Link to='/sign-in' className="auth__sign-in">Войти</Link></p>
    </div>
  )
}

export default Register;
