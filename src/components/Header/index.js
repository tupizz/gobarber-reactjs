import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, Profile } from './styles';

// Custom Components
import Notifications from '~/components/Notifications';

// Images
import logo from '~/assets/logo-header.svg';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">Dashboard</Link>
        </nav>

        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>Tadeu Tupinambá</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>

            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Tadeu Tupinambá"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
