// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAV8BPg3C4PvZBhUhmCDWqLtzKC6Hk90-k",
    authDomain: "gpt--flix.firebaseapp.com",
    projectId: "gpt--flix",
    storageBucket: "gpt--flix.appspot.com",
    messagingSenderId: "949568015755",
    appId: "1:949568015755:web:a8afe2b3d991a4a2dc738e",
    measurementId: "G-FR0JNJ4PZJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);