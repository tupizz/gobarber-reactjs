import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

// import { Container } from './styles';

export default function SignUp() {
  return (
    <>
      <img src={logo} alt="Go Barber" />

      <form>
        <input type="text" placeholder="Seu Nome" />
        <input type="email" placeholder="Seu Email" />
        <input type="password" placeholder="Sua senha" />

        <button type="submit">Criar conta</button>
        <Link to="/">Voltar</Link>
      </form>
    </>
  );
}
