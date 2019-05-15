import firebase from 'firebase/app'
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyDIcqZiFlBZS2c6kEWUn2A2InQaJz428ds",
    authDomain: "ostlindthomas-f8c7e.firebaseapp.com",
    databaseURL: "https://ostlindthomas-f8c7e.firebaseio.com",
    projectId: "ostlindthomas-f8c7e",
    storageBucket: "ostlindthomas-f8c7e.appspot.com",
    messagingSenderId: "562228508893",
    appId: "1:562228508893:web:dbafad534ba3ebb4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const storage = firebase.storage()

export {
  storage, firebase as default
}
