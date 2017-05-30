import React from 'react';

import { Link } from 'react-router-dom';

export const Header = () => (
  <header>
    <Link to="/tasks">Tasks</Link>
    <Link to="/user">Profile</Link>
  </header>
);

