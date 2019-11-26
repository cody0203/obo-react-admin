import React from 'react';
import app from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCdc13qX7i9Zwbql9yjCjd-fEJhy3Mgk-c',
  authDomain: 'obo-react-admin.firebaseapp.com',
  databaseURL: 'https://obo-react-admin.firebaseio.com',
  projectId: 'obo-react-admin',
  storageBucket: 'obo-react-admin.appspot.com',
  messagingSenderId: '827778454501',
  appId: '1:827778454501:web:a80e68bbbe53c15110150c'
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.storage = app.storage();
  }

  getDownloadURL() {
    const ref = this.storage.ref('images/rc-upload-1568626063953-13item1.png');
    return ref.getDownloadURL();
  }
}

export default Firebase;
