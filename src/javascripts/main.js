import 'bootstrap';
import '../styles/main.scss';
import firebase from 'firebase';
import apiKeys from './helpers/apiKeys.json';
import login from './components/Auth/auth';
import authData from './helpers/data/authData';
import myNavbar from './components/myNavbar/myNavbar';
import machineData from './helpers/data/machineData';
import machine from './components/machine/machine';


const init = () => {
    firebase.initializeApp(apiKeys.firebaseKeys);
    authData.checkLoginStatus();
    login.loginButton();
    myNavbar.logoutEvent();
    machine.buildTheMachine();
};

init();
