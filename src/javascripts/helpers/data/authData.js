import firebase from'firebase/app';
import 'firebase/auth';

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        // someone is logged in-- we should not see auth component
    } else {
        // nobody logged in-- SHOW auth component
    }
  })
};

export default { checkLoginStatus }