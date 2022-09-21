const firebase = require('firebase');
firebaseConfig = {
    apiKey: "AIzaSyA-nMhjm8Z7JEbxNgtVt6r2c_aOriCKztQ",
    authDomain: "stock-data-7658e.firebaseapp.com",
    projectId: "stock-data-7658e",
    storageBucket: "stock-data-7658e.appspot.com",
    messagingSenderId: "509629595212",
    appId: "1:509629595212:web:3a8a220373e23b26323ee9",
    measurementId: "G-CQ4TBBVJXE"
};
firebase.initializeAoo(firebaseConfig)
const db = firebase.firebase();
// const User = db.collection("users");
module.exports = User;