import firebase from'firebase/app';
import 'firebase/auth';
import $ from 'jquery';

import stocker from '../../components/stocker/stocker';

const logoutButton = $('#navbar-button-logout');
const loginButton = $('#auth');
const loginContent = $('#stock');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        // someone is logged in-- we should not see auth component
        logoutButton.removeClass('hide');
        loginButton.addClass('hide');
        loginContent.removeClass('hide');
        stocker.buildTheStocker(user.uid);
    } else {
        // nobody logged in-- SHOW auth component
        logoutButton.addClass('hide');
        loginButton.removeClass('hide');
        loginContent.addClass('hide');
    }
  })
};

export default { checkLoginStatus }