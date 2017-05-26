import React from 'react';

import { Link } from 'react-router-dom';

export const Header = () => (
  <header>
    <Link to="/shows">Shows</Link>
    <Link to="/user">Profile</Link>
  </header>
);

