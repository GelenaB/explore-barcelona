import * as firebase from 'firebase';
import firebaseConfig from './FirebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseDatabase = firebaseApp.database();