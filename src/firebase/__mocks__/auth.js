// export function signInWithEmail(email, password){
//     if (email === 'lupita@gmail.com' && password === '12345678')
//     return Promise.resolve({
//         user: {
//           uid: 'abc123',
//           username: 'lupita',
//         },
//       });
//       return Promise.reject(new Error());
//     }

export const signInWithGoogle = () => Promise.resolve({});
export const createUserWithEmail = jest.fn(() => { Promise.resolve(); });
export const signInWithEmail = jest.fn(() => { Promise.resolve(); });
export const signOutLogin = jest.fn(() => { Promise.resolve(); });
export const updateProfileUser = jest.fn(() => { Promise.resolve(); });
