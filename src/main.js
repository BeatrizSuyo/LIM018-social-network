// Este es el punto de entrada de tu aplicacion
<<<<<<< Updated upstream
// eslint-disable-next-line import/no-cycle
import { Welcome } from './components/Welcome.js';
// eslint-disable-next-line import/no-cycle
import { Home } from './components/Home.js';
// eslint-disable-next-line import/no-cycle
import { Register } from './components/Register.js';
// eslint-disable-next-line import/no-cycle
import { Login } from './components/Login.js';

const rootDiv = document.getElementById('root');

const routes = {
  '/': Welcome,
  '/register': Register,
  '/login': Login,
  '/home': Home,
};

export const onNavigate = (pathname) => {
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
const component = routes[window.location.pathname];

window.onpopstate = () => {
  rootDiv.appendChild(component());
};

rootDiv.appendChild(component());
=======
// import { Home } from "./components/Home.js";
//import { Register } from "./components/Register.js";
//import { Login } from "./components/Login.js";
import {changeView} from "./viewController/rutas.js"
// const rootDiv=document.getElementById('root');

 // Cargando rutas al iniciar
window.addEventListener('load', () => {
  changeView(window.location.hash);
});
  // Evento de cambio de las rutas
window.addEventListener('hashchange', () => {
  changeView(window.location.hash);
});







  // export const onNavigate= (pathname)=>{
  //         window.history.pushState(
  //         {},
  //         pathname,
  //          window.location.origin + pathname,
  //         );

  //          while (rootDiv.firstChild) {
  //           rootDiv.removeChild(rootDiv.firstChild);
  //          }
  //         rootDiv.appendChild(routes[pathname]());//
  // };
    
    
    // const component = routes[window.location.pathname];
    // window.onpopstate = () => {
    //   rootDiv.appendChild(component());
    // }
    
    // rootDiv.appendChild(component());
  
>>>>>>> Stashed changes
