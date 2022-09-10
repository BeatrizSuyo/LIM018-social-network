/* eslint-disable import/no-cycle */
// aqui exportaras las funciones que necesites
// eslint-disable-next-line no-unused-vars
import { signOutLogin, getPost, stateChangedUser } from '../firebase/auth.js';
import { onNavigate } from '../main.js';

export function signOutUser() {
  return signOutLogin().then(() => {
    // eslint-disable-next-line no-alert
    alert('Cerraste sesion');
    onNavigate('/');
  });
}
