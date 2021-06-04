import firebase from 'firebase/app';
import 'firebase/firestore'

import { apiKey } from './firebase-api'

firebase.initializeApp(apiKey);
firebase.firestore().enablePersistence();

window.firebase = firebase;

export const db = firebase.firestore();
export default firebase
