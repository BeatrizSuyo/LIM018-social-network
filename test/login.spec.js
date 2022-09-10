/**
  @jest-environment jsdom
 */

import { Login } from '../src/components/Login.js';

jest.mock('../src/firebase/auth.js');

describe('Login', () => {
  const rootDiv = document.createElement('div');
  rootDiv.id = 'root';
  document.body.appendChild(rootDiv);
  rootDiv.appendChild(Login());

  it('login es una funcion', () => {
    expect(typeof Login).toBe('function');
  });

  it('deberia tener un boton de google para ingresar', () => {
    const buttonGoogle = document.getElementById('buttonLoginGoogle');
    expect(buttonGoogle instanceof HTMLElement).toBe(true);
  });

  it('dar click al boton de google debería de mostrarnos Home', () => {
    const buttonGoogle = document.getElementById('buttonLoginGoogle');
    buttonGoogle.click();
    setTimeout(() => {
      expect(window.location.pathname).toBe('/home');
    }, 1000);
  });
});
describe('buttonLogin', () => {
  const rootDiv = document.createElement('div');
  rootDiv.id = 'root';
  document.body.appendChild(rootDiv);
  rootDiv.appendChild(Login());

  it('deberia tener un boton para logearse', () => {
    const buttonLogin = document.getElementById('buttonLogin');
    buttonLogin.click();
    setTimeout(() => {
      expect(window.location.pathname).toBe('/home');
    }, 1000);
  });
});

// describe('myFunction', () => {
//   it('debería ser una función', () => {
//     expect(typeof myFunction).toBe('function');
//   });
// });
