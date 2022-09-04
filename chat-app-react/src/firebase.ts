// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyASd9A6iHqBZPbJHI2GWfnfPd3YFtTiONg',
  authDomain: 'chat-bdbeb.firebaseapp.com',
  projectId: 'chat-bdbeb',
  storageBucket: 'chat-bdbeb.appspot.com',
  messagingSenderId: '652596690544',
  appId: '1:652596690544:web:2114d09996e269738dfeb5',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
