import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, FacebookAuthProvider, GoogleAuthProvider, signInWithPopup, updateProfile } from 'firebase/auth';
import { getDatabase, set, ref, onValue } from 'firebase/database';
import _ from 'lodash';

const firebaseConfig = {
  apiKey: "AIzaSyDeQrHSkZ-aYwQ8sBYxsnIeAPcFC_ef_kc",
  authDomain: "hack4goodreactapp.firebaseapp.com",
  projectId: "hack4goodreactapp",
  storageBucket: "hack4goodreactapp.appspot.com",
  messagingSenderId: "157283478177",
  appId: "1:157283478177:web:33828e1ac8126409da9ee0", 
  databaseURL: "https://hack4goodreactapp-default-rtdb.asia-southeast1.firebasedatabase.app"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

//authentication methods
const normalLogIn = async (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((result) => {
      const user = result.user;
    })
    .catch((error) => {
      console.log(error);
      alert('Wrong email or password');
    })
};

const googleLogIn = async () => {
  signInWithPopup(auth, googleProvider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
  }).catch((error) => {
    console.log(error);
    alert('Something went wrong');
  });
}

const facebookLogIn = async () => {
  signInWithPopup(auth, facebookProvider)
  .then((result) => {
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
  }).catch((error) => {
    console.log(error);
    alert('Something went wrong');
  });
}

const logOut = () => {
  signOut(auth)
  .then()
  .catch((error) => {
    alert('Something went wrong');
  });
}

const signUp = (name, email, password, disability, description, neighbourhood, type) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((result) => {
      const user = result.user;
      updateProfile(user, {
        displayName: name
      });
      writeUserData(user.uid, name, disability, description, neighbourhood, type);
    })
    .catch((error) => {
      console.log(error);
      alert(error.message);
    })
};

function writeUserData(userId, name, disability, description, neighbourhood, type) {
  set(ref(db, 'users/' + userId), {
    name: name, 
    disability: disability, 
    description: description, 
    neighbourhood: neighbourhood, 
    type: type
  });
}

function getData(setData) {
  const dataRef = ref(db, 'users/');
  onValue(dataRef, (snapshot) => {
    setData(_.toArray(snapshot.val()));
  })
}

export { db, auth, normalLogIn, facebookLogIn, googleLogIn, logOut, signUp, getData };