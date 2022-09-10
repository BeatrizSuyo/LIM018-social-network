/* eslint-disable import/named */
/* eslint-disable jest/no-focused-tests */
// eslint-disable-next-line no-unused-vars
import { Register, validateMail } from '../src/components/Register.js';// validateEmail

jest.mock('../src/firebase/auth.js');

describe('Register', () => {
  it('Register deberia ser una funcion', () => {
    expect(typeof Register).toBe('function');
  });

  it('Exiten inputs y existe boton regitro', () => {
    const rootDiv = document.createElement('div');
    rootDiv.id = 'rootDiv';
    document.body.appendChild(rootDiv);
    rootDiv.appendChild(Register());
    const inputName = document.getElementById('inputName');
    const inputMail = document.getElementById('inputMail');
    const inputPassword = document.getElementById('inputPassword');
    const buttonRegister = document.getElementById('buttonRegister');
    expect(inputName instanceof HTMLElement).toBe(true);
    expect(inputMail instanceof HTMLElement).toBe(true);
    expect(inputPassword instanceof HTMLElement).toBe(true);
    expect(buttonRegister instanceof HTMLElement).toBe(true);
  });

  it('click de botón register para cambiar de vista', () => {
    const rootDiv = document.createElement('div');
    rootDiv.id = 'rootDiv';
    document.body.appendChild(rootDiv);
    rootDiv.appendChild(Register());
    const inputName = document.getElementById('inputName');
    const inputMail = document.getElementById('inputMail');
    const inputPassword = document.getElementById('inputPassword');
    const buttonRegister = document.getElementById('buttonRegister');
    inputName.value = 'lupita';
    inputMail.value = 'lupita@gmail.com';
    inputPassword.value = '12345678';
    buttonRegister.click();
    // eslint-disable-next-line jest/valid-expect
    expect((window.location.pathname).toBe('/login'));
  });
});

describe('validateMail', () => {
  it('deberia ser una funcion', () => {
    expect(typeof validateEmail).toBe('function');
  });
});
