import React from 'react';

const onSubmit = (ev) => {
  ev.preventDefault();
  console.log('login');
};

export const Login = () => (
  <section className="login">
    <form onSubmit={onSubmit}>
      <button type="submit">Log in</button>
    </form>
  </section>
);
