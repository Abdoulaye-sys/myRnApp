import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBdwLxyUMD8g18bGBmVWbevrhjnZ_bQYaI",
  authDomain: "rn-myapp.firebaseapp.com",
  projectId: "rn-myapp",
  storageBucket: "rn-myapp.appspot.com",
  messagingSenderId: "639840638045",
  appId: "1:639840638045:web:d6c7efa9994126eae3e9b4"
}

!firebase.apps.length ? 
firebase.initializeApp(firebaseConfig) : 
firebase.app()

export default firebase