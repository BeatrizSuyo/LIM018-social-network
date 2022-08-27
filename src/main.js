// Este es el punto de entrada de tu aplicacion
// eslint-disable-next-line import/no-cycle
import { Welcome } from './components/Welcome.js';
// eslint-disable-next-line import/no-cycle
import { publicacion } from './components/publicacion.js';
// eslint-disable-next-line import/no-cycle
import { Register } from './components/Register.js';
// eslint-disable-next-line import/no-cycle
import { Login } from './components/Login.js';

const routes = {
  /* route github pages */
  '/LIM018-social-network/src': Welcome,
  '/LIM018-social-network/src/register': Register,
  '/LIM018-social-network/src/login': Login,
  '/LIM018-social-network/src/home': publicacion,
  /* route localhost */
  '/': Welcome,
  '/register': Register,
  '/login': Login,
  '/home': publicacion,
};

// const rootDiv = document.getElementById('root');

export const onNavigate = (pathname) => {
  const rootDiv = document.getElementById('root');
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );

  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(routes[pathname]());
};
// const component = routes[window.location.pathname];

window.onpopstate = () => {
  const rootDiv = document.getElementById('root');
  // rootDiv.appendChild(component());
  rootDiv.appendChild(routes[window.location.pathname]());
};

window.addEventListener('load', () => {
  const rootDiv = document.getElementById('root');
  rootDiv.appendChild(routes[window.location.pathname]());
});

// rootDiv.appendChild(routes[window.location.pathname]());
