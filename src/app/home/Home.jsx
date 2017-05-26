import React from 'react';

import { Route } from 'react-router-dom';

import { Header } from './header';
import { User } from '../user';
import { Shows } from '../shows';

export const Home = () => (
  <section>
    <Header />
    <article>
      <Route exact path="/" component={Shows} />
      <Route path="/user" component={User} />
      <Route path="/shows" component={Shows} />
    </article>
  </section>
);
