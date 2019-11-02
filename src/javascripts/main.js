import 'bootstrap';
import '../styles/main.scss';
import firebase from 'firebase';
import apiKeys from './helpers/apiKeys.json';
import login from './components/Auth/auth';
import authData from './helpers/data/authData';
import myNavbar from './components/myNavbar/myNavbar';

const init = () => {
    firebase.initializeApp(apiKeys.firebaseKeys);
    authData.checkLoginStatus();
    login.loginButton();
    myNavbar.logoutEvent();
};

init();
