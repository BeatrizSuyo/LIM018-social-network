/* eslint-disable import/no-cycle */
// pantalla de bienvenda
import { onNavigate } from '../main.js';

export const Home = () => {
  const HomeDiv = document.createElement('div');
  const buttonRegister = document.createElement('button');
  const buttonLogin = document.createElement('button');

  buttonRegister.textContent = 'Registrate';
  buttonLogin.textContent = 'Inicia sesion';

  buttonRegister.addEventListener('click', () => onNavigate('/register'));
  buttonLogin.addEventListener('click', () => onNavigate('/login'));

  HomeDiv.appendChild(buttonRegister);
  HomeDiv.appendChild(buttonLogin);
  return HomeDiv;
};