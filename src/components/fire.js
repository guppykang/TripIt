


import firebase from 'firebase'
var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
    apiKey: "AIzaSyCIIs3BMckVrpE99-If_QapcMRiXt-2dRw",
    authDomain: "trip-fd20b.firebaseapp.com",
    databaseURL: "https://trip-fd20b.firebaseio.com",
    projectId: "trip-fd20b",
    storageBucket: "trip-fd20b.appspot.com",
    messagingSenderId: "236031095345"
};
var fire = firebase.initializeApp(config);
export default fire;