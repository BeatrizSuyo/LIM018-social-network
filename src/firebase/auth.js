// eslint-disable-next-line no-unused-vars
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  // createUserWithEmailAndPassword,
  // signInWithEmailAndPassword,
} from 'https://www.gstatic.com/firebasejs/9.9.2/firebase-auth.js';

const firebaseConfig = {
  apiKey: 'AIzaSyCVjOmTbyHy0FjnMVVfcrk4oU6OEs9OKh8',
  authDomain: 'red-social-6bee5.firebaseapp.com',
  projectId: 'red-social-6bee5',
  storageBucket: 'red-social-6bee5.appspot.com',
  messagingSenderId: '385355317169',
  appId: '1:385355317169:web:79765dc3d541db35264790',
  measurementId: 'G-T3NSZCCGQG',
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

/* ----- firebase Auth -----*/
const provider = new GoogleAuthProvider();
const auth = getAuth();
/* ------ firebase Auth - GoogleAuth Provider------*/

signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    // const credential = GoogleAuthProvider.credentialFromResult(result);
    // const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // eslint-disable-next-line no-console
    console.log(error)
    // The email of the user's account used.
    // const email = error.customData.email;
    // // The AuthCredential type that was used.
    // const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
export const signInWithGoogle = () => signInWithPopup(auth, provider);
