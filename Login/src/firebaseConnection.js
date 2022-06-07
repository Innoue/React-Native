import firebase from 'firebase/compat/app'
import 'firebase/compat/database'
import 'firebase/compat/auth'

let firebaseConfig = {
  apiKey: "AIzaSyCaU6CwHgDnwJWE7s33nqFi2N8Xl9-7a_0",
  authDomain: "fir-app-969f5.firebaseapp.com",
  databaseURL: "https://fir-app-969f5.firebaseio.com",
  projectId: "fir-app-969f5",
  storageBucket: "fir-app-969f5.appspot.com",
  messagingSenderId: "410115304411",
  appId: "1:410115304411:web:578d63b8fef94216ae15fe"
};

if(!firebase.apps.length){
  //Open Connection
  firebase.initializeApp(firebaseConfig);
}

export default firebase