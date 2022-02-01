// import { initializeApp } from 'firebase/app';

// const firebaseConfig = {
//   apiKey: 'AIzaSyA2mooMxrB_8zm_aUrgFiF5XZImIdIZJq8',
//   authDomain: 'my-doctor-01-40605.firebaseapp.com',
//   projectId: 'my-doctor-01-40605',
//   storageBucket: 'my-doctor-01-40605.appspot.com',
//   messagingSenderId: '710756728086',
//   appId: '1:710756728086:web:65b146ab68045a36816437',
// };

// // Initialize Firebase
// const Fire = initializeApp(firebaseConfig);
// export default Fire;

// import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyA2mooMxrB_8zm_aUrgFiF5XZImIdIZJq8',
    authDomain: 'my-doctor-01-40605.firebaseapp.com',
    projectId: 'my-doctor-01-40605',
    storageBucket: 'my-doctor-01-40605.appspot.com',
    messagingSenderId: '710756728086',
    appId: '1:710756728086:web:65b146ab68045a36816437',
    databaseURL: 'https://my-doctor-01-40605-default-rtdb.asia-southeast1.firebasedatabase.app/',
  });
} else {
  firebase.app();
}

// Initialize Firebase
const Fire = firebase;
export default Fire;
