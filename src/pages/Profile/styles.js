import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      height: 44px;
      border-radius: 4px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.6);
      }
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
    }

    span {
      color: #fb6f91;
      align-self: flex-end;
      margin: 0 0 10px;
      font-weight: bold;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #3b9eff;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 1rem;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.07, '#3b9eff')};
      }
    }

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 1rem;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;

export const LogoutButton = styled.button`
  width: 100%;
  margin: 10px 0 0;
  height: 44px;
  background: #f64c75;
  font-weight: bold;
  color: #fff;
  border: 0;
  border-radius: 4px;
  font-size: 1rem;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.08, '#f64c75')};
  }
`;
