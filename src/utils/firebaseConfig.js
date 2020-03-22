import firebase from 'firebase';
import 'firebase/storage';

const config = {
    apiKey: "AIzaSyBjHD4ssX8kXDr_5CZR4FOFNcxgrap0t9Q",
    authDomain: "portfolio-esdras.firebaseapp.com",
    databaseURL: "https://portfolio-esdras.firebaseio.com",
    projectId: "portfolio-esdras",
    storageBucket: "portfolio-esdras.appspot.com",
    messagingSenderId: "998152654153",
    appId: "1:998152654153:web:7c57323489c7afe3b79e98",
    measurementId: "G-4858K3QVJB"
};

export const firebaseImpl = !firebase.apps.length ? firebase.initializeApp(config) : firebase;
export const firebaseDatabase = firebase.database();
export const firebaseStorage = firebase.storage();