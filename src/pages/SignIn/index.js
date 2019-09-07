import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';
// import { Container } from './styles';

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="Go Barber" />

      <form>
        <input type="email" placeholder="Seu email" />
        <input type="password" placeholder="Sua senha" />

        <button type="submit">Acessar</button>
        <Link to="/register">Cadastrar-se</Link>
      </form>
    </>
  );
}
