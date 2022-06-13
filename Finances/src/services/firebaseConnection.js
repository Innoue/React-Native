import firebase from 'firebase/compat/app'
import 'firebase/compat/database'
import 'firebase/compat/auth'

let firebaseConfig = {
  apiKey: "AIzaSyDH5BMp-g5o_yYZOiJ3VPF0onJzFw5UxHg",
  authDomain: "financas-teste-9073a.firebaseapp.com",
  databaseURL: "https://financas-teste-9073a-default-rtdb.firebaseio.com",
  projectId: "financas-teste-9073a",
  storageBucket: "financas-teste-9073a.appspot.com",
  messagingSenderId: "873465379970",
  appId: "1:873465379970:web:5a9a86dcc69534c39bc89b"
};

if(!firebase.apps.length){
  //Open Connection
  firebase.initializeApp(firebaseConfig);
}

export default firebase