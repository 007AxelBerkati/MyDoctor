import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyA2mooMxrB_8zm_aUrgFiF5XZImIdIZJq8',
  authDomain: 'my-doctor-01-40605.firebaseapp.com',
  projectId: 'my-doctor-01-40605',
  storageBucket: 'my-doctor-01-40605.appspot.com',
  messagingSenderId: '710756728086',
  appId: '1:710756728086:web:65b146ab68045a36816437',
};

// Initialize Firebase
const Fire = initializeApp(firebaseConfig);
export default Fire;
