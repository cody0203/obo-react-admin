import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCdc13qX7i9Zwbql9yjCjd-fEJhy3Mgk-c',
  authDomain: 'obo-react-admin.firebaseapp.com',
  databaseURL: 'https://obo-react-admin.firebaseio.com',
  projectId: 'obo-react-admin',
  storageBucket: 'obo-react-admin.appspot.com',
  messagingSenderId: '827778454501',
  appId: '1:827778454501:web:a80e68bbbe53c15110150c'
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { firebase, storage as default };
