import Firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyASDntRTCZKaslb-oahskKZ4LFfgIK0dkQ',
  authDomain: 'todoapp-d3dc7.firebaseapp.com',
  databaseURL: 'https://todoapp-d3dc7.firebaseio.com',
  projectId: 'todoapp-d3dc7',
  storageBucket: 'todoapp-d3dc7.appspot.com',
  messagingSenderId: '541729580244',
  appId: '1:541729580244:web:c2e1e9c1ce23b95a474741',
};
// Initialize Firebase
//firebase.initializeApp(firebaseConfig);

const app = Firebase.initializeApp(firebaseConfig);
export const db = app.database();
