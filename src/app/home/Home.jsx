import React from 'react';

import { Route } from 'react-router-dom';

import { Header } from '.';
import { User, Welcome, Tasks } from '..';

export const Home = () => (
  <section>
    <Header />
    <article>
      <Route exact path="/" component={Welcome} />
      <Route path="/user" component={User} />
      <Route path="/tasks" component={Tasks} />
    </article>
  </section>
);
